import type { FC } from 'react'

import { HStack, Box } from '@chakra-ui/react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

import SocialButton from '@components/SocialButton'

const SocialLinks: FC = () => {
  return (
    <Box>
      <HStack>
        <SocialButton scheme="facebook" icon={<FaFacebook />}>
          Facebook
        </SocialButton>
        <SocialButton scheme="twitter" icon={<FaTwitter />}>
          Twitter
        </SocialButton>
      </HStack>
    </Box>
  )
}

export default SocialLinks
