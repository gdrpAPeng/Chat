export class CreateMessageDto {
    readonly userId: string
    readonly sessionId: string
    readonly message: string
}