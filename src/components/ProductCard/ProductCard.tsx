import './ProductCard.scss'
import { Button, ButtonTypes } from 'components/Button'
import { Product } from 'models/Models'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from 'store/cart/cart.action'
import { selectCartItems } from 'store/cart/cart.selector'

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)
  const onClickHandler = () => dispatch(addItemToCart(cartItems, product))

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={ButtonTypes.inverted}
        type="button"
        onClick={onClickHandler}
      >
        Add to card
      </Button>
    </div>
  )
}
