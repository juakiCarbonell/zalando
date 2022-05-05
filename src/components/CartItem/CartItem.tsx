import './CartItem.scss'
import { CartProduct } from 'models/Models'

interface Props {
  cartItem: CartProduct
}

export const CartItem = ({ cartItem }: Props) => {
  const { name, quantity, price, imageUrl } = cartItem
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}€
        </span>
      </div>
    </div>
  )
}
