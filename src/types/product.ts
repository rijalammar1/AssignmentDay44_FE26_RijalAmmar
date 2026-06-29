export interface Product {
  id: string
  name: string
  category: string
  description: string
  price: number
  image: string
  stock: number
}

export interface ProductFormData {
  name: string
  category: string
  description: string
  price: number
  image: string
  stock: number
}

export type ProductPayload = Omit<Product, 'id'>
