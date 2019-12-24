import { Injectable, Inject } from "@nestjs/common";
import { ConstantUserSessionModel } from "src/common/constants";
import { Model } from "mongoose";

@Injectable()
export class UserSessionService {
    constructor(
        @Inject(ConstantUserSessionModel)
        private readonly userSessionModel: Model<any>
    ){}
    
    async create(userSessionDto): Promise<any> {
        const createdUserSession = new this.userSessionModel(userSessionDto)
        return await createdUserSession.save()
    }

    async findOne({ fromUserId, toId }): Promise<any> {
        return await this.userSessionModel.findOne({
            fromUserId,
            toId
        })
    }
}
