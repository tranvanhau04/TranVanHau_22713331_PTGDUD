// src/components/CounterApp.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
import './CounterApp.css'; // 👈 Import CSS

export default function CounterApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>🧩 Counter App</h2>
      <p className="count-display">Giá trị: {count}</p>
      <div className="button-group">
        <button onClick={() => dispatch(increment())}>Tăng +</button>
        <button onClick={() => dispatch(decrement())}>Giảm -</button>
      </div>
    </div>
  );
}
