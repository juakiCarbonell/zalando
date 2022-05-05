import { Button } from 'components/Button'
import { CartItem } from 'components/CartItem'
import { useContext } from 'react'
import { CartContext } from 'contexts/cartContext'
import { useNavigate } from 'react-router-dom'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropdown.styles'

export const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)
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
      <Button onClickHandler={goToCheckoutPage}>Checkout</Button>
    </CartDropdownContainer>
  )
}
