import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';


@Module({
  imports: [MessageModule, UserModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
