import { useState } from "react";
import "./App.css";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Product from "./Components/product";
import List from "./Components/Categories";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<List />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
