import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  styles: {
    global: {
      '::selection': {
        backgroundColor: '#47a3f3',
        color: '#fefefe',
      },
      html: {
        minWidth: '360px',
        scrollBehavior: 'smooth',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    },
  },
})
