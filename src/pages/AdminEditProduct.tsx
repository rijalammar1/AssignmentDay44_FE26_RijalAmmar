import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductForm } from '../components/admin/ProductForm'
import { LoadingSpinner } from '../components/common/LoadingSpinner'
import { useProduct } from '../hooks/useProduct'
import { useProductForm, type FormEvent } from '../hooks/useProductForm'
import { useProductMutation } from '../hooks/useProductMutation'
import { useToast } from '../hooks/useToast'

export const AdminEditProduct = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const { product, loading, error } = useProduct(id)
  const { formData, errors, handleChange, validate } = useProductForm(product)
  const { updateProduct, submitting } = useProductMutation(
    (msg) => {
      showToast(msg)
      setTimeout(() => navigate('/admin'), 300)
    },
    (msg) => showToast(msg, 'error'),
  )

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate() || !id) return

    try {
      await updateProduct(id, formData)
    } catch {
      // Error handled by useProductMutation
    }
  }

  if (loading) return <LoadingSpinner message="Memuat data produk..." />
  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600" role="alert">
        {error}
      </div>
    )
  }
  if (!product) {
    return (
      <div className="rounded-lg bg-amber-50 p-6 text-center">
        <p className="text-sm text-amber-800">Produk tidak ditemukan.</p>
        <Link to="/admin" className="mt-3 inline-block text-sm font-medium text-primary-600">
          Kembali ke daftar produk
        </Link>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-2xl font-bold text-gray-900">Edit Produk</h1>
      <p className="mt-1 text-sm text-gray-500">Perbarui informasi produk di bawah.</p>
      <div className="mt-8">
        <ProductForm
          formData={formData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          submitLabel="Perbarui Produk"
        />
      </div>
    </div>
  )
}
