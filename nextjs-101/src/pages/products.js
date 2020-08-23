import React from 'react'

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

const Products = () => {
  return (
    <ProductList products={products} />
  )
}

export default Products