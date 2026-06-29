import { useCallback, useState } from 'react'
import { productService } from '../services/productService'
import type { ProductFormData } from '../types/product'

interface UseProductMutationReturn {
  submitting: boolean
  createProduct: (data: ProductFormData) => Promise<void>
  updateProduct: (id: string, data: ProductFormData) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
}

export const useProductMutation = (
  onSuccess?: (message: string) => void,
  onError?: (message: string) => void,
): UseProductMutationReturn => {
  const [submitting, setSubmitting] = useState(false)

  const createProduct = useCallback(
    async (data: ProductFormData) => {
      setSubmitting(true)
      try {
        await productService.create(data)
        onSuccess?.('Produk berhasil ditambahkan')
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Gagal menambahkan produk'
        onError?.(message)
        throw err
      } finally {
        setSubmitting(false)
      }
    },
    [onSuccess, onError],
  )

  const updateProduct = useCallback(
    async (id: string, data: ProductFormData) => {
      setSubmitting(true)
      try {
        await productService.update(id, data)
        onSuccess?.('Produk berhasil diperbarui')
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Gagal memperbarui produk'
        onError?.(message)
        throw err
      } finally {
        setSubmitting(false)
      }
    },
    [onSuccess, onError],
  )

  const deleteProduct = useCallback(
    async (id: string) => {
      setSubmitting(true)
      try {
        await productService.delete(id)
        onSuccess?.('Produk berhasil dihapus')
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Gagal menghapus produk'
        onError?.(message)
        throw err
      } finally {
        setSubmitting(false)
      }
    },
    [onSuccess, onError],
  )

  return { submitting, createProduct, updateProduct, deleteProduct }
}
