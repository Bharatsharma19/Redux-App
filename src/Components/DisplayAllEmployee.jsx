import { React } from 'react'
import { useSelector } from 'react-redux'
import MaterialTable from '@material-table/core'
import { Avatar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

    const handleDeleteEmployee = (rowData) => {
        dispatch({ type: 'DELETE_EMPLOYEE', payload: [rowData.mobileNumber] })
        alert("Employee Deleted")
        setRefresh(!refresh)
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
                        onClick: (rowData) => { },
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
            <div>
                {displayEmployee()}
            </div>
        </>
    )
}

export default DisplayAllEmployee
