import { Grid } from '@material-ui/core'
import React from 'react'
import AddMovie from './AddMovie'
import SearchMovie from './SearchMovie'
import ViewMovie from './ViewMovie'

const MovieApp = () => {
    return (
        <div>
            <Grid container>
            <Grid item xs={12} sm={6} md={6}>
                <AddMovie />
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
                <SearchMovie />
                <ViewMovie />
                 </Grid>
            


            </Grid>
        </div>
    )
}

export default MovieApp
