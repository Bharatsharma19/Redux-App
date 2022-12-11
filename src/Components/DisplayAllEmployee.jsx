import { React } from 'react'
import { useSelector } from 'react-redux'
import MaterialTable from '@material-table/core'
import { Avatar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, TextField, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles';

const DisplayAllEmployee = () => {
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)

    var employee = useSelector(state => state.employee)
    // var keys = Object.keys(employee)
    var employeeRecord = Object.values(employee)

    // eslint-disable-next-line
    {/*
    console.log(employee)
    console.log(keys)
    console.log(employeeRecord)
    */}

    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [picture, setPicture] = useState("")

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    const handlePicture = (event) => {
        setPicture(URL.createObjectURL(event.target.files[0]))
    }

    const handleDialogOpen = async (rowData) => {
        // setButtonStatus({ upload: true })

        setMobileNumber(rowData.mobileNumber)
        setEmail(rowData.email)
        setName(rowData.name)
        setCity(rowData.city)
        setPicture(rowData.picture)

        setOpen(true)
    }

    const handleDeleteEmployee = (rowData) => {
        dispatch({ type: 'DELETE_EMPLOYEE', payload: [rowData.mobileNumber] })
        alert("Employee Deleted")
        setRefresh(!refresh)
    }

    const handleEdit = (rowData) => { }

    function dialogContent() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Edit Employee Details
                </Grid>
                <Grid item xs={12}>
                    <TextField value={mobileNumber} label="Mobile Number" onChange={(event) => setMobileNumber(event.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField value={email} label="Email Id" onChange={(event) => setEmail(event.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField value={name} label="Name" onChange={(event) => setName(event.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField value={city} label="City" onChange={(event) => setCity(event.target.value)} fullWidth />
                </Grid>
                <Grid
                    item
                    xs={6}
                    style={{ marginTop: "8px", marginBottom: "4px", display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Avatar
                        alt="Image"
                        src={picture}
                        sx={{ width: 128, height: 56 }}
                        variant="rounded"
                    />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 8 }}>
                    <Button fullWidth variant='outlined' onClick={handleEdit}>
                        Edit Details
                    </Button>
                </Grid>
                <br />
            </Grid>
        )
    }

    function displayDialog() {
        return (
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={{ display: "block", width: "54%", padding: 10, borderRadius: 12, marginLeft: "auto", marginRight: "auto", }}
            >
                <DialogContent>
                    {dialogContent()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    function displayEmployee() {
        return (
            <MaterialTable
                title="Employees"
                columns={[
                    { title: 'Mobile No.', field: 'mobileNumber' },
                    { title: 'Email Id', field: 'email' },
                    { title: 'Name', field: 'name' },
                    { title: 'City', field: 'city' },
                    {
                        title: 'Picture', field: 'picture',
                        render: (rowData) => <Avatar src={`${rowData.picture}`} variant="rounded" style={{ width: 84, height: 50 }} />
                    },
                ]}
                data={employeeRecord}
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit Employee Details',
                        onClick: (event, rowData) => { handleDialogOpen(rowData) },
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete Employee',
                        onClick: (rowData) => { handleDeleteEmployee(rowData) },
                    },
                    {
                        icon: 'add',
                        tooltip: 'Add Employee',
                        onClick: () => { navigate("/") },
                        isFreeAction: true,
                    }
                ]}
            />
        )
    }

    return (
        <>
            {displayEmployee()}
            {displayDialog()}
        </>
    )
}

export default DisplayAllEmployee
