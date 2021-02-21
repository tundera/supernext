import type { FC } from 'react'

import { useColorModeValue, Heading, Flex, Box, Image, Link } from '@chakra-ui/react'

const NextCta: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('gray.800', 'white')
  const altHeadingColor = useColorModeValue('gray.500', 'white')
  const linkColor = useColorModeValue('gray.800', 'white')

  return (
    <Flex position="relative" bg={bg} align="center" zIndex="20">
      <Flex
        position="relative"
        w="100%"
        maxW={{
          base: '7xl',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
        px="6"
        py="8"
        direction="column"
        align="center"
        justify="space-between"
        mx="auto"
      >
        <Flex direction="column">
          <Heading
            as="h1"
            color={headingColor}
            w="full"
            textTransform="uppercase"
            textAlign="center"
            fontWeight="light"
            fontSize={{ base: '4xl', sm: '5xl' }}
          >
            The React Framework for Production
          </Heading>
          <Heading
            as="h2"
            color={altHeadingColor}
            textAlign="center"
            fontWeight="light"
            fontSize="xl"
            mx="auto"
            py="8"
            w="full"
            maxW="2xl"
          >
            Next.js gives you the best developer experience with all the features you need for production: hybrid static
            &amp; server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
          </Heading>
          <Flex align="center" justify="center" mt="4">
            <Link
              href="#"
              isExternal
              textTransform="uppercase"
              px="4"
              py="2"
              borderWidth="2px"
              borderColor="transparent"
              bg="gray.800"
              color="white"
              fontSize="md"
              mr="4"
              _hover={{ bg: 'gray.900' }}
            >
              Get started
            </Link>
            <Link
              href="#"
              isExternal
              textTransform="uppercase"
              px="4"
              py="2"
              bg="transparent"
              borderWidth="2px"
              borderColor="gray.800"
              color={linkColor}
              fontSize="md"
              _hover={{ bg: 'gray.800', color: 'white' }}
            >
              Documentation
            </Link>
          </Flex>
        </Flex>
        <Box position="relative" display="block" w="full" mx="auto" mt={{ base: '6', md: '0' }}>
          <Image maxW={{ base: 'xs', md: '2xl' }} m="auto" src="/static/images/tailwind/object/12.svg" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default NextCta
