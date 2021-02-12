import type { FC } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'

interface Props {
  client: QueryClient
  state?: unknown
}

const QueryProvider: FC<Props> = ({ client, state, children }) => (
  <QueryClientProvider client={client}>
    <Hydrate state={state}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Hydrate>
  </QueryClientProvider>
)

export default QueryProvider
