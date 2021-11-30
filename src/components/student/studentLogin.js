import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Login from '../home&login/Login'
import {startStudentLogin} from '../../action/studentAction'

const StudentLogin = (props) =>  {
    const student = useSelector((state) => {
        return state.student
    })
    const dispatch = useDispatch()

    const loginAuth = () => {
        return !student.isLoading
    }
    const changeLogin = () => {
        console.log(student.isLogin);
        return !student.isLogin
    }

    const redirect = () => {
        props.history.push('/')
    }

    const callBack = (loginData,reset) => {
        dispatch(startStudentLogin(loginData,reset,redirect,loginAuth,changeLogin))
    }
    return (
        <Login callBack={callBack}/>
    )
}

export default StudentLogin