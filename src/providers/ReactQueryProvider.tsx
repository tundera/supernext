import type { FC } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'

const queryClient = new QueryClient()

type Props = {
  state: unknown
}

const ReactQueryProvider: FC<Props> = ({ state: dehydratedState, children }) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={dehydratedState}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Hydrate>
  </QueryClientProvider>
)

export default ReactQueryProvider
