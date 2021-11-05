import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'

const AddMovie = () => {
    var [value,setValue]=useForm({"Movie":"","Actor":"","Actress":"","Director":"","Released_Year":"","Camera":"","Producer":"","Language":""})
    var [addData,addMovData]=useState([])
    const readData=()=>{
        console.log(value)
axios.post("http://localhost:8082/add",value).then(
    (response)=>{
        console.log(response.data)
        addMovData(
            addData=response.data

        )

    }
    
    )        



    }
    return (
        <div>
            <TextField onChange={setValue} name="Movie" value={value.Movie} label="Movie" fullWidth variant="outlined" margin="normal" />
            <TextField onChange={setValue} name="Actor" value={value.Actor} label="Actor" fullWidth variant="outlined" margin="normal" />
            <TextField onChange={setValue} name="Actress" value={value.Actress} label="Actress" fullWidth variant="outlined" margin="normal" />
            <TextField onChange={setValue} name="Director" value={value.Director} label="Director" fullWidth variant="outlined" margin="normal" />
            <TextField onChange={setValue} name="Released_Year" value={value.Released_Year} label="Released-Year" fullWidth variant="outlined" margin="normal" />
            <TextField onChange={setValue} name="Camera" value={value.Camera} label="Camera" fullWidth variant="outlined" margin="normal" />
            <TextField onChange={setValue} name="Producer" value={value.Producer} label="Producer" fullWidth variant="outlined" margin="normal" />
            <TextField onChange={setValue} name="Language" value={value.Language} label="Language" fullWidth variant="outlined" margin="normal" />
            <Button onClick={readData} variant="contained" color="secondary" fullWidth>Add</Button>
        </div>
    )
}

export default AddMovie
