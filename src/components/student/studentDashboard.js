import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startCourse} from '../../action/studentAction'

const StudentDashboard = (props) =>  {
  const [toggle,setToggle] = useState(true)
  const course = useSelector((state) => {
    return state.student.courses
  })
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(startCourse())
  },[])

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleEnroll = (id) => {

  }

  const handleUnenroll = (id) => {

  }

  return (
    <div>
      {course.length === 0 ? (
        <h2>No Courses Added</h2>
      ) : (
        <div>
          <h2>Total courses offered - {course.length}</h2>
          <table border='1px'>
            <thead>
              <tr>
                <th>Sl.No.</th>
                <th>Course Title</th>
                <th>Course Level</th>
                <th>Course Duration</th>
                <th>Course Validity</th>
                <th>Enroll/Unenroll</th>
              </tr>
            </thead>
            <tbody>
              {course.map((ele,i) => {
                return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{ele.category}</td>
                    <td>{ele.level}</td>
                    <td>{ele.duration} months</td>
                    <td>{ele.validity} months</td>
                    <td>{toggle ? (
                      <button onClick={handleToggle}>Enroll</button> 
                      ) : (
                      <button onClick={handleToggle}>Unenroll</button>
                    )}</td>
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

export default StudentDashboard