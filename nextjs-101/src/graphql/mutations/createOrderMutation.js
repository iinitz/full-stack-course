import { gql } from '@apollo/client'

export const CREATE_ORDER_MUTATION = gql`
mutation ($record: CreateOneOrderInput!) {
  createOrder (record: $record) {
    recordId
  }
}
`