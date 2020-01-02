import { Connection } from 'mongoose'
import { ConstantMessageModel, ConstantDatabaseConnection } from 'src/constants/database'
import { MessageSchema } from 'src/schemas/message.schema'

export const messagesProviders = [
    {
        provide: ConstantMessageModel,
        useFactory: (connection: Connection) => connection.model('Message', MessageSchema),
        inject: [ConstantDatabaseConnection]
    }
]