import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {startLogout} from '../../action/adminAction'

const AdminContainer = (props) => {

    const admin = useSelector((state) => {
        return state.admin
    })
    const dispatch = useDispatch()

    const logoutAuth = () => {
        return !admin.isLoading
    }

    return(
        <div>
            {admin.isLoading ? (
                <>
                    <Link to='/admin/login'>Login</Link> | <Link to='/admin/register'>Register</Link>
                </>
            ):(
                <>
                    <Link to='/admin/account'>Account</Link> | <Link to='/admin/addStudent'>Student Register</Link> | <Link to='/admin/dashboard'>Dashboard</Link> | <Link to='/admin/studentList'>Student List</Link> | <Link to='#' onClick={(e) => {
                        e.preventDefault()
                        dispatch(startLogout(props,logoutAuth))
                        } }>Loggout</Link>
                </>
            )}
        </div>
    )
}

export default AdminContainer