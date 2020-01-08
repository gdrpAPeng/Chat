import { SubscribeMessage, WebSocketServer, WebSocketGateway } from "@nestjs/websockets";
import { AuthService } from "./auth.service";

import allSocket from 'src/common/socket'

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
            allSocket.set(sub, client)
          } catch(e) {
            // 给当前客户端推送广播，鉴权失败
            client.emit('authDisconnected')
          }
    }
}