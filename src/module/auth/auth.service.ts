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
            username: user.username,
            sub: user._id
        }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async validateUser(data: any): Promise<any> {
        const { username, password } = data
        // 获取数据
        const userData = await this.userService.findOne({
            username,
            password
        })
        if(userData) {
            return userData
        }
        // 没有就注册
        const userRegister = await this.userService.create({
            username,
            password
        })

        return userRegister
    }
}