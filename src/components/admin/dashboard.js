import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import swal from 'sweetalert'
import CreateCourse from './createCoruses'
import {startCourse,startCourseDelete} from '../../action/adminAction'

const Dashboard = () => {
    const [toggle,setToggle] = useState(false)
    const admin = useSelector((state) => {
        return state.admin.course
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startCourse())
    },[])

    const click = () => {
        setToggle(!toggle)
    }
    
    const handleRemove = (id) => {
        dispatch(startCourseDelete(id))
    }

    return(
        <div>
            <button onClick={click}>Create Course</button>
            {toggle && <CreateCourse click={click}/>}
            { admin.length === 0 ? (
                <h2>Add Courses</h2>
            ) : (
                <div>
                <h2>Total Course offered - {admin.length}</h2>
                <table border='1px'>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Course Title</th>
                            <th>Course Level</th>
                            <th>No. of Students Enrolled</th>
                            <th>Course Info</th>
                            <th>Edit Course</th>
                            <th>Remove Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admin.map((ele,i) => {
                            return (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{ele.category}</td>
                                    <td>{ele.level}</td>
                                    <td>{ele.students.length}</td>
                                    <td><button>View Details</button></td>
                                    <td><button>Edit</button></td>
                                    <td><button onClick={ () => {handleRemove(ele._id)}}>Remove</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            )}
        </div>
    )
}

export default Dashboard