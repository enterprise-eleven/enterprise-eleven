import { Flex, Heading, useColorMode } from '@chakra-ui/core'

export const Hero = ({ text }: { text: string }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="25rem"
      bgColor={isDark ? 'green.300' : 'green.500'}
      width="100vw"
    >
      <Heading color={isDark ? 'black' : 'white'} fontSize="4vw">
        {text}
      </Heading>
    </Flex>
  )
}

Hero.defaultProps = {
  text: 'Enterprise Eleven',
}
