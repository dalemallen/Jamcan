import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
	{
		name: "Kelly",
		quote:
			"Perfect kick without overpowering your food. You can taste the peppers, not just burn your mouth off. Definitely a new staple in my kitchen.",
		avatar: "/images/user1.jpg",
	},
	{
		name: "Ashley",
		quote:
			"Nice balance of heat and flavor – not just fire for the sake of it. Great on grilled meats and even better in soups.",
		avatar: "/images/user2.jpg",
	},
	{
		name: "Jason",
		quote:
			"Smooth, spicy, and full of real pepper taste. It adds depth without drowning out your food. Solid find.",
		avatar: "/images/user3.jpg",
	},
];

const TestimonialsSection = () => {
	return (
		<Box sx={{ py: 10, backgroundColor: "#FFF1E6", textAlign: "center" }}>
			<Typography variant="h4" sx={{ fontWeight: "bold", mb: 6 }}>
				Tasted. Loved. Shared.
			</Typography>

			<Grid container spacing={4} justifyContent="center">
				{testimonials.map((t, idx) => (
					<Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
						<Avatar
							src={t.avatar}
							alt={t.name}
							sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
						/>
						<Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
							{Array.from({ length: 5 }).map((_, i) => (
								<StarIcon key={i} sx={{ color: "#EF4423" }} />
							))}
						</Box>
						<Typography variant="body1" sx={{ maxWidth: 300, mx: "auto" }}>
							“{t.quote}”{t.name && ` ${t.name}`}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default TestimonialsSection;
