import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} sx={{ backgroundColor: 'var(--light-bg)', py: 8 }}>
      <Container>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Empowering Future Leaders
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Scholarships for Bahamian students in Finance, Technology, and Art.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" size="large">Apply Now</Button>
          <Button variant="outlined" color="primary" size="large">Donate</Button>
        </Stack>
      </Container>
    </Box>
  );
}
