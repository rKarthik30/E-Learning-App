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
      <nav className='navbar navbar-expand-lg navbar-light bg-ligth'>
        <div className='container-fluid'>
          <h1 className='navbar-brand'>Learn from Home</h1>
            <ul className='nav navbar-nav'>
                    {(admin.isLoading || student.isLoading) ? (
                        <>
                          <li><Link to='/'>Home</Link></li> 
                          <li><Link to='/admin'>Admin</Link></li>  
                          <li><Link to='/student'>Student</Link></li>
                        </>
                      ) : (
                        <>
                          {student.isLogin ? <StudentContainer/> : <AdminContainer/> }
                        </>
                      )
                    } 
            </ul>
        </div>
      </nav>
      
    </div>
  )
}

export default ELearningContainer