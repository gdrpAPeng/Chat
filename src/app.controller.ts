import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './module/auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user)
    return this.authService.login(req.user);

    // return await this.authService.validateUser({
    //   nickname: 'APeng',
    //   password: '123456'
    // })
  }
}
