import * as mongoose from 'mongoose'
import * as dayjs from 'dayjs'

export const FriendSchema = new mongoose.Schema({

    user_id: String,
    friend_id: String,

    createTime: {
        type: Date,
        default: dayjs()
    },
    updateTime: {
        type: Date,
        default: dayjs()
    }
})