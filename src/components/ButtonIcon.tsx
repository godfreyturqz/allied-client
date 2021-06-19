import React from 'react'
import styled from 'styled-components'

const StyledButtonContainer = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 6px;

    &:hover {
        border-radius: 100%;
        background-color: rgba(0, 0, 0, 0.1);
    }

    &:active {
        border-radius: 100%;
        background-color: rgba(0, 0, 0, 0.2);
    }
`

interface ButtonIconProps {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
    children,
    onClick
}) => {
    return (
        <StyledButtonContainer onClick={onClick}>
            {children}
        </StyledButtonContainer>
    )
}

export default ButtonIcon
