import { ProductType } from '../types/product'

export const productById = ProductType.getResolver('findById')
export const productPagination = ProductType.getResolver('pagination')