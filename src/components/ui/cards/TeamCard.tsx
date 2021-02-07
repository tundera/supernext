import type { FC } from 'react'

import { Flex, Box, Spacer, Text, useColorModeValue } from '@chakra-ui/react'

import { Image, Transformation } from 'cloudinary-react'
// import Image from 'next/image'

type Props = {
  name: string
  city: string
  slug: string
  logo: string
  background: string
}

const TeamCard: FC<Props> = ({ name, city, slug, logo, background }: Props) => {
  const bg = useColorModeValue('whiteAlpha.900', 'stone.900')

  return (
    <article>
      <Flex
        direction="column"
        mx="auto"
        justify="center"
        bg={background}
        minW={{ base: 56, md: 64 }}
        rounded="lg"
        shadow="lg"
        overflow="hidden"
        as="a"
        href={`teams/${slug}`}
      >
        <Box p="4" height="250px">
          <Image publicId={`/nba-logos/${logo}`}>
            <Transformation gravity="center" crop="fill" />
          </Image>
        </Box>
        <Spacer />
        <Box minH="10px" bg={bg}>
          <Text fontWeight="bold" color="brand.500" textAlign="center">
            {city} {name}
          </Text>
        </Box>
      </Flex>
    </article>
  )
}

export default TeamCard
