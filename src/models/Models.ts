export interface Category {
  id: number
  title: string
  imageUrl: string
}
export interface CategoryConfig extends Category {
  route: string
}

export interface Product {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface CartProduct extends Product {
  quantity: number
}

export interface Categories {
  [key: string]: Product[]
}
