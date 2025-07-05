import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";

const AboutUsSection = () => {
	return (
		<section aria-labelledby="about-us-title">
			<Box sx={{ backgroundColor: "#FFF2D9", py: 10 }}>
				<Container>
					<Grid container spacing={4} alignItems="center">
						{/* Left Image */}
						<Grid
							item
							size={{ xs: 12, sm: 6 }}
							sx={{ textAlign: { xs: "center", sm: "left" } }}
						>
							<Box
								component="img"
								src="/images/B66C141C-F281-4A5D-AB22-3467F168E22C_f935e2f5-a406-4e80-9612-0cd0b94340c4.jpg.webp"
								alt="Bottles of JamCan Hot Pepper Sauce on a wooden table"
								sx={{
									width: "100%",
									maxWidth: 400,
									height: "auto",
									borderRadius: 2,
									boxShadow: 3,
									mx: { xs: "auto", sm: 0 },
									display: "block",
								}}
							/>
						</Grid>

						{/* Right Text */}
						<Grid item size={{ xs: 12, sm: 6 }}>
							<Typography
								variant="h4"
								color="black"
								sx={{ fontWeight: "bold", mb: 2 }}
							>
								About Us
							</Typography>

							<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
								<Typography
									variant="body1"
									component="p"
									sx={{ color: "#0D1B2A" }}
								></Typography>

								<Typography
									variant="body1"
									component="p"
									sx={{ color: "#0D1B2A" }}
								>
									Our products are crafted from locally-sourced, fresh
									ingredients, offering a perfect blend of spice and taste.
								</Typography>

								<Typography
									variant="body1"
									component="p"
									sx={{ color: "#0D1B2A" }}
								>
									Ideal for enhancing any dish, our sauces cater to those who
									crave authentic Jamaican heat. Visit us to explore our range
									and experience the fiery kick that sets JamCan apart.
								</Typography>
							</Box>

							<Button
								variant="contained"
								sx={{ mt: 3, backgroundColor: "#fbb033", color: "#111" }}
							>
								Explore Products
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</section>
	);
};

export default AboutUsSection;
