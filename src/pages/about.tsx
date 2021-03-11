import React from 'react'
import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { DotDashes } from '../components/DotDashes'
import Link from 'next/link'

const About = () => (
  <Stack pt="150px" direction="column" alignItems="flex-start">
    <Text fontSize="75px" paddingBottom="150px">
      I'm Shaun McNamee and I run{' '}
      <span style={{ fontWeight: 'bold' }}>Enterprise Eleven</span>.
    </Text>
    <Stack direction="row">
      <Flex flex="1" marginLeft="-225px" marginRight="-225px" paddingTop="75px">
        <DotDashes />
      </Flex>
      <Flex flex="1" marginLeft="-275px">
        <Image
          borderRadius="full"
          boxSize="490px"
          src="/images/me.jpg"
          alt="Picture of me"
        />
      </Flex>
      <Stack direction="column" flex="2" paddingLeft="125px">
        <Text fontSize="50px">
          I am a Web Developer living in Kansas with my wife and two children.
          With over 14 years of experience, I specialize in solving interesting
          problems—both in and out of the tech world. I enjoy programming, video
          and board games, poker, baseball and being an awesome dad.
        </Text>
        <Flex padding="175px 0 175px 0">
          <Link href="/work">
            <Button variant="bright">Our Work</Button>
          </Link>
        </Flex>
      </Stack>
    </Stack>
  </Stack>
)

export default About
