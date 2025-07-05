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
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

	let featuredProducts = products.filter((p) => p.featured);

	if (featuredProducts.length === 0) {
		featuredProducts = products.slice(0, 4);
	}

	const [startIndex, setStartIndex] = useState(0);
	const itemsToShow = isMobile ? 1 : isTablet ? 2 : 4;
	const maxIndex = Math.max(0, featuredProducts.length - itemsToShow);

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
	}, [startIndex, maxIndex]);

	// Always render `itemsToShow` slots to keep layout stable
	const visibleProducts = featuredProducts.slice(
		startIndex,
		startIndex + itemsToShow
	);

	return (
		<Box sx={{ py: 8, textAlign: "center" }}>
			<Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
				Featured Products
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

				<Grid
					container
					spacing={3}
					justifyContent="center"
					sx={{ maxWidth: "1200px", mx: "auto" }}
				>
					{Array.from({ length: itemsToShow }).map((_, i) => {
						const product = visibleProducts[i];
						return (
							<Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
								{product ? (
									<ProductCard product={product} />
								) : (
									<Box
										sx={{
											height: "100%",
											visibility: "hidden",
										}}
									>
										<ProductCard product={{}} />
									</Box>
								)}
							</Grid>
						);
					})}
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
						onClick={() => setStartIndex(i)}
						sx={{
							display: "inline-block",
							width: 10,
							height: 10,
							borderRadius: "50%",
							backgroundColor: i === startIndex ? "#333" : "#ccc",
							mx: 0.5,
							cursor: "pointer",
							transition: "background-color 0.3s ease",
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

export default FeaturedProducts;
