import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

import { allSocketId } from 'src/common/socket'
import { FriendService } from './friend.service';

@WebSocketGateway()
export class FriendGateway {
    constructor(
        private readonly friendService: FriendService
    ) {}

    @SubscribeMessage('friend')
    async getFriend(client: any, payload: any) {
        // 获取用户 id
        const userId = allSocketId.get(client.id)
        return await this.friendService.findAll(userId)
    }

}