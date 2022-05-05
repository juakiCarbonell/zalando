import './Category.scss'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CategoriesContext } from 'contexts/categoriesContext'
import { Product } from 'models/Models'
import { ProductCard } from 'components/ProductCard'

export const Category = () => {
  const { category } = useParams()
  const { categories } = useContext(CategoriesContext)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (category) {
      setProducts(categories[category])
    }
  }, [category, categories])

  return (
    <>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  )
}
