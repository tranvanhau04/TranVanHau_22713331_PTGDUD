import { useState,useEffect } from 'react'
import './App.css'
import CounterUseReducer from './component/CounterUseReducer'
import CounterReduxToolkit from './component/CounterReduxToolkit'
import CounterReduxNo from './component/CounterReduxNo'
import CounterApp from './component/CounterApp'
import TodoList from './component/TodoList' 
import ThemeToggle from './component/ThemeToggle'
import ShoppingCart from './component/ShoppingCart'
import Auth from './component/Auth'
import { useSelector } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme; // ⚡️ Gán class light/dark cho body
  }, [theme]);

  return (
    <>
      <CounterUseReducer/>
      <CounterReduxToolkit/>
      <CounterReduxNo/>
      <CounterApp/>
      <TodoList/>
      <ThemeToggle/>
      <ShoppingCart/>
      <Auth/>
    </>
  )
}

export default App
