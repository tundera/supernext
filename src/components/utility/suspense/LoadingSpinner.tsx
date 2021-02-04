import { Spinner } from '@chakra-ui/react'

function LoadingSpinner() {
  return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" label="Loading..." />
}

export default LoadingSpinner
