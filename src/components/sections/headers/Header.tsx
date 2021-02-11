import type { FC } from 'react'

import NextLink from 'next/link'
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

import NavButton from '@components/NavButton'
import DarkModeToggle from '@components/utility/DarkModeToggle'
import LocaleButton from '@components/utility/LocaleButton'

import { createBrandLogoIcon } from 'src/utils/createBrandIcons'

const StickyHeader = styled(chakra.header)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Header: FC = ({ ...props }) => {
  const bg = useColorModeValue('white', 'brand.700')
  const mobileNav = useDisclosure()

  const iconColor = useColorModeValue('brand.500', 'white')

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
          <chakra.a href="/" title="Tundera Dev Home Page" display="flex" alignItems="center">
            <BrandLogoIcon w="16" h="16" />
            <VisuallyHidden>tundera.dev</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="2xl" fontWeight="bold">
            tundera
          </chakra.h1>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color={useColorModeValue('brand.500', 'whiteAlpha.900')}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            <NavButton to="/">Home</NavButton>
            <NavButton to="/about">About</NavButton>
            <NavButton to="/blog">Blog</NavButton>
            <NavButton to="/store">Store</NavButton>
            <DarkModeToggle />
            <LocaleButton />
          </HStack>
          <NextLink href="/login" passHref>
            <Button
              as="a"
              color={useColorModeValue('whiteAlpha.900', 'brand.500')}
              colorScheme={useColorModeValue('brand', 'gray')}
              size="sm"
            >
              Sign In
            </Button>
          </NextLink>

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
              py={4}
              px={8}
              bg={bg}
              spacing={3}
              borderRadius="sm"
              boxShadow="sm"
            >
              <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

              <NavButton to="/">Home</NavButton>
              <NavButton to="/about">About</NavButton>
              <NavButton to="/blog">Blog</NavButton>
              <NavButton to="/store">Store</NavButton>
              <NextLink href="/login" passHref>
                <Button as="a" w="100%" variant="ghost" bgGradient="linear(to-r, spark.400,deep.500)">
                  Sign in
                </Button>
              </NextLink>

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

export default Header
