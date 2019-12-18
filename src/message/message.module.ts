import { Module, forwardRef } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { UserModule } from 'src/user/user.module';
import { messagesProviders } from './message.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [MessageController],
    providers: [MessageService, MessageGateway, ...messagesProviders]
})
export class MessageModule {}
