import { Injectable, Inject } from '@nestjs/common';
import { IUser, IMessage } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/message.dto';
import { UserService } from 'src/module/user/user.service';
import { ConstantMessageModel } from 'src/common/constants';
import { Model } from 'mongoose';
import { UserSessionService } from '../user_session/user-session.service';
import { SessionService } from '../session/session.service';

@Injectable()
export class MessageService {

    constructor(
        @Inject(ConstantMessageModel)
        private readonly messageModel: Model<IMessage>,
        private readonly userService: UserService,
        private readonly userSessionService: UserSessionService,
        private readonly sessionService: SessionService
    ){}

    async create(data: CreateMessageDto): Promise<IMessage> {

        const { message, fromUserId, toId } = data

        // 后面可以再判断一下， 如果有传 session 则不做这一步操作
        const { sessionId } = await this.getSessionId(data)

        const createdMessage = new this.messageModel({
            message,
            fromUserId,
            toId,
            sessionId
        })

        let result = await createdMessage.save()

        if(result) {
            // 获取用户昵称
            let userData = await this.userService.findOne(fromUserId)
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
            const { nickname } = await this.userService.findOne(item.fromUserId)
            item.nickname =  nickname
            return item
        }))
        return messagesData
    }

    
    // 业务逻辑

    async getSessionId(data) {
        const { fromUserId, toId, message } = data
        // 关联表里有的话直接拿
        let userSessionData = await this.userSessionService.findOne({
            fromUserId,
            toId
        })
        if(userSessionData) {
            return {
                sessionId: userSessionData.sessionId
            }
        }
        // 往 session 表添加新纪录
        const sessionData = await this.sessionService.create({
            lastMessage: message,
            lastFromUserId: fromUserId
        })
        // 往关联表添加关联数据
        const createdUserSession = await this.userSessionService.create({
            fromUserId,
            toId,
            sessionId: sessionData._id
        })
        if(sessionData && createdUserSession) {
            return {
                sessionId: sessionData._id
            }
        }
        return {
            sessionId: false
        }
    }
}
