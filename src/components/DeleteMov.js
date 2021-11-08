import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DeleteMov = () => {
    var [delData,setdelData]=useState([])


    useEffect(
        ()=>{
            fetchData()
        },[]
    )
    const fetchData=()=>{
    
        axios.get("http://localhost:8082/view").then(
            (response)=>{
                console.log(response.data)
    
                setdelData(
                    delData=response.data
                )
    
            }
        )
    }
    const deleteBtn=(id)=>{
        const data={"_id":id}
        
        axios.post("http://localhost:8082/delete",data).then(
            (response)=>{
                console.log(response.data.data)
                alert(response.data.status)
                fetchData()
    
            }
        )
    
    }
    

    return (






        <div>
            <Typography  variant="h6"><b>Delete movie</b></Typography>
                     
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
        {delData.map((value,index)=>{
            return <TableRow>
                <TableCell> {value.Movie}</TableCell>
                <TableCell>  {value.Actor}</TableCell>
                <TableCell>   {value.Actress}</TableCell>
                <TableCell>  {value.Director}</TableCell>
                <TableCell> {value.Released_Year}</TableCell>
                <TableCell> {value.Camera}</TableCell>
                <TableCell> {value.Producer}</TableCell>
                <TableCell> {value.Language}</TableCell>
                <TableCell><Button  onClick={()=>{deleteBtn(value._id)}} color="secondary" variant="contained">Delete</Button></TableCell>
               
                
                
                
                </TableRow>
        })}
    </TableBody>

</Table>
            
        </div>
    )
}

export default DeleteMov
