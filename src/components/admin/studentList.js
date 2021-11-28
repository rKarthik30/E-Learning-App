import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startStudentList,startStudentDelete} from '../../action/adminAction'

const StudentList = () => {
    const student = useSelector((state) => {
        return state.admin.student
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startStudentList())
    },[])

    const handleRemove = (id) =>{
        dispatch(startStudentDelete(id))
    }

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
                                <td><button onClick={ () => {handleRemove(ele._id)}}>Remove</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default StudentList