import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'

const Employee = () => {

    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [picture, setPicture] = useState("")

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
                        <TextField fullWidth label="Picture" onChange={(event) => setPicture(event.target.value)} />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 8 }}>
                        <Button fullWidth variant='contained'>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Employee
