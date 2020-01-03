import { ConstantUserSessionModel, ConstantDatabaseConnection } from "src/constants/models";
import { Connection } from "mongoose";
import { UserSessionSchema } from "src/schemas/user-session.schema";

export const userSessionProviders = [
    {
        provide: ConstantUserSessionModel,
        useFactory: (connection: Connection) => connection.model('user_session', UserSessionSchema),
        inject: [ConstantDatabaseConnection]
    }
]