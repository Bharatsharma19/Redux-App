import { React, useEffect } from 'react'
import { useSelector } from 'react-redux'

const DisplayAllEmployee = () => {
    var employee = useSelector(state => state.employee)
    console.log(employee)

    return (
        <div>DisplayAllEmployee</div>
    )
}

export default DisplayAllEmployee
