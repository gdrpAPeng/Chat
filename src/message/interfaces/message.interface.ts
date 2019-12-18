import { Document } from "mongoose";

export interface IMessage extends Document {
    userId: string,
    nickname: string,
    message: string,
}

export interface IUser {
    userId: string,
    nickname: string
}

