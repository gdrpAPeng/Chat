import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { ConstantUserModel } from 'src/constants/models';

@Injectable()
export class UserService {
  constructor(
    @Inject(ConstantUserModel)
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findById(id: string): Promise<User> {
    return await this.userModel
      .findById(id)
      .select('_id username nickname createTime');
  }

  async findAll(): Promise<User[]> {
    return await this.userModel
        .find()
        .select('_id username nickname createTime')
  }

  async findOne(data: object): Promise<User> {
    return await this.userModel
        .findOne(data)
        .select('_id username nickname createTime')
  }
}
