import { Suspense } from 'react'
import { QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Box, Button } from '@chakra-ui/react'

type Props = {
  fallback: NonNullable<React.ReactNode> | null
}

const QuerySuspense: React.FC<Props> = ({ fallback, children }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Box>
              There was an error getting react-query data in a ReactQuerySuspense component
              <Button onClick={() => resetErrorBoundary()}>Try again! Error: {error}</Button>
            </Box>
          )}
        >
          <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default QuerySuspense
