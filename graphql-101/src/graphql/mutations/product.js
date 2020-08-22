import { ProductType } from '../types/product'

export const createProduct = ProductType.getResolver('createOne')
export const updateProductById = ProductType.getResolver('updateById')
export const removeProductById = ProductType.getResolver('removeById')