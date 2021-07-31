import React from 'react'
import DeleteIcon from '../../icons/DeleteIcon'
import ButtonIcon from '../ButtonIcon'
import { Table as StyledTable, TableRow } from './TableStyles'
import { TableContainer } from './TableStyles'


type Data = {
    uniqid: string
    reqLine: string
    description: string
}

interface TableProps {
    theadData: string[] | React.ReactNode[]
    tbodyData: Data[] | undefined
    deleteItem?: (id: string) => void
}

const Table: React.FC<TableProps> = ({
    theadData,
    tbodyData,
    deleteItem
}) => {

    return (
        <TableContainer>
        <StyledTable>
            <thead>
                <TableRow>
                    {
                        theadData?.map(tableHead => <th>{tableHead}</th>)
                    }
                </TableRow>
            </thead>
            <tbody>
                {
                    tbodyData
                    ?.sort((prev, next)=> prev.reqLine > next.reqLine ? 1 : -1)
                    .map((obj: Data) => 
                        <TableRow>
                            {
                                Object.entries(obj).map(([key, value]) => 
                                    <td>{key === ('uniqid' || '_id') ? null : value}</td>
                                )
                            }
                            <td>
                                <ButtonIcon onClick={() => deleteItem?.(obj.uniqid)}>
                                    <DeleteIcon/>
                                </ButtonIcon>
                            </td>
                        </TableRow>
                    )
                }
            </tbody>
        </StyledTable>
        </TableContainer>
    )
}

export default Table
