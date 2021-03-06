import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const MessageSchema = new mongoose.Schema({
    message: String,
    fromUserId: String,
    toId: String,
    sessionId: String,


    createTime: {
        type: Date,
        default: dayjs()
    },
    updateTime: {
        type: Date,
        default: dayjs()
    }
})