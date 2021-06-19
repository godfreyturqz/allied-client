import React from 'react'
import DeleteIcon from '../../icons/DeleteIcon'
import ButtonIcon from '../ButtonIcon'
import { Table as StyledTable, TableRow } from './TableStyles'


type Data = {
    uniqid: string
    reqLine: string
    description: string
}

type TableProps = {
    theadData: string[] | React.ReactNode[]
    tbodyData: Data[]
    removeReqIndex: (id: string) => void
}

const Table: React.FC<TableProps> = ({
    theadData,
    tbodyData,
    removeReqIndex
}) => {

    return (
        <StyledTable>
            <thead>
                <TableRow>
                    {
                        tbodyData && theadData && theadData.map(tableHead => <th>{tableHead}</th>)
                    }
                </TableRow>
            </thead>
            <tbody>
                {
                    tbodyData && tbodyData.map(obj => 
                        <TableRow>
                            {
                                Object.entries(obj).map(([key, value]) => <td>{key === 'uniqid' ? '' : value}</td>)
                            }
                            <td>
                                <ButtonIcon onClick={() => removeReqIndex(obj.uniqid)}>
                                    <DeleteIcon/>
                                </ButtonIcon>
                            </td>
                        </TableRow>
                    )
                }
            </tbody>
        </StyledTable>
    )
}

export default Table
