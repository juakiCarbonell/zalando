import { Routes, Route } from 'react-router-dom'
import { CategoriesPreview } from 'routes/CategoriesPreview'
import { Category } from 'routes/Category'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from 'utils/firebase/firebase'
import { setCategories } from 'store/categories/category.action'
import { useDispatch } from 'react-redux'

export const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments()
      dispatch(setCategories(categories))
      console.log('categories', categories)
    }
    getCategoriesMap()
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}
