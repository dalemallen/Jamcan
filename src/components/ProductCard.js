import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();

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
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				mx: "auto",
				transition: "transform 0.3s ease, box-shadow 0.3s ease",
				"&:hover": {
					transform: "translateY(-4px)",
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
					height: 180,
					width: "auto",
					objectFit: "contain",
					mx: "auto",
					mt: 2,
				}}
			/>

			<CardContent
				sx={{
					textAlign: "center",
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Typography
					variant="subtitle1"
					fontWeight="bold"
					sx={{ minHeight: 48 }}
					gutterBottom
				>
					{product.name}
				</Typography>

				{/* Spice Level */}
				<Box mb={1} minHeight={24}>
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
