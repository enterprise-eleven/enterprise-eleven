import React from 'react'
import { Box, Divider, Stack, Text } from '@chakra-ui/react'

export const Proficiency = ({
  title,
  percent,
  flex,
}: {
  title: string
  percent: number
  flex: number
}) => (
  <Stack direction="column" alignItems="flex-start" flex={flex}>
    <Text fontSize="50px" color="brand.deepNavy">
      {title}
    </Text>
    <Divider orientation="horizontal" />
    <Box
      margin="0 !important"
      height="25px"
      width={`${percent}%`}
      backgroundColor="brand.kellyGreen"
    />
  </Stack>
)
