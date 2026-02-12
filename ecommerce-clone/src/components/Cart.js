import React from "react";
import "../styles/Cart.css";

function Cart({ cartItems }) {
  return (
    <div className="cart-section">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} width="50" />
            <span>{item.title}</span>
            <span>₹ {item.price}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
