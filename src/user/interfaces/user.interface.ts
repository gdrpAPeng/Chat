import { Document } from "mongoose";

export interface User extends Document {
    readonly nickname: string
    readonly password: string
}
