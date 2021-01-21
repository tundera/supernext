import type { FC } from 'react'

import { Flex, Link, IconButton, useColorMode, Text, Box } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa'
import Emoji from 'a11y-react-emoji'

const Footer: FC = () => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.700', dark: 'gray.200' }
  const color = { light: 'white', dark: 'gray.800' }

  return (
    <Flex align="center" direction="column" bgColor={bgColor[colorMode]} color={color[colorMode]}>
      <Box py="4">
        <Link href="https://twitter.com/tunderadev" title="Twitter" isExternal mx={2}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="md" color="gray.500" variant="ghost" />
        </Link>
        <Link href="https://github.com/tundera/next-goat" title="GitHub" isExternal mx={2}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="md" color="gray.500" variant="ghost" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCAJ3i5kADQ5MUJnQeEoJxfA" title="YouTube" isExternal mx={2}>
          <IconButton aria-label="YouTube" icon={<FaYoutube />} size="md" color="gray.500" variant="ghost" />
        </Link>
        <Link href="mailto:me@blog.tundera.dev" title="Email" isExternal mx={2}>
          <IconButton aria-label="Email" icon={<FaEnvelope />} size="md" color="gray.500" variant="ghost" />
        </Link>
      </Box>
      <Text mb={4}>
        Made with <Emoji symbol="🔥" label="Fire emoji" /> in Colorado
      </Text>
    </Flex>
  )
}

export default Footer
