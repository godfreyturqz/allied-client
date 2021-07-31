import React, { FormEvent, MouseEvent } from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
    primary?: boolean
    secondary?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
    padding: 6px 16px;
    border-radius: 16px;
    min-width: 128px;

    background-color: ${props =>
        props.primary ? `var(--primary)` : null ||
        props.secondary ? `var(--secondary)` : null
    };

    color: ${props =>
        props.primary ? `var(--white)` : null ||
        props.secondary ? `var(--black)` : null
    };
    font-weight: 500;

    &:hover{
        background-color: ${props =>
            props.primary ? `var(--primary-hover)` : null ||
            props.secondary ? `var(--secondary-hover)` : null
        };
        transition: 250ms;
    }
`

interface ButtonProps {
    children: string
    onClick?: (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => void
    primary?: boolean
    secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    ...props
}) => {
    return (
        <StyledButton
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

export default Button
