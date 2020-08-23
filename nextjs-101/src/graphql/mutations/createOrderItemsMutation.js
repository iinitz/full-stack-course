import { gql } from '@apollo/client'

export const CREATE_ORDER_ITEMS_MUTATION = gql`
mutation ($records: [CreateManyOrderItemInput!]!) {
  createOrderItems (records: $records) {
    recordIds
  }
}
`