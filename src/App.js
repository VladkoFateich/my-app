import React, { useState } from "react";

import TodoList from "./TodoList";

export default function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    if(todo !== '') {
      setTodos([...todos,todo])
      setTodo('')
    }
  } 
  const deleteTodo = (text) => {
    const newTodos= todos.filter((todo) =>{return todo !== text}); setTodos(newTodos)
  }
  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="input_wrapper">
        <input type='text' name='todo' placeholder="add todo element..." onChange={(e)=>{setTodo(e.target.value)}}/>
        <button className="add_button" onClick={addTodo}>add</button>
        <ul className="todo_list">{todos.map((todo, index) =>(<div className="todo"><li key={index}>{todo}</li></div>))}</ul>
      </div>
    </div>
  );
}
