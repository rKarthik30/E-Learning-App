import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startStudentAccount} from '../../action/studentAction'

const StudentAccount = (props) =>  {
  const student = useSelector((state) => {
    return state.student.data
  })
  const dispatch = useDispatch()

  // dispatch(startStudentAccount())


  return (
    <div>
      {/* <h2> Student corner</h2>
      <h3> Name - {student.name}</h3>
      <h3>Email - {student.email}</h3>
      <h3> Role - {student.role}</h3> */}
      <h3>Data to be added</h3>
    </div>
  )
}

export default StudentAccount