export class CreateMessageDto {
    readonly fromUserId: string
    readonly toId: string
    readonly sessionId: string
    readonly message: string
}