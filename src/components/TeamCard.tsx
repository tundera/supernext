import type { FC } from 'react'

import Image from 'next/image'
import { Heading, Box, useColorMode, Flex } from '@chakra-ui/react'

type Props = {
  name: string
  logo: string
  primaryColor: string
  secondaryColor: string
}

const TeamCard: FC<Props> = ({ name, logo, primaryColor, secondaryColor }) => {
  const { colorMode } = useColorMode()

  console.log(logo)
  return (
    <Flex
      p={5}
      flexDir="column"
      bgColor="black"
      shadow="md"
      border={`1px solid ${secondaryColor}`}
      borderRadius={4}
      bgImage={logo}
    >
      <Image src={logo} height="100" width="100" />
      <Heading fontSize="lg" textAlign="center" color={colorMode === 'dark' ? 'white' : 'black'} mt="8">
        {name}
      </Heading>
    </Flex>
  )
}

export default TeamCard
