import * as userMutations from './user'
import * as productMutations from './product'
import * as orderMutations from './order'

export default {
  ...userMutations,
  ...productMutations,
  ...orderMutations,
}