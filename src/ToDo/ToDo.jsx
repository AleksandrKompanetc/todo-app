import React, { useState } from 'react';
import './index.css';
import ToDoItem from './ToDoItem';

const toDoBase = [{
  _id: 1,
  name: 'Buy MacBook',
  isChecked: true,
},
{
  _id: 2,
  name: 'Go to work',
  isChecked: false,
}]

const ToDo = () => {
  const [name, setName] = useState('');
  return (
    <>
      <h1>ToDo App</h1>
      {toDoBase.map(todo => <ToDoItem key={`_todo_${todo._id}`} name={todo.name} isChecked={todo.isChecked} />)}
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='Enter new task...'
      />
    </>
  )
}

export default ToDo;