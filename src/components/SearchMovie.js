import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
//import React from 'react'
import React, { useState } from 'react'
import useForm from './Read'

const SearchMovie = () => {
    var [value,setValue]=useForm({"Movie":""})
    var [movData,changeMovData]=useState([])
    const readData=()=>{
        console.log(value)
axios.post("http://localhost:8082/search",value).then(
    (response)=>{
        console.log(response.data)
        changeMovData(
            movData=response.data

        )

    }
    
    )        



    }
    return (
        <div>
           <TextField onChange={setValue} name="Movie" value={value.Movie} label="Search here" fullWidth variant="outlined" margin="normal" />
            <Button onClick={readData} fullWidth variant="contained" color="primary">Search</Button>
 
<Table style={{marginTop:2}}>
    <TableHead>
        <TableRow>
            <TableCell>Movie</TableCell>
            <TableCell>Actor</TableCell>
            <TableCell>Actress</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Released_Year</TableCell>
            <TableCell>Camera</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>Language</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {movData.map((value,index)=>{
            return <TableRow>
                <TableCell>{value.Movie}</TableCell>
                <TableCell>{value.Actor}</TableCell>
                <TableCell>{value.Actress}</TableCell>
                <TableCell>{value.Director}</TableCell>
                <TableCell>{value.Released_Year}</TableCell>
                <TableCell>{value.Camera}</TableCell>
                <TableCell>{value.Producer}</TableCell>
                <TableCell>{value.Language}</TableCell>
               
                
                
                
                </TableRow>
        })}
    </TableBody>

</Table>


























        </div>
    )
}

export default SearchMovie
