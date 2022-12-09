import { React } from 'react'
import { useSelector } from 'react-redux'
import MaterialTable from '@material-table/core'
import { Avatar } from '@mui/material'

const DisplayAllEmployee = () => {
    var employee = useSelector(state => state.employee)
    var keys = Object.keys(employee)
    var employeeRecord = Object.values(employee)

    const handleDeleteEmployee = (rowData) => {

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
                        onClick: (event, rowData) => { },
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete Employee',
                        onClick: (rowData) => { handleDeleteEmployee(rowData) },
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
