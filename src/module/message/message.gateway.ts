import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/message.dto';

@WebSocketGateway()
export class MessageGateway {
  constructor(private readonly messageService: MessageService){}

  @SubscribeMessage('historyMessages')
  async handlerHistoryMessage(client: any, payload: any) {
    const { sessionId } = payload
    // 获取某个会话的历史聊天记录
    return await this.messageService.findAll(sessionId)
  }

  @SubscribeMessage('message')
  async handleMessage(client: any, payload: CreateMessageDto): Promise<boolean> {
    let result = await this.messageService.create(payload)
    console.log(payload, result)
    // 通知当前客户端
    client.emit('message', result)
    // 通知其它客户端
    client.broadcast.emit('message', result)
    return true;
  }
}
