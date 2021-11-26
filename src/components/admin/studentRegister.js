import React,{useState} from 'react'
import validator from 'validator'
import {useDispatch} from 'react-redux'
import {startStudentRegister} from '../../action/adminAction'

const StudentRegister = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [formErrors,setFormErrors] = useState({})
    const errors = {}
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const atr = e.target.name
        const atr1 = e.target.value
        if(atr === 'name'){
            setName(atr1)
        }else if(atr === 'email'){
            setEmail(atr1)
        }else if(atr === 'password'){
            setPassword(atr1)
        }
    }

    const runValidator = () => {
        if(name.trim().length === 0){
            errors.name = 'Name cannot be empty'
        }
        if(email.trim().length === 0){
            errors.email = 'Email cannot be empty'
        }else if(!validator.isEmail(email)){
            errors.email = 'Invalid Email'
        }
    }

    const reset = () => {
        setName('')
        setPassword('')
        setEmail('')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidator()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const registerData = {
                name,
                email,
                password
            }
            dispatch(startStudentRegister(registerData,reset))
        }else{
            setFormErrors(errors)
            console.log(errors);
        }

    }
    return(
        <div>
            <h2>Register a Student</h2>
            <form onSubmit={handleSubmit}>
                <label>Name - </label>
                <input type="text" value={name} name='name' onChange={handleChange} placeholder='Enter Student Name'/><br/>

                <label>Email - </label>
                <input type='text' value={email} name='email' onChange={handleChange} placeholder='Enter Student Email'/><br/>

                <label>Password - </label>
                <input type='text' value={password} name='password' onChange={handleChange} placeholder='Enter Student password'/><br/>

                <input type='submit' value='Register The Student'/>
            </form>
            
        </div>
    )
}

export default StudentRegister