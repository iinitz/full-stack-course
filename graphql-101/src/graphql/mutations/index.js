import * as userMutations from './user'
import * as productMutations from './product'
import * as orderMutations from './order'
import * as orderItemMutations from './orderItem'

export default {
  ...userMutations,
  ...productMutations,
  ...orderMutations,
  ...orderItemMutations,
}