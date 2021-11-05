import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
//import React from 'react'
import React, { useState } from 'react'
import useForm from './Read'

const EditMovie = () => {
    var [value,setValue]=useForm({"Movie":""})
    var [v1,setVal1]=useForm({"Movie":"","Actor":"","Actress":"","Director":"","Released_Year":"","Camera":"","Producer":"","Language":""})
    var [movData,changeMovData]=useState([])
    const readData=()=>{
        console.log(value)
axios.post("http://localhost:8082/searchUpd",value).then(
    (response)=>{
        console.log(response.data)
        changeMovData(
            movData=response.data

        )

    })        



    }
    return (
        <div>
            <TextField onChange={setValue} name="Movie" value={value.Movie} label="Enter the movie name" fullWidth variant="outlined" margin="normal" />
            <Button onClick={readData} fullWidth variant="contained" color="primary">Search</Button>
 <Table >
     <TableRow>
         <TableCell>Movie</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Movie} name="Movie" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell>Actor</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Actor} name="Actor" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell>Actress</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Actress} name="Actress" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell>Director</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Director} name="Director" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell>Released_Year</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Released_Year} name="Released_Year" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell>Camera</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Camera} name="Camera" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell>Producer</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Producer} name="Producer" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell>Language</TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.Language} name="Language" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
        
         <TableCell><Button variant="contained" fullWidth color="secondary">Update</Button></TableCell>
     </TableRow>

 </Table>
        </div>
    )
}

export default EditMovie
