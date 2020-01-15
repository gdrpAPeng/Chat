import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

import { allSocketId } from 'src/common/socket'
import { UserService } from './user.service';

@WebSocketGateway()
export class UserGateway {
    constructor(
        private readonly userService: UserService,
    ) {}

    @SubscribeMessage('searchUser')
    async searchUser(client: any, payload: any) {
        // 获取用户 id
        const userId = allSocketId.get(client.id)
        const { search } = payload
        return await this.userService.searchUser(search, userId)
    }

}