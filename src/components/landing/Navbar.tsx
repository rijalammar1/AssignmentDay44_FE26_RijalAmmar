import { useState } from 'react'
import { BrandLogo } from '../common/BrandLogo'
import { ButtonLink } from '../common/ButtonLink'
import { getButtonClasses } from '../../utils/buttonStyles'
import { NAV_LINKS } from '../../utils/constants'

const MOBILE_MENU_ID = 'mobile-nav-menu'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/95 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <BrandLogo linkTo="/" />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink to="/admin" variant="outline" size="sm">
            Admin
          </ButtonLink>
          <a href="#kontak" className={getButtonClasses('primary', 'sm')}>
            Hubungi Kami
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          aria-controls={MOBILE_MENU_ID}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id={MOBILE_MENU_ID}
          className="border-t border-gray-100 bg-white px-4 py-4 md:hidden"
        >
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <ButtonLink
              to="/admin"
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </ButtonLink>
            <a
              href="#kontak"
              className={getButtonClasses('primary', 'sm', 'w-full')}
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
