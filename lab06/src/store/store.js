// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice'; // ✅ thêm dòng này
import cartReducer from './cartSlice';
import authReducer from './authSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer, 
    cart: cartReducer,
    auth: authReducer,
  },
});
