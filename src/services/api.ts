import axios from 'axios'
import { API_BASE_URL } from '../config/env'
import { ApiError } from '../types/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Terjadi kesalahan. Silakan coba lagi.'
    const status = error.response?.status as number | undefined
    return Promise.reject(new ApiError(message, status))
  },
)

export default api
