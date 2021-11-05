import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'




const ViewMovie = () => {
    var [del,delValue]=useForm({"Movie":""})
    var [value,setValue]=useForm({"Movie":"","Actor":"","Actress":"","Director":"","Released_Year":"","Camera":"","Producer":"","Language":""})
    var [viewData,viewMovData]=useState([])
    const readData=()=>{
        console.log(value)
        
axios.get("http://localhost:8082/view").then(
    (response)=>{
        console.log(response.data)
        viewMovData(
            viewData=response.data

        )

    }
    
    ) }
    const deleteData=()=>{
        console.log(del._id)
        axios.post("http://localhost:8082/delete",del._id).then(
            (response)=>{
                console.log(response.data)
                delValue(
                    delValue=response.data
                )
                
            }
        )
    }
    return (
        <div>
          <Button onClick={readData} fullWidth variant="contained" color="primary">View Movie Lists</Button> 
          
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
        {viewData.map((value,index)=>{
            return <TableRow>
                <TableCell> {value.Movie}</TableCell>
                <TableCell>  {value.Actor}</TableCell>
                <TableCell>   {value.Actress}</TableCell>
                <TableCell>  {value.Director}</TableCell>
                <TableCell> {value.Released_Year}</TableCell>
                <TableCell> {value.Camera}</TableCell>
                <TableCell> {value.Producer}</TableCell>
                <TableCell> {value.Language}</TableCell>
                <TableCell><Button onClick={deleteData} color="secondary" variant="contained">Delete</Button></TableCell>
               
                
                
                
                </TableRow>
        })}
    </TableBody>

</Table>
 
        </div>
    )
}

export default ViewMovie
