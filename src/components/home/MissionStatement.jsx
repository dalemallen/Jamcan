import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function MissionStatement() {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 6 }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Our Mission
        </Typography>
        <Typography variant="body1">
          Tydal Foundations is committed to nurturing Bahamian excellence by supporting students pursuing undergraduate studies internationally. We believe in the transformative power of education in Finance, Technology, and the Arts.
        </Typography>
      </Container>
    </Box>
  );
}
