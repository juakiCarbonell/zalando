import { CART_ACTIONS_TYPES } from './cart.types'
import { createAction } from 'utils/reducer.utils'

export const setIsCartOpen = boolean =>
  createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean)

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = clearCartItem(cartItems, productToRemove)
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => productToAdd.id === cartItem.id,
  )
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => productToRemove.id === cartItem.id,
  )

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
}

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
}
