import { Controller, Get, Req, Query, Redirect, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from './chat.interface';
import { Request } from 'express';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}
    @Get()
    findAll(): any {
        return this.chatService.findAll()
    }

    @Post()
    create(@Body() body:Chat): any {
        console.log(body)
        return this.chatService.create(body)
    }
}
