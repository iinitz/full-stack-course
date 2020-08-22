import * as userQueries from './user'
import * as productQueries from './product'
import * as orderQueries from './order'

export default {
  ...userQueries,
  ...productQueries,
  ...orderQueries,
}