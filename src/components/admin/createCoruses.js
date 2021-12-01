import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {startCourseCreate} from '../../action/adminAction'

const CreateCourse = (props) => {
    // const {click} = props
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [duration,setDuration] = useState(0)
    const [category,setCategory] = useState('')
    const [validity,setValidity] = useState(0)
    const [level,setLevel] = useState('')
    const [author,setAuthor] = useState('')
    const [formErrors,setFormErrors] = useState({})
    const errors = {} 
    const categoryType = ['HTML', 'CSS', 'javascript', 'reactjs', 'nodejs','expressjs', 'mongodb']
    const levelType = ['beginner', 'intermediate', 'expert']

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const atr = e.target.name
        const atr1 = e.target.value
        if(atr === 'name'){
            setName(atr1)
        } else if(atr === 'description'){
            setDescription(atr1)
        }else if(atr === 'duration'){
            setDuration(atr1)
        }else if(atr === 'category'){
            setCategory(atr1)
        }else if(atr === 'validity'){
            setValidity(atr1)
        }else if(atr === 'level'){
            setLevel(atr1)
        }else if(atr === 'author'){
            setAuthor(atr1)
        }
    }

    const runValidator = () => {
        if(name.trim().length === 0){
            errors.name = 'name cannot be blank'
        }
        if(description.trim().length === 0){
            errors.description = 'description cannot be blank'
        }
        if(duration.trim().length === 0){
            errors.duration = 'duration cannot be blank'
        }
        if(validity.trim().length === 0){
            errors.validity = 'validity cannot be blank'
        }
        if(author.trim().length === 0){
            errors.author = 'author cannot be blank'
        }
    }

    const reset = () => {
        setName('')
        setDescription('')
        setDuration(0)
        setCategory('')
        setValidity(0)
        setLevel('')
        setAuthor('')
    }

    // const handleClick = () => {
    //     return click
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidator()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const courseData = {
                name,
                description,
                duration,
                category,
                validity,
                level,
                author
            }
            // console.log(courseData);
            dispatch(startCourseCreate(courseData,reset,props.click))
        }else {
            setFormErrors(errors)
            console.log(errors);
        }
    }
    return(
        <div>
            <h3>Create Coruses</h3>
            <form onSubmit={handleSubmit}>
                <label>Name - </label>
                <input type='text' value={name} onChange={handleChange} name='name' placeholder='Enter course title'/><br/>

                <label>Description - </label>
                <textarea value={description} onChange={handleChange} name='description' placeholder='Give a brefie about the course'></textarea><br/>

                <label>Duration - </label>
                <input type='number' value={duration} onChange={handleChange} name='duration' placeholder='Time to complete course'/><br/>

                <label>Category - </label>
                <select value={category} onChange={handleChange} name='category'>
                    <option >Select a category</option>
                    {categoryType.map((ele) => {
                        return <option value={ele}>{ele}</option>
                    })}
                </select><br/>
                
                <label>Course expires on : </label>
                <input type='number' value={validity} onChange={handleChange} name='validity' placeholder='Enter the time to end course'/><br/>

                <label>Level - </label>
                <select value={level} onChange={handleChange} name='level'>
                    <option>Select a Level</option>
                    {levelType.map((ele) => {
                        return <option value={ele}>{ele}</option>
                    })}
                </select><br/>

                <label>Author - </label>
                <input type='text' value={author} onChange={handleChange} name='author' placeholder='The person who created'/><br/>

                <input type='submit' value='Create Course'/>
                {/* <button onClick={() => {handleClick}}>Cancle</button> */}

            </form>
        </div>
    )
}

export default CreateCourse