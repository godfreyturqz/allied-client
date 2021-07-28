import { useMutation } from 'react-query'
import { postReqIndex } from '../../services/ReqIndexService'
import { Data } from './types'


export const usePostReqIndex = () => {
    const mutation = useMutation((payload: Data) => postReqIndex(payload))

    return { 
        mutation 
    }
}
