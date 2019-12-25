import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule, PassportStrategy } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        UserModule, 
        PassportModule,
        JwtModule.register({
            secret: 'APeng',
            signOptions: { expiresIn: '3600s' }
        })
    ],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService]
})
export class AuthModule {}
