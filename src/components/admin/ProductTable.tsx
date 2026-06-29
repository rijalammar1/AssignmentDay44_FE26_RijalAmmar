import { ButtonLink } from '../common/ButtonLink'
import type { Product } from '../../types/product'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../common/Button'

interface ProductTableProps {
  products: Product[]
  onDelete: (product: Product) => void
}

export const ProductTable = ({ products, onDelete }: ProductTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">Daftar produk konveksi</caption>
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-700">
                Produk
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-700">
                Kategori
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-700">
                Harga
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-700">
                Stok
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-700">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt=""
                      aria-hidden="true"
                      className="h-10 w-10 rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="line-clamp-1 max-w-xs text-xs text-gray-500">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                    {product.category}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {formatCurrency(product.price)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`font-medium ${
                      product.stock === 0
                        ? 'text-red-600'
                        : product.stock < 20
                          ? 'text-amber-600'
                          : 'text-green-600'
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <ButtonLink
                      to={`/admin/products/${product.id}/edit`}
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </ButtonLink>
                    <Button variant="danger" size="sm" onClick={() => onDelete(product)}>
                      Hapus
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
