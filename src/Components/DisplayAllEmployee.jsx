import { React } from 'react'
import { useSelector } from 'react-redux'

const DisplayAllEmployee = () => {
    var employee = useSelector(state => state.employee)
    var keys = Object.keys(employee)
    var employeeRecord = Object.values(employee)

    return (
        <div>DisplayAllEmployee</div>
    )
}

export default DisplayAllEmployee
