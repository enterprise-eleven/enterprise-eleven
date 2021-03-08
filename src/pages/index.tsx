import React from 'react'
import { Stack, Flex, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Proficiency } from '../components/Proficiency'

const Index = () => (
  <Stack pt="150px" direction="column" alignItems="flex-start">
    <Text fontSize="80px" paddingBottom="150px">
      <span style={{ fontWeight: 'bold' }}>Expertly coding</span> your{' '}
      <span style={{ fontWeight: 'bold' }}>development projects</span>.
      Providing your team with{' '}
      <span style={{ fontWeight: 'bold' }}>unmatched communication</span> and{' '}
      <span style={{ fontWeight: 'bold' }}>project management</span>.
    </Text>
    <Image src="/images/stock.jpg" width={1760} height={978} />
    <Stack
      direction="row"
      alignItems="flex-end"
      justifyContent="space-between"
      paddingTop="75px"
      marginTop="-175px !important"
    >
      <Text fontSize="50px" flex="5" paddingTop="175px">
        We provide software development on a range of projects, for companies
        big and small. Experienced across a variety of platforms and coding
        languages, we are the perfect addition to your existing team, or can
        provide solo work for organizations without in-house developers.
      </Text>
      <Flex flex="2" />
      <Flex flex="2" marginRight="-75px" paddingBottom="75px">
        <Image src="/images/dotDashes.svg" width={409} height={644} />
      </Flex>
    </Stack>
    <Flex padding="75px 0 175px 0">
      <Link href="/about">
        <Button variant="bright">About</Button>
      </Link>
    </Flex>
    <Stack
      backgroundColor="brand.coolGray"
      width="100%"
      direction="column"
      alignItems="center"
      padding="90px 135px"
    >
      <Text
        fontSize="65px"
        paddingBottom="85px"
        fontWeight="700"
        color="brand.kellyGreen"
      >
        Technical Proficiencies
      </Text>
      <Stack direction="row" paddingBottom="61px" width="100%">
        <Proficiency title="JavaScript" percent={85} flex={4} />
        <Flex flex="1" />
        <Proficiency title="React" percent={85} flex={4} />
      </Stack>
      <Stack direction="row" paddingBottom="61px" width="100%">
        <Proficiency title="Node" percent={75} flex={4} />
        <Flex flex="1" />
        <Proficiency title="Java" percent={75} flex={4} />
      </Stack>
      <Stack direction="row" paddingBottom="61px" width="100%">
        <Proficiency title="REST" percent={85} flex={4} />
        <Flex flex="1" />
        <Proficiency title="GraphQL" percent={55} flex={4} />
      </Stack>
      <Stack direction="row" paddingBottom="61px" width="100%">
        <Proficiency title="MongoDB" percent={75} flex={4} />
        <Flex flex="1" />
        <Proficiency title="SQL" percent={65} flex={4} />
      </Stack>
      <Stack direction="row" paddingBottom="61px" width="100%">
        <Proficiency title="DigitalOcean" percent={55} flex={4} />
        <Flex flex="1" />
        <Proficiency title="AWS" percent={45} flex={4} />
      </Stack>
    </Stack>
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent="space-between"
      paddingTop="275px"
      width="100%"
    >
      <Flex flex="2" marginLeft="-75px" paddingBottom="75px">
        <Image src="/images/dotDashes.svg" width={409} height={644} />
      </Flex>
      <Flex flex="1" />
      <Stack flex="5" paddingTop="75px" direction="column">
        <Text
          fontSize="80px"
          color="brand.brightSage"
          paddingBottom="61px"
          fontWeight="700"
        >
          Services
        </Text>
        <Stack direction="row" paddingBottom="61px" width="100%">
          <Text fontSize="35px" flex={1}>
            Custom Software Development
          </Text>
          <Text fontSize="35px" flex={1}>
            Team Augmentation
          </Text>
        </Stack>
        <Stack direction="row" paddingBottom="61px" width="100%">
          <Text fontSize="35px" flex={1}>
            Project Documentation
          </Text>
          <Text fontSize="35px" flex={1}>
            Mentoring
          </Text>
        </Stack>
        <Stack direction="row" paddingBottom="61px" width="100%">
          <Text fontSize="35px" flex={1}>
            MVP / PoC Creation
          </Text>
          <Text fontSize="35px" flex={1}>
            Short or Long Term Contracting
          </Text>
        </Stack>
        <Flex padding="125px 0 175px 0">
          <Link href="/work">
            <Button variant="bright">Our Work</Button>
          </Link>
        </Flex>
      </Stack>
    </Stack>
  </Stack>
)

export default Index
