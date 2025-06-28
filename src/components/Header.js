import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Link,
  Container,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ cartCount = 0, onCartClick }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "#fff", color: "#111" }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                    <img
                           src="/images/JamCanLogo.png" // Replace with actual path
                           alt="Jam Can Logo"
                           width={75}
        
                         />
          </Typography>

          {/* Navigation + Cart */}
          <Stack direction="row" spacing={4} alignItems="center">
            <Link href="/" underline="none" color="inherit" sx={{ fontWeight: 500 }}>
              Home
            </Link>
            <Link href="/about" underline="none" color="inherit" sx={{ fontWeight: 500 }}>
              About Us
            </Link>
            <Link href="/products" underline="none" color="inherit" sx={{ fontWeight: 500 }}>
              Product
            </Link>
            <Link href="/contact" underline="none" color="inherit" sx={{ fontWeight: 500 }}>
              Contact
            </Link>

            {/* Cart Icon */}
            <IconButton color="inherit" onClick={onCartClick}>
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
