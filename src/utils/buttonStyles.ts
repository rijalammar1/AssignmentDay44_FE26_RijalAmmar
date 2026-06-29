export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400',
}

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export const getButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className = '',
): string =>
  `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${buttonVariantClasses[variant]} ${buttonSizeClasses[size]} ${className}`
