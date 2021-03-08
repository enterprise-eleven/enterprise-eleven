import React, { FC } from 'react'
import { Flex, Center } from '@chakra-ui/react'

export const Container: FC = ({ children }) => {
  return (
    <Flex display="flex" flexDirection="column" alignItems="center">
      <Center maxWidth="1920px">{children}</Center>
    </Flex>
  )
}
