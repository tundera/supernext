import { FC } from 'react'

import NextLink from 'next/link'
import { useColorMode, Button, Flex, Box, IconButton, Text } from '@chakra-ui/react'
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
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = { light: 'gray.700', dark: 'gray.200' }
  const color = { light: 'white', dark: 'gray.800' }

  return (
    <StickyNav bg={bgColor[colorMode]} color={color[colorMode]}>
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
              color={color[colorMode]}
            >
              <Text fontSize={['xl', '2xl', '2xl', '2xl']}>Home</Text>
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
            color={colorMode === 'dark' ? 'black' : 'white'}
            _focus={{ boxShadow: 'none' }}
          />
        </Box>
      </Flex>
    </StickyNav>
  )
}

export default Navbar
