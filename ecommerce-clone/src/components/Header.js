import React from "react";
import "../styles/Header.css";

function Header({ cartCount, goToHome, goToCart }) {
  return (
    <header className="header">
      <div className="logo" onClick={goToHome} style={{ cursor: "pointer" }}>
        MyShop
      </div>

      <nav>
        <ul className="nav-links">
          <li onClick={goToHome} style={{ cursor: "pointer" }}>
            Home
          </li>

          <li onClick={goToCart} style={{ cursor: "pointer" }}>
            🛒 Cart ({cartCount})
          </li>

          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
