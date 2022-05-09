import { CART_ACTIONS_TYPES } from './cart.types'

const INITAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

export const cartReducer = (state = INITAL_STATE, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload
      }
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      return state
  }
}
