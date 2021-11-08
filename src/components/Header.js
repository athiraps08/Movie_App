import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography  variant="h5" align="center">MOVIE APP</Typography>
                    <Link style={{textDecoration:"none",paddingLeft:200}} to="/"> <Typography  variant="h6" style={{color:"#ffffff",padding:20}}>search</Typography></Link>
                    <Link style={{textDecoration:"none"}} to="/add"><Typography variant="h6" style={{color:"#ffffff",padding:20}}>Add Movie</Typography></Link>
                    <Link style={{textDecoration:"none"}} to="/view"><Typography variant="h6" style={{color:"#ffffff",padding:20}}>View</Typography></Link>
                    <Link style={{textDecoration:"none"}} to="/delete"><Typography variant="h6" style={{color:"#ffffff",padding:20}}>Delete</Typography></Link>
                    <Link style={{textDecoration:"none"}} to="/update"><Typography variant="h6" style={{color:"#ffffff",padding:20}}>Update</Typography></Link>
                    

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header