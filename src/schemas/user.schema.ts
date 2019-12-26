import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const UserSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        min: 6,
        default: '123456'
    },
    nickname: {
        type: String,
        default: '自定义'
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