import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography  variant="h5" align="center">MOVIE APP</Typography>
                    

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header