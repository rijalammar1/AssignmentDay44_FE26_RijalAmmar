import type { ChangeEvent, FormEvent } from 'react'
import type { ProductFormData } from '../../types/product'
import { PRODUCT_CATEGORIES } from '../../utils/constants'
import { Input, Select, Textarea } from '../common/Input'
import { Button } from '../common/Button'

interface ProductFormProps {
  formData: ProductFormData
  errors: Partial<Record<keyof ProductFormData, string>>
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  onSubmit: (e: FormEvent) => void
  submitting: boolean
  submitLabel: string
}

export const ProductForm = ({
  formData,
  errors,
  onChange,
  onSubmit,
  submitting,
  submitLabel,
}: ProductFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Nama Produk"
          name="name"
          value={formData.name}
          onChange={onChange}
          error={errors.name}
          placeholder="Contoh: Kaos Polo Premium"
        />
        <Select
          label="Kategori"
          name="category"
          value={formData.category}
          onChange={onChange}
          error={errors.category}
          options={PRODUCT_CATEGORIES}
          placeholder="Pilih kategori"
        />
        <Input
          label="Harga (Rp)"
          name="price"
          type="number"
          min={0}
          value={Number.isFinite(formData.price) ? formData.price : ''}
          onChange={onChange}
          error={errors.price}
          placeholder="85000"
        />
        <Input
          label="Stok"
          name="stock"
          type="number"
          min={0}
          value={Number.isFinite(formData.stock) ? formData.stock : ''}
          onChange={onChange}
          error={errors.stock}
          placeholder="100"
        />
      </div>

      <Input
        label="URL Gambar"
        name="image"
        type="url"
        value={formData.image}
        onChange={onChange}
        error={errors.image}
        placeholder="https://example.com/image.jpg"
      />

      {formData.image && (
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <img
            src={formData.image}
            alt={`Preview ${formData.name || 'produk'}`}
            className="h-48 w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      )}

      <Textarea
        label="Deskripsi"
        name="description"
        value={formData.description}
        onChange={onChange}
        error={errors.description}
        placeholder="Deskripsi produk..."
      />

      <div className="flex justify-end">
        <Button type="submit" loading={submitting}>
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
