import { composeWithMongoose } from 'graphql-compose-mongoose'

import { OrderModel } from '../../models/order'
import { ProductType } from './product'

export const OrderType = composeWithMongoose(OrderModel)

OrderType.addRelation('orderItems', {
  resolver: () => ProductType.getResolver('findByIds'),
  prepareArgs: {
    _ids: source => source.products.map(item => item.productId)
  },
  projection: { products: 1 },
})