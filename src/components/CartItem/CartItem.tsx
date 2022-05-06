import {
  CartItemContainer,
  ImageContainer,
  ItemDetails,
  Name,
} from './CartItem.styles'
import { CartProduct } from 'models/Models'

interface Props {
  cartItem: CartProduct
}

export const CartItem = ({ cartItem }: Props) => {
  const { name, quantity, price, imageUrl } = cartItem
  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x {price}€
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}
