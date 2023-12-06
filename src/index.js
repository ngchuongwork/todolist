import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react'



function TodoList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [count, setCount] = useState(0);



function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  var x = {id: count, value: inputValue, inactive: true};
  setTodos([...todos, x])
  setInputValue('')
  setCount(count+1);
  console.log(x)
}
function handleDelete(e){
  var index = e.target.value;
  var result = todos.filter((todo) => todo.id != index);
  setTodos(result);
}
function handleUpdate(e) {
  e.preventDefault();
  const updatedId = e.target.value;
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id == updatedId ? { ...todo, inactive: false } : todo
    )
  );
}




function handleSave(e){
  e.preventDefault();
  const updatedId = e.target.value;
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id == updatedId ? { ...todo, value: inputValue, inactive: true } : todo
    )
  );
}

  return (
      <div style={{margin:"0 auto", width:"500px"}}>
        <form style={{margin:"0 auto", width:"300px"}}>
        <h1>Todo List</h1>
          <input type='text' value={inputValue} onChange={handleChange}/>
          <button onClick={handleSubmit}>Add</button>
        </form>
        <form >
        <ol>
          {todos.map((todo) => (
            <li key={todo.id} >
              <input type='text' id={todo.id} value={todo.value} disabled={todo.inactive}   />
              <button value={todo.id} onClick={handleDelete}>Delete</button>
              <button value={todo.id} onClick={handleUpdate}>Update</button>
              <button value={todo.id} onClick={handleSave} hidden={todo.inactive}>Save</button>
            </li>
          ))}
        </ol>
        </form>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList />);
export default TodoList;
