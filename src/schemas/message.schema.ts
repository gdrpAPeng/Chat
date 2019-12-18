import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const MessageSchema = new mongoose.Schema({
    message: String,
    userId: String,
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