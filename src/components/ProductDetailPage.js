import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetailPage() {
	const { id } = useParams();
	const product = products.find((p) => p.id === parseInt(id));
	const { addToCart } = useContext(CartContext);

	const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

	if (!product) {
		return (
			<div style={{ padding: 32 }}>
				<h2>Product not found</h2>
			</div>
		);
	}

	const handleAddToCart = () => {
		addToCart(product, selectedSize);
	};

	return (
		<div style={{ padding: 32, maxWidth: 800, margin: "auto" }}>
			<img
				src={product.image}
				alt={product.name}
				style={{ width: "100%", maxHeight: 300, objectFit: "contain" }}
			/>
			<h1>{product.name}</h1>
			<p>{product.description}</p>

			{/* Size selection */}
			<div>
				<label style={{ fontWeight: "bold", marginRight: 8 }}>Size:</label>
				<select
					value={selectedSize}
					onChange={(e) => setSelectedSize(e.target.value)}
				>
					{product.sizes.map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</select>
			</div>

			<p style={{ fontWeight: "bold", marginTop: 12 }}>
				${product.price[selectedSize]} ({selectedSize})
			</p>

			<p>🔥 Heat Level: {product.spiceLevel}</p>

			<button
				onClick={handleAddToCart}
				style={{
					marginTop: 16,
					backgroundColor: "#fbb033",
					border: "none",
					padding: "10px 16px",
					borderRadius: 4,
					cursor: "pointer",
					fontWeight: "bold",
				}}
			>
				Add to Cart
			</button>
		</div>
	);
}

export default ProductDetailPage;
