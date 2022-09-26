import React from "react"

type TitleMainProps = JSX.IntrinsicElements["h1"] & {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

interface TitleProps {
  children: React.ReactNode
  className: string | undefined
  element: string
}

const Title = (props: TitleMainProps, { children }: TitleProps) => {
  if (props.element === "h1") return <h1 {...props}>{children}</h1>
  if (props.element === "h2") return <h2 {...props}>{children}</h2>
  if (props.element === "h3") return <h3 {...props}>{children}</h3>
  if (props.element === "h4") return <h4 {...props}>{children}</h4>
  if (props.element === "h5") return <h5 {...props}>{children}</h5>
  if (props.element === "h6") return <h6 {...props}>{children}</h6>
}

export default Title
