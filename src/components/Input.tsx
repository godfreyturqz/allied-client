import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

type InputProps = {
    id?: string
    name: string
    value: string
    handleInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    label?: string
    placeholder?: string
}

const StyledInput = styled.div`
    label {
        color: rgb(107, 114, 128);
    }
    input {
        width: 100%;
        padding: 18px 14px;
        border: 1px solid var(--inactive);
        border-radius: 5px;
    }
`

const Input: React.FC<InputProps> = ({
    id,
    name,
    value,
    handleInputChange,
    label,
    placeholder
}) => {
    
    return (
        <StyledInput>
            <div>
                <label htmlFor={id}>{label}</label>
            </div>
            <br />
            <div>
                <input 
                    type="text" 
                    autoComplete="off"
                    id={id} 
                    name={name}
                    onChange={handleInputChange} 
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </StyledInput>
    )
}

export default Input
