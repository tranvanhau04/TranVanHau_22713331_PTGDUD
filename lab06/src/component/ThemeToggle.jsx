// src/components/ThemeToggle.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

export default function ThemeToggle() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className="theme-toggle">
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {theme === 'light' ? '🌙 Dark' : '☀️ Light'} mode
      </button>
    </div>
  );
}
