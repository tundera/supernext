import type { FC } from 'react'
import type { Session } from 'next-auth/client'

import NextLink from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

import {
  useColorModeValue,
  useDisclosure,
  HStack,
  Box,
  IconButton,
  Button,
  VStack,
  CloseButton,
} from '@chakra-ui/react'

import NavButton from '@components/NavButton'
import DarkModeToggle from '@components/utility/DarkModeToggle'
import LocaleButton from '@components/utility/LocaleButton'

interface Props {
  session: Session
  disclosure: ReturnType<typeof useDisclosure>
}

const Navigation: FC<Props> = ({ session, disclosure }) => {
  const bg = useColorModeValue('white', 'brand.700')
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
