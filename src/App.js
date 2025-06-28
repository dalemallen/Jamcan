import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from "./components/Header";
import Footer from "./components/Footer";

import Products from './pages/Products';
import ProductDetailPage from './components/ProductDetailPage';





import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

import CartDrawer from './components/CartDrawer';
import CartFormModal from './components/CartFormModal';

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('jamcan_cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('jamcan_cart', JSON.stringify(cart));
  }, [cart]);
console.log("show cart", showCart);
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

    const cartToggle = () => {
    setShowCart(!showCart)
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
   <>
      <Header cartCount={totalItems} onCartClick={cartToggle} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              addToCart={addToCart}
              openOrderForm={() => setShowOrderForm(true)}
            />
          }
        />
        <Route
          path="/products/:id"
          element={<ProductDetailPage addToCart={addToCart} />}
        />
      </Routes>
      <Footer />


{showCart && (
  <CartDrawer
    cart={cart}
    onClose={cartToggle} // pass the same toggle function to close
    removeFromCart={removeFromCart}
  />
)}

      {showOrderForm && (
        <CartFormModal cart={cart} onClose={() => setShowOrderForm(false)} />
      )}
    </>

  );
}

export default App;

