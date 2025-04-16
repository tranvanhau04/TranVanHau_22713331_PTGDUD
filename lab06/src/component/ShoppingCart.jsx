// src/components/ShoppingCart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  updateQuantity,
  selectCartTotalQuantity,
  selectCartTotalPrice,
} from '../store/cartSlice';
import './ShoppingCart.css';

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = useSelector(selectCartTotalQuantity);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  // Mảng 10 sản phẩm giả để thêm vào giỏ hàng
  const demoProducts = [
    { id: 1, name: 'Áo Hoodie', price: 300000, quantity: 1 },
    { id: 2, name: 'Quần Jean', price: 250000, quantity: 1 },
    { id: 3, name: 'Giày Sneaker', price: 500000, quantity: 1 },
    { id: 4, name: 'Áo Thun', price: 150000, quantity: 1 },
    { id: 5, name: 'Quần Short', price: 200000, quantity: 1 },
    { id: 6, name: 'Mũ Baseball', price: 100000, quantity: 1 },
    { id: 7, name: 'Dép Lê', price: 120000, quantity: 1 },
    { id: 8, name: 'Balo Laptop', price: 400000, quantity: 1 },
    { id: 9, name: 'Kính Mát', price: 150000, quantity: 1 },
    { id: 10, name: 'Vớ Thể Thao', price: 50000, quantity: 1 },
  ];

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="cart-container">
      <h2>🛒 Giỏ hàng</h2>

      <div className="product-list">
        {demoProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Giá: {product.price.toLocaleString()}đ</p>
            <button className="add-btn" onClick={() => handleAdd(product)}>
              + Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="info">
              <strong>{item.name}</strong>
              <span>{item.price.toLocaleString()}đ</span>
            </div>
            <div className="actions">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
              />
              <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="summary">
        <p>Tổng số lượng: {totalQty}</p>
        <p>Tổng tiền: {totalPrice.toLocaleString()}đ</p>
      </div>
    </div>
  );
}
