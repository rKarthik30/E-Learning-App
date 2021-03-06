import axios from 'axios'

export const startStudentLogin = (loginData,reset,redirect,loginAuth,changeLogin) => {
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
                    const tilteChange = changeLogin()
                    dispatch(toggleChange(tilteChange))
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

export const toggleChange = (value) => {
    return {
        type:'LOGIN_CHANGE',
        payload: value
    }
}

export const startLogout = (props,logoutAuth,changleLogout) => {
        return (dispatch) => {
            alert('Successfully logged out')
            localStorage.removeItem('token')
            props.history.push("/")
            const result = logoutAuth()
            dispatch(startLogoutToggle(result))
            const change = changleLogout()
            dispatch(toggleLogoutChange(change))
        }
    }

export const startLogoutToggle = (result) => {
    return {
        type:'LOGOUT',
        payload:result
    }
}

export const toggleLogoutChange = (value) => {
    return {
        type:'LOGOUT_CHANGE',
        payload: value
    }
}

export const startCourse = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses',{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else {
                    dispatch(sendCourse(result))
                }
            })
    }
}

export const sendCourse = (result) => {
    return {
        type: 'COURSE',
        payload:result
    }
}

export const startEnroll = (id) => {
    return (dispatch) => {
        axios.patch(`https://dct-e-learning.herokuapp.com/api/courses/enroll?courseId=${id}`,{},{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    alert('successfully Enrolled')
                }
            })
            // .catch((err) => {
            //     alert(err.message)
            // })
    }
}

export const startUnEnroll = (id) => {
    return (dispatch) => {
        axios.patch(`https://dct-e-learning.herokuapp.com/api/courses/enroll?courseId=${id}`,{},{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                    alert('successfully UnEnrolled')
                }
            })
    }
}