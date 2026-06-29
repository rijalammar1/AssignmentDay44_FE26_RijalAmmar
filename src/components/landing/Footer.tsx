import { Link } from 'react-router-dom'
import { BrandLogo } from '../common/BrandLogo'
import { NAV_LINKS } from '../../utils/constants'
import { APP_NAME } from '../../utils/constants'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <BrandLogo variant="light" />
            <p className="mt-4 text-sm leading-relaxed">
              Mitra konveksi terpercaya untuk produksi pakaian berkualitas tinggi dengan harga
              kompetitif.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/admin" className="text-sm transition-colors hover:text-white">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Jam Operasional
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Senin - Jumat: 08:00 - 17:00</li>
              <li>Sabtu: 08:00 - 14:00</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
