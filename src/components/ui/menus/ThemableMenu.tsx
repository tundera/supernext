// 1. Import the components and hook
import { StylesProvider, useMultiStyleConfig, useStyles, Flex, Box } from '@chakra-ui/react'

export function ThemableMenu(props) {
  const { size, variant, children, ...rest } = props

  // 2. Consume the `useMultiStyleConfig` hook
  const styles = useMultiStyleConfig('Menu', { size, variant })

  return (
    <Flex sx={styles.menu} {...rest}>
      {/* 3. Mount the computed styles on `StylesProvider` */}
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Flex>
  )
}

export function ThemableMenuItem(props) {
  // 4. Read computed `item` styles from styles provider
  const styles = useStyles()
  return <Box as="button" sx={styles.item} {...props} />
}
