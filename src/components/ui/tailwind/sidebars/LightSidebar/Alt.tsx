/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, chakra, Heading, Text, Link, Box, Flex } from '@chakra-ui/react'

const LightSidebar: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const linkColor = useColorModeValue('gray.600', 'gray.400')
  const hoverColor = useColorModeValue('gray.800', 'white')
  const hoverBg = useColorModeValue('gray.100', 'gray.600')

  return (
    <Box position="relative" bg={bg}>
      <Flex direction={{ base: 'column', sm: 'row' }} justify={{ sm: 'space-around' }}>
        <Box w="72" h="100vh">
          <chakra.nav mt="10" px="6">
            <Link
              my="6"
              p="2"
              display="flex"
              alignItems="center"
              color={linkColor}
              rounded="lg"
              _hover={{ color: hoverColor, bg: hoverBg }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
            >
              <chakra.span mx="4" fontSize="lg" fontWeight="normal">
                Element
              </chakra.span>
              <chakra.span flexGrow={1} textAlign="right"></chakra.span>
            </Link>
            <Link
              my="6"
              p="2"
              display="flex"
              alignItems="center"
              color={linkColor}
              rounded="lg"
              _hover={{ color: hoverColor, bg: hoverBg }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
            >
              <chakra.span mx="4" fontSize="lg" fontWeight="normal">
                Form
              </chakra.span>
              <chakra.span flexGrow={1} textAlign="right"></chakra.span>
            </Link>
            <Link
              my="6"
              p="2"
              display="flex"
              alignItems="center"
              color={linkColor}
              rounded="lg"
              _hover={{ color: hoverColor, bg: hoverBg }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
            >
              <chakra.span mx="4" fontSize="lg" fontWeight="normal">
                Commerce
              </chakra.span>
              <chakra.span flexGrow={1} textAlign="right"></chakra.span>
            </Link>
            <Link
              my="6"
              p="2"
              display="flex"
              alignItems="center"
              color={linkColor}
              rounded="lg"
              _hover={{ color: hoverColor, bg: hoverBg }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
            >
              <chakra.span mx="4" fontSize="lg" fontWeight="normal">
                Navigation
              </chakra.span>
              <chakra.span flexGrow={1} textAlign="right"></chakra.span>
            </Link>
          </chakra.nav>
        </Box>
      </Flex>
    </Box>
  )
}

export default LightSidebar
