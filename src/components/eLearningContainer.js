import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import Home from './home&login/Home'
import adminContainer from './admin/adminContainer' 
import adminRegister from './admin/adminRegister'
import adminLogin from './admin/adminLogin'
import adminAccount from './admin/adminAccount'
import studentRegister from './admin/studentRegister'
import dashboard from './admin/dashboard'
import studentList from './admin/studentList'

const eLearningContainer = () =>  {
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link> 

      <Route path='/' component={Home} exact/>
      <Route path='/admin' component={adminContainer} exact/>
      <Route path='/admin/login' component={adminLogin} exact/>
      <Route path='/admin/register' component={adminRegister} exact/>
      <Route path='/admin/account' component={adminAccount} exact/>
      <Route path='/admin/addStudent' component={studentRegister} exact/>
      <Route path='/admin/dashboard' component={dashboard} exact/>
      <Route path='/admin/studentList' component={studentList} exact/>
    </div>
  )
}

export default withRouter(eLearningContainer)