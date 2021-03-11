import React from 'react'
import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { DotDashes } from '../components/DotDashes'
import Link from 'next/link'

const Work = () => (
  <Stack pt="150px" direction="column" alignItems="flex-start">
    <Text fontSize="75px" paddingBottom="125px">
      <span style={{ fontWeight: 'bold' }}>
        Our clients range from small businesses and start-ups to Fortune 500
        companies.
      </span>{' '}
      Hire us as your development expert, or add us to your existing team for
      help on large comprehensive projects.
    </Text>
    <Text fontSize="80px" variant="bright">
      Risk Proof, PwC
    </Text>
    <Stack direction="row" paddingTop="75px">
      <Stack direction="column" flex="1">
        <Image
          src="/images/pwc.png"
          alt="PwC Risk Proof"
          width={812}
          height={310}
        />
        <Stack direction="row" paddingTop="125px">
          <Flex flex="3" marginTop="-225px" marginLeft="-175px">
            <DotDashes />
          </Flex>
          <Flex flex="1">
            <Link href="https://www.youtube.com/watch?v=wwzC5LH8eyE">
              <Button variant="bright">Watch Video</Button>
            </Link>
          </Flex>
        </Stack>
      </Stack>
      <Stack direction="column" flex="1" paddingLeft="75px">
        <Text fontSize="50px">
          PwC’s Risk Proof is a risk assessment application for banks and other
          financial institutions. As a senior developer on a team of 13 other
          remote developers, the majority of my work on this project was
          creating reusable components and styles so that the rest of the team
          could confidently develop the client side while following PwC design
          standards.
        </Text>
        <Text fontSize="50px" paddingTop="100px">
          <span style={{ fontWeight: 'bold' }}>Stack:</span> React, Node,
          GraphQL, ArangoDB
        </Text>
      </Stack>
    </Stack>
    <Text fontSize="80px" variant="bright" paddingTop="150px">
      Internal Sales Product, SelectQuote
    </Text>
    <Stack direction="row" paddingTop="75px">
      <Stack direction="column" flex="1" paddingRight="75px">
        <Text fontSize="50px">
          The project at SelectQuote was an internal tool for the sales team to
          track the status of leads. It required hooking up to many third party
          APIs and needed to present the user with a lot of useful information
          at the right times. I played a variety of roles on this project, and
          eventually was named Team Lead on the team of 10-15.
        </Text>
        <Text fontSize="50px" paddingTop="100px">
          <span style={{ fontWeight: 'bold' }}>Stack:</span> Node, React,
          MariaDB
        </Text>
      </Stack>
      <Stack direction="column" flex="1" alignItems="flex-end">
        <Image
          src="/images/sq.png"
          alt="Generic Computer"
          width={821}
          height={616}
        />
        <Flex flex="3" marginTop="-400px !important" marginRight="-275px">
          <DotDashes />
        </Flex>
      </Stack>
    </Stack>
    <Text fontSize="80px" variant="bright" paddingTop="150px">
      Senior Developer, RFP360
    </Text>
    <Stack direction="row" paddingTop="75px" paddingBottom="150px">
      <Stack direction="column" flex="1">
        <Image src="/images/rfp.jpg" alt="RFP tool" width={812} height={475} />
      </Stack>
      <Stack direction="column" flex="1" paddingLeft="75px">
        <Text fontSize="50px">
          RFP360 is a cloud-based software service, created to streamline the
          RFP process for users. As only the third developer to join the
          company, I transformed the client side from Java and jQuery into
          React. My contributions allowed the platform to massively scale up as
          the company grew.
        </Text>
        <Text fontSize="50px" paddingTop="100px">
          <span style={{ fontWeight: 'bold' }}>Stack:</span> Java, jQuery, React
        </Text>
      </Stack>
    </Stack>
  </Stack>
)

export default Work
