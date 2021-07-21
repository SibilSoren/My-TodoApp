import React from "react";
import "./InputArea.css";
function InputArea({ input, onChange, onAdd }) {
  return (
    <div className="inputArea">
      <input
        value={input}
        onChange={onChange}
        type="text"
        placeholder="Enter your todo"
        className="inputArea__inputField"
      />
      <button className="inputArea__addButton" onClick={onAdd}>
        Add
      </button>
    </div>
  );
}

export default InputArea;
