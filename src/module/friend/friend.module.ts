import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FriendController } from "./friend.controller";
import { FriendService } from "./friend.service";
import { friendsProviders } from "./friend.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [FriendController],
    providers: [FriendService, ...friendsProviders]
})
export class FriendModule {}