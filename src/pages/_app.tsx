import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from '../theme'
import { Container } from '../components/Container'
import { Page } from '../components/Page'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
