import { Routes, Route } from 'react-router-dom'
import './Shop.scss'
import { CategoriesPreview } from 'routes/CategoriesPreview'
import { Category } from 'routes/Category'

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}
