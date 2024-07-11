import React from "react";
import "./Header.css";
import Logo from "../assets/OIP.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartList } = useCart();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
        <span>Vegito - Pieces Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
      <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};

export default Header;
