import Image from 'next/image'
import { Heading, useColorModeValue, Flex } from '@chakra-ui/react'

type Props = {
  name: string
  logo: string
  slug: string
}

const TeamCard = ({ name, logo, slug }: Props) => {
  const color = useColorModeValue('stone.700', 'whiteAlpha.900')

  return (
    <Flex
      p={5}
      flexDir="column"
      bgColor="whiteAlpha.900"
      shadow="md"
      borderRadius={4}
      bgImage={logo}
      as="a"
      href={`/teams/${slug}`}
    >
      <Image src={logo} height="100" width="auto" />
      <Heading fontSize="lg" textAlign="center" color={color} mt="8">
        {name}
      </Heading>
    </Flex>
  )
}

export default TeamCard
