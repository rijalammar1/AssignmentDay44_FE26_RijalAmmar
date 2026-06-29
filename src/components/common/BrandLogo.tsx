import { Link } from 'react-router-dom'
import { APP_NAME } from '../../utils/constants'

interface BrandLogoProps {
  variant?: 'light' | 'dark'
  showSubtitle?: boolean
  subtitle?: string
  linkTo?: string
}

export const BrandLogo = ({
  variant = 'dark',
  showSubtitle = false,
  subtitle = 'Admin Dashboard',
  linkTo,
}: BrandLogoProps) => {
  const titleClass = variant === 'light' ? 'text-white' : 'text-gray-900'

  const content = (
    <div className="flex items-center gap-2">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white"
        aria-hidden="true"
      >
        KA
      </div>
      <div>
        <span className={`text-lg font-bold ${titleClass}`}>{APP_NAME}</span>
        {showSubtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
    </div>
  )

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-flex" aria-label={`${APP_NAME} - Beranda`}>
        {content}
      </Link>
    )
  }

  return content
}
