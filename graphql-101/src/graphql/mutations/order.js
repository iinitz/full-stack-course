import { OrderType } from '../types/order'

export const createOrder = OrderType.getResolver('createOne')
export const updateOrderById = OrderType.getResolver('updateById')