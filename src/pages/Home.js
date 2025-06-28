import React from "react";

import Hero from '../components/Hero';
import FeaturedProducts from "../components/FeaturedProducts";
import AboutUsSection from "../components/AboutUsSection"
import FlavorGuide from "../components/FlavorGuide";
import RecipeSection from "../components/RecipeSection";
import TestimonialsSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";


const Home = () => {
  return (
    <div >
 
        <Hero />
        <FeaturedProducts />
        <AboutUsSection />
        <FlavorGuide />
        {/* <RecipeSection /> */}
        <TestimonialsSection />
        <NewsletterSection />
 
    </div>
  );
}

export default Home;
