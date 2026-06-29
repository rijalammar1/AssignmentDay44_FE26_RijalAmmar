import type { ReactNode } from 'react'
import { WHY_CHOOSE_US } from '../../utils/constants'

const icons: Record<string, ReactNode> = {
  sparkles: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  scissors: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-5.657 1.172 3 3 0 005.657-1.172zm0-5.758a3 3 0 10-5.657-1.172 3 3 0 005.657 1.172z" />
    </svg>
  ),
  tag: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  truck: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h4m-4 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0M3 16h10m10 0h2a1 1 0 001-1v-3.28a1 1 0 00-.684-.948l-1.684-.421A1 1 0 0018 10h-2M3 16v2a1 1 0 001 1h1m12-3v2a1 1 0 01-1 1h-1" />
    </svg>
  ),
}

export const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20" aria-labelledby="why-choose-us-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Keunggulan
          </span>
          <h2 id="why-choose-us-heading" className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Mengapa Memilih Kami?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Komitmen kami adalah memberikan produk terbaik dengan layanan yang memuaskan.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition-all hover:border-primary-200 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                {icons[item.icon]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
