import type { FC } from 'react'

import { Flex, Box, Spacer, VStack, Text, useColorModeValue } from '@chakra-ui/react'

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
      <Flex direction="column" maxW="sm" mx="auto" as="a" href={`teams/${slug}`}>
        <VStack
          spacing={2}
          mx="auto"
          alignItems="center"
          justify="center"
          maxH="350px"
          bg={background}
          w={{ base: 56, md: 64 }}
          rounded="lg"
          shadow="lg"
          overflow="hidden"
        >
          <Box p="4" minH="200px">
            <Image publicId={`/nba-logos/${logo}`}>
              <Transformation gravity="center" crop="fill" />
            </Image>
          </Box>
          <Box w="full" bg={bg}>
            <Text fontWeight="bold" color="stone.700" textAlign="center">
              {city} {name}
            </Text>
          </Box>
        </VStack>
      </Flex>
    </article>
  )
}

export default TeamCard
