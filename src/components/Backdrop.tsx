import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress';


interface BackdropIconProps {
    open: boolean
}

const BackdropIcon: React.FC<BackdropIconProps> = ({
    open
}) => {

    return (
        <Backdrop open={open}>
            <CircularProgress />
        </Backdrop>
    )
}

export default BackdropIcon
