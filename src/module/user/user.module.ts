import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './user.providers';
import { UserGateway } from './user.gateway';
import { FriendModule } from '../friend/friend.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders, UserGateway],
  exports: [UserService, ...usersProviders]
})
export class UserModule {}
