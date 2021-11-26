import React from 'react'
import {useDispatch} from 'react-redux'
import Login from '../home&login/Login'
import {startAdminLogin} from '../../action/adminAction'

const AdminLogin = (props) => {
    const dispatch = useDispatch()

    const redirect = () => {
        props.history.push('/')
    }

    const callBack = (loginData,reset) => {
        dispatch(startAdminLogin(loginData,reset,redirect))
    }
    return (
        <Login callBack={callBack}/>
    )
}

export default AdminLogin