// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], // [{ id, name, price, quantity }]
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Selector: tính tổng
export const selectCartTotalQuantity = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotalPrice = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
