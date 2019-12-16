import { Injectable } from '@nestjs/common';
import { Message, User } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
    private messages: Set<Message> = new Set()
    private users: Map<number, User> = new Map([
        [1, {
            id: 1,
            name: 'APeng'
        }],
        [2, {
            id: 2,
            name: '啊Peng'
        }]
    ])

    create(message: CreateMessageDto) {
        let result = {
            ...message,
            name: this.users.get(message.id).name
        }
        this.messages.add(result)
        return result
    }

    findAll(): Array<Message> {
        return [...this.messages]
    }
}
