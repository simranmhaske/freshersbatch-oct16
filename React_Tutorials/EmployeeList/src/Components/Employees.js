import React from 'react'
import './Style.css'
const Employees=()=>{

    const Employee=[
        {
            'Name': 'Charlie',
            'Job': 'Janitor'
        },
        {
            'Name': 'Mac',
            'Job': 'Bouncer'
        },
        {
            'Name': 'Dee',
            'Job': 'Actress'
        },
        {
            'Name': 'Denis',
            'Job': 'Bartender'
        },
    ]
    const EmployeeList=(Employee,index)=>{
        return(
            <tr key={index}>
                <td>{Employee.Name}</td>
                <td>{Employee.Job}</td>
            </tr>

        )
    }
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
                </thead>
                <tbody>
                    {Employee.map(EmployeeList)}
                </tbody>
            </table>
        </div>
    )
}
export default Employees