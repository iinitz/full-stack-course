import React from 'react'
import { useQuery, gql } from '@apollo/client'

import ProductList from '../components/ProductList'

const PRODUCTS_QUERY = gql`
{
  productPagination {
    products: items {
      _id
      name
      imgUrl
      price
      category
    }
  }
}
`

const Products = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY)
  if (loading) {
    return <h3>Loading ...</h3>
  }
  if (error) {
    return <h3>Error</h3>
  }
  return (
    <ProductList
      products={data.productPagination.products}
    />
  )
}

export default Products