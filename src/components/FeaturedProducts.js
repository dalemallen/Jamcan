import React from "react";
import {
	Box,
	Typography,
	Grid,
	IconButton,
	useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const products = [
	{
		name: "Jamcan Original Hot Pepper Sauce",
		image:
			"/images/PhotoRoom_20230326_091702_ed703e27-6546-448c-ba10-a3397d00929e.jpg.webp",
		description:
			'Bold, fiery, and packed with Caribbean flavour. Made with all-natural ingredients to bring a real "taste of the islands" to your table.',
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 5,
	},
	{
		name: "Apple Inferno Fusion",
		image: "/images/Photoroom_20240818_224058.JPG",
		description:
			"A fiery blend of crisp apples and bold Caribbean heat. Sweet, sharp, and perfect for spicing up your meals.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 4,
	},
	{
		name: "Asian Pear Radiance",
		image: "/images/Photoroom_20240818_223817.JPG",
		description:
			"Bright, juicy Asian pear meets smooth Caribbean heat. A fresh twist for your favourite dishes.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 3,
	},
	{
		name: "Bourbon Blaze Fusion",
		image: "/images/Photoroom_20240818_224339.JPG",
		description:
			"Smooth bourbon with a bold Caribbean kick. Sweet, smoky heat for any dish.",
		sizes: "12oz",
		price: "$22.99",
		spiceLevel: 4,
	},
	{
		name: "Island Blaze Caribbean Heat",
		image: "/images/Photoroom_20240818_224012.JPG",
		description:
			"A bold blend of island peppers and vibrant Caribbean fire. Brings the perfect heat to any dish.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 5,
	},
	{
		name: "Lemon Lime Citrus Crush",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Bright citrus and bold Caribbean heat come together in this zesty, fiery blend. A perfect splash of flavour for any dish.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 4,
	},
	{
		name: "Mango Burst Delight",
		image: "/images/Photoroom_20240818_224012.JPG",
		description:
			"Ripe mango and fiery Caribbean peppers in every drop. Sweet, vibrant heat that lifts any dish.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 4,
	},
	{
		name: "Pearlicious Smoldering",
		image: "/images/Photoroom_20240818_223817.JPG",
		description:
			"Juicy pear with a slow-building Caribbean heat. A smooth, fiery finish for your favourite dishes.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 3,
	},
	{
		name: "Pineapple Paradise Heat",
		image: "/images/Photoroom_20240818_224012.JPG",
		description:
			"Tropical pineapple with a bold Caribbean bite. Sweet, vibrant heat that wakes up every dish.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 4,
	},
	{
		name: "Red Hot Chili Sauce",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Classic red chilies with bold Caribbean fire. Smooth, vibrant heat that lights up any dish.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 5,
	},
	{
		name: "Scorpion Velvet Heat",
		image: "/images/Photoroom_20240818_223925.JPG",
		description:
			"Velvety smooth – with serious scorpion pepper fire. Bold, lingering heat for true spice lovers.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 5,
	},
	{
		name: "Zombie Ghost",
		image: "/images/Photoroom_20240818_223925.JPG",
		description:
			"Ghost pepper heat with a haunting Caribbean bite. Intense, smoky fire for the brave.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 5,
	},
	{
		name: "Blueberry Heatwave",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"A sweet-heat blend of ripe blueberries and fiery Caribbean peppers. Perfect for adding a fruity kick to any dish.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 4,
	},
	{
		name: "Sizzling Honey Garlic",
		image: "/images/Photoroom_20240818_223852.JPG",
		description:
			"Sweet honey and bold garlic with a smooth Caribbean heat. A perfect balance of sweet, savoury, and spice.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 3,
	},
	{
		name: "Island Vibes Jerk",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Classic island jerk spices with bold Caribbean heat. Rich, smoky flavour that brings dishes to life.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 4,
	},
	{
		name: "Sweet Strawberry Heat Storm",
		image: "/images/Photoroom_20240818_223734.JPG",
		description:
			"Juicy strawberries with a bold Caribbean kick. Sweet, fruity heat that takes dishes to the next level.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 4,
	},
	{
		name: "Green Seasoning",
		image: "/images/Photoroom_20240818_224339.JPG",
		description:
			"Fresh herbs and bold Caribbean flavour. A vibrant blend to spice up your cooking.",
		sizes: "12oz",
		price: "$16.99",
		spiceLevel: 2,
	},
	{
		name: "Zesty Habanero Inferno",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Fiery habaneros with a bold citrus twist. Bright, zesty heat that wakes up any dish.",
		sizes: "5oz, 12oz",
		price: "$7.99, $12.99",
		spiceLevel: 5,
	},
];

const FeaturedProducts = () => {
	const scrollRef = React.useRef(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const scroll = (direction) => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				left: direction === "left" ? -300 : 300,
				behavior: "smooth",
			});
		}
	};

	return (
		<Box sx={{ py: 8, textAlign: "center" }}>
			<Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
				FEATURED PRODUCTS
			</Typography>

			<Box
				sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<IconButton onClick={() => scroll("left")}>
					<ArrowBackIos />
				</IconButton>

				<Box
					ref={scrollRef}
					sx={{
						display: "flex",
						overflowX: "auto",
						scrollBehavior: "smooth",
						gap: 4,
						px: 2,
						py: 1,
					}}
				>
					{products.map((product, index) => (
						<Box
							key={index}
							sx={{
								minWidth: 140,
								textAlign: "center",
							}}
						>
							<Box
								component="img"
								src={product.image}
								alt={product.name}
								sx={{
									width: 200,
									height: "auto",
									mb: 1,
								}}
							/>
							<Typography variant="subtitle1">{product.name}</Typography>
						</Box>
					))}
				</Box>

				<IconButton onClick={() => scroll("right")}>
					<ArrowForwardIos />
				</IconButton>
			</Box>
		</Box>
	);
};

export default FeaturedProducts;
