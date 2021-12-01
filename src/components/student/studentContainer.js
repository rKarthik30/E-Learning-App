import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {startLogout} from '../../action/studentAction'

const StudentContainer = (props) =>  {

    const student = useSelector((state) => {
        return state.student
    })
    const dispatch = useDispatch()

    const logoutAuth = () => {
        return !student.isLoading
    }
    const changleLogout = () => {
        return !student.isLogin
    }

  return (
    <div>
        {student.isLoading ? (
                <>
                    <Link to='/student/login'>Login</Link>
                </>
            ):(
                <>
                    <Link to='/'>Home</Link> | <Link to='/student/dashboard'>Dashboard</Link> | <Link to='#' onClick={(e) => {
                        e.preventDefault()
                        dispatch(startLogout(props,logoutAuth,changleLogout))
                        } }>Logout</Link>
                </>
            )}
    </div>
  )
}

export default withRouter(StudentContainer)