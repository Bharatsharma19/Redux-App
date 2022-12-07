import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'

const Employee = () => {

    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [picture, setPicture] = useState("")

    const handlePicture = (event) => {
        setPicture(URL.createObjectURL(event.target.files[0]))
    }

    var dispatch = useDispatch()

    const handleSubmit = () => {
        var body = { mobileNumber: mobileNumber, email: email, name: name, city: city, picture: picture }

        dispatch({ type: 'ADD_EMPLOYEE', payload: [mobileNumber, body] })
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={2} style={{ width: 300, marginTop: 4, }}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Mobile Number" onChange={(event) => setMobileNumber(event.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email Id" onChange={(event) => setEmail(event.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" onChange={(event) => setName(event.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="City" onChange={(event) => setCity(event.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant='outlined'>
                            Upload Picture
                            <input hidden accept='image/' type='file' onChange={handlePicture} />
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 8 }}>
                        <Button fullWidth variant='contained' onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Employee
