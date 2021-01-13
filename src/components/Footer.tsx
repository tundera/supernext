import type { FC } from 'react'

import { Flex, Link, IconButton } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa'

const Footer: FC = () => {
  return (
    <Flex align="center" mb={4} direction="column">
      <div>
        <Link href="https://twitter.com/stackshuffleio" title="Twitter" isExternal>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" color="gray.500" variant="ghost" />
        </Link>
        <Link href="https://github.com/tundera" title="GitHub" isExternal>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" color="gray.500" variant="ghost" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCAJ3i5kADQ5MUJnQeEoJxfA" title="YouTube" isExternal>
          <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" color="gray.500" variant="ghost" />
        </Link>
        <Link href="mailto:me@blog.tundera.dev" title="Email" isExternal>
          <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" color="gray.500" variant="ghost" />
        </Link>
      </div>
    </Flex>
  )
}

export default Footer
