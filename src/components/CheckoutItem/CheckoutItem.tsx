import './CheckoutItem.scss'
import { CartProduct } from 'models/Models'
import { useContext } from 'react'
import { CartContext } from 'contexts/cartContext'

interface Props {
  cartItem: CartProduct
}

export const CheckoutItem = ({ cartItem }: Props) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext)
  const { name, quantity, imageUrl, price } = cartItem
  const clearItemHandler = () => clearItemFromCart(cartItem)
  const decrementItemHandler = () => removeItemToCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  )
}
