import {createStore,combineReducer} from 'react-redux'
import adminReducer from '../reducer/adminReducer'

const configureStore = () =>{
    const store = createStore(combineReducer({
        admin: adminReducer
    }))
    return store
}

export default configureStore