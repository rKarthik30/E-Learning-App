import React from 'react'
import {Link} from 'react-router-dom'

const AdminContainer = () => {
    return(
        <div>
            <Link to='/admin/login'>Login</Link> | <Link to='/admin/register'>Register</Link>           
        </div>
    )
}

export default AdminContainer