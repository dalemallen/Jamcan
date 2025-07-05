import React, { useState } from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import productsData from "../data/products";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

const ProductList = ({ cart, addToCart, openOrderForm }) => {
	const [filters, setFilters] = useState({ heat: [] });

	const filteredProducts = productsData.filter(
		(p) => filters.heat.length === 0 || filters.heat.includes(p.spiceLevel)
	);

	const totalItems = cart.reduce((a, c) => a + c.quantity, 0);

	return (
		<Container sx={{ py: 4 }}>
			<ProductFilters filters={filters} setFilters={setFilters} />

			<Box sx={{ mt: 4 }}>
				{filteredProducts.length > 0 ? (
					<Grid container spacing={3}>
						{filteredProducts.map((product) => (
							<Grid
								item
								key={product.id}
								size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
							>
								<ProductCard product={product} addToCart={addToCart} />
							</Grid>
						))}
					</Grid>
				) : (
					<Box sx={{ textAlign: "center", py: 4 }}>
						<Typography variant="h6" color="text.secondary">
							No products match your filters.
						</Typography>
					</Box>
				)}
			</Box>

			{cart.length > 0 && (
				<Box sx={{ textAlign: "center", mt: 4 }}>
					<Button
						variant="contained"
						size="large"
						color="primary"
						onClick={openOrderForm}
					>
						Order Now ({totalItems} items)
					</Button>
				</Box>
			)}
		</Container>
	);
};

export default ProductList;
