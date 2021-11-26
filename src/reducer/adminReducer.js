const adminInitialState ={
    isLoading : true,
    data : [],
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
        default : {
            return {...state}
        }
    }}

export default adminReducer