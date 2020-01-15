import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FriendController } from "./friend.controller";
import { FriendService } from "./friend.service";
import { friendsProviders } from "./friend.providers";
import { UserModule } from "../user/user.module";
import { FriendGateway } from "./friend.gateway";

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [FriendController],
    providers: [FriendService, FriendGateway, ...friendsProviders],
    exports: [FriendService]
})
export class FriendModule {}