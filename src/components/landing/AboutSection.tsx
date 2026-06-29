export const AboutSection = () => {
  return (
    <section id="tentang" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=500&fit=crop"
                alt="Proses produksi konveksi"
                className="rounded-2xl object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=500&fit=crop"
                alt="Hasil jahitan berkualitas"
                className="mt-8 rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-xl bg-primary-600 p-5 text-white shadow-lg sm:right-6">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm text-primary-100">Tahun Berpengalaman</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Tentang Kami
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Mitra Konveksi Terpercaya untuk Bisnis Anda
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Konveksi Abadi adalah perusahaan konveksi yang berlokasi di Jakarta, telah
              melayani ratusan klien dari berbagai industri sejak 2010. Kami mengkhususkan diri
              dalam produksi pakaian custom dengan standar kualitas tinggi.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Dengan tim desainer dan penjahit berpengalaman, kami mampu menangani pesanan dalam
              skala kecil maupun besar — dari UMKM hingga perusahaan multinasional.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Produksi custom sesuai desain Anda',
                'Bahan berkualitas dengan harga bersaing',
                'Garansi kualitas jahitan dan bahan',
                'Layanan konsultasi desain gratis',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
