export interface Message {
    id: number,
    name: string,
    message: string,
}

export interface User {
    id: number,
    name: string
}

export interface UserDB {
    id: Number,
    Name: String,

    create_time: Date, // 创建时间 
    update_time: Date, // 更新时间
}

export interface GroupDB {
    id: Number, // 群组 id
    group_create_id: Number, // 群主 id

    create_time: Date, // 创建时间 
    update_time: Date, // 更新时间
}

export interface MessageDB {
    id: Number, // 消息 id
    from: Number, // 发送者
    message: String, // 消息内容
    send_status: Number, // 发送状态 0-失败 1-发送中 2-发送成功

    create_time: Date, // 创建时间 
    update_time: Date, // 更新时间
}


