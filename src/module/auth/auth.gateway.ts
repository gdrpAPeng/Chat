import { SubscribeMessage, WebSocketServer, WebSocketGateway } from "@nestjs/websockets";
import { AuthService } from "./auth.service";

import { allSocket, allSocketId } from 'src/common/socket'

@WebSocketGateway()
export class AuthGateway {
    constructor(
        private readonly authService: AuthService
    ){}

    @SubscribeMessage('auth')
    async handleAuth(client: any, payload: any) {
        try {
            const { access_token } = payload
            const { sub } = await this.authService.verifyJwt(access_token)
            allSocket.set(sub, client)  //  存储 socket 实例对象
            allSocketId.set(client.id, sub) // 与用户 id 绑定  
          } catch(e) {
            // 给当前客户端推送广播，鉴权失败
            client.emit('authDisconnected')
          }
    }

    @SubscribeMessage('disconnect')
    async handleDisconnect(client: any) {
      // 移除存储的 socket 实例
      const userId = allSocketId.get(client.id)
      allSocketId.delete(client.id)
      allSocket.delete(userId)
    }
}