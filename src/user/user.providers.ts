import { Connection } from 'mongoose'
import { UserSchema } from 'src/schemas/user.schema'
import { ConstantDatabaseConnection, ConstantUserModel } from 'src/common/constants'

export const usersProviders = [
    {
        provide: ConstantUserModel,
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [ConstantDatabaseConnection]
    }
]