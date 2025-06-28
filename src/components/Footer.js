import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2E2E2E", color: "#fff", py: 6,  }}>
      <Container>
        <Grid container spacing={4}>
          {/* Logo / Brand */}
          <Grid item size={{xs:12, sm:6 , md:4}}>
             <img
                           src="/images/JamCanLogo.png" // Replace with actual path
                           alt="Jam Can Logo"
                           width={75}
        
                         />
            <Typography variant="body2">
              Bringing bold Caribbean heat to your table — one bottle at a time.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item size={{xs:12, sm:6 , md:4}}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#products" color="inherit" underline="hover">Products</Link>
              <Link href="#recipes" color="inherit" underline="hover">Recipes</Link>
              <Link href="#about" color="inherit" underline="hover">About Us</Link>
              <Link href="#contact" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>

          {/* Contact / Social */}
          <Grid item size={{xs:12, sm:6 , md:4}}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Stay Connected
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="mailto:hello@jamcan.com" sx={{ color: "#fff" }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6, fontSize: 14, opacity: 0.7 }}>
          © {new Date().getFullYear()} Jam Can. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
