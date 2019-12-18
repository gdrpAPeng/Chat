import { Injectable, Inject } from '@nestjs/common';
import { IUser, IMessage } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/message.dto';
import { UserService } from 'src/user/user.service';
import { ConstantMessageModel } from 'src/common/constants';
import { Model } from 'mongoose';

@Injectable()
export class MessageService {

    constructor(
        @Inject(ConstantMessageModel)
        private readonly messageModel: Model<IMessage>,
        private readonly userService: UserService
    ){}

    async create(data: CreateMessageDto): Promise<IMessage> {
        // 获取 user 信息
        let userData = await this.userService.findOne(data.userId)
        let resultData = {
            ...data,
            nickname: userData.nickname
        }
        const createdMessage = new this.messageModel(resultData)
        return await createdMessage.save()
    }

    async findAll(sessionId: string): Promise<IMessage[]> {
        let messagesData = await this.messageModel.find({
            sessionId
        })
        messagesData = JSON.parse(JSON.stringify(messagesData))
        await Promise.all(messagesData.map(async item => {
            const { nickname } = await this.userService.findOne(item.userId)
            item.nickname =  nickname
            return item
        }))
        console.log(messagesData, '-=-=-')
        return messagesData
    }
}
