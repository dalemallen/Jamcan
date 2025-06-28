import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

const AboutUsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF2D9", py: 10 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Image */}
          <Grid item size={{xs:12, sm:6}} justifyContent="center">
            <Box
              component="img"
              src="/images/B66C141C-F281-4A5D-AB22-3467F168E22C_f935e2f5-a406-4e80-9612-0cd0b94340c4.jpg.webp" // Replace with actual path
              alt="About Us"
              sx={{
                maxWidth: "50%",
                height: "100%",
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>

          {/* Right Text */}
          <Grid item size={{xs:12, sm:6}}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#0D1B2A", mb: 2 }}
            >
              About Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                   <Typography
              variant="p"
              sx={{ fontWeight: "bold", color: "#0D1B2A", mb: 2 }}
            >
              JamCan Hot Pepper Sauce brings the vibrant flavors of Jamaica to your table with our premium hot sauces.<br /> <br/>Our products are crafted from locally-sourced, fresh ingredients, offering a perfect blend of spice and taste.<br /><br />  Ideal for enhancing any dish, our sauces cater to those who crave authentic Jamaican heat. Visit us to explore our range and experience the fiery kick that sets JamCan apart.

            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
