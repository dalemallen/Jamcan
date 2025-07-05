import React from "react";

import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutUsSection from "../components/AboutUsSection";
import FlavorGuide from "../components/FlavorGuide";
import RecipeSection from "../components/RecipeSection";
import TestimonialsSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";
import { Box, Typography, Grid } from "@mui/material";
const Home = () => {
	return (
		<Grid container size={{ xs: 12 }} justifyContent="center">
			<Hero />
			<FeaturedProducts />
			<AboutUsSection />
			<FlavorGuide />

			<TestimonialsSection />
			<NewsletterSection />
		</Grid>
	);
};

export default Home;
