const adminInitialState ={
    isLoading : true,
    data : [],
    errors : {}
}

const adminReducer = (state = adminInitialState,action) => {
    switch(action.type){
        default : {
            return [...state.data]
        }
    }
}

export default adminReducer