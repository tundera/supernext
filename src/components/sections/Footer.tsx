import { Flex, useColorMode, Text, Box } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa'
import Emoji from 'a11y-react-emoji'
import MediaIconLink from '@components/MediaIconLink'

function Footer() {
  const { colorMode } = useColorMode()

  const bgColor = { light: '#110d5b', dark: '#a3f6e7' }
  const color = { light: '#a3f6e7', dark: '#110d5b' }

  return (
    <Flex
      bottom="0"
      align="center"
      direction="column"
      bgColor={bgColor[colorMode]}
      color={color[colorMode]}
      minHeight="10vh"
    >
      <Box mt="2">
        <MediaIconLink href="https://twitter.com/tunderadev" title="Twitter" icon={<FaTwitter />} />
        <MediaIconLink href="https://github.com/tundera/next-goat" title="GitHub" icon={<FaGithub />} />
        <MediaIconLink
          href="https://www.youtube.com/channel/UCAJ3i5kADQ5MUJnQeEoJxfA"
          title="YouTube"
          icon={<FaYoutube />}
        />
        <MediaIconLink href="mailto:me@blog.tundera.dev" title="Email" icon={<FaEnvelope />} />
      </Box>
      <Text my={4}>
        Made with <Emoji symbol="🔥" label="Fire emoji" /> in Colorado
      </Text>
    </Flex>
  )
}

export default Footer
