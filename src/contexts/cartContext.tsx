import { Product, CartProduct } from 'models/Models'
import { createContext, useEffect, useState } from 'react'
import { Props, CartContextValues } from './contextModels'

const addCartItem = (
  cartItems: CartProduct[],
  productToAdd: Product,
): CartProduct[] => {
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

const removeCartItem = (
  cartItems: CartProduct[],
  productToRemove: Product,
): CartProduct[] => {
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

const clearCartItem = (
  cartItems: CartProduct[],
  productToRemove: Product,
): CartProduct[] => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
}

export const CartContext = createContext<CartContextValues>({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemToCart: () => null,
  cartCount: 0,
  clearItemFromCart: () => null,
  total: 0,
})

export const CartProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartProduct[]>([])
  const [cartCount, setCartCount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    )
    setCartCount(newCartCount)
  }, [cartItems])
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0,
    )
    setTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const removeItemToCart = (productToRemove: Product) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = (productToRemove: Product) => {
    setCartItems(clearCartItem(cartItems, productToRemove))
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemToCart,
        cartCount,
        clearItemFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
