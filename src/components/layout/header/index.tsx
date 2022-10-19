import React from "react"

import Button from "../../common/low/button"
import Image from "../../common/low/image"
import Text from "../../common/low/text"
import Title from "../../common/low/title"

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
