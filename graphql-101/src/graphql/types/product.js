import { composeWithMongoose } from 'graphql-compose-mongoose'

import { ProductModel } from '../../models/product'

export const ProductType = composeWithMongoose(ProductModel)