import {createStore,combineReducers} from 'redux'
import adminReducer from '../reducer/adminReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        admin: adminReducer
    }))
    return store
}

export default configureStore