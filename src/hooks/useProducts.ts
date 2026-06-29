import { useCallback, useEffect, useState } from 'react'
import { productService } from '../services/productService'
import type { Product } from '../types/product'

interface UseProductsOptions {
  featured?: boolean
  limit?: number
}

interface UseProductsReturn {
  products: Product[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export const useProducts = (options: UseProductsOptions = {}): UseProductsReturn => {
  const { featured = false, limit = 6 } = options
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)
    try {
      const data = featured
        ? await productService.getFeatured(limit, signal)
        : await productService.getAll(signal)
      setProducts(data)
    } catch (err) {
      if (signal?.aborted) return
      setError(err instanceof Error ? err.message : 'Gagal memuat produk')
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }, [featured, limit])

  useEffect(() => {
    const controller = new AbortController()
    fetchProducts(controller.signal)
    return () => controller.abort()
  }, [fetchProducts])

  const refetch = useCallback(async () => {
    await fetchProducts()
  }, [fetchProducts])

  return { products, loading, error, refetch }
}
