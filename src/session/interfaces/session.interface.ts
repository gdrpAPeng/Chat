import { Document } from "mongoose";

export interface ISession extends Document {
    readonly sessionName: string
}
