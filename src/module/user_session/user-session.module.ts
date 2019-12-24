import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserSessionService } from "./user-session.service";
import { userSessionProviders } from "./user-session.providers";

@Module({
    imports: [DatabaseModule],
    providers: [UserSessionService, ...userSessionProviders],
    exports: [UserSessionService]
})
export class UserSessionModule {}