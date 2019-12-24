import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './module/message/message.module';
import { UserModule } from './module/user/user.module';
import { SessionModule } from './module/session/session.module';
import { UserSessionModule } from './module/user_session/user-session.module';


@Module({
  imports: [MessageModule, UserModule, SessionModule, UserSessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
