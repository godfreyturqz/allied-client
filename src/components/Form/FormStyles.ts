import styled from 'styled-components'

export const FormContainer = styled.div`
    padding: 0px 20%;

    form {
        background: var(--white);
        border-radius: 16px 16px 0px 0px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        position: relative;
        bottom: 4rem;

        header {
            height: 4rem;
            font-weight: 500;
            border-bottom: 1px solid rgba(224, 224, 224, 1);
            padding: 18px 18px 0px 18px;
        }

        .input-group {
            padding: 18px;

            span {
                margin-right: 12px;
            }
        }
    }
`