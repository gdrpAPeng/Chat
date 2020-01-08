import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/message.dto';

import allSocket from 'src/common/socket'

@WebSocketGateway()
export class MessageGateway {
  private allSocket: Map<string, any> = new Map()

  constructor(
    private readonly messageService: MessageService
  ){}

  @SubscribeMessage('disconnected')
  async handleDisconnect(client: any, payload: any) {
    // console.log('disconnect')
  }

  @SubscribeMessage('historyMessages')
  async handlerHistoryMessage(client: any, payload: any) {
    const { sessionId } = payload
    // 获取某个会话的历史聊天记录
    return await this.messageService.findAll(sessionId)
  }

  @SubscribeMessage('message')
  async handleMessage(client: any, payload: CreateMessageDto): Promise<any> {
    let result = await this.messageService.create(payload)
    // 私聊的话得指定推送
    // // 通知当前客户端
    // client.emit('message', result)
    // this.allSocket.get('5e042cffc3f15d41c8f2c4c8').emit('message', result)
    // 通知其它客户端
    client.broadcast.emit('message', result)
    return result;
  }
}
