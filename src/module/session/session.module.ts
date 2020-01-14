import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { DatabaseModule } from 'src/database/database.module';
import { sessionProviders } from './session.providers';
import { UserModule } from '../user/user.module';
import { UserSessionModule } from '../user_session/user-session.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [SessionController],
  providers: [SessionService, ...sessionProviders],
  exports: [SessionService, ...sessionProviders]
})
export class SessionModule {}
