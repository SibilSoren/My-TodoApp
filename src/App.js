import React, { useState } from "react";
import "./App.css";
import InputArea from "./components/inputArea/InputArea";
// import TodoItem from "./components/todoItem/TodoItem";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onAdd = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="container">
      <header className="app__header">
        <h1 className="header__title">My Todo List App</h1>
      </header>
      <InputArea input={input} onChange={onChange} onAdd={onAdd} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
