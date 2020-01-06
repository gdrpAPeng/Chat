import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const SessionSchema = new mongoose.Schema({
    // sessionName: String,
    // createUserId: String,
    lastMessage: String,
    lastFromUserId: String,
    isGroup: {
        type: Number,
        default: 0
    },


    createTime: {
        type: Date,
        default: dayjs()
    },
    updateTime: {
        type: Date,
        default: dayjs()
    }
})