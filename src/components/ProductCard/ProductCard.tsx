import './ProductCard.scss'
import { Button, ButtonTypes } from 'components/Button'
import { Product } from 'models/Models'
import { useContext } from 'react'
import { CartContext } from 'contexts/cartContext'


interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const { addItemToCart } = useContext(CartContext)
  const { name, price, imageUrl } = product
  const onClickHandler = () => {
    addItemToCart(product)
  }
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
