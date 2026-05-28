import { useState } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryBar from "./components/CategoryBar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

import products from "./data/products";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <Header cart={cart} />
      <Banner />
      <CategoryBar />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;