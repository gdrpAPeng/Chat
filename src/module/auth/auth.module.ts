import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule, PassportStrategy } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthGateway } from './auth.gateway';

@Module({
    imports: [
        UserModule, 
        PassportModule,
        JwtModule.register({
            secret: 'APeng',
            signOptions: { expiresIn: '86400s' }
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, AuthGateway],
    exports: [AuthService]
})
export class AuthModule {}
