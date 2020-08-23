import React from 'react'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const ORDER_BY_ID_QUERY = gql`
query ($_id: MongoID!) {
  orderById (_id: $_id) {
    name
    address
    status
    orderItems {
      product {
        _id
        name
        price
      }
      quantity
    }
  }
}
`

const OrderId = () => {
  const router = useRouter()
  const { orderId } = router.query
  const { loading, error, data } = useQuery(
    ORDER_BY_ID_QUERY,
    {
      variables: {
        _id: orderId
      }
    }
  )
  if (loading) {
    return <h3>Loading ...</h3>
  }
  if (error) {
    return <h3>Error</h3>
  }
  const { orderById: order } = data
  return (
    <>
      <div>Order Id: {orderId}</div>
      <div>Name: {order.name}</div>
      <div>Address: {order.address}</div>
      <div>
        Products:
        <ul>
          {order.orderItems.map((item) => {
            return (
              <li key={item.product._id}>{item.product.name}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default OrderId