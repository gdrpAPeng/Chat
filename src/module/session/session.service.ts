import { Injectable, Inject } from '@nestjs/common';
import { ConstantSessionModel, ConstantUserModel } from 'src/constants/models';
import { Model } from 'mongoose';
import { ISession } from './interfaces/session.interface';
import { CreateSessionDto } from './dto/session.dto';

@Injectable()
export class SessionService {
    constructor(
        @Inject(ConstantSessionModel)
        private readonly sessionModel: Model<ISession>,
        @Inject(ConstantUserModel)
        private readonly userModel: Model<any>
    ){}

    async create(createSessionDto: CreateSessionDto): Promise<ISession> {
        const createdSession = new this.sessionModel(createSessionDto)
        return await createdSession.save()
    }

    async findAll(): Promise<ISession[]> {
        return await this.sessionModel.find()
            .select('_id isGroup lastMessage lastFromUserId')
            .populate({
                path: 'lastFromUserId',
                model: this.userModel,
                select: 'nickname username _id'
            })
    }
}
