import { useContext } from 'react'
import { ProductsContext } from 'contexts/productsContext'
import { ProductCard } from 'components/ProductCard'
import './Shop.scss'

export const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
