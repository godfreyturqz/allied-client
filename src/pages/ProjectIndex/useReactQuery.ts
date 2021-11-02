import { useQuery, useMutation, useQueryClient } from 'react-query'
import { postReqIndex, getReqIndex, getReqIndexById, deleteReqIndex } from '../../services/ReqIndexAPI'
import { Data } from './types'

const queryClient = useQueryClient()
const QUERY_KEY = 'REQ_INDEX'

const onError = (error, variables, context) => {
    queryClient.setQueryData(QUERY_KEY, context.previousState)
}

const onSettled = (data, error, variables, context) => {
    queryClient.invalidateQueries(QUERY_KEY)
}

export const useFetchProjectIndex = () => {
    return useQuery(QUERY_KEY, getReqIndex)
}

export const useFetchProjectIndexById = (id: string) => {
    return useQuery([QUERY_KEY, id], () => getReqIndexById(id), {
        //use refetch method to refetch
        enabled: true
    })
}

export const useCreateProjectIndex = useMutation((payload: Data) => postReqIndex(payload), {
    onMutate: async (payload: Data) => {
        
        await queryClient.cancelQueries(QUERY_KEY)

        const previousState = queryClient.getQueryData<Data[]>(QUERY_KEY)

        if (previousState) {
            queryClient.setQueryData<Data[]>(QUERY_KEY, [
                ...previousState,
                payload
            ])
        }

        return { previousState }
    },
    onError,
    onSettled
})

const useDeleteProjectIndex = useMutation((id: string) => deleteReqIndex(id), {
    onMutate: async (id: string) => {
        
        await queryClient.cancelQueries(QUERY_KEY)

        const previousState = queryClient.getQueryData<Data[]>(QUERY_KEY)

        if (previousState) {
            queryClient.setQueryData<Data[]>(QUERY_KEY, previousState.filter(item => item.uniqid !== id))
        }

        return { previousState }
    }
})

// My first solution on creating custom hook for react query.
// Issue: too much function. Much better to divide into separate functions

// export const useReactQuery = () => {

//     const queryClient = useQueryClient()
//     const QUERY_KEY = 'REQ_INDEX'

//     const { data } = useQuery(QUERY_KEY, getReqIndex)

//     const createProjectIndex = useMutation((payload: Data) => postReqIndex(payload), {
//         onMutate: async (payload: Data) => {
            
//             console.log(payload)
//             await queryClient.cancelQueries(QUERY_KEY)

//             const previousState = queryClient.getQueryData<Data[]>(QUERY_KEY)

//             if (previousState) {
//                 queryClient.setQueryData<Data[]>(QUERY_KEY, [
//                     ...previousState,
//                     payload
//                 ])
//             }

//             return { previousState }
//         },
//         onError: (error, variable, context) => {
//             queryClient.setQueryData(QUERY_KEY, context.previousState)
//         },
//         onSettled: (data, error, variables, context) => {
//             queryClient.invalidateQueries(QUERY_KEY)
//         }
//     })


//     const deleteProjectIndex = useMutation((id: string) => deleteReqIndex(id), {
//         onMutate: async (id: string) => {
            
//             await queryClient.cancelQueries(QUERY_KEY)

//             const previousState = queryClient.getQueryData<Data[]>(QUERY_KEY)

//             if (previousState) {
//                 queryClient.setQueryData<Data[]>(QUERY_KEY, previousState.filter(item => item.uniqid !== id))
//             }

//             return { previousState }
//         }
//     })

//     return {
//         data,
//         createProjectIndex,
//         deleteProjectIndex
//     }
// }
