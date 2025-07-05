import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartFormModal from "./CartFormModal";

function CartDrawer({ onClose }) {
	const {
		cartItems,
		incrementQuantity,
		decrementQuantity,
		removeFromCart,
		clearCart,
	} = useContext(CartContext);

	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<>
			<div
				style={{
					position: "fixed",
					top: 0,
					right: 0,
					width: 320,
					height: "100vh",
					background: "#fff",
					boxShadow: "-2px 0 8px rgba(0,0,0,0.15)",
					padding: 16,
					zIndex: 1000,
					overflowY: "auto",
				}}
			>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<h3>Your Cart</h3>
					<button
						onClick={onClose}
						style={{
							fontSize: 20,
							background: "none",
							border: "none",
							cursor: "pointer",
						}}
					>
						✖
					</button>
				</div>

				{cartItems.length === 0 ? (
					<p style={{ marginTop: 40 }}>No items in cart.</p>
				) : (
					<>
						<ul style={{ padding: 0, listStyle: "none", marginTop: 20 }}>
							{cartItems.map((item, index) => (
								<li
									key={`${item.id}-${item.size}-${index}`}
									style={{
										marginBottom: 20,
										borderBottom: "1px solid #eee",
										paddingBottom: 8,
									}}
								>
									<div>
										<strong>{item.name}</strong> ({item.size})
									</div>

									<div style={{ fontSize: 13, color: "#555" }}>
										Spice Level: 🌶️ {item.spiceLevel} <br />
										{item.description}
									</div>

									<div
										style={{
											marginTop: 8,
											display: "flex",
											alignItems: "center",
											gap: "8px",
										}}
									>
										<button
											onClick={() => decrementQuantity(item.id, item.size)}
											style={{
												width: 24,
												height: 24,
												fontSize: 16,
												borderRadius: 4,
											}}
										>
											–
										</button>
										<span>{item.quantity}</span>
										<button
											onClick={() => incrementQuantity(item.id, item.size)}
											style={{
												width: 24,
												height: 24,
												fontSize: 16,
												borderRadius: 4,
											}}
										>
											+
										</button>
									</div>

									<div style={{ marginTop: 4, fontSize: 14, color: "#000" }}>
										Price: ${(item.price * item.quantity).toFixed(2)} ($
										{item.price} each)
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
											}}
										>
											Remove Size
										</button>
									</div>
								</li>
							))}
						</ul>

						<div style={{ marginTop: 20, fontWeight: "bold", fontSize: 16 }}>
							Total: ${totalPrice.toFixed(2)}
						</div>

						<div
							style={{
								marginTop: 10,
								display: "flex",
								gap: "8px",
								flexWrap: "wrap",
							}}
						>
							<button
								onClick={clearCart}
								style={{
									padding: "4px 12px",
									background: "#ff4d4f",
									color: "#fff",
									border: "none",
									borderRadius: 4,
									cursor: "pointer",
								}}
							>
								Clear Cart
							</button>

							<button
								onClick={() => setIsCheckoutOpen(true)}
								style={{
									padding: "4px 12px",
									background: "#4CAF50",
									color: "#fff",
									border: "none",
									borderRadius: 4,
									cursor: "pointer",
								}}
							>
								Checkout
							</button>
						</div>
					</>
				)}
			</div>

			{/* Checkout Modal */}
			<CartFormModal
				cart={cartItems}
				open={isCheckoutOpen}
				onClose={() => setIsCheckoutOpen(false)}
			/>
		</>
	);
}

export default CartDrawer;
