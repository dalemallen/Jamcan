import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	MenuItem,
	Select,
} from "@mui/material";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductDetailPage = () => {
	const { id } = useParams();
	const product = products.find((p) => p.id === parseInt(id));
	const { addToCart } = useContext(CartContext);

	const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

	if (!product) {
		return (
			<Container sx={{ py: 4 }}>
				<Typography variant="h5">Product not found</Typography>
			</Container>
		);
	}

	const handleAddToCart = () => {
		addToCart(product, selectedSize);
	};

	return (
		<Container sx={{ py: 4 }}>
			<Grid container spacing={4} alignItems="center">
				{/* Image on Left */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Box
						component="img"
						src={product.image}
						alt={product.name}
						sx={{
							width: "100%",
							maxHeight: 400,
							objectFit: "contain",
							borderRadius: 2,
							boxShadow: 2,
						}}
					/>
				</Grid>

				{/* Details on Right */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
						{product.name}
					</Typography>

					<Typography variant="body1" sx={{ mb: 2 }}>
						{product.description}
					</Typography>

					<Box sx={{ mb: 2 }}>
						<Typography sx={{ fontWeight: "bold" }}>Size:</Typography>
						<Select
							value={selectedSize}
							onChange={(e) => setSelectedSize(e.target.value)}
							size="small"
							sx={{ mt: 1, minWidth: 120 }}
						>
							{product.sizes.map((size) => (
								<MenuItem key={size} value={size}>
									{size}
								</MenuItem>
							))}
						</Select>
					</Box>

					<Typography sx={{ fontWeight: "bold", mb: 1 }}>
						${product.price[selectedSize]} ({selectedSize})
					</Typography>

					<Typography sx={{ mb: 2 }}>
						🔥 Heat Level: {product.spiceLevel}
					</Typography>

					<Button
						variant="contained"
						onClick={handleAddToCart}
						sx={{
							backgroundColor: "#fbb033",
							color: "#000",
							fontWeight: "bold",
						}}
					>
						Add to Cart
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductDetailPage;
