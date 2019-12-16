import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/message.dto';
import { Message } from './interfaces/message.interface';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService){}
    
    @Get()
    findAll(): Message[] {
        return this.messageService.findAll()
    }

    // @Post()
    // create(@Body() message: CreateMessageDto) {
    //     console.log(message)
    //     return this.messageService.create(message)
    // }
}
