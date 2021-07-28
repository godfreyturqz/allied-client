import { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
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

    const [fetchedData, setFetchedData] = useState<Data[]>([])
    const [currentComponent, setCurrentComponent] = useState(MAIN)
    const [formData, setFormData] = useState<ReqIndexForm>(initialState)

    const { data } = useQuery('reqIndex', getReqIndex)
    const mutation = useMutation((payload: Data) => postReqIndex(payload))

    const handleInputChange = (e: InputChangeEvent) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = (
        e: SubmitFormEvent,
        formData: ReqIndexForm
    ) => {

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

            postReqIndex(newReqIndex)
    
            setFetchedData(prev => [{...newReqIndex}, ...prev])
            setFormData(initialState)
            setCurrentComponent(MAIN)

        } catch (error) {
            console.log(error)
        }
    }

    const removeReqIndex = (id: string) => {
        console.log(id)
        try {
            deleteReqIndex(id)
            const filteredData = fetchedData.filter(value => value.uniqid !== id)
            setFetchedData(() => [...filteredData])

        } catch (error) {
            console.log(error)
        }
    }

    return {
        data,
        fetchedData,
        setFetchedData,
        removeReqIndex,
        currentComponent,
        setCurrentComponent,
        formData,
        setFormData,
        handleInputChange,
        handleFormSubmit
    }
}
