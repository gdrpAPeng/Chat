import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

import { allSocketId } from 'src/common/socket'
import { UserSessionService } from './user-session.service';

@WebSocketGateway()
export class UserSessionGateway {
    constructor(
        private readonly userSessionService: UserSessionService
    ) {}

    @SubscribeMessage('session')
    async handleSession(client: any, payload: any) {
        // 获取用户 id
        const userId = allSocketId.get(client.id)
        return await this.userSessionService.findAll(userId)
    }

}