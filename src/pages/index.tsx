import { Stack, Text, Heading } from '@chakra-ui/core'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'

const Index = () => (
  <Container height="100vh">
    <NavBar />
    <Hero text="We can take your team to the next level." />
    <Stack
      spacing="10rem"
      width="75%"
      pt="8rem"
      px="1rem"
      direction="row"
      justifyContent="center"
    >
      <Stack width="22rem" alignItems="center">
        <Heading size="xl">Contracting</Heading>
        <Text alignItems="center">
          We can help you with short term needs by supplementing your team. We
          have experience in React, Node, and many SQL and NoSQL databases.
        </Text>
      </Stack>
      <Stack width="22rem" alignItems="center">
        <Heading>Mentoring</Heading>
        <Text>
          Need help bringing your team up to speed? We've got you - we can level
          up your team in a technology or stack.
        </Text>
      </Stack>
      <Stack width="22rem" alignItems="center">
        <Heading>MVP / POC</Heading>
        <Text>
          Need to get an idea out quickly? Running short on web developer
          bandwidth for that new project? Bring us on to get that ball rolling.
        </Text>
      </Stack>
    </Stack>
  </Container>
)

export default Index
