import { Injectable, Inject } from '@nestjs/common';
import {
  ConstantUserSessionModel,
  ConstantUserModel,
  ConstantSessionModel,
} from 'src/constants/models';
import { Model } from 'mongoose';

@Injectable()
export class UserSessionService {
  constructor(
    @Inject(ConstantUserSessionModel)
    private readonly userSessionModel: Model<any>,
    @Inject(ConstantUserModel)
    private readonly userModel: Model<any>,
    @Inject(ConstantSessionModel)
    private readonly sessionModel: Model<any>,
  ) {}

  async findAll(userId: string): Promise<any> {
    return await this.userSessionModel
      .find({
        fromUserId: userId,
      })
      .populate({
        path: 'toId',
        model: this.userModel,
        select: '_id nickname username',
      })
      .populate({
        path: 'sessionId',
        model: this.sessionModel,
        select: '_id lastMessage lastFromUserId isGroup updateTime',
      });
  }

  async create(userSessionDto): Promise<any> {
    const createdUserSession = new this.userSessionModel(userSessionDto);
    return await createdUserSession.save();
  }

  async findOne({ fromUserId, toId }): Promise<any> {
    return await this.userSessionModel.findOne({
      fromUserId,
      toId,
    });
  }
}
