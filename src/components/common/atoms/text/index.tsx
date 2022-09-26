type TextType = JSX.IntrinsicElements["p"] & {
  element?: "p" | "span"
}

interface TextProps {
  children: React.ReactNode
}

const Text = (props: TextType, { children }: TextProps) => {
  if (props.element === "p") return <p {...props}>{children}</p>
  if (props.element === "span") return <span {...props}>{children}</span>
}

export default Text
