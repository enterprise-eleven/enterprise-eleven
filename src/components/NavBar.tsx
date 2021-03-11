import React from 'react'
import { Box, Stack, Link as ChakraLink, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavBar = () => {
  const router = useRouter()

  return (
    <Box d="flex" justifyContent="space-between" alignItems="center">
      <Link href="/">
        <Image src="/images/brand.svg" height={145} width={139} />
      </Link>
      <Stack direction="row" spacing={24} paddingRight="24px">
        <Link href="/about">
          <ChakraLink variant={router.pathname === '/about' ? 'active' : ''}>
            About
          </ChakraLink>
        </Link>
        <Link href="/work">
          <ChakraLink variant={router.pathname === '/work' ? 'active' : ''}>
            Work
          </ChakraLink>
        </Link>
        {/*<Link href="/blog">*/}
        {/*  <ChakraLink variant={router.pathname === '/blog' ? 'active' : ''}>*/}
        {/*    Blog*/}
        {/*  </ChakraLink>*/}
        {/*</Link>*/}
        <Link href="/contact">
          <ChakraLink variant={router.pathname === '/contact' ? 'active' : ''}>
            Contact
          </ChakraLink>
        </Link>
      </Stack>
    </Box>
  )
}
