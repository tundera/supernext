import type { FC } from 'react'

import Image from 'next/image'
import { Heading, useColorModeValue, Flex } from '@chakra-ui/react'

type Props = {
  name: string
  logo: string
}

const TeamCard: FC<Props> = ({ name, logo }) => {
  const color = useColorModeValue('black', 'white')

  return (
    <Flex p={5} flexDir="column" bgColor="white" shadow="md" borderRadius={4} bgImage={logo}>
      <Image src={logo} height="100" width="auto" />
      <Heading fontSize="lg" textAlign="center" color={color} mt="8">
        {name}
      </Heading>
    </Flex>
  )
}

export default TeamCard
