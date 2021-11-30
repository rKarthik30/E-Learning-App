import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import AdminContainer from './admin/adminContainer' 
import StudentContainer from './student/studentContainer'


const ELearningContainer = (props) =>  {
  const admin = useSelector((state) =>{
    return state.admin
  })
  const student = useSelector((state) =>{
    return state.student
  })
  return (
    <div>
      {(admin.isLoading || student.isLoading) ? (
          <>
            <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link> | <Link to='/student'>Student</Link>
          </>
        ) : (
          <>
            {student.isLogin ? <StudentContainer/> : <AdminContainer/> }
          </>
        )
      } 

      
    </div>
  )
}

export default ELearningContainer