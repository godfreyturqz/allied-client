import React from 'react'
import { QueryClient, QueryClientProvider  } from 'react-query'

interface QueryProviderProps {
    children: React.ReactNode
}

const QueryProvider: React.FC<QueryProviderProps> = ({
    children
}) => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider
        