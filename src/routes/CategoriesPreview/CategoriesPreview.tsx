
import { useContext } from 'react'
import { CategoriesContext } from 'contexts/categoriesContext'
import { CategoryPreview } from 'components/CategoryPreview'

export const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categories).map(title => {
        const products = categories[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>
  )
}
