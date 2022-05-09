import { Button } from 'components/Button'
import { CartItem } from 'components/CartItem'
import { selectCartItems } from 'store/cart/cart.selector'
import {} from 'store/cart/cart.selector'
import { useNavigate } from 'react-router-dom'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropdown.styles'
import { useSelector } from 'react-redux'

export const CartDropdown = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const goToCheckoutPage = () => navigate('/checkout')
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button onClick={goToCheckoutPage}>Checkout</Button>
    </CartDropdownContainer>
  )
}
