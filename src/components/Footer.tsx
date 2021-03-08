import React from 'react'
import { Flex, Stack, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export const Footer = () => (
  <Flex
    as="footer"
    padding="60px 90px"
    backgroundColor="brand.coolGray"
    color="brand.deepNavy"
    justifyContent="space-between"
    alignItems="center"
  >
    <Stack direction="row" spacing={24} paddingRight="24px">
      <Link href="/about">
        <ChakraLink variant="footer">About</ChakraLink>
      </Link>
      <Link href="/work">
        <ChakraLink variant="footer">Work</ChakraLink>
      </Link>
      <Link href="/blog">
        <ChakraLink variant="footer">Blog</ChakraLink>
      </Link>
      <Link href="/contact">
        <ChakraLink variant="footer">Contact</ChakraLink>
      </Link>
    </Stack>
    <Text fontSize="24px">
      © Enterprise Eleven, 2021. Based in Overland Park, KS. Serving clients
      worldwide.
    </Text>
  </Flex>
)
