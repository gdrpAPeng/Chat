import { Injectable, Inject } from '@nestjs/common';
import { IUser, IMessage } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/message.dto';
import { UserService } from 'src/module/user/user.service';
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
        const createdMessage = new this.messageModel(data)
        let result = await createdMessage.save()

        if(result) {
            // 获取用户昵称
            let userData = await this.userService.findOne(data.userId)
            result = JSON.parse(JSON.stringify(result))
            result.nickname = userData.nickname
            return result
        } else {
            return null
        }
    }

    async findAll(sessionId: string): Promise<IMessage[]> {
        let messagesData = await this.messageModel.find({
            sessionId
        })
        // Object.preventExtensions() 防止添加新属性
        // Object.isExtensible() 确定对象是否可扩展
        messagesData = JSON.parse(JSON.stringify(messagesData))
        await Promise.all(messagesData.map(async item => {
            const { nickname } = await this.userService.findOne(item.userId)
            item.nickname =  nickname
            return item
        }))
        return messagesData
    }
}
