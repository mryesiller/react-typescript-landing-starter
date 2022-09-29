import React from "react"

import Button from "../../common/atoms/button"
import Image from "../../common/atoms/image"
import Text from "../../common/atoms/text"
import Title from "../../common/atoms/title"

const Header = () => {
  return (
    <header>
      <Image src="/images" alt="test" />
      <Button children="TEST" />
      <Text elementType="p">TEsdsdST</Text>
      <Text elementType="span">sdsdsd</Text>
      <Title elementType="h1">sdsdsd</Title>
      <Title elementType="h2">sdsdsd</Title>
      <Title elementType="h3">sdsdsd</Title>
      <Title elementType="h4">sdsdsd</Title>
    </header>
  )
}

export default Header
