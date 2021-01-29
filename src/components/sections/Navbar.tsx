import { useState } from 'react'
import { useTheme, useColorMode, useColorModeValue, Button, Flex, Box, IconButton } from '@chakra-ui/react'
import { BsMoon } from 'react-icons/bs'
import { FaHamburger as MenuIcon, FaTimes as CloseIcon, FaShoppingCart as ShoppingCartIcon } from 'react-icons/fa'
import { BiSun } from 'react-icons/bi'

import styled from '@emotion/styled'

import Logo from '@components/ui/Logo'
import NavbarItem from '@components/ui/menus/NavbarItem'
import LocaleButton from '@components/utility/LocaleToggle'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

function Navbar({ ...props }) {
  const theme = useTheme()
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue(theme.colors.brand.primary, theme.colors.brand.secondary)
  const color = useColorModeValue('white', 'black')
  const iconColor = useColorModeValue('white', 'black')

  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <StickyNav
      minHeight="5vh"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['gold.500', 'gold.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <IconButton
          fontWeight={['normal', 'medium', 'bold']}
          fontSize={['xs', 'sm', 'lg', 'xl']}
          variant="ghost"
          _hover={{ bg: 'rgba(0,0,0,.2)' }}
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <BiSun /> : <BsMoon />}
          onClick={toggleColorMode}
          color={iconColor}
          _focus={{ boxShadow: 'none' }}
        />
        <LocaleButton />
        <Logo w="100px" color={['white', 'white', 'gold.500', 'gold.500']} />
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
          <NavbarItem to="/store" isLast>
            <Button
              size="sm"
              rounded="md"
              color={['stone.500', 'stone.500', 'white', 'white']}
              bg={['white', 'white', 'stone.500', 'stone.500']}
              _hover={{
                bg: ['gold.100', 'gold.100', 'gold.600', 'gold.600'],
              }}
              rightIcon={<ShoppingCartIcon />}
            >
              Store
            </Button>
          </NavbarItem>
        </Flex>
      </Box>
    </StickyNav>
  )
}

export default Navbar
