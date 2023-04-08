import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import Cart from "./Cart";
import { ShoppingCart } from "phosphor-react";
const Nav = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h1 className="nav-heading">Mobile Store</h1>
        </Link>
        <p className="">Connects the World</p>
        <Link to="/cart">
          <ShoppingCart className="nav-cart" size={45} />
        </Link>
      </div>
    </>
  );
};
export default Nav;
