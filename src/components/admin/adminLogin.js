import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Login from '../home&login/Login'
import {startAdminLogin} from '../../action/adminAction'

const AdminLogin = (props) => {
    const admin = useSelector((state) => {
        return state.admin
    })
    const dispatch = useDispatch()

    const loginAuth = () => {
        return !admin.isLoading
    }
    const redirect = () => {
        props.history.push('/')
    }

    const callBack = (loginData,reset) => {
        dispatch(startAdminLogin(loginData,reset,redirect,loginAuth))
    }
    return (
        <Login callBack={callBack}/>
    )
}

export default AdminLogin