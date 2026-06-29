export class ApiError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

/**
 * Response shape returned by json-server v1 when using
 * _page / _per_page pagination parameters.
 */
export interface PaginatedResponse<T> {
  data: T[]
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
}
