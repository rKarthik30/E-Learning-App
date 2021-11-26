import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startAccount} from '../../action/adminAction'

const AdminAccount = (props) => {
    const admin = useSelector((state) => {
        return state.admin.data
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startAccount())
    },[])

    return(
        <div>
            <h2>Admin Info</h2>
            <h2>Name - {admin.username}</h2>
            <h3>Role - {admin.role}</h3>
            <h3>Email -{admin.email}</h3>
            {/* <h3>Academy Name - {admin.academy.name}</h3> */}
        </div>
    )
}

export default AdminAccount