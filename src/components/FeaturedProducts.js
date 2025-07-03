// src/components/FeaturedProducts.js
import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	IconButton,
	Grid,
	useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import ProductCard from "./ProductCard";
import products from "../data/products";

const FeaturedProducts = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	let featuredProducts = products.filter((p) => p.featured);

	if (featuredProducts.length === 0) {
		// fallback: use the first 4
		featuredProducts = products.slice(0, 4);
	}

	console.log("featuredProducts: ", featuredProducts);
	const [startIndex, setStartIndex] = useState(0);
	const itemsToShow = isMobile ? 1 : 4;
	const maxIndex = featuredProducts.length - itemsToShow;

	const scroll = (direction) => {
		if (direction === "left") {
			setStartIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
		} else {
			setStartIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
		}
	};

	useEffect(() => {
		const interval = setInterval(() => scroll("right"), 5000);
		return () => clearInterval(interval);
	}, [startIndex]);

	const visibleProducts = featuredProducts.slice(
		startIndex,
		startIndex + itemsToShow
	);

	return (
		<Box sx={{ py: 8, textAlign: "center" }}>
			<Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
				FEATURED PRODUCTS
			</Typography>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<IconButton onClick={() => scroll("left")}>
					<ArrowBackIos />
				</IconButton>

				<Grid container spacing={3} justifyContent="center" maxWidth="lg">
					{visibleProducts.map((product, i) => (
						<Grid item key={i} xs={12} sm={6} md={3}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>

				<IconButton onClick={() => scroll("right")}>
					<ArrowForwardIos />
				</IconButton>
			</Box>

			{/* Pagination Dots */}
			<Box mt={3}>
				{Array.from({ length: maxIndex + 1 }).map((_, i) => (
					<Box
						key={i}
						sx={{
							display: "inline-block",
							width: 10,
							height: 10,
							borderRadius: "50%",
							backgroundColor: i === startIndex ? "#333" : "#ccc",
							mx: 0.5,
							transition: "background-color 0.3s ease",
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

export default FeaturedProducts;
