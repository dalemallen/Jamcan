import { Grid, TextField, Button } from '@mui/material';

const ContactForm = () => (
  <Grid container sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, backgroundColor: '#FFF3E4', borderRadius: 2 }}>
    <TextField fullWidth label="Name" margin="normal" />
    <TextField fullWidth label="Email" margin="normal" />
    <TextField fullWidth label="Phone (Optional)" margin="normal" />
    <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
    <Button variant="contained" sx={{ mt: 2, bgcolor: '#FFCA28' }}>
      Send Message
    </Button>
  </Grid>
);

export default ContactForm;
