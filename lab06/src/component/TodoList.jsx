// src/components/TodoList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../store/todoSlice';
import './TodoList.css';

export default function TodoList() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="todo-container">
      <h2>📋 To-do List</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập công việc..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
            <button
              className="remove-btn"
              onClick={(e) => {
                e.stopPropagation(); // không toggle khi xóa
                dispatch(removeTodo(todo.id));
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
