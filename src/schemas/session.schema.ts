import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const SessionSchema = new mongoose.Schema({
    sessionName: String,
    createUserId: String,

    createTime: {
        type: Date,
        default: dayjs()
    },
    updateTime: {
        type: Date,
        default: dayjs()
    }
})