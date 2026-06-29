import { Link, type LinkProps } from 'react-router-dom'
import { getButtonClasses, type ButtonSize, type ButtonVariant } from '../../utils/buttonStyles'
import type { ReactNode } from 'react'

interface ButtonLinkProps extends Omit<LinkProps, 'className'> {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

export const ButtonLink = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link className={getButtonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  )
}
