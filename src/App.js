import React, {useState} from "react"

import TodoList from "./TodoList";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList/>
      <div></div>
      <button className="button_All">All</button>
      <button className="button_Active">Active</button>
      <button className="button_Complited">Complited</button>
      <button className="button_ClearCompleted">Clear completed</button>
    </div>
  );
}



  // const deleteTodo = (text) => {
  //   const newTodos= todos.filter((todo) =>{return todo !== text}); setTodos(newTodos)
  // }