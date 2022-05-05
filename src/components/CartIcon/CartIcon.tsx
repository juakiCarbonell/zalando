import { CartContext } from 'contexts/cartContext'
import { useContext } from 'react'
import { CartIconContianer, ItemCount, ShoppingIcon  } from './CartIcon.styles'

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContianer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContianer>
  )
}
