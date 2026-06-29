import { Button } from '../common/Button'

export const HeroSection = () => {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:px-8 lg:py-32">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-medium text-accent-400">
            Konveksi Terpercaya Sejak 2010
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Wujudkan Brand Pakaian{' '}
            <span className="text-accent-400">Impian Anda</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-100">
            Konveksi Abadi menyediakan jasa produksi pakaian berkualitas tinggi dengan harga
            kompetitif. Dari kaos, kemeja, hingga seragam perusahaan — kami siap mewujudkannya.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#produk">
              <Button variant="secondary" size="lg">
                Lihat Produk
              </Button>
            </a>
            <a href="#kontak">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Konsultasi Gratis
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
            {[
              { value: '500+', label: 'Klien Puas' },
              { value: '15+', label: 'Tahun Pengalaman' },
              { value: '50K+', label: 'Produk Terjual' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-primary-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop"
              alt="Konveksi pakaian berkualitas"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg sm:-left-8">
            <p className="text-2xl font-bold text-primary-600">98%</p>
            <p className="text-xs text-gray-500">Kepuasan Pelanggan</p>
          </div>
        </div>
      </div>
    </section>
  )
}
