import { useState } from 'react'
import uniqid from 'uniqid'
// QUERIES
import { useReactQuery } from './useReactQuery'
// CONSTANTS
import { TABLE_LIST } from './PAGE_CONSTANTS'
//TYPES
import { InputChangeEvent, SubmitFormEvent } from '../../types'
import { ReqIndexForm, Data } from './types'


const initialState = {
    reqLine: '',
    description: ''
}

export const useReqIndex = () => {

    const [currentComponent, setCurrentComponent] = useState(TABLE_LIST)
    const [formData, setFormData] = useState(initialState)

    const { data, createProjectIndex, deleteProjectIndex } = useReactQuery()

    //----------------
    // FORM HANDLER
    //----------------
    const handleInputChange = (e: InputChangeEvent) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = (e: SubmitFormEvent, formData: ReqIndexForm) => {

        e.preventDefault()
        if(!formData.reqLine || !formData.description) return console.log('Fill up the required fields.')

        const newFormData = {
            uniqid: uniqid(),
            ...formData
        }

        addProjectIndex(newFormData)
        setFormData(initialState)
        setCurrentComponent(TABLE_LIST)
    }

    //----------------------------
    // REACT-QUERY CRUD FUNCTIONS
    //----------------------------
    const addProjectIndex = (formData: Data) => {
        createProjectIndex.mutate(formData)
    }

    const removeProjectIndex = (id: string) => {
        deleteProjectIndex.mutate(id)
    }

    return {
        data,
        removeProjectIndex,
        currentComponent,
        setCurrentComponent,
        formData,
        setFormData,
        handleInputChange,
        handleFormSubmit
    }
}
