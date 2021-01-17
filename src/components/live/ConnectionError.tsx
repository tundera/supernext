import type { FC } from 'react'
import type { QuerySubscriptionError } from 'types/datocms'

import { Code, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

type Props = {
  error: QuerySubscriptionError
}

const ConnectionError: FC<Props> = ({ error }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading>Error: {error.code}</Heading>
      <Text w="70px" h="10">
        {error.message}
      </Text>
      <Spacer />
      {error.response && <Code>{JSON.stringify(error.response, null, 4)}</Code>}
    </Flex>
  )
}

export default ConnectionError
