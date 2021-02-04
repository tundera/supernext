import { mode } from '@chakra-ui/theme-tools'

export default {
  global: (props) => ({
    html: {
      minWidth: '360px',
      scrollBehavior: 'smooth',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: mode('stone.700', 'whiteAlpha.900')(props),
    },
    body: {
      fontFamily: 'body',
      background: mode('stone.700', 'whiteAlpha.900')(props),
      lineHeight: 'base',
    },
  }),
}
