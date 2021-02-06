import type { FC } from 'react'

import { Flex, Box, Spacer, VStack, Text, useColorModeValue, Stack } from '@chakra-ui/react'

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
  const bgGray = useColorModeValue('gray.200', 'gray.700')

  return (
    <article>
      <Flex direction="column" maxW="sm" mx="auto" as="a" href={`teams/${slug}`}>
        {/* <Image src={`/nba-logos/${logo}`} height="150" width="150" layout="responsive" /> */}
        <VStack
          spacing={2}
          mx="auto"
          alignItems="center"
          mt={-10}
          bg={bg}
          w={{ base: 56, md: 64 }}
          rounded="lg"
          shadow="lg"
          overflow="hidden"
        >
          <Box p="4">
            <Image publicId={`/nba-logos/${logo}`}>
              <Transformation gravity="center" crop="fill" />
            </Image>
          </Box>
          <Flex w="full" align="center" bg={bgGray} p={1}>
            <Text fontWeight="bold">
              {city} {name}
            </Text>
            <Spacer />
          </Flex>
        </VStack>
      </Flex>
    </article>
  )
}

export default TeamCard
