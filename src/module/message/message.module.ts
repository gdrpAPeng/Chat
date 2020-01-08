import { Module, forwardRef } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { UserModule } from 'src/module/user/user.module';
import { messagesProviders } from './message.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UserSessionModule } from '../user_session/user-session.module';
import { SessionModule } from '../session/session.module';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [DatabaseModule, UserModule, UserSessionModule, SessionModule, AuthModule],
    controllers: [MessageController],
    providers: [MessageService, MessageGateway, ...messagesProviders]
})
export class MessageModule {}
