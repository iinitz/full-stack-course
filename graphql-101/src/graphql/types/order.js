import { composeWithMongoose } from 'graphql-compose-mongoose'

import { OrderModel } from '../../models/order'
import { OrderItemType } from './orderItem'

export const OrderType = composeWithMongoose(OrderModel)

OrderType.addRelation('orderItems', {
  resolver: () => OrderItemType.getResolver('findMany'),
  prepareArgs: {
    filter: source => ({ orderId: source._id }),
  },
  projection: { products: 1 },
})
// OrderType.addRelation('orderItems', {
//   resolver: () => ProductType.getResolver('findByIds'),
//   prepareArgs: {
//     // filter: source => ({ _ids: source.products.map(item => item.productId)}),
//     _ids: source => source.products.map(item => item.productId)
//   },
//   projection: { products: 1 },
// })