import React,{useState} from 'react'
import validator from 'validator'

const Register = () =>  {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [acaname,setAcaname] = useState('')
    const [acawebsite,setAcawebsite] = useState('')
    const [formErrors,setFormErrors] = useState({})
    const errors = {}

    const handleChange = (e) => {
        const atr = e.target.name
        const result = e.target.value
        if(atr === 'username'){
            setUsername(result)
        }else if(atr === 'email'){
            setEmail(result)
        }else if(atr === 'password'){
            setPassword(result)
        }else if(atr === 'acaname'){
            setAcaname(result)
        }else if(atr === 'acawebsite'){
            setAcawebsite(result)
        }
    }

    const runValidator = () => {
        if(username.trim().length === 0){
            errors.username = "Username cannot be blank"
        }

        if(email.trim().length === 0){
            errors.email = 'Email cannot be blank'
        }else if(!validator.isEmail(email)){
            errors.email = 'Invalid Email Address'
        }

        if(password.trim().length === 0){
            errors.password = 'Password cannot be blank'
        }

        if(acaname.trim().length === 0){
            errors.acaname = 'Academy Name cannot be blank'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidator()

        const reset = () => {
            setUsername('')
            setEmail('')
            setPassword('')
            setAcaname('')
            setAcawebsite('')
        }

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const adminData = {
                username,
                email,
                password,
                academy : {
                    name: acaname,
                    website : acawebsite
                }
            }

            console.log(adminData);
            reset()
        } else {
            console.log('errors', errors);
            setFormErrors(errors)
        }
    }

  return (
    <div>
        <h2>Form to Register the User</h2>
        <form onSubmit={handleSubmit}>
            <label>Username : </label>
            <input type="text" value={username} placeholder="Enter the Username" name="username" onChange={handleChange}/><br/>

            <label>Email : </label>
            <input type="text" value={email} placeholder="Enter the Email Address" name="email" onChange={handleChange}/><br/>

            <label>Password : </label>
            <input type="text" value={password} placeholder="Enter the password" name="password" onChange={handleChange}/><br/>

            <label>Academy Name : </label>
            <input type="text" value={acaname} placeholder="Enter the Academy Name" name="acaname" onChange={handleChange}/><br/>

            <label>Academy Website : </label>
            <input type="text" value={acawebsite} placeholder="Enter Academy Website" name="acawebsite" onChange={handleChange}/><br/>

            <input type='submit' value='Register'/>
        </form>
      
    </div>
  )
}

export default Register