import { Controller, Get, Post, Body } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
    constructor(
        private readonly sessionService: SessionService
    ){}

    @Get()
    findAll() {
        return this.sessionService.findAll()
    }

    @Post()
    create(@Body() data) {
        return this.sessionService.create(data)
    }
}
