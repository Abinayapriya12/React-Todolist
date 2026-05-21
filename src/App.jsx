import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📝 Todo List</h2>

      <div className="todo-input-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="empty-message">✨ No tasks yet.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span className="todo-text">{todo}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;