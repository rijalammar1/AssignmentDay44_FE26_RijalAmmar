import api from './api'
import type { Product, ProductPayload } from '../types/product'
import type { PaginatedResponse } from '../types/api'

const ENDPOINT = '/products'

export const productService = {
  getAll: async (signal?: AbortSignal): Promise<Product[]> => {
    const { data } = await api.get<Product[]>(ENDPOINT, { signal })
    return data
  },

  /**
   * Returns the `limit` most recently added products.
   *
   * json-server v1 deprecated `_limit` in favour of `_page` / `_per_page`.
   * Using the new pagination params also changes the response shape from a
   * plain array to `{ data: Product[], first, prev, next, last, pages, items }`.
   * `_sort=-id` ensures the newest products are always included.
   */
  getFeatured: async (limit = 6, signal?: AbortSignal): Promise<Product[]> => {
    const { data } = await api.get<PaginatedResponse<Product>>(ENDPOINT, {
      params: { _page: 1, _per_page: limit, _sort: '-id' },
      signal,
    })
    return data.data
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
