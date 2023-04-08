import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MobileDetails from "./MobileDeatils";
import Home from "./Home";
import Cart from "./Cart";

//We use app to route
function App() {
  const [inputlist, setinputlist] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mobile/:id"
          element={<MobileDetails inp={inputlist} setinp={setinputlist} />}
        />
        <Route
          path="/cart"
          element={<Cart inp={inputlist} setinp={setinputlist} />}
        />
      </Routes>
    </>
  );
}
export default App;
