import { useState } from 'react'
import './style.css'


const Form = () => {

    const [todos, setTodos] = useState([{
        title: 'Halo',
        content: 'Hai'
    }])
    const handleChange = (e) => {
        setTodos(e.target.value)
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                id: Math.floor(Math.random() * 100),
                [e.target.name]: e.target.value
            }
        ])

    }

    return (
        <form className="add-form" onSubmit={onSubmitHandler}>
            <div className='input-group'>
                <label className='form-label'>Title</label>
                <input
                    className='add-input input-body'
                    type='text'
                    value={todos.title}
                    name='title'
                    onChange={handleChange}
                />
                <label className='form-label'>Content</label>
                <input
                    className='add-input'
                    type='text'
                    value={todos.content}
                    name='body'
                    onChange={handleChange}
                />
            </div>
            <button className='add-button'>Add</button>
            <div className='list-container'>
                {todos.map((todo) => {
                    return (
                        `
                        ____Your Details____\n
            Email :{todo.title}
            Name : 
                        `
                    )
                })}
            </div>
        </form>

    )
}

export default Form