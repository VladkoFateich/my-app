import React, { useState } from "react";


const TodoLIst = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([...todos]);
  const onCompleted =() => {
    if(completed.todo === 'completed') setCompleted([...completed])
}

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <div className="input_wrapper">
      <input
        value={todo}
        type="text"
        name="todo"
        placeholder="add todo element..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add_button" onClick={addTodo}>
        add
      </button>
      <ul className="todo_list">
        {todos.map((todo) => (
          <li key={todo.id} onClick={onCompleted} >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoLIst;

// {() => onCompleted(index)}
//             className={completed === index ? "completed" : ""}
