import { UserType } from '../types/user'

export const users = UserType.getResolver('findMany')
export const userById = UserType.getResolver('findById')
export const userPagination = UserType.getResolver('pagination')