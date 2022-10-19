import React, { Fragment } from "react"

interface TextProps {
  children: React.ReactNode
  className?: string | undefined
  elementType: JSX.IntrinsicElements | string
  [x: string | number]: any
}

const Text = ({ children, className, elementType, ...rest }: TextProps) => {
  return (
    <Fragment>
      {elementType === "p" && (
        <p data-testid="text" className={className} {...rest}>
          {children}
        </p>
      )}
      {elementType === "span" && (
        <span data-testid="text" className={className} {...rest}>
          {children}
        </span>
      )}
    </Fragment>
  )
}

export default Text
