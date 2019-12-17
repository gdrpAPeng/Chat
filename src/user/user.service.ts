import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { ConstantUserModel } from 'src/common/constants';

@Injectable()
export class UserService {
    constructor(
        @Inject(ConstantUserModel)
        private readonly userModel: Model<User>
    ){}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto)
        return await createdUser.save()
    }
}
