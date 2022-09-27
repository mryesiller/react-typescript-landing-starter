import React from "react"

import Button from "../../common/atoms/button"
import Logo from "../../common/atoms/logo"
import Text from "../../common/atoms/text"
import Title from "../../common/atoms/title"

const Header = () => {
  return (
    <div>
      <Logo src="/images" alt="test" />
      <Button children="TEST" />
      <Text elementType="p">TEsdsdST</Text>
      <Text elementType="span">sdsdsd</Text>
      <Title elementType="h1">sdsdsd</Title>
      <Title elementType="h2">sdsdsd</Title>
      <Title elementType="h3">sdsdsd</Title>
      <Title elementType="h4">sdsdsd</Title>
    </div>
  )
}

export default Header
