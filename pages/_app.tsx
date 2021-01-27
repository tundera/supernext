import type { AppProps /* , AppContext */ } from 'next/app'

import DataProvider from '@providers/DataProvider'
import QueryProvider from '@providers/QueryProvider'
import FormProvider from '@providers/FormProvider'
import ThemeProvider from '@providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  const { children, ...rest } = pageProps

  return (
    <DataProvider {...rest}>
      <QueryProvider>
        <FormProvider>
          <ThemeProvider>
            <Component {...rest}>{children}</Component>
          </ThemeProvider>
        </FormProvider>
      </QueryProvider>
    </DataProvider>
  )
}

export default MyApp
