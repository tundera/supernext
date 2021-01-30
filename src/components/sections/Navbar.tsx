import { useState } from 'react'
import { useTheme, useColorMode, useColorModeValue, Flex, Box } from '@chakra-ui/react'
import { FaBars as MenuIcon, FaTimes as CloseIcon, FaShoppingCart as ShoppingCartIcon } from 'react-icons/fa'

import styled from '@emotion/styled'

import Logo from '@components/ui/Logo'
import NavbarItem from '@components/ui/menus/NavbarItem'
import LocaleButton from '@components/utility/LocaleToggle'
import DarkModeToggle from '@components/utility/DarkModeToggle'

const StickyNav = styled(Flex)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

function Navbar({ ...props }) {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  const color = useColorModeValue('stone.700', 'whiteAlpha.900')

  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <StickyNav
      zIndex={20}
      top="0"
      boxShadow="2xl"
      minHeight="5vh"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={[
        'stone.700',
        'stone.700',
        colorMode === 'dark' ? 'stone.700' : 'whiteAlpha.900',
        colorMode === 'dark' ? 'stone.700' : 'whiteAlpha.900',
      ]}
      {...props}
    >
      <Flex align="center">
        <Logo w="100px" color={color} />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box display={{ base: show ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <NavbarItem to="/">Home</NavbarItem>
          <NavbarItem to="/blog">Blog</NavbarItem>
          <NavbarItem to="/about">About</NavbarItem>
          <NavbarItem to="/work">Work</NavbarItem>
          <NavbarItem to="/store" isLast />
          <DarkModeToggle />
          <LocaleButton />
        </Flex>
      </Box>
    </StickyNav>
  )
}

export default Navbar
