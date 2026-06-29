import { useEffect, useState } from 'react'
import { productService } from '../services/productService'
import type { Product } from '../types/product'

interface UseProductReturn {
  product: Product | null
  loading: boolean
  error: string | null
}

export const useProduct = (id: string | undefined): UseProductReturn => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(Boolean(id))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setProduct(null)
      setLoading(false)
      setError(null)
      return
    }

    const controller = new AbortController()

    const fetchProduct = async () => {
      setLoading(true)
      setError(null)
      setProduct(null)
      try {
        const data = await productService.getById(id, controller.signal)
        setProduct(data)
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Gagal memuat produk')
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchProduct()
    return () => controller.abort()
  }, [id])

  return { product, loading, error }
}
