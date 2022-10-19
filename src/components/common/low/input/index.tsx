import { forwardRef } from "react"

interface InputProps {
  type: string
  placeholder?: string
  name: string
  value?: string
  className?: string | undefined
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, name, value, className, onChange, ...rest }, ref) => {
    return (
      <input
        data-testid="input"
        type={type}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
        ref={ref}
        {...rest}
      />
    )
  }
)

export default Input
