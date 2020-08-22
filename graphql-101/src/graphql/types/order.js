import { composeWithMongoose } from 'graphql-compose-mongoose'

import { OrderModel } from '../../models/order'

export const OrderType = composeWithMongoose(OrderModel)