import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "shopping", status: "active" },
    { id: "124", text: "study", status: "active" },
  ]);
  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트 해야함
  };
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
