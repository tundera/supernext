import type { FC } from 'react'
import type { GetServerSideProps } from 'next'
import type { Cookies } from 'types'

import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import theme from 'styles/theme'
import fonts from 'styles/font-face'

interface Props {
  cookies: Cookies
}

const ThemeProvider: FC<Props> = ({ cookies, children }) => {
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Global styles={fonts} />
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
