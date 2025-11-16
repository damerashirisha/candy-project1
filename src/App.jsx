import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Components/Products'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/product'
import List from './Components/Categories'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Categories' element={<List/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
