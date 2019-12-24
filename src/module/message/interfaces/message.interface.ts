import { Document } from "mongoose";

export interface IMessage extends Document {
    fromUserId: string,
    nickname: string,
    message: string,
}

export interface IUser {
    userId: string,
    nickname: string
}

