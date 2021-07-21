import React from "react";
import TodoItem from "../todoItem/TodoItem";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo} title={todo} />
      ))}
    </div>
  );
}

export default TodoList;
