import { useQuery, useMutation, useQueryClient } from 'react-query'
import { postReqIndex, getReqIndex, deleteReqIndex } from '../../services/ReqIndexAPI'
import { Data } from './types'


export const useReactQuery = () => {

    const queryClient = useQueryClient()
    const queryKey = 'reqIndex'

    const { data } = useQuery(queryKey, getReqIndex)

    const createProjectIndex = useMutation((payload: Data) => postReqIndex(payload), {
        onMutate: async (payload: Data) => {
            
            console.log(payload)
            await queryClient.cancelQueries(queryKey)

            const previousState = queryClient.getQueryData<Data[]>(queryKey)

            if (previousState) {
                queryClient.setQueryData<Data[]>(queryKey, [
                    ...previousState,
                    payload
                ])
            }

            return { previousState }
        }
    })


    const deleteProjectIndex = useMutation((id: string) => deleteReqIndex(id), {
        onMutate: async (id: string) => {
            
            await queryClient.cancelQueries(queryKey)

            const previousState = queryClient.getQueryData<Data[]>(queryKey)

            if (previousState) {
                queryClient.setQueryData<Data[]>(queryKey, previousState.filter(item => item.uniqid !== id))
            }

            return { previousState }
        }
    })

    return {
        data,
        createProjectIndex,
        deleteProjectIndex
    }
}
