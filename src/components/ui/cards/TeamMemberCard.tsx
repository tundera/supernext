import type { FC } from 'react'

import NextLink from 'next/link'

import { capitalCase } from 'change-case'
import { useColorModeValue, chakra, Box, Image, Flex, Link } from '@chakra-ui/react'

type Props = {
  name: string
  position: string
}

const TeamMemberCard: FC<Props> = ({ name, position }) => {
  return (
    <Flex bg="gray.600" p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        w="xs"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="lg"
        borderRadius="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="100%"
          h={56}
          objectFit="cover"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            as={NextLink}
            href="#"
            display="block"
            fontSize="2xl"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
          >
            {name}
          </Link>
          <chakra.span fontSize="sm" color={useColorModeValue('gray.700', 'gray.200')}>
            {capitalCase(position)}
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  )
}

export default TeamMemberCard

export type { Props as TeamMemberCardProps }
