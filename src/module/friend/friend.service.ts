import { Injectable, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { IFriend } from "./interfaces/friend.interface";
import { ConstantFriendModel } from "src/common/constants";

@Injectable()
export class FriendService {
    constructor(
        @Inject(ConstantFriendModel)
        private readonly friendModel: Model<any>
    ){}

    async findAll(userId: string): Promise<IFriend[]> {
        return await this.friendModel.find()
    }
}