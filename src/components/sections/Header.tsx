import { useState } from 'react'
import {
  useTheme,
  useColorModeValue,
  Flex,
  Box,
  chakra,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react'
import { FaBars as MenuIcon, FaTimes as CloseIcon } from 'react-icons/fa'
import styled from '@emotion/styled'
import { AiOutlineMenu } from 'react-icons/ai'

import HeaderItem from '@components/ui/menus/HeaderItem'
import LocaleButton from '@components/utility/LocaleButton'
import DarkModeToggle from '@components/utility/DarkModeToggle'
import { createBrandLogoIcon } from 'src/utils/createBrandIcons'

const StickyHeader = styled(Flex)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

function Navigation() {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  const iconColor = useColorModeValue('gray.800', 'white')

  const BrandLogoIcon = createBrandLogoIcon(iconColor)
  return (
    <chakra.header bg={bg} w="100%" px={{ base: 2, sm: 4 }} py={4} boxShadow="md">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a href="/" title="Choc Home Page" display="flex" alignItems="center">
            <BrandLogoIcon />
            <VisuallyHidden>Choc</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="2xl" fontWeight="bold">
            Choc
          </chakra.h1>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack spacing={1} mr={1} color="brand.500" display={{ base: 'none', md: 'inline-flex' }}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Work</Button>
            <Button variant="ghost">Store</Button>
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

              <Button w="100%" variant="ghost">
                Features
              </Button>
              <Button w="100%" variant="ghost">
                Pricing
              </Button>
              <Button w="100%" variant="ghost">
                Blog
              </Button>
              <Button w="100%" variant="ghost">
                Company
              </Button>
              <Button w="100%" variant="ghost">
                Sign in
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  )
}
function Header({ ...props }) {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  const theme = useTheme()
  const bg = useColorModeValue('stone.700', 'whiteAlpha.700')
  const iconColor = useColorModeValue(theme.colors.whiteAlpha['900'], theme.colors.stone['700'])

  const BrandLogoIcon = createBrandLogoIcon(iconColor)

  return (
    <StickyHeader
      zIndex={20}
      top="0"
      boxShadow="2xl"
      minHeight="5vh"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={[8, 32]}
      py={[1, 4]}
      bg={bg}
      {...props}
    >
      <Box align="center">
        <BrandLogoIcon ml="2" w="24" h="24" />
      </Box>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu} color={iconColor}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box display={{ base: show ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <HeaderItem to="/">Home</HeaderItem>
          <HeaderItem to="/blog">Blog</HeaderItem>
          <HeaderItem to="/about">About</HeaderItem>
          <HeaderItem to="/work">Work</HeaderItem>
          <HeaderItem to="/store">Store</HeaderItem>
          <HeaderItem to="/courses">Courses</HeaderItem>
          <HeaderItem to="/teams" isLast>
            Teams
          </HeaderItem>
          <Flex ml="8" align="center">
            <DarkModeToggle />
            <LocaleButton />
          </Flex>
        </Flex>
      </Box>
    </StickyHeader>
  )
}

export default Header
