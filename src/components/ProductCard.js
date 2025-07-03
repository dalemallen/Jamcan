// src/components/ProductCard.js
import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();

	// Render price nicely if it's an object (multiple sizes), else fallback
	const renderPrice = () => {
		if (typeof product.price === "object") {
			return Object.entries(product.price)
				.map(([size, price]) => `${price} (${size})`)
				.join(" / ");
		}
		return `$${product.price}`;
	};

	return (
		<Card
			sx={{
				maxWidth: 240,
				mx: "auto",
				transition: "transform 0.3s ease, box-shadow 0.3s ease",
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow: 6,
				},
			}}
		>
			<Box
				component="img"
				src={product.image}
				alt={product.name}
				loading="lazy"
				sx={{
					width: "100%",
					height: 180,
					objectFit: "contain",
					borderRadius: "4px 4px 0 0",
				}}
			/>

			<CardContent sx={{ textAlign: "center" }}>
				<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
					{product.name}
				</Typography>

				{/* Optional: Spice Level */}
				<Box mb={1}>
					{Array.from({ length: product.spiceLevel || 0 }).map((_, i) => (
						<span key={i}>🌶️</span>
					))}
				</Box>

				{/* Price */}
				{product.price && (
					<Typography variant="body2" color="text.secondary">
						{renderPrice()}
					</Typography>
				)}

				<Button
					variant="outlined"
					size="small"
					onClick={() => navigate(`/products/${product.id}`)}
					sx={{ mt: 1 }}
				>
					View Details
				</Button>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
