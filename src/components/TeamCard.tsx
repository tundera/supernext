import type { FC } from 'react'

import { Heading, Box, useColorMode } from '@chakra-ui/react'

type Props = {
  name: string
  primaryColor: string
  secondaryColor: string
}

const TeamCard: FC<Props> = ({ name, primaryColor, secondaryColor }) => {
  const { colorMode } = useColorMode()

  return (
    <Box p={5} bg={primaryColor} shadow="md" border={`1px solid ${secondaryColor}`} borderRadius={4} height="80px">
      <Heading fontSize="lg" textAlign="center" color={colorMode === 'dark' ? 'white' : 'black'}>
        {name}
      </Heading>
    </Box>
  )
}

export default TeamCard
