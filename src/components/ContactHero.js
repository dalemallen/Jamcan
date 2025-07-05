import { Grid, Typography } from "@mui/material";

const ContactHero = () => (
	<Grid
		container
		item
		size={{ xs: 12, md: 6 }}
		justifyContent="center"
		alignItems="center"
	>
		<Typography variant="h3" fontWeight="bold">
			CONTACT US
		</Typography>
		<Typography mt={3}>
			We’re here to help. <br />
			Get in touch with any questions or comments!
		</Typography>
	</Grid>
);

export default ContactHero;
