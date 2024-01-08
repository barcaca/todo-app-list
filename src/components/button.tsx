import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

// Propriedades do componente Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

// Componente de botão reutilizável
export default function Button({
  children,
  className,
  large = false,
  icon: Icon,
  ...props
}: ButtonProps & {
  compact?: boolean
  large?: boolean
  icon?: React.ComponentType<{ className?: string }>
}) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'flex items-center justify-center text-[0.8125rem]/6 font-medium transition-colors',
      )}
    >
      {' '}
      <span>
        {/* Ícone (se fornecido) */}
        {Icon && <Icon className={clsx('', large ? 'h-6 w-6' : 'h-4 w-4')} />}
        {/* Conteúdo do botão */}
        <span>{children}</span>
      </span>
    </button>
  )
}
