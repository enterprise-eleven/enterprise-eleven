import React from 'react'
import { Flex, Stack, Text } from '@chakra-ui/react'
import { DotDashes } from '../components/DotDashes'

const Contact = () => (
  <Stack
    pt="150px"
    direction="row"
    alignItems="flex-start"
    width="100%"
    paddingBottom="150px"
  >
    <Stack direction="column" flex="4" paddingRight="175px">
      <Text fontSize="75px">
        Let’s start a <span style={{ fontWeight: 'bold' }}>conversation.</span>
      </Text>
      <Text fontSize="50px" paddingTop="75px">
        Email me at{' '}
        <span style={{ fontWeight: 'bold' }}>shaun@enterpriseeleven.com</span>{' '}
        to tell me more about your organization’s next development project and
        I’ll be in touch!
      </Text>
    </Stack>
    <Flex flex="2" marginRight="-375px">
      <DotDashes />
    </Flex>
  </Stack>
)

export default Contact
