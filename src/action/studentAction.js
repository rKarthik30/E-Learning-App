import axios from 'axios'

export const startStudentLogin = (loginData,reset,redirect,loginAuth) => {
    return (dispatch) => {
        axios.post('http://dct-e-learning.herokuapp.com/api/students/login',loginData)
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    alert('Successfully Logged in')
                    localStorage.setItem('token',result.token)
                    reset()
                    redirect()
                    const change = loginAuth()
                    dispatch(toggle(change))
                }
            })
    }
}

export const toggle = (value) => {
    return {
        type:'LOGIN',
        payload: value
    }
}

export const startLogout = (props,logoutAuth) => {
        return (dispatch) => {
            alert('Successfully logged out')
            localStorage.removeItem('token')
            props.history.push("/")
            const result = logoutAuth()
            dispatch(startLogoutToggle(result))
        }
    }

export const startLogoutToggle = (result) => {
    return {
        type:'LOGOUT',
        payload:result
    }
}