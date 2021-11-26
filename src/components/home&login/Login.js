import React,{useState} from 'react'
import validator from 'validator'
// import {useDispatch} from 'react-redux'
// import {startAdminLogin} from '../../action/adminAction'

const Login = (props) =>  {
  const {callBack} = props
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [formErrors,setFormErrors] = useState({})
  const errors = {}

  // const dispatch = useDispatch()

  const handleChange = (e) => {
    const atr = e.target.name
    const result = e.target.value
    if(atr === 'email'){
      setEmail(result)
    }else if(atr === 'password'){
      setPassword(result)
    }
  }

  const runValidator = () => {
    if(email.trim().length === 0){
      errors.email = 'Email cannot be blank'
    }else if(!validator.isEmail(email)){
      errors.email = 'Invalid email Address'
    }

    if(password.trim().length === 0){
      errors.password = 'Password cannot be blank'
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    runValidator()
    console.log(props.history)
    if(Object.keys(errors).length === 0){
      setFormErrors({})
      const loginData = {
        email,
        password
      }

      const reset = () => {
        setPassword('')
        setEmail('')
      }
    
      // const redirect = () => {
        
      //   props.history.push('/')
      // }

      callBack(loginData,reset)
      // dispatch(startAdminLogin(loginData,reset,redirect))

    }else{
      setFormErrors(errors)
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input type='text' value={email} placeholder='Enter Email Address' name='email' onChange={handleChange}/><br/>
        {formErrors.email && <span>{formErrors.email}</span>}<br/>

        <label>Password : </label>
        <input type='text' value={password} placeholder='Enter password' name='password' onChange={handleChange}/><br/>
        {formErrors.password && <span>{formErrors.password}</span>}<br/>

        <input type='submit' value='Login'/>
      </form>
    </div>
  )
}

export default Login