import { useState, type FormEvent } from 'react'
import { Button } from '../common/Button'
import { Input, Textarea } from '../common/Input'
import { useToast } from '../../hooks/useToast'

const CONTACT_INFO = [
  { label: 'Telepon', value: '+62 812-3456-7890', href: 'tel:+6281234567890' },
  { label: 'Email', value: 'info@konveksiabadi.com', href: 'mailto:info@konveksiabadi.com' },
  {
    label: 'Alamat',
    value: 'Jl. Industri Raya No. 45, Jakarta Selatan',
    href: undefined,
  },
] as const

export const ContactSection = () => {
  const { showToast } = useToast()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    form.reset()
    setSubmitted(true)
    showToast('Terima kasih! Pesan Anda telah terkirim.')
  }

  return (
    <section id="kontak" className="bg-gray-50 py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-800 shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h2 id="contact-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Siap Wujudkan Ide Pakaian Anda?
              </h2>
              <p className="mt-4 text-primary-100">
                Hubungi kami untuk konsultasi gratis. Tim kami siap membantu mewujudkan produk
                pakaian impian Anda.
              </p>
              <address className="mt-8 space-y-4 not-italic">
                {CONTACT_INFO.map((contact) => (
                  <div key={contact.label} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary-200">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="text-sm text-white hover:underline">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </address>
            </div>

            <div className="bg-white p-8 sm:p-12">
              <h3 className="text-xl font-semibold text-gray-900">Kirim Pesan</h3>
              {submitted ? (
                <p className="mt-6 text-sm text-green-600" role="status">
                  Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.
                </p>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                  <Input
                    label="Nama"
                    name="name"
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    autoComplete="name"
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    autoComplete="email"
                  />
                  <Textarea
                    label="Pesan"
                    name="message"
                    required
                    placeholder="Ceritakan kebutuhan konveksi Anda..."
                  />
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
