import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { IMessage } from './interfaces/message.interface';

@Controller('message')
export class MessageController {
    constructor(
        private readonly messageService: MessageService
    ){}
    
    @Get(':sessionId')
    findAll(@Param() params) {
        return this.messageService.findAll(params.sessionId)
    }

    @Post()
    create(@Body() message) {
        return this.messageService.create(message)
    }
}
