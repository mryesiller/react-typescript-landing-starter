import React, { forwardRef } from "react"

type ButtonProps = JSX.IntrinsicElements["button"]

const Button: React.FC = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <button type="button" ref={ref} {...props}>
        {props.children}
      </button>
    )
  }
)

export default Button
