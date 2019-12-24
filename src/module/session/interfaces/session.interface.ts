import { Document } from "mongoose";

export interface ISession extends Document {
    readonly lastMessage: string
    readonly lastFromUserId: string
    readonly isGroup: number
}
