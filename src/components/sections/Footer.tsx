import { Flex, useColorModeValue, Text, Box } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa'
import Emoji from 'a11y-react-emoji'
import MediaIconLink from '@components/MediaIconLink'

function Footer() {
  const bg = useColorModeValue('stone.700', 'gold.700')
  const color = useColorModeValue('gold.700', 'stone.700')

  return (
    <Flex bottom="0" align="center" direction="column" bg={bg} color={color} w="100%" minHeight="5vh">
      <Box mt="2">
        <MediaIconLink href="https://twitter.com/tunderadev" title="Twitter" icon={<FaTwitter />} />
        <MediaIconLink href="https://github.com/tundera" title="GitHub" icon={<FaGithub />} />
        <MediaIconLink
          href="https://www.youtube.com/channel/UCAJ3i5kADQ5MUJnQeEoJxfA"
          title="YouTube"
          icon={<FaYoutube />}
        />
        <MediaIconLink href="mailto:me@blog.tundera.dev" title="Email" icon={<FaEnvelope />} />
      </Box>
      <Text mt={2} mb={4} fontWeight="bold" fontFamily="mono">
        Made with <Emoji symbol="🔥" label="Fire emoji" /> in Colorado
      </Text>
    </Flex>
  )
}

export default Footer
