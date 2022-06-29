import { useState } from "react";

import React from "react";

const TodoLatihan = () => {
  const [todos, setTodos] = useState(["belajar react", "belajar state"]);
  const [inputTodo, setInputTodo] = useState("");

  const handleInput = (event) => {
    setInputTodo(event.target.value);
  };
  const addTodo = () => {
    setTodos([...todos, inputTodo]);
    setInputTodo("");
  };

  return (
    <div>
      <input type="text" value={inputTodo} onChange={handleInput} />
      <button onClick={addTodo}>add</button>

      {todos.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
};

export default TodoLatihan;
