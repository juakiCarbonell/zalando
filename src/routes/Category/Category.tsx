import { CategoryContainer, CategoryTitle } from './Category.styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from 'store/categories/category.selector'
import { Product } from 'models/Models'
import { ProductCard } from 'components/ProductCard'

export const Category = () => {
  const { category } = useParams()
  const categories = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (category) {
      setProducts(categories[category])
    }
  }, [category, categories])

  return (
    <>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </>
  )
}
