import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const UserSchema = new mongoose.Schema({
    nickname: String,
    password: {
        type: String,
        min: 6,
        default: '123456'
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