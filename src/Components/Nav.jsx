import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="brand">
          <span>🍦</span> IceCream
        </div>

        {/* Links */}
        <ul className={`menu ${open ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Flavors">Flavors</Link></li>
          <li><Link to="/Specials">Specials</Link></li>
          <li><Link to="/About">About</Link></li>

          <li className="mobile-order">
            <a href="#order" className="order-btn">Order Now</a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="right">
          <div className="cart">
            <FaShoppingCart />
            <span className="badge">2</span>
          </div>

          <button className="order-btn desktop">Order Now</button>

          <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
