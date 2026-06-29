import { useState } from 'react'
import { ProductTable } from '../components/admin/ProductTable'
import { ConfirmModal } from '../components/common/Modal'
import { LoadingSpinner } from '../components/common/LoadingSpinner'
import { EmptyState } from '../components/common/EmptyState'
import { ApiErrorBanner } from '../components/common/ApiErrorBanner'
import { ButtonLink } from '../components/common/ButtonLink'
import { useProducts } from '../hooks/useProducts'
import { useProductMutation } from '../hooks/useProductMutation'
import { useToast } from '../hooks/useToast'
import type { Product } from '../types/product'

export const AdminDashboard = () => {
  const { products, loading, error, refetch } = useProducts()
  const { showToast } = useToast()
  const { deleteProduct, submitting } = useProductMutation(
    showToast,
    (msg) => showToast(msg, 'error'),
  )
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null)

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return
    try {
      await deleteProduct(deleteTarget.id)
      setDeleteTarget(null)
      refetch()
    } catch {
      // Error handled by useProductMutation
    }
  }

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Produk</h1>
          <p className="mt-1 text-sm text-gray-500">{products.length} produk terdaftar</p>
        </div>
        <ButtonLink to="/admin/products/new">+ Tambah Produk</ButtonLink>
      </div>

      {loading && <LoadingSpinner message="Memuat daftar produk..." />}
      {error && <ApiErrorBanner message={error} />}
      {!loading && !error && products.length === 0 && (
        <EmptyState
          title="Belum ada produk"
          description="Mulai dengan menambahkan produk pertama Anda."
          action={<ButtonLink to="/admin/products/new">Tambah Produk</ButtonLink>}
        />
      )}
      {!loading && !error && products.length > 0 && (
        <ProductTable products={products} onDelete={setDeleteTarget} />
      )}

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDeleteConfirm}
        title="Hapus Produk"
        message={`Apakah Anda yakin ingin menghapus "${deleteTarget?.name}"? Tindakan ini tidak dapat dibatalkan.`}
        loading={submitting}
      />
    </>
  )
}
