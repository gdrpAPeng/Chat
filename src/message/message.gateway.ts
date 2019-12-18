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
  handleMessage(client: any, payload: CreateMessageDto): Boolean {
    let result = this.messageService.create(payload)
    client.emit('message', result)
    return true;
  }
}
