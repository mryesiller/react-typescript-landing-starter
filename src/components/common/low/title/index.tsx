import React, { Fragment } from "react"

interface TitleProps {
  children: React.ReactNode
  className?: string | undefined
  elementType: JSX.IntrinsicElements | string
  [x: string]: any
}

const Title = ({ elementType, children, className, ...rest }: TitleProps) => {
  return (
    <Fragment>
      {elementType === "h1" && (
        <h1 data-testid="title" className={className} {...rest}>
          {children}
        </h1>
      )}
      {elementType === "h2" && (
        <h2 data-testid="title" className={className} {...rest}>
          {children}
        </h2>
      )}
      {elementType === "h3" && (
        <h3 data-testid="title" className={className} {...rest}>
          {children}
        </h3>
      )}
      {elementType === "h4" && (
        <h4 data-testid="title" className={className} {...rest}>
          {children}
        </h4>
      )}
      {elementType === "h5" && (
        <h5 data-testid="title" className={className} {...rest}>
          {children}
        </h5>
      )}
      {elementType === "h6" && (
        <h6 data-testid="title" className={className} {...rest}>
          {children}
        </h6>
      )}
    </Fragment>
  )
}

export default Title
