import React from 'react'
// CONTAINER
import { TableContainer } from '../../components/Table/TableStyles'
// COMPONENTS
import Banner from '../../components/Banner'
import Table from '../../components/Table/Table'
import Button from '../../components/Button'
// PAGE
import ProjectIndexForm from './ProjectIndexForm'
// CONSTANTS
import { MAIN, FORM } from './pageConstants'
// CUSTOM HOOK
import { useReqIndex } from './useReqIndex'


const ProjectIndex: React.FC = () => {

    const {
        data,
        removeReqIndex,
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
            <Banner size='medium'>
                <p>Project Index</p>
                <Button secondary onClick={() => setCurrentComponent(prev => prev === MAIN ? FORM : MAIN)} >
                    { 
                        currentComponent === MAIN ? 'Add' :
                        currentComponent === FORM ? 'Back' : ''
                    }
                </Button>
            </Banner>
            {
                currentComponent === MAIN &&
                <TableContainer>
                    <Table 
                        theadData={theadData}
                        tbodyData={tbodyData}
                        removeReqIndex={removeReqIndex}
                    />
                </TableContainer>
            }

            {
                currentComponent === FORM &&
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
