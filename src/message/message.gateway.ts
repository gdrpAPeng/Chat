import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class MessageGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): Boolean {
    client.emit('message', `APeng: ${payload}`)
    return true;
  }
}
