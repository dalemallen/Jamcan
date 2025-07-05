import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		const saved = localStorage.getItem("cartItems");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	// Add to cart
	const addToCart = (product, selectedSize) => {
		const price = product.price[selectedSize];

		const existingIndex = cartItems.findIndex(
			(item) => item.id === product.id && item.size === selectedSize
		);

		if (existingIndex !== -1) {
			const updated = [...cartItems];
			updated[existingIndex].quantity += 1;
			setCartItems(updated);
		} else {
			setCartItems([
				...cartItems,
				{
					id: product.id,
					name: product.name,
					size: selectedSize,
					price,
					image: product.image,
					quantity: 1,
					spiceLevel: product.spiceLevel,
					description: product.description,
					featured: product.featured || false,
				},
			]);
		}
	};

	// Increment quantity
	const incrementQuantity = (productId, size) => {
		setCartItems((prev) =>
			prev.map((item) =>
				item.id === productId && item.size === size
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
	};

	// Decrement quantity
	const decrementQuantity = (productId, size) => {
		setCartItems((prev) =>
			prev
				.map((item) =>
					item.id === productId && item.size === size
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter((item) => item.quantity > 0)
		);
	};

	// Remove a specific line-item completely
	const removeFromCart = (productId, size) => {
		setCartItems((prev) =>
			prev.filter((item) => !(item.id === productId && item.size === size))
		);
	};

	// Remove all sizes of a product
	const clearProduct = (productId) => {
		setCartItems((prev) => prev.filter((item) => item.id !== productId));
	};

	// Clear entire cart
	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				incrementQuantity,
				decrementQuantity,
				removeFromCart,
				clearProduct,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
