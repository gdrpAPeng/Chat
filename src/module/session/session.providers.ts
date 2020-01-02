import { ConstantSessionModel, ConstantDatabaseConnection } from "src/constants/database";
import { Connection } from "mongoose";
import { SessionSchema } from "src/schemas/session.schema";

export const sessionProviders = [
    {
        provide: ConstantSessionModel,
        useFactory: (connection: Connection) => connection.model('Session', SessionSchema),
        inject: [ConstantDatabaseConnection]
    }
]