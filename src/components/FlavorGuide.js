import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const flavors = [
	{ label: "Mild", color: "#D3F0B0" },
	{ label: "Medium", color: "#F9E174" },
	{ label: "Hot", color: "#F99848" },
	{ label: "Extra Hot", color: "#E84C2C" },
];

const FlavorGuide = () => {
	const [hoveredFlavor, setHoveredFlavor] = useState(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const handleMouseEnter = (flavor, e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setHoveredFlavor(flavor);
		setMousePos({
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2,
		});
	};

	const handleMouseLeave = () => {
		setHoveredFlavor(null);
	};

	return (
		<Box sx={{ position: "relative", overflow: "hidden" }}>
			{/* Expanding background effect */}
			<AnimatePresence>
				{hoveredFlavor && (
					<motion.div
						key={hoveredFlavor.label}
						initial={{
							opacity: 0,
							scale: 0,
							x: mousePos.x,
							y: mousePos.y,
							position: "absolute",
						}}
						animate={{
							opacity: 1,
							scale: 10,
							x: mousePos.x - 500,
							y: mousePos.y - 500,
						}}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						style={{
							position: "absolute",
							width: 1000,
							height: 1000,
							borderRadius: "50%",
							backgroundColor: hoveredFlavor.color,
							zIndex: 0,
						}}
					/>
				)}
			</AnimatePresence>

			{/* Foreground content */}
			<Box sx={{ position: "relative", py: 8, textAlign: "center", zIndex: 1 }}>
				<Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
					Flavor Guide
				</Typography>
				<Typography variant="subtitle1" sx={{ mb: 4 }}>
					Our hot sauces range from mild to extra hot.
				</Typography>

				<Grid container justifyContent="center" spacing={4}>
					{flavors.map((flavor, index) => (
						<Grid item xs={6} sm={3} key={index}>
							<Box
								onMouseEnter={(e) => handleMouseEnter(flavor, e)}
								onMouseLeave={handleMouseLeave}
								sx={{
									backgroundColor: flavor.color,
									borderRadius: "50%",
									width: 100,
									height: 100,
									mx: "auto",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: "bold",
									cursor: "pointer",
									transition: "transform 0.3s ease-in-out",
									"&:hover": {
										transform: "scale(1.1)",
									},
								}}
							>
								<Typography variant="subtitle1">{flavor.label}</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default FlavorGuide;
