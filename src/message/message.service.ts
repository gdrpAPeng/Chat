import { Injectable } from '@nestjs/common';
import { Message } from './interfaces/message.interface';

@Injectable()
export class MessageService {
    private readonly messages: Message[] = []

    create(message: Message) {
        return this.messages.push(message)
    }

    findAll(): Message[] {
        return this.messages
    }
}
