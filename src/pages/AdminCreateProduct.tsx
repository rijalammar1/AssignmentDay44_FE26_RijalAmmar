import { useNavigate } from 'react-router-dom'
import { ProductForm } from '../components/admin/ProductForm'
import { useProductForm, type FormEvent } from '../hooks/useProductForm'
import { useProductMutation } from '../hooks/useProductMutation'
import { useToast } from '../hooks/useToast'

export const AdminCreateProduct = () => {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const { formData, errors, handleChange, validate } = useProductForm()
  const { createProduct, submitting } = useProductMutation(
    (msg) => {
      showToast(msg)
      setTimeout(() => navigate('/admin'), 300)
    },
    (msg) => showToast(msg, 'error'),
  )

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      await createProduct(formData)
    } catch {
      // Error handled by useProductMutation
    }
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-2xl font-bold text-gray-900">Tambah Produk Baru</h1>
      <p className="mt-1 text-sm text-gray-500">Isi formulir di bawah untuk menambahkan produk.</p>
      <div className="mt-8">
        <ProductForm
          formData={formData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          submitLabel="Simpan Produk"
        />
      </div>
    </div>
  )
}
