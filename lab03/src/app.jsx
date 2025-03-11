import { useState } from 'preact/hooks'

import './app.css'
import Header from './component/Header/Header'
import Product from './component/Product/Product'
import Footer from './component/Footer/Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Product/>
      <Footer/>
    </>
  )
}
