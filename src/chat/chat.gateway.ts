import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets'
import { Socket } from 'socket.io'

@WebSocketGateway({ port: 3000 })
export class ChatGateway {
    @SubscribeMessage('events')
    handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: unknown): Boolean {
        console.log(data, '==', typeof data)
        client.emit('events', data + ' ' + 'APeng')
        return true
    }
}