import { createContext, useState, useEffect } from 'react'
import { Props, CategoriesContextValues, EmptyObject } from './contextModels'
import { Categories } from 'models/Models'

import { getCategoriesAndDocuments } from 'utils/firebase/firebase'

export const CategoriesContext = createContext<CategoriesContextValues>({
  categories: {},
})

export const CategoriesProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<Categories | EmptyObject>({})
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()

      setCategories(categoryMap)
    }
    getCategoriesMap()
  }, [])
  return (
    <CategoriesContext.Provider value={{categories}}>
      {children}
    </CategoriesContext.Provider>
  )
}
