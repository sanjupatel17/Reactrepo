import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import productsData from "./data/products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setMessage(`${product.title} added to cart`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  // Filter products directly (PROFESSIONAL WAY)
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header
        cartCount={cartItems.length}
        goToHome={() => setPage("home")}
        goToCart={() => setPage("cart")}
      />

      {message && <div className="toast">{message}</div>}

      {page === "home" && (
        <>
          <SearchBar setSearchTerm={setSearchTerm} />
          <Banner />
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </>
      )}

      {page === "cart" && (
        <Cart cartItems={cartItems} />
      )}

      <Footer />
    </>
  );
}

export default App;
