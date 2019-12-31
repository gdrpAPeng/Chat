import { Injectable, PayloadTooLargeException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'APeng'
        })
    }

    async validate(payload: any): Promise<object> {
        const { sub, username } = payload
        return { userId: sub, username }
    }
}