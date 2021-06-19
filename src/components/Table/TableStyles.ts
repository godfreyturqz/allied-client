import styled from 'styled-components'

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    bottom: 4rem;

    padding: 0px 3%;
`

export const Table = styled.table`
    border-radius: 16px 16px 0px 0px;
    background: var(--white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    thead {
        display: table;
        width: 100%;
        table-layout: fixed;
    }

    tbody {
        display: block;
        max-height: 70vh;
        overflow: auto;

        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        
        &:hover {
            /* for firefox */
            scrollbar-width: thin;
            scrollbar-color: var(--light);

            /* for non-firefox */
            ::-webkit-scrollbar {
                overflow: overlay;
                width: 8px;
            }
            
            ::-webkit-scrollbar-track {
                display: initial;
            }

            ::-webkit-scrollbar-thumb {
                background-color: var(--light);
                border-radius: 5px;
            }
        }
    }
`

export const TableRow = styled.tr`
    display: table;
    width: 100%;
    table-layout: fixed;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    
    th, td {
        color: rgb(17, 24, 39);
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        text-align: left;
        height: 4rem;
        font-size: 0.9rem;
        max-width: 200px;
    }

    th {
        font-weight: 500;
    }

    th:first-child, td:first-child {
        padding-left: 24px;
        width: 5%;
    }

    th:nth-child(2), td:nth-child(2) {
        width: 150px;
    }

    th:last-child, td:last-child {
        width: 10%;
    }
`

export const TableNavContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
        padding: 0px 24px;
    }

`
