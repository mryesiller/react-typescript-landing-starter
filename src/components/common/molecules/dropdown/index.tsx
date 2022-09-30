import React, { forwardRef } from "react"

interface DropdownProps {
  options: { value: string; label: string }[]
  value: string
  placeHolder: string
  className?: string | undefined
  name: string
  [x: string]: any
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options, value, placeHolder, className, name, ...rest }, ref) => {
    return (
      <select
        aria-label={name}
        value={value}
        className={className}
        ref={ref}
        {...rest}
      >
        <option value="">{placeHolder}</option>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  }
)

export default Dropdown
