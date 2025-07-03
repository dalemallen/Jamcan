// src/components/CartDrawer.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartDrawer({ onClose }) {
	const { cartItems, removeFromCart, clearProduct } = useContext(CartContext);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				right: 0,
				width: 300,
				height: "100vh",
				background: "#fff",
				boxShadow: "-2px 0 8px rgba(0,0,0,0.15)",
				padding: 16,
				zIndex: 1000,
				overflowY: "auto",
			}}
		>
			<h3>Your Cart</h3>
			<button onClick={onClose} style={{ float: "right" }}>
				✖
			</button>

			<ul style={{ padding: 0, listStyle: "none", marginTop: 40 }}>
				{cartItems.map((item, index) => (
					<li
						key={`${item.id}-${item.size}-${index}`}
						style={{ marginBottom: 16 }}
					>
						<div>
							<strong>{item.name}</strong> ({item.size}) × {item.quantity}
						</div>
						<div style={{ fontSize: 14, color: "#555" }}>
							{typeof item.price === "object"
								? `$${item.price[item.size]} each`
								: `$${item.price} each`}
						</div>

						<div style={{ marginTop: 6 }}>
							<button
								onClick={() => removeFromCart(item.id, item.size)}
								style={{
									padding: "2px 8px",
									fontSize: 12,
									background: "#fbb033",
									border: "none",
									borderRadius: 4,
									cursor: "pointer",
									marginRight: 8,
								}}
							>
								Remove Size
							</button>
							<button
								onClick={() => clearProduct(item.id)}
								style={{
									padding: "2px 8px",
									fontSize: 12,
									background: "#ff4d4f",
									color: "#fff",
									border: "none",
									borderRadius: 4,
									cursor: "pointer",
								}}
							>
								Remove All
							</button>
						</div>
					</li>
				))}
			</ul>

			{cartItems.length === 0 && <p>No items in cart.</p>}
		</div>
	);
}

export default CartDrawer;
