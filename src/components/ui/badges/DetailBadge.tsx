import { useStyleConfig, Box } from '@chakra-ui/react'

function DetailBadge(props) {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('Badge', { size, variant })
  return <Box as="span" sx={styles} {...rest} />
}

export default DetailBadge
