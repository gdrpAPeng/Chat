import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    async login(user: any) {
        const payload = { 
            nickname: user.nickname,
            sub: user._id
        }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async validateUser(data: any): Promise<any> {
        const { nickname, password } = data
        // 获取数据
        const userData = await this.userService.findOne({
            nickname,
            password
        })
        if(userData) {
            // const payload = {
            //     nickname: nickname,
            //     sub: userData._id
            // }
            // console.log(this.jwtService.sign(payload))
            return userData
        }
        // 没有就注册
        const userRegister = await this.userService.create({
            nickname,
            password
        })

        return userRegister
    }
}