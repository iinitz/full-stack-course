import { OrderType } from '../types/order'

export const orderById = OrderType.getResolver('findById')
export const orderPagination = OrderType.getResolver('pagination')