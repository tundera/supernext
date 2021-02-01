import ErrorComponent from 'next/error'

export interface ErrorFallbackProps {
  error: Error & Record<any, any>
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}

export default RootErrorFallback
