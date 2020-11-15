import { Box, Stack, Link as ChakraLink } from '@chakra-ui/core'
import Link from 'next/link'
import { DarkModeSwitch } from './DarkModeSwitch'

export const NavBar = () => (
  <Box w="100%" p={4} d="flex" justifyContent="space-between">
    <Link href="/">
      <ChakraLink>Enterprise Eleven</ChakraLink>
    </Link>
    <Stack direction="row" spacing={4}>
      <Link href="/about">
        <ChakraLink>About Us</ChakraLink>
      </Link>
      <Link href="/contact">
        <ChakraLink>Contact Us</ChakraLink>
      </Link>
      <DarkModeSwitch />
    </Stack>
  </Box>
)
