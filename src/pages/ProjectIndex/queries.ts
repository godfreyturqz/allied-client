import { useQuery, useMutation, useQueryClient } from 'react-query'
import { postReqIndex, getReqIndex } from '../../services/ReqIndexService'
import { Data } from './types'


const queryClient = useQueryClient()

const { data } = useQuery('reqIndex', getReqIndex)

const mutation = useMutation((payload: Data) => postReqIndex(payload), {
    onMutate: async (payload: Data) => {
        
        console.log(payload)
        await queryClient.cancelQueries('reqIndex')

        const previousState = queryClient.getQueryData<Data[]>('reqIndex')

        if (previousState) {
            queryClient.setQueryData<Data[]>('reqIndex', prev => [payload, ...(typeof prev === 'object' ? prev : [])])
        }

        return { previousState }
    }
})