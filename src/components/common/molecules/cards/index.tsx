import React from "react"

import Logo from "../../atoms/image"
import Title from "../../atoms/title"
import Text from "../../atoms/text"

interface BasicCardProps {
  children: React.ReactNode
  cardClassName?: string | undefined
}

export const BasicCard = ({ cardClassName, children }: BasicCardProps) => {
  return <article className={cardClassName}>{children}</article>
}

interface FeatureCardProps {
  cardClassName?: string | undefined
  logoClassName?: string | undefined
  logoSrc: string
  logoName: string
  titleClassName?: string | undefined
  titleElementType: JSX.IntrinsicElements | string
  titleChildren: React.ReactNode
  textClassName?: string | undefined
  textElementType: JSX.IntrinsicElements | string
  textChildren: React.ReactNode
}

export const FeatureCard = ({
  cardClassName,
  logoClassName,
  logoSrc,
  logoName,
  titleClassName,
  titleElementType,
  titleChildren,
  textClassName,
  textElementType,
  textChildren,
}: FeatureCardProps) => {
  return (
    <article className={cardClassName}>
      <Logo className={logoClassName} src={logoSrc} alt={logoName} />
      <Title className={titleClassName} elementType={titleElementType}>
        {titleChildren}
      </Title>
      <Text className={textClassName} elementType={textElementType}>
        {textChildren}
      </Text>
    </article>
  )
}
