import { FC } from 'react'

import NextLink from 'next/link'
import { useTheme, useColorMode, useColorModeValue, Button, Flex, Box, IconButton, Text } from '@chakra-ui/react'
import { BsMoon } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import styled from '@emotion/styled'

import NavLink from '@components/NavLink'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Navbar: FC = () => {
  const theme = useTheme()
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue(theme.colors.brand.primary, theme.colors.brand.secondary)
  const color = useColorModeValue(theme.colors.brand.secondary, theme.colors.brand.primary)
  const iconColor = useColorModeValue('white', 'black')

  return (
    <StickyNav minHeight="5vh" bg={bg} color={color}>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        as="nav"
        p={4}
        mx="auto"
        maxWidth="1150px"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              fontWeight={['normal', 'medium', 'medium']}
              fontSize={['xs', 'sm', 'lg', 'xl']}
              as="a"
              variant="ghost"
              _hover={{ bg: 'rgba(0,0,0,.2)' }}
              p={[1, 4]}
              color={color}
            >
              <Text fontSize={['xl', 'lg', 'lg', 'xl']}>Home</Text>
            </Button>
          </NextLink>
        </Box>

        <Box>
          <NavLink LinkComponent={NextLink} href="/about" text="About" />
          <NavLink LinkComponent={NextLink} href="/blog" text="Blog" />
          <NavLink LinkComponent={NextLink} href="/teams" text="Teams" />
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
        </Box>
      </Flex>
    </StickyNav>
  )
}

export default Navbar
