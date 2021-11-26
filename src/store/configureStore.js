import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import adminReducer from '../reducer/adminReducer'
import studentReducer from '../reducer/studentReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        admin: adminReducer,
        student: studentReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore