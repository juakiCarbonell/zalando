import './CategoryPreview.scss'
import { ProductCard } from 'components/ProductCard'
import { Product } from 'models/Models'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  products: Product[]
}

export const CategoryPreview = ({ title, products }: Props) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}
