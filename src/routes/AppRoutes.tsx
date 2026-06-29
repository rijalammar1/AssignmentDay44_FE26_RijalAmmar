import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { AdminLayout } from '../components/admin/AdminLayout'
import { LoadingSpinner } from '../components/common/LoadingSpinner'

const AdminDashboard = lazy(() =>
  import('../pages/AdminDashboard').then((m) => ({ default: m.AdminDashboard })),
)
const AdminCreateProduct = lazy(() =>
  import('../pages/AdminCreateProduct').then((m) => ({ default: m.AdminCreateProduct })),
)
const AdminEditProduct = lazy(() =>
  import('../pages/AdminEditProduct').then((m) => ({ default: m.AdminEditProduct })),
)

const AdminFallback = () => <LoadingSpinner message="Memuat halaman admin..." />

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<AdminFallback />}>
                <AdminDashboard />
              </Suspense>
            }
          />
          <Route
            path="products/new"
            element={
              <Suspense fallback={<AdminFallback />}>
                <AdminCreateProduct />
              </Suspense>
            }
          />
          <Route
            path="products/:id/edit"
            element={
              <Suspense fallback={<AdminFallback />}>
                <AdminEditProduct />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
