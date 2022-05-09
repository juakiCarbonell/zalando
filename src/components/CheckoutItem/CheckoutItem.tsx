import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './CheckoutItem.styles'
import { CartProduct } from 'models/Models'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from 'store/cart/cart.action'
import { selectCartItems } from 'store/cart/cart.selector'

interface Props {
  cartItem: CartProduct
}

export const CheckoutItem = ({ cartItem }: Props) => {
  const { name, quantity, imageUrl, price } = cartItem
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem))
  const decrementItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}
