import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { Model } from "mongoose";
import { IFriend } from "./interfaces/friend.interface";
import { ConstantFriendModel, ConstantUserModel } from "src/constants/models";

@Injectable()
export class FriendService {
    constructor(
        @Inject(ConstantFriendModel)
        private readonly friendModel: Model<any>,
        @Inject(ConstantUserModel)
        private readonly userModel: Model<any>
    ){}

    async findAll(userId: string): Promise<IFriend[]> {
        return await this.friendModel
            .find({
                user_id: userId
            })
            .populate({
                path: 'friend_id',
                model: this.userModel,
                select: 'nickname username _id'
            })
    }

    async addFriend(userId: string, friendId: string): Promise<any> {
        const target = {
            user_id: userId,
            friend_id: friendId
        }
        // 推送申请
        // 先保存到用户好友列表
        // 查询一下是否存在
        const data = await this.friendModel.findOne(target)
        if(!data) {
            return await new this.friendModel(target).save()
        }
        // 还得弄个申请表 ----------- 郁闷啊
        return data
    }

    async checkFriend(userId: string, friendId: string): Promise<any> {
        return await this.friendModel.findOne({
            user_id: userId,
            friend_id: friendId
        })
    }
}