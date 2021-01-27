import { extendTheme } from '@chakra-ui/react'

import config from './config'
import styles from './styles'
import colors from './colors'
import fonts from './fonts'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import Button from './components/button'
import Menu from './components/menu'
import Badge from './components/badge'

const overrides = {
  config,
  styles,
  fonts,
  colors,
  components: {
    Button,
    Menu,
    Badge,
  },
}

export default extendTheme(overrides)
