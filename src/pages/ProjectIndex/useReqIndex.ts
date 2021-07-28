import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import uniqid from 'uniqid'
// SERVICES
import { getReqIndex } from '../../services/ReqIndexService'
import { postReqIndex, deleteReqIndex } from '../../services/ReqIndexService'
// CONSTANTS
import { MAIN } from './pageConstants'
//TYPES
import { InputChangeEvent, SubmitFormEvent } from '../../types'
import { Data, ReqIndexForm } from './types'


const initialState = {
    reqLine: '',
    description: ''
}

export const useReqIndex = () => {

    const [currentComponent, setCurrentComponent] = useState(MAIN)
    const [formData, setFormData] = useState<ReqIndexForm>(initialState)

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

    const handleInputChange = (e: InputChangeEvent) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = (e: SubmitFormEvent, formData: ReqIndexForm) => {

        e.preventDefault()
        if(!formData.reqLine || !formData.description) return console.log('Fill up the required fields.')

        addReqIndex(formData)
        setFormData(initialState)
    }

    const addReqIndex = (formData: ReqIndexForm) => {

        try {

            const newReqIndex = {
                uniqid: uniqid(),
                ...formData
            }

            mutation.mutate(newReqIndex)
            setCurrentComponent(MAIN)

        } catch (error) {
            console.log(error)
        }
    }

    const removeReqIndex = (id: string) => {
        console.log(id)
        try {
            deleteReqIndex(id)
            // create a useMutation for delete

        } catch (error) {
            console.log(error)
        }
    }

    return {
        data,
        removeReqIndex,
        currentComponent,
        setCurrentComponent,
        formData,
        setFormData,
        handleInputChange,
        handleFormSubmit
    }
}
