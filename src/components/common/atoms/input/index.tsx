import { forwardRef } from "react"

type InputProps = JSX.IntrinsicElements["input"]

const Input: React.FC = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <input ref={ref} {...props} />
  }
)

export default Input
