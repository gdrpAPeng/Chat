import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { FriendService } from "./friend.service";
import { Request } from "express";
import { AuthGuard } from "@nestjs/passport";
// import { JwtService } from "@nestjs/jwt";

@Controller('friend')
export class FriendController {
    constructor(
        private readonly friendService: FriendService,
        // private readonly jwtService: JwtService
    ){}
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(@Req() req: any) {
        const { userId } = req.user
        return this.friendService.findAll(userId)
    }


}