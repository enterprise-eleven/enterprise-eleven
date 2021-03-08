import React, { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { NavBar } from './NavBar'

export const Page: FC = ({ children }) => {
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      padding="75px 75px 0 75px"
      alignItems="stretch"
    >
      <NavBar />
      {children}
    </Flex>
  )
}
