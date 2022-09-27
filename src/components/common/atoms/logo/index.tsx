import React from "react"

interface LogoProps {
  src: string
  alt: string
  className?: string | undefined
  [x: string | number]: any
}

const Logo = ({ src, alt, className, ...rest }: LogoProps) => {
  return <img data-testid="logo" src={src} alt={alt} {...rest} />
}

export default Logo
