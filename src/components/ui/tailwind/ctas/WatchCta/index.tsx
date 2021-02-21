import type { FC } from 'react'

import { useColorModeValue, chakra, Heading, Flex, Box, Image, Text, Link } from '@chakra-ui/react'

const WatchCta: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.700', 'white')
  const linkColor = useColorModeValue('pink.500', 'white')

  return (
    <Flex bg={bg} position="relative" alignItems="center" overflow="hidden" zIndex="20">
      <Flex
        position="relative"
        px="6"
        py="16"
        mx="auto"
        w="100%"
        maxW={{
          base: '7xl',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
      >
        <Flex position="relative" direction="column" w={{ sm: '66.666667%', lg: '40%' }} zIndex="20">
          <chakra.span w="20" h="2" mb="12" bg={headingColor}></chakra.span>
          <Heading
            as="h1"
            display="flex"
            flexDirection="column"
            color={headingColor}
            lineHeight="none"
            textTransform="uppercase"
            fontSize={{ base: '6xl', sm: '8xl' }}
            fontWeight="black"
          >
            Be on
            <chakra.span fontSize={{ base: '5xl', sm: '7xl' }}>Time</chakra.span>
          </Heading>
          <Text color={textColor} fontSize={{ base: 'sm', sm: 'md' }}>
            Dimension of reality that makes change possible and understandable. An indefinite and homogeneous
            environment in which natural events and human existence take place.
          </Text>
          <Flex mt="8">
            <Link
              href="#"
              isExternal
              textTransform="uppercase"
              px="4"
              py="2"
              rounded="lg"
              bg="pink.500"
              color="white"
              borderWidth="2px"
              borderColor="transparent"
              fontSize="md"
              mr="4"
              _hover={{ bg: 'pink.400' }}
            >
              Get started
            </Link>
            <Link
              href="#"
              isExternal
              color={linkColor}
              bg="transparent"
              textTransform="uppercase"
              rounded="lg"
              px="4"
              py="2"
              borderWidth="2px"
              borderColor="pink.500"
              _hover={{ bg: 'pink.500', color: 'white' }}
              fontSize="md"
            >
              Read more
            </Link>
          </Flex>
        </Flex>
        <Box position="relative" display={{ base: 'none', sm: 'block' }} w={{ sm: '33.333333%', lg: '60%' }}>
          <Image src="/static/images/tailwind/object/10.png" maxW={{ base: 'xs', md: 'sm' }} m="auto" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default WatchCta
