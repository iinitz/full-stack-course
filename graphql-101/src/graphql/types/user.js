import { composeWithMongoose } from 'graphql-compose-mongoose'

import { UserModel } from '../../models/user'

export const UserType = composeWithMongoose(UserModel)