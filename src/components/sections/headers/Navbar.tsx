import type { FC } from 'react'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import styled from '@emotion/styled'

import NavButton from 'src/components/NavButton'
import DarkModeToggle from 'src/components/utility/DarkModeToggle'
import LocaleButton from '@components/utility/LocaleButton'

import { createBrandLogoIcon } from 'src/utils/createBrandIcons'

const StickyHeader = styled(chakra.header)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Navbar: FC = ({ ...props }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  const iconColor = useColorModeValue('gray.800', 'white')

  const BrandLogoIcon = createBrandLogoIcon(iconColor)

  return (
    <StickyHeader
      bg={bg}
      w="100%"
      px={{ base: 2, sm: 4 }}
      py={4}
      boxShadow="md"
      zIndex={20}
      top="0"
      minHeight="5vh"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      {...props}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex align="center">
          <chakra.a href="/" title="Choc Home Page" display="flex" alignItems="center">
            <BrandLogoIcon w="16" h="16" />
            <VisuallyHidden>tundera.dev</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="2xl" fontWeight="bold">
            tundera
          </chakra.h1>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack spacing={1} mr={1} color="brand.500" display={{ base: 'none', md: 'inline-flex' }}>
            <NavButton to="/">Home</NavButton>
            <NavButton to="/about">About</NavButton>
            <NavButton to="/blog">Blog</NavButton>
            <NavButton to="/work">Work</NavButton>
            <NavButton to="/store">Store</NavButton>
            <DarkModeToggle />
            <LocaleButton />
          </HStack>
          <Button colorScheme="brand" size="sm">
            Sign In
          </Button>

          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              borderRadius="sm"
              boxShadow="sm"
            >
              <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

              <NavButton to="/">Home</NavButton>
              <NavButton to="/about">About</NavButton>
              <NavButton to="/blog">Blog</NavButton>
              <NavButton to="/work">Work</NavButton>
              <NavButton to="/store">Store</NavButton>
              <Button w="100%" varint="ghost">
                Sign in
              </Button>

              <HStack>
                <DarkModeToggle />
                <LocaleButton />
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </StickyHeader>
  )
}

export default Navbar
