const adminInitialState ={
    isLoading : true,
    data : [],
    student : [],
    course: [],
    errors : {}
}

const adminReducer = (state = adminInitialState,action) => {
    switch(action.type){
        case 'LOGIN': {
            return {...state,isLoading: action.payload}
        }
        case 'ACCOUNT': {
            return {...state,data:action.payload}
        }
        case 'LOGOUT': {
            return {...state,isLoading: action.payload}
        }
        case 'REGISTER': {
            return {...state,student:[action.payload]}
        }
        case 'STUDENT_LIST': {
            return {...state,student:action.payload}
        }
        case 'DELETE' : {
            const result = state.student.filter((ele) => {
                return ele._id !== action.payload
            })
            return {...state,student:result}
        }
        case 'ADD_COURSE' : {
            return {...state, course: [...action.payload]}
        }
        case 'COURSE' : {
            return {...state,course: action.payload}
        }
        case 'DELETE_COURSE' : {
            const result = state.course.filter((ele) => {
                return ele._id !== action.payload
            })
            return {...state,course:result}
        }
        default : {
            return {...state}
        }
    }}

export default adminReducer