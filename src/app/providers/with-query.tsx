
import React, { type ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const withQuery = (component: () => ReactNode): (() => JSX.Element) => {
  const WrappedComponent = (): JSX.Element => (
    <QueryClientProvider client={queryClient} contextSharing>
      {component()}
    </QueryClientProvider>
  )
  return WrappedComponent
}
