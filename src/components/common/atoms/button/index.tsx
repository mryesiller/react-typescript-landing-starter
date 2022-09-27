import React, { forwardRef } from "react"

interface ButtonProps {
  children: React.ReactNode
  className?: string | undefined
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  [x: string]: any
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, onClick, ...rest }, ref) => {
    return (
      <button
        data-testid="button"
        type="button"
        ref={ref}
        className={className}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

export default Button
