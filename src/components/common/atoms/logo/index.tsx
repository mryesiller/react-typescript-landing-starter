import React from "react"

type LogoProps = JSX.IntrinsicElements["img"]

const Logo: React.FC = (props: LogoProps) => {
  return <img src={props.src} alt={props.alt} {...props} />
}

export default Logo
