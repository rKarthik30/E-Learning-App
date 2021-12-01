const studentInitialState = {
    isLoading : true,
    isLogin: false,
    data:[],
    errors:{}
}

const studentReducer = (state = studentInitialState,action) => {
    switch(action.type){
        case 'LOGIN': {
            return {...state,isLoading: action.payload}
        }
        case 'LOGOUT': {
            return {...state,isLoading: action.payload}
        }
        case 'LOGIN_CHANGE' : {
            return {...state,isLogin: action.payload}
        }
        case 'LOGOUT_CHANGE' : {
            return {...state,isLogin: action.payload}
        }
        default: {
            return {...state}
        }
    }
}

export default studentReducer