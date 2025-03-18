import React from 'react'; 

import './App.css';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import Footer from './component/Footer/Footer';

function App() {
  

  return (
    <div className='app'>
      <Header />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
