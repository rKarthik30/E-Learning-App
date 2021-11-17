import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import Home from './home&login/Home'
import Login from './home&login/Login'
import adminRegister from './adminRegister'

const eLearningContainer = () =>  {
  return (
    <div>
        <Link to='/'>Home</Link> | <Link to='/login'>Login</Link>

      <Route path='/' component={Home} exact/>
      <Route path='/login' component={Login}/>
      <Route path='/adminRegister' component={adminRegister}/>
    </div>
  )
}

export default withRouter(eLearningContainer)