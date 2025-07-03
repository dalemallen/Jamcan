import React, { useContext } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Stack,
	Link,
	Container,
	IconButton,
	Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../context/CartContext";

const Header = ({ onCartClick }) => {
	const { cartItems } = useContext(CartContext);

	// ✅ Defensive cart count calculation
	const cartCount = Array.isArray(cartItems)
		? cartItems.reduce((total, item) => total + (item.qty || 0), 0)
		: 0;

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
						<img src="/images/JamCanLogo.png" alt="Jam Can Logo" width={75} />
					</Typography>

					{/* Navigation + Cart */}
					<Stack direction="row" spacing={4} alignItems="center">
						<Link
							href="/"
							underline="none"
							color="inherit"
							sx={{ fontWeight: 500 }}
						>
							Home
						</Link>
						<Link
							href="/products"
							underline="none"
							color="inherit"
							sx={{ fontWeight: 500 }}
						>
							Products
						</Link>
						<Link
							href="/contact"
							underline="none"
							color="inherit"
							sx={{ fontWeight: 500 }}
						>
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
