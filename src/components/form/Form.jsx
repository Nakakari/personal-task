import { useState } from 'react';
import './form.css'

const Form = ({setTodos, todos}) => {

    let [newTodo, setNewTodo] = useState('');
    let [newContext, setNewContext] = useState('');

    

    const handleTitle = (event) => {
        setNewTodo(event.target.value);
        
    };

    const handleContext = (event) => {
        setNewContext(event.target.value);
    };
    
    const addNewTodo = () => {
        setTodos([...todos, {id: todos.length+1, body:newContext, title:newTodo, isDone:false}]);
       
        setNewTodo(newTodo = '')
        setNewContext(newContext= '')
      };


    return (
        <div className='add-form'>
            <div className='input-group'>
                <label className='form-label'>Title</label>
                <input className='add-input input-body' value={newTodo} onChange={handleTitle}/>

                <label className='form-label'>Context</label>
                <input className='add-input' value={newContext} onChange={handleContext}/>
            </div>
            <button className='add-button' onClick={addNewTodo}>Add</button>
        </div>
        
    );
}

export default Form;