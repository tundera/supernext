import { Box, Text } from '@chakra-ui/react'

function Logo({ ...props }) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}

export default Logo
