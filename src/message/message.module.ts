import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';

@Module({
    controllers: [MessageController],
    providers: [MessageService, MessageGateway]
})
export class MessageModule {}
