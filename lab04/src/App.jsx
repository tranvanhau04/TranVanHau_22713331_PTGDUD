import React from 'react'; 
import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import Footer from './component/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

export default App;
