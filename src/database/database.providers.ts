import * as mongoose from 'mongoose'
import { ConstantDatabaseConnection } from 'src/constants/models'

export const databaseProviders = [
    {
        provide: ConstantDatabaseConnection,
        useFactory: (): Promise<typeof mongoose> => 
            mongoose.connect('mongodb://localhost:27017/chat')
    }
]