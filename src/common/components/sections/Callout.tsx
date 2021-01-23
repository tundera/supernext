import type { FC } from 'react'

import { Box } from '@chakra-ui/react'

const Callout: FC = ({ children }) => {
  return (
    <Box p="0 1rem" bg="lightblue" border="1px solid blue" borderRadius="0.5rem">
      {children}
    </Box>
  )
}

export default Callout
