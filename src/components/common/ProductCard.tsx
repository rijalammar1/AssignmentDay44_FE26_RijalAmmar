import { memo } from 'react'
import type { Product } from '../../types/product'
import { formatCurrency } from '../../utils/formatCurrency'

interface ProductCardProps {
  product: Product
}

export const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">
            {formatCurrency(product.price)}
          </span>
          <span className="text-xs text-gray-400">Stok: {product.stock}</span>
        </div>
      </div>
    </article>
  )
})
