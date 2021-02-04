import { unstable_SuspenseList as SuspenseList, DirectionalSuspenseListProps } from 'react'
import { QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Box, Button } from '@chakra-ui/react'

const QuerySuspenseList: React.FC<DirectionalSuspenseListProps> = ({ revealOrder, tail, children }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Box>
              There was an error getting react-query data in a ReactQuerySuspenseList component
              <Button onClick={() => resetErrorBoundary()}>Try again! Error: {error}</Button>
            </Box>
          )}
        >
          <SuspenseList revealOrder={revealOrder} tail={tail}>
            {children}
          </SuspenseList>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default QuerySuspenseList
