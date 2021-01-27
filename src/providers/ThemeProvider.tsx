import type { FC } from 'react'

import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import theme from 'styles/theme'
import fonts from 'styles/font-face'

type Props = {
  cookies: string | undefined
}

const Fonts: FC = () => {
  return <Global styles={fonts} />
}

const ThemeProvider: FC<Props> = ({ cookies, children }) => {
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Fonts />
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  }
}
