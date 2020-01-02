import { Injectable, Inject } from '@nestjs/common';
import { ConstantSessionModel } from 'src/constants/database';
import { Model } from 'mongoose';
import { ISession } from './interfaces/session.interface';
import { CreateSessionDto } from './dto/session.dto';

@Injectable()
export class SessionService {
    constructor(
        @Inject(ConstantSessionModel)
        private readonly sessionModel: Model<ISession>
    ){}

    async create(createSessionDto: CreateSessionDto): Promise<ISession> {
        const createdSession = new this.sessionModel(createSessionDto)
        return await createdSession.save()
    }

    async findAll(): Promise<ISession[]> {
        return await this.sessionModel.find()
    }
}
