import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import adminReducer from '../reducer/adminReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        admin: adminReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore