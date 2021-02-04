import type { FC } from 'react'
import type { Player } from 'db'

import { Button, Badge, Heading, Flex, Image, Spacer, VStack, Text, useColorModeValue } from '@chakra-ui/react'

type Props = {
  player: Player
}
export const PlayerCard: FC<Props> = ({ player }) => {
  const bg = useColorModeValue('white', 'gray.800')
  return (
    <article>
      <VStack maxW="xs" mx="auto" rounded="lg" shadow="md" overflow="hidden" bg={bg}>
        <VStack spacing={2} mx="auto" px={4} py={2} align="flex-start">
          <Heading as="a" href="#" size="md" textTransform="uppercase">
            {player.name}
          </Heading>
          <Text fontSize="sm">
            <b>Height:</b> {player.handle}
          </Text>
          <Text fontSize="sm">
            <b>Weight:</b> {player.weight}
          </Text>
        </VStack>
        <Image
          w="full"
          h={48}
          fit="cover"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />
        <Flex bg="gray" w="full" align="center" px={4} py={1}>
          <Text fontWeight="bold">
            {player.number} | {player.position}
          </Text>
          <Spacer />
          <Button size="xs" textTransform="uppercase">
            View Stats
          </Button>
        </Flex>
      </VStack>
    </article>
  )
}
export default PlayerCard
