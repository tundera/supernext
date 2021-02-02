import { mode } from '@chakra-ui/theme-tools'

export default {
  global: (props) => ({
    'html, #__next': {
      height: '100%',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      fontFamily: 'body',
      bg: mode('stone.700', 'gray.200')(props),
      lineHeight: 'base',
    },
  }),
}
