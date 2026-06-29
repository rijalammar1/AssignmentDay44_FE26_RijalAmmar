import {
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from 'react'
import type { Product, ProductFormData } from '../types/product'
import { parseNumericField } from '../utils/parseNumericField'

export const emptyFormData: ProductFormData = {
  name: '',
  category: '',
  description: '',
  price: 0,
  image: '',
  stock: 0,
}

const productToFormData = (product: Product): ProductFormData => ({
  name: product.name,
  category: product.category,
  description: product.description,
  price: product.price,
  image: product.image,
  stock: product.stock,
})

interface UseProductFormReturn {
  formData: ProductFormData
  errors: Partial<Record<keyof ProductFormData, string>>
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  validate: () => boolean
  setFormData: Dispatch<SetStateAction<ProductFormData>>
}

export const useProductForm = (product?: Product | null): UseProductFormReturn => {
  const [formData, setFormData] = useState<ProductFormData>(emptyFormData)
  const [errors, setErrors] = useState<Partial<Record<keyof ProductFormData, string>>>({})

  useEffect(() => {
    if (product) {
      setFormData(productToFormData(product))
      setErrors({})
    }
  }, [product])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]:
          name === 'price' || name === 'stock' ? parseNumericField(value) : value,
      }))
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    },
    [],
  )

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof ProductFormData, string>> = {}

    if (!formData.name.trim()) newErrors.name = 'Nama produk wajib diisi'
    if (!formData.category) newErrors.category = 'Kategori wajib dipilih'
    if (!formData.description.trim()) newErrors.description = 'Deskripsi wajib diisi'
    if (!Number.isFinite(formData.price) || formData.price <= 0) {
      newErrors.price = 'Harga harus lebih dari 0'
    }
    if (!formData.image.trim()) newErrors.image = 'URL gambar wajib diisi'
    if (!Number.isFinite(formData.stock) || formData.stock < 0) {
      newErrors.stock = 'Stok tidak boleh negatif'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  return { formData, errors, handleChange, validate, setFormData }
}

export type { FormEvent }
