import { atom, selector } from 'recoil'

export const cartState = atom({
  key: 'cartState',
  default: [],
})

export const cartCountState = selector({
  key: 'cartCountState',
  get: ({ get }) => {
    const cart = get(cartState)
    return cart.length
  },
})