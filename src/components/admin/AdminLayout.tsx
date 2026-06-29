import { Link, Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from '../common/ToastContainer'
import { BrandLogo } from '../common/BrandLogo'

const adminLinks = [
  { label: 'Semua Produk', path: '/admin' },
  { label: 'Tambah Produk', path: '/admin/products/new' },
]

export const AdminLayout = () => {
  const location = useLocation()

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100">
        <header className="border-b border-gray-200 bg-white shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <BrandLogo showSubtitle subtitle="Admin Dashboard" />
            <Link
              to="/"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              &larr; Kembali ke Website
            </Link>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <nav className="mb-8 flex gap-2 overflow-x-auto" aria-label="Navigasi admin">
            {adminLinks.map((link) => {
              const isActive =
                link.path === '/admin'
                  ? location.pathname === '/admin'
                  : location.pathname.startsWith(link.path)

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}
