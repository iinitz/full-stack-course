import React from 'react'
import { useQuery, gql } from '@apollo/client'

import ProductList from '../components/ProductList'

const products = [
  {
    imgUrl: 'https://material-ui.com/static/images/grid-list/hats.jpg',
    name: 'Product',
    price: 100
  },
  {
    imgUrl: 'https://material-ui.com/static/images/grid-list/hats.jpg',
    name: 'Product',
    price: 100
  },
  {
    imgUrl: 'https://material-ui.com/static/images/grid-list/hats.jpg',
    name: 'Product',
    price: 100
  },
  {
    imgUrl: 'https://material-ui.com/static/images/grid-list/hats.jpg',
    name: 'Product',
    price: 100
  },
]

const PRODUCTS_QUERY = gql`
{
  productPagination {
    items {
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
  console.log(data)
  return (
    <ProductList products={products} />
  )
}

export default Products