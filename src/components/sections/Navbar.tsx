import { useState } from 'react'
import { useTheme, useColorMode, useColorModeValue, Flex, Box } from '@chakra-ui/react'
import { FaBars as MenuIcon, FaTimes as CloseIcon } from 'react-icons/fa'
import styled from '@emotion/styled'

import NavbarItem from '@components/ui/menus/NavbarItem'
import LocaleButton from '@components/utility/LocaleToggle'
import DarkModeToggle from '@components/utility/DarkModeToggle'

import { createBrandLogoIcon } from 'src/utils/createBrandIcons'

const StickyNav = styled(Flex)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

function Navbar({ ...props }) {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  const theme = useTheme()
  const { colorMode } = useColorMode()
  const bg = useColorModeValue('whiteAlpha.900', 'stone.700')
  const color = useColorModeValue('stone.700', 'whiteAlpha.900')
  const iconColor = useColorModeValue(theme.colors.stone['500'], theme.colors.whiteAlpha['900'])

  const BrandLogoIcon = createBrandLogoIcon(iconColor)

  return (
    <StickyNav
      zIndex={20}
      top="0"
      boxShadow="2xl"
      minHeight={['5vh']}
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
        <BrandLogoIcon ml="2" w="24" h="24" preserveAspectRatio="true" />
      </Box>

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
          <NavbarItem to="/store">Store</NavbarItem>
          <NavbarItem to="/teams" isLast>
            Teams
          </NavbarItem>
          <Flex ml="8" align="center">
            <DarkModeToggle />
            <LocaleButton />
          </Flex>
        </Flex>
      </Box>
    </StickyNav>
  )
}

export default Navbar
