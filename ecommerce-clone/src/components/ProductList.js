import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          No products found
        </h2>
      ) : (
        products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
