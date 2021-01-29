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
      // color: mode('gray.800', 'whiteAlpha.900')(props),
      // bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
}
