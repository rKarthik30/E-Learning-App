const studentInitialState = {
    isLoading : true,
    data:[],
    errors:{}
}

const studentReducer = (state = studentInitialState,action) => {
    switch(action.type){
        default: {
            return {...state}
        }
    }
}

export default studentReducer