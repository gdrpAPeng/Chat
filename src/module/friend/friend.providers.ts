import { ConstantFriendModel, ConstantDatabaseConnection } from "src/constants/database";
import { Connection } from "mongoose";
import { FriendSchema } from "src/schemas/friend.schema";

export const friendsProviders = [
    {
        provide: ConstantFriendModel,
        useFactory: (connection: Connection) => connection.model('Friend', FriendSchema),
        inject: [ConstantDatabaseConnection]
    }
]