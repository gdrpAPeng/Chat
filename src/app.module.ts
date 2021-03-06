import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './module/message/message.module';
import { UserModule } from './module/user/user.module';
import { SessionModule } from './module/session/session.module';
import { UserSessionModule } from './module/user_session/user-session.module';
import { AuthModule } from './module/auth/auth.module';
import { FriendModule } from './module/friend/friend.module';


@Module({
  imports: [
    MessageModule,
    UserModule,
    SessionModule,
    UserSessionModule,
    AuthModule,
    FriendModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
