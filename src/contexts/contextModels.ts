import { UserCredential } from 'firebase/auth'
import { Product, CartProduct } from 'models/Models'

// Comom Props
export interface Props {
  children: React.ReactNode
}

// Values
export interface UserContextValues {
  currentUser: UserCredential | null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserCredential | null>>
}
export interface ProductContextValues {
  products: Product[]
}
export interface CartContextValues {
  isCartOpen: boolean
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
  cartItems: CartProduct[]
  addItemToCart: (item: Product) => void
  removeItemToCart: (item: Product) => void
  clearItemFromCart: (item: Product) => void
  cartCount: number
  total: number
}
