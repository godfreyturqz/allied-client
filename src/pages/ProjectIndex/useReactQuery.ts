import { useQuery, useMutation, useQueryClient } from 'react-query'
import { postReqIndex, getReqIndex, deleteReqIndex } from '../../services/ReqIndexAPI'
import { Data } from './types'


export const useReactQuery = () => {

    const queryClient = useQueryClient()

    const { data } = useQuery('reqIndex', getReqIndex)

    const createProjectIndex = useMutation((payload: Data) => postReqIndex(payload), {
        onMutate: async (payload: Data) => {
            
            console.log(payload)
            await queryClient.cancelQueries('reqIndex')

            const previousState = queryClient.getQueryData<Data[]>('reqIndex')

            if (previousState) {
                queryClient.setQueryData<Data[]>('reqIndex', [
                    ...previousState,
                    payload
                ])
            }

            return { previousState }
        }
    })


    const deleteProjectIndex = useMutation((id: string) => deleteReqIndex(id), {
        onMutate: async (id: string) => {
            
            await queryClient.cancelQueries('reqIndex')

            const previousState = queryClient.getQueryData<Data[]>('reqIndex')

            if (previousState) {
                queryClient.setQueryData<Data[]>('reqIndex', previousState.filter(item => item.uniqid !== id))
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
