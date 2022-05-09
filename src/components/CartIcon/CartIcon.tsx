import { CartIconContianer, ItemCount, ShoppingIcon } from './CartIcon.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsCartOpen } from 'store/cart/cart.selector'
import { setIsCartOpen } from 'store/cart/cart.action'

export const CartIcon = () => {
  const dispatch = useDispatch()
  
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  return (
    <CartIconContianer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContianer>
  )
}
