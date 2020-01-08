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
        const { username, _id } = user
        const payload = { 
            username: username,
            sub: _id
        }
        return {
            username,
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
        return null
        // 没有就注册
        // const userRegister = await this.userService.create({
        //     username,
        //     password
        // })

        // return userRegister
    }

    async verifyJwt(jwt: string): Promise<any> {
        // 手动移除 'Bearer ' 前缀 
        jwt = jwt.slice(7)
        const result = await this.jwtService.verify(jwt)
        return result
    }
}