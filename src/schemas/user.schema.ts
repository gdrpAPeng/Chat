import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String
})