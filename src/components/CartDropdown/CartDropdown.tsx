import { Button } from 'components/Button'
import './CartDropdown.scss'
import { CartItem } from 'components/CartItem'
import { useContext } from 'react'
import { CartContext } from 'contexts/cartContext'
import { useNavigate } from 'react-router-dom'

export const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)
  const goToCheckoutPage = () => navigate('/checkout')
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClickHandler={goToCheckoutPage}>Checkout</Button>
    </div>
  )
}
