import React from 'react'
// COMPONENTS
import Header from '../../components/Banner'
import Table from '../../components/Table/Table'
import Button from '../../components/Button'
// PAGE
import ProjectIndexForm from './ProjectIndexForm'
// CONSTANTS
import { TABLE_LIST, CREATE_FORM } from './PAGE_CONSTANTS'
// CUSTOM HOOK
import { useReqIndex } from './useProjectIndex'


const ProjectIndex: React.FC = () => {

    const {
        data,
        removeProjectIndex,
        currentComponent,
        setCurrentComponent,
        formData,
        setFormData,
        handleInputChange,
        handleFormSubmit
    } = useReqIndex()

    // configure to change table header
    const theadData = ['', 'Project - Line', 'Description, Tags', '']
    const tbodyData = data


    return (
        <>
            <Header size='medium'>
                <p>Project Index</p>
                <Button secondary onClick={() => setCurrentComponent(prev => prev === TABLE_LIST ? CREATE_FORM : TABLE_LIST)} >
                    { 
                        currentComponent === TABLE_LIST ? 'Add' :
                        currentComponent === CREATE_FORM ? 'Back' : ''
                    }
                </Button>
            </Header>
            { currentComponent === TABLE_LIST &&
            <Table 
                theadData={theadData}
                tbodyData={tbodyData}
                deleteItem={removeProjectIndex}
            />
            }
            { currentComponent === CREATE_FORM &&
            <ProjectIndexForm
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                setCurrentComponent={setCurrentComponent}
            />
            }
        </>
    )
}

export default ProjectIndex
