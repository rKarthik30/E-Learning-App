import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import ELearningContainer from './components/eLearningContainer'
import Home from './components/home&login/Home'
import AdminContainer from './components/admin/adminContainer'
import adminLogin from './components/admin/adminLogin'
import adminRegister from './components/admin/adminRegister'
import adminAccount from './components/admin/adminAccount'
import studentRegister from './components/admin/studentRegister'
import dashboard from './components/admin/dashboard'
import studentList from './components/admin/studentList'
import StudentContainer from './components/student/studentContainer'
import studentLogin from './components/student/studentLogin'
import studentAccount from './components/student/studentAccount'

const App = (props) =>  {
  return (
    <div>
      <ELearningContainer/>

      <Route path='/' component={Home} exact/>
      <Route path='/admin' component={AdminContainer} exact/>
      <Route path='/admin/login' component={adminLogin} exact/>
      <Route path='/admin/register' component={adminRegister} exact/>
      <Route path='/admin/account' component={adminAccount} exact/>
      <Route path='/admin/addStudent' component={studentRegister} exact/>
      <Route path='/admin/dashboard' component={dashboard} exact/>
      <Route path='/admin/studentList' component={studentList} exact/>

      <Route path='/student' component={StudentContainer} exact/>
      <Route path='/student/login' component={studentLogin} exact/> 
      <Route path='/student/account' component={studentAccount} exact/>
    </div>
  )
}

export default withRouter(App)