import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOneById(@Param() data) {
        return this.userService.findById(data.id)
    }

    @Post()
    create(@Body() data) {
        return this.userService.create(data)
    }
}
