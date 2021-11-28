import React from 'react'
import {useSelector} from 'react-redux'
import {Link,Route,withRouter} from 'react-router-dom'
import Home from './home&login/Home'
import adminContainer from './admin/adminContainer' 
import adminRegister from './admin/adminRegister'
import adminLogin from './admin/adminLogin'
import adminAccount from './admin/adminAccount'
import studentRegister from './admin/studentRegister'
import dashboard from './admin/dashboard'
import studentList from './admin/studentList'
import studentContainer from './student/studentContainer'
import studentLogin from './student/studentLogin'
import studentAccount from './student/studentAccount'

const ELearningContainer = () =>  {
  const admin = useSelector((state) =>{
    return state.admin
  })
  const student = useSelector((state) =>{
    return state.student
  })
  return (
    <div>
      {(admin.isLoading || student.isLoading) && 
        <>
          <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link> | <Link to='/student'>Student</Link>
        </>
      }

      <Route path='/' component={Home} exact/>
      <Route path='/admin' component={adminContainer} exact/>
      <Route path='/admin/login' component={adminLogin} exact/>
      <Route path='/admin/register' component={adminRegister} exact/>
      <Route path='/admin/account' component={adminAccount} exact/>
      <Route path='/admin/addStudent' component={studentRegister} exact/>
      <Route path='/admin/dashboard' component={dashboard} exact/>
      <Route path='/admin/studentList' component={studentList} exact/>

      <Route path='/student' component={studentContainer} exact/>
      <Route path='/student/login' component={studentLogin} exact/> 
      <Route path='/student/account' component={studentAccount} exact/>
    </div>
  )
}

export default withRouter(ELearningContainer)