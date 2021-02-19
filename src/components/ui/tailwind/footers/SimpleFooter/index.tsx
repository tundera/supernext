/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from 'react'

import { useColorModeValue, chakra, Box, List, ListItem, Link } from '@chakra-ui/react'

const SimpleFooter: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const linkColor = useColorModeValue('gray.400', 'gray.300')
  const hoverColor = useColorModeValue('gray.800', 'white')

  return (
    <chakra.footer bg={bg} w="full" py="8">
      <Box maxW="xl" mx="auto" px="4">
        <List
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          maxW="md"
          mx="auto"
          fontSize="lg"
          fontWeight="light"
        >
          <ListItem my="2">
            <Link
              color={linkColor}
              _hover={{ color: hoverColor }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
              isExternal
            >
              FAQ
            </Link>
          </ListItem>
          <ListItem my="2">
            <Link
              color={linkColor}
              _hover={{ color: hoverColor }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
              isExternal
            >
              Configuration
            </Link>
          </ListItem>
          <ListItem my="2">
            <Link
              color={linkColor}
              _hover={{ color: hoverColor }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
              isExternal
            >
              Github
            </Link>
          </ListItem>
          <ListItem my="2">
            <Link
              color={linkColor}
              _hover={{ color: hoverColor }}
              transitionProperty="background-color, border-color, color, fill, stroke"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="200ms"
              href="#"
              isExternal
            >
              LinkedIn
            </Link>
          </ListItem>
        </List>
      </Box>
    </chakra.footer>
  )
}

export default SimpleFooter
