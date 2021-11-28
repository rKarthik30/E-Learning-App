import React from 'react'
import {Link} from 'react-router-dom'
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

  return (
    <div>
        {student.isLoading ? (
                <>
                    <Link to='/student/login'>Login</Link>
                </>
            ):(
                <>
                    <Link to='/'>Home</Link> | <Link to='/student/account'>Account</Link> | <Link to='#' onClick={(e) => {
                        e.preventDefault()
                        dispatch(startLogout(props,logoutAuth))
                        } }>Loggout</Link>
                </>
            )}
    </div>
  )
}

export default StudentContainer