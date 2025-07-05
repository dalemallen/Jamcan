import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
	Box,
	Typography,
} from "@mui/material";

const CartFormModal = ({ open, onClose, cart }) => {
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Order submitted!");
		onClose();
	};

	return (
		<Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle>Checkout</DialogTitle>
			<form onSubmit={handleSubmit}>
				<DialogContent dividers>
					<Box sx={{ mb: 2 }}>
						<Typography variant="body1">Your Order:</Typography>
						<ul>
							{cart.map((item) => (
								<li key={`${item.id}-${item.size}`}>
									{item.name} ({item.size}) × {item.quantity}
								</li>
							))}
						</ul>
						<Typography variant="h6">
							Total: ${totalPrice.toFixed(2)}
						</Typography>
						<Typography variant="caption" display="block" mt={1}>
							Estimated delivery: 30–45 minutes
						</Typography>
					</Box>

					<TextField
						fullWidth
						label="Full Name"
						name="name"
						required
						margin="dense"
					/>
					<TextField
						fullWidth
						label="Email"
						name="email"
						type="email"
						required
						margin="dense"
					/>
					<TextField
						fullWidth
						label="Phone"
						name="phone"
						required
						margin="dense"
					/>
					<TextField
						fullWidth
						label="Notes"
						name="notes"
						multiline
						rows={3}
						margin="dense"
					/>
				</DialogContent>

				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button type="submit" variant="contained">
						Submit Order
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default CartFormModal;
