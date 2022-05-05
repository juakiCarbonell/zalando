import { createContext, useState } from 'react'
import { Props, ProductContextValues } from './contextModels'
import { Product } from 'models/Models'

import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext<ProductContextValues>({
  products: [],
})

export const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS)
  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  )
}
