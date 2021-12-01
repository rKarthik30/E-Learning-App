import axios from 'axios' 

export const startAdminRegister = (adminData,reset) => {
    return (dispatch) => {
        axios.post('http://dct-e-learning.herokuapp.com/api/admin/register',adminData)
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                    // console.log(result);
                } else {
                    alert(result.notice)
                }
            })
    }
}

export const startAdminLogin = (loginData,reset,redirect,loginAuth) => {
    return (dispatch) => {
        axios.post('http://dct-e-learning.herokuapp.com/api/admin/login',loginData)
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

export const startAccount = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/account',{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                dispatch(startAccountSet(result))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startAccountSet = (result) => {
    return {
        type: 'ACCOUNT',
        payload: result
    }
}

export const startStudentRegister = (registerData,reset) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/students',registerData,{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                    // console.log(result.errors);
                }else{
                    alert('Successfully Enrolled')
                    dispatch(sendStudentRegister(result))
                    reset()
                }
            })
    }
}

export const sendStudentRegister = (result) => {
    return {
        type: 'REGISTER',
        payload: result
    }
}

export const startStudentList = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/students',{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    console.log(result.errors)
                    alert(result.errors)
                }else{
                    dispatch(sendStudentList(result))
                }
            })
    }
}

export const sendStudentList = (result) => {
    return{
        type: 'STUDENT_LIST',
        payload: result
    }
}

export const startStudentDelete = (id) => {
    return (dispatch) => {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${id}`,{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    console.log(result.errors);
                    alert(result.errors)
                }else {
                    alert('Successfully removed the Student')
                    dispatch(sendStudentDelete(id))
                }

            })
    }
}

export const sendStudentDelete = (id) => {
    return{
        type: 'DELETE',
        payload:id
    }
}

export const startCourseCreate = (courseData,reset,click) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/courses',courseData,{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                    console.log(result.errors);
                } else {
                    alert('Successfully created course')
                    reset()
                    click()
                    // dispatch(sendCourseData(result))
                }
            })
    }
}

// export const sendCourseData = (result) => {
//     return {
//         type: 'ADD_COURSE',
//         payload: result
//     }
// }

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

export const startCourseDelete = (id) => {
    return (dispatch) => {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/courses/${id}`,{
            headers: {
                'Authorization' : localStorage.getItem('token') 
            }
        })
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else {
                    alert('successfully deleted course')
                    dispatch(sendDeleteCourse(id))
                }
            })
    }
}

export const sendDeleteCourse = (id) => {
    return {
        type:'DELETE_COURSE',
        payload:id
    }
}

export const startLogout = (props,logoutAuth) => {
    return (dispatch) => {
        alert('Successfully logged out')
        localStorage.removeItem('token')
        
        const result = logoutAuth()
        dispatch(startLogoutToggle(result))
        props.history.push("/") // withRouter component
    }
}

export const startLogoutToggle = (result) => {
    return {
        type:'LOGOUT',
        payload:result
    }
}