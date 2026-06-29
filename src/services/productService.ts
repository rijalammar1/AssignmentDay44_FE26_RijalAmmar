import api from './api'
import type { Product, ProductPayload } from '../types/product'

const ENDPOINT = '/products'

export const productService = {
  getAll: async (signal?: AbortSignal): Promise<Product[]> => {
    const { data } = await api.get<Product[]>(ENDPOINT, { signal })
    return data
  },

  getFeatured: async (limit = 6, signal?: AbortSignal): Promise<Product[]> => {
    const { data } = await api.get<Product[]>(ENDPOINT, {
      params: { _limit: limit },
      signal,
    })
    return data
  },

  getById: async (id: string, signal?: AbortSignal): Promise<Product> => {
    const { data } = await api.get<Product>(`${ENDPOINT}/${id}`, { signal })
    return data
  },

  create: async (payload: ProductPayload): Promise<Product> => {
    const { data } = await api.post<Product>(ENDPOINT, payload)
    return data
  },

  update: async (id: string, payload: ProductPayload): Promise<Product> => {
    const { data } = await api.put<Product>(`${ENDPOINT}/${id}`, payload)
    return data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`${ENDPOINT}/${id}`)
  },
}
