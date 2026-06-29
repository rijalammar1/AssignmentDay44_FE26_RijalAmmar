import type { Product } from '../../types/product'
import { ProductCard } from '../common/ProductCard'
import { LoadingSpinner } from '../common/LoadingSpinner'
import { EmptyState } from '../common/EmptyState'
import { ApiErrorBanner } from '../common/ApiErrorBanner'

interface FeaturedProductsProps {
  products: Product[]
  loading: boolean
  error: string | null
}

export const FeaturedProducts = ({ products, loading, error }: FeaturedProductsProps) => {
  return (
    <section id="produk" className="bg-gray-50 py-20" aria-labelledby="featured-products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Katalog Produk
          </span>
          <h2
            id="featured-products-heading"
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Produk Unggulan Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Jelajahi koleksi pakaian berkualitas tinggi yang siap dipesan sesuai kebutuhan brand
            atau bisnis Anda.
          </p>
        </div>

        <div className="mt-12">
          {loading && <LoadingSpinner message="Memuat produk..." />}
          {error && <ApiErrorBanner message={error} />}
          {!loading && !error && products.length === 0 && (
            <EmptyState
              title="Belum ada produk"
              description="Produk akan segera ditampilkan di sini."
            />
          )}
          {!loading && !error && products.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
