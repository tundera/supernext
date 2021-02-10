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

function Navbar({ ...props }) {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  const theme = useTheme()
  const bg = useColorModeValue('brand.500', 'whiteAlpha.700')
  const iconColor = useColorModeValue(theme.colors.whiteAlpha['900'], theme.colors.brand['500'])

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

export default Navbar
