import type { FC } from 'react'
import { Session, signOut } from 'next-auth/client'

import NextLink from 'next/link'
import { signIn } from 'next-auth/client'
import { AiOutlineMenu, AiFillBell, AiOutlineSearch } from 'react-icons/ai'
import {
  chakra,
  useColorModeValue,
  useDisclosure,
  HStack,
  Box,
  Avatar,
  IconButton,
  Button,
  VStack,
  VisuallyHidden,
  CloseButton,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react'

import NavButton from '@components/NavButton'
import DarkModeToggle from '@components/utility/DarkModeToggle'
import LocaleButton from '@components/utility/LocaleButton'
import SettingsButton from '@components/ui/buttons/SettingsButton'

interface Props {
  session: Session
  disclosure: ReturnType<typeof useDisclosure>
}

const Navigation: FC<Props> = ({ session, disclosure }) => {
  const color = useColorModeValue('brand.500', 'whiteAlpha.900')
  const scheme = useColorModeValue('white', 'brand')

  const bg = useColorModeValue('whiteAlpha.900', 'brand.700')
  const iconColor = useColorModeValue('gray.800', 'inherit')

  return (
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
      <HStack
        spacing={1}
        mr={1}
        color={useColorModeValue('brand.500', 'whiteAlpha.900')}
        display={{ base: 'none', md: 'inline-flex' }}
      >
        {session ? (
          // <HStack spacing={3} display={disclosure.isOpen ? 'none' : 'flex'} alignItems="center">
          //   <InputGroup>
          //     <InputLeftElement pointerEvents="none">
          //       <AiOutlineSearch />
          //     </InputLeftElement>
          //     <Input type="tel" placeholder="Search..." />
          //   </InputGroup>

          //   <chakra.a p={3} color={color} rounded="sm" href="#" _hover={{ bg: color, color: bg }}>
          //     <AiFillBell />
          //     <VisuallyHidden>Notifications</VisuallyHidden>
          //   </chakra.a>

          //   <Avatar size="sm" name={session.user.name} src={session.user.image} />
          //   <SettingsButton />
          // </HStack>
          <Button onClick={() => signOut()} color={color} colorScheme={scheme} size="sm">
            Sign Out
          </Button>
        ) : (
          <Button onClick={() => signIn()} color={color} colorScheme={scheme} size="sm">
            Sign In
          </Button>
        )}
      </HStack>

      <Box display={{ base: 'inline-flex', md: 'none' }}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          fontSize="20px"
          color={iconColor}
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={disclosure.onOpen}
        />
        <VStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          display={disclosure.isOpen ? 'flex' : 'none'}
          flexDirection="column"
          py={4}
          px={8}
          bg={bg}
          spacing={3}
          borderRadius="sm"
          boxShadow="sm"
        >
          <CloseButton aria-label="Close menu" onClick={disclosure.onClose} />

          <NavButton to="/">Home</NavButton>
          <NavButton to="/about">About</NavButton>
          <NavButton to="/blog">Blog</NavButton>
          <NavButton to="/store">Store</NavButton>
          <NextLink href="#" passHref>
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
  )
}

export default Navigation
