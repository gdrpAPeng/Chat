import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserSessionService } from "./user-session.service";
import { userSessionProviders } from "./user-session.providers";
import { UserModule } from "../user/user.module";
import { SessionModule } from "../session/session.module";
import { UserSessionGateway } from "./user-session.gateway";

@Module({
    imports: [DatabaseModule, UserModule, SessionModule],
    providers: [UserSessionService, ...userSessionProviders, UserSessionGateway],
    exports: [UserSessionService]
})
export class UserSessionModule {}