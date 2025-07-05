import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetailPage from "./components/ProductDetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CartFormModal from "./components/CartFormModal";

function App() {
	const [cart, setCart] = useState(() => {
		const storedCart = localStorage.getItem("jamcan_cart");
		return storedCart ? JSON.parse(storedCart) : [];
	});

	const [showCart, setShowCart] = useState(false);
	const [showOrderForm, setShowOrderForm] = useState(false);

	// Sync cart to localStorage
	useEffect(() => {
		localStorage.setItem("jamcan_cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product, selectedSize) => {
		const price = product.price[selectedSize];

		setCart((prev) => {
			const existingIndex = prev.findIndex(
				(item) => item.id === product.id && item.size === selectedSize
			);

			if (existingIndex !== -1) {
				const updated = [...prev];
				updated[existingIndex].quantity += 1;
				return updated;
			} else {
				return [
					...prev,
					{
						id: product.id,
						name: product.name,
						image: product.image,
						size: selectedSize,
						quantity: 1,
						price,
						spiceLevel: product.spiceLevel,
						description: product.description,
						featured: product.featured || false,
					},
				];
			}
		});
	};

	const removeFromCart = (productId, size) => {
		setCart((prev) =>
			prev.filter((item) => !(item.id === productId && item.size === size))
		);
	};

	const cartToggle = () => {
		setShowCart(!showCart);
	};

	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<Container maxWidth="xl">
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
					onClose={cartToggle}
					removeFromCart={removeFromCart}
				/>
			)}
			{showOrderForm && (
				<CartFormModal cart={cart} onClose={() => setShowOrderForm(false)} />
			)}
		</Container>
	);
}

export default App;
