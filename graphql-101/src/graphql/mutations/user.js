import { UserType } from '../types/user'

export const createUser = UserType.getResolver('createOne')
export const createUsers = UserType.getResolver('createMany')
export const updateUserById = UserType.getResolver('updateById')
export const deleteUserById = UserType.getResolver('removeById')