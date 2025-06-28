
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';

import { Box, Typography, Grid } from '@mui/material';



const Contact = () => (
  <Grid
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(to bottom, #D62828 50%, #FDCB3C 50%)',
      px: 4,
      py: 6
    }}
  >
<Grid container  size={{xs:"12" , md:4}} justifyContent="center" >
   <ContactHero />
    <ContactForm />
</Grid>
   <Grid container  size={{xs:"12" , md:8}}>
       <Box
      component="img"
      src="/images/58798156-0be4-482c-af50-adef297d437f.png"
      alt="Jam Can Bottle"
      sx={{ maxHeight: "450px", objectFit: 'contain', mt: { xs: 4, md: 0 } }}
    />
   </Grid>
 
  </Grid>
);

export default Contact;
