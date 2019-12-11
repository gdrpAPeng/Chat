import { Injectable } from "@nestjs/common";
import { Chat } from "./chat.interface";

@Injectable()
export class ChatService {
    private readonly chats: Chat[] = []

    create(chat: Chat) {
        this.chats.push(chat)
    }

    findAll(): Chat[] {
        return this.chats
    }
}