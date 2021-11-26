import React from 'react'
import {useSelector} from 'react-redux'

const StudentList = () => {
    const student = useSelector((state) => {
        return state.admin.student
    })

    return(
        <div>
            <h2>Student list</h2>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>Sl.No.</th>
                        <th>Student Name</th>
                        <th>Student Email</th>
                        <th>Role</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((ele,i) => {
                        return(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.role}</td>
                                <td><button>Remove</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default StudentList