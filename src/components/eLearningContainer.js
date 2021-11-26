import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import Home from './home&login/Home'
import adminContainer from './admin/adminContainer' 
import adminRegister from './admin/adminRegister'
import adminLogin from './admin/adminLogin'

const eLearningContainer = () =>  {
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link> 

      <Route path='/' component={Home} exact/>
      <Route path='/admin' component={adminContainer} exact/>
      <Route path='/admin/login' component={adminLogin} exact/>
      <Route path='/admin/register' component={adminRegister} exact/>
    </div>
  )
}

export default withRouter(eLearningContainer)