// src/components/Auth.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectIsLoggedIn, selectUser } from '../store/authSlice';
import './Auth.css'
export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogin = () => {
    // Giả lập đăng nhập
    if (username === 'admin' && password === 'admin') {
      dispatch(login({ username: 'admin', email: 'admin@example.com' }));
    } else {
      alert('Thông tin đăng nhập không đúng!');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="auth-container">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Đăng nhập</h2>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      ) : (
        <div className="welcome-message">
          <h2>Chào mừng, {user.username}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      )}
    </div>
  );
}
