import { composeWithMongoose } from 'graphql-compose-mongoose'

import { OrderItemModel } from '../../models/orderItem'
import { ProductType } from './product'

export const OrderItemType = composeWithMongoose(OrderItemModel)

OrderItemType.addRelation('product', {
  resolver: () => ProductType.getResolver('findById'),
  prepareArgs: {
    _id: source => source.productId,
  },
  projection: { productId: 1 },
})