import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

import { allSocketId } from 'src/common/socket'
import { FriendService } from './friend.service';
import { UserService } from '../user/user.service';

@WebSocketGateway()
export class FriendGateway {
    constructor(
        private readonly friendService: FriendService,
        private readonly userService: UserService
    ) {}

    @SubscribeMessage('friend')
    async getFriend(client: any, payload: any) {
        // 获取用户 id
        const userId = allSocketId.get(client.id)
        return await this.friendService.findAll(userId)
    }

    @SubscribeMessage('addFriend')
    async addFriend(client: any, payload: any) {
        const userId = allSocketId.get(client.id)

        const { _id } = payload
        return await this.friendService.addFriend(userId, _id)
    }

    @SubscribeMessage('getUserInfo')
    async getUserInfo(client: any, payload: any) {
        const userId = allSocketId.get(client.id)

        const { _id } = payload // 查询的用户 id
        const userData = await this.userService.findById(_id)
        const { username, nickname } = userData

        let result = {
            _id,
            username,
            nickname,
            isMe: false,
            isFriend: false
        }

        if(_id === userId) {
            result.isMe = true
        } else {
            // 查一下是否是好友
            const friendResult = await this.friendService.checkFriend(userId, _id)
            if(friendResult) {
                result.isFriend = true
            }
        }
        return result
    }

}