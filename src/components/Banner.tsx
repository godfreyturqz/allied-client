import React from 'react'
import styled from 'styled-components'


interface BannerProps extends StyledBannerProps {
    children?: React.ReactNode | string | number
}

interface StyledBannerProps {
    size?: string
}

const StyledBanner = styled.div`
    height: ${(props: StyledBannerProps): string => {
        switch(props.size){
            case 'small': 
                return '100px'
            case 'medium':
                return '200px'
            case 'large':
                return '500px'
            default:
                return '50px'
        }
    }};
    width: 100%;
    background: linear-gradient(to right, #1b2330 0%, #252f3e 100%);

    padding: 0px 3%;

    display: flex;
    align-items: center;

    p {
        color: var(--white);
        font-size: 2rem;
        font-weight: 600;

        margin-right: auto;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`

const Banner: React.FC<BannerProps> = ({children, size}) => {
    return (
        <StyledBanner size={size}>
            {children}
        </StyledBanner>
    )
}

export default Banner
