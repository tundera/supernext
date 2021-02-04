import Image from 'next/image'
import { Heading, Flex, Stack, Box } from '@chakra-ui/react'

type Props = {
  name: string
  slug: string
  logo: string
  background: string
}

const TeamCard = ({ name, slug, logo, background }: Props) => {
  return (
    <Box minHeight="200px" bg="stone.500" maxW="200px" p={4} borderRadius="2rem">
      <Stack align="center">
        <Flex
          borderRadius="lg"
          background={background}
          as="a"
          direction="column"
          align="center"
          href={`/teams/${slug}`}
          minW={['100%', '75%', '150px']}
          border="1px solid black"
          boxShadow="xl"
          py="4"
        >
          <Image src={logo} height="100" width="100" layout="fixed" />
        </Flex>
        <Heading as="h3" size="md" fontWeight="bold" mb={4} color="whiteAlpha.900" textTransform="uppercase">
          {name}
        </Heading>
      </Stack>
    </Box>
  )
}

export default TeamCard
