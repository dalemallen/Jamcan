import React from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#C5271C",
				color: "#fff",
				// py: 10,
				// backgroundImage:
				// 	"url('/images/ChatGPT Image May 29, 2025, 05_20_38 PM.png')",
				backgroundSize: "contain",
				backgroundPosition: "25% 25%",
				backgroundRepeat: "no-repeat",
				// height: "40vh",
			}}
			id="hero"
		>
			<Container
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<Grid container alignItems="center" justifyContent="center">
					{/* Left: Image */}
					<Grid
						container
						size={{ xs: 12, sm: 6 }}
						// sx={{ backgroundColor: "#C5271C" }}
					>
						<Box
							component="img"
							src="/images/ChatGPT Image May 29, 2025, 05_20_38 PM.png"
							alt="Bottles of JamCan Hot Pepper Sauce on a wooden table"
							sx={{
								width: "100%",
								maxWidth: 300,
								height: "auto",

								mx: { xs: "auto", sm: 0 },
								display: "block",
							}}
						/>
					</Grid>

					{/* Right: Text & CTA */}
					<Grid
						container
						size={{ xs: 12, sm: 6 }}
						justifyContent="center"
						alignItems="center"
						// id="right"
					>
						<Box
							component={motion.div}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<Typography
								variant="h3"
								component="h1"
								gutterBottom
								sx={{ fontWeight: 700 }}
							>
								TASTE OF THE CARIBBEAN
							</Typography>
							<Typography variant="subtitle1" sx={{ mb: 3 }}>
								Bold flavor. Real heat. All natural.
							</Typography>
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#E9511F",
									color: "#000",
									borderRadius: "4px",
									px: 4,
									py: 1.5,
									fontWeight: 600,
									"&:hover": {
										backgroundColor: "#000",
										color: "#E9511F",
									},
								}}
							>
								SHOP NOW
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
