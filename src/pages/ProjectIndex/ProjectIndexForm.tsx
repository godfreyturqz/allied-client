import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FormContainer } from '../../components/Form/FormStyles'
import { MAIN } from './pageConstants'
import { InputChangeEvent, SubmitFormEvent } from '../../types'
import { ReqIndexForm } from './types'


interface ReqIndexNewProps {
    formData: ReqIndexForm
    setFormData: React.Dispatch<React.SetStateAction<ReqIndexForm>>
    handleInputChange: (e: InputChangeEvent) => void
    handleFormSubmit: (e: SubmitFormEvent, formData: ReqIndexForm) => void
    setCurrentComponent: React.Dispatch<React.SetStateAction<string>>
}

const ReqIndexNew: React.FC<ReqIndexNewProps> = ({
    formData,
    setFormData,
    handleInputChange,
    handleFormSubmit,
    setCurrentComponent
}) => {

    const back = (e: SubmitFormEvent) => {
        e.preventDefault()
        setCurrentComponent(MAIN)
        setFormData({
            reqLine: '',
            description: ''
        })
    }

    return (
        <FormContainer>
            <form>
                <header>
                    New Request Index
                </header>
                <div className='input-group'>
                    <Input
                        name='reqLine'
                        value={formData.reqLine}
                        handleInputChange={handleInputChange}
                        label='Request - Line'
                        placeholder="What's the Req-Line number?"
                    />
                    <br />
                    <Input
                        name='description'
                        value={formData.description}
                        handleInputChange={handleInputChange}
                        label='Description - Tags'
                        placeholder='Add details or tags'
                    />
                    <br />
                    <span>
                        <Button primary onClick={(e) => handleFormSubmit(e, formData)}>
                            Add
                        </Button>
                    </span>
                    <span>
                        <Button primary onClick={(e) => back(e)}>
                            Back
                        </Button>
                    </span>
                </div>
            </form>
        </FormContainer>
    )
}

export default ReqIndexNew
