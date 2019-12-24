import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const UserSessionSchema = new mongoose.Schema({
    sessionId: String,
    fromUserId: String,
    toId: String,


    createTime: {
        type: Date,
        default: dayjs()
    },
    updateTime: {
        type: Date,
        default: dayjs()
    }
})