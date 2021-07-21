import React, { useState } from "react";
import "./TodoItem.css";
function TodoItem({ title }) {
  const [isChecked, setIsChecked] = useState(false);
  const onChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="todoItem">
      <div className="todoItem__section1">
        <input
          value={isChecked}
          type="checkbox"
          name="isComplete"
          id="isComplete"
          onChange={onChecked}
        />
        <h2
          style={{ textDecoration: isChecked ? "line-through" : "none" }}
          className="todoItem__title"
        >
          {title}
        </h2>
      </div>
      <div className="todoitem__Btns">
        <button className="btn todoItem__editBtn">Edit</button>
        <button className="btn todoItem__deleteBtn">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
