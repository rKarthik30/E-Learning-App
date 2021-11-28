const studentInitialState = {
    isLoading : true,
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
        case 'ACCOUNT' : {
            return {...state,data:[action.payload]}
        }
        default: {
            return {...state}
        }
    }
}

export default studentReducer