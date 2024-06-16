import React, { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <section>
      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>{item.text}</li>
        ))}
      </ul>
      <AddTodoForm onAdd={handleAdd} />
    </section>
  );
}
