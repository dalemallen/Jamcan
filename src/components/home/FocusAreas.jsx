import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';

const focusData = [
  { title: "Finance", description: "Support for future financial leaders." },
  { title: "Technology", description: "Fueling tech innovation and careers." },
  { title: "Art", description: "Empowering creative expression and impact." }
];

export default function FocusAreas() {
  return (
    <Box sx={{ backgroundColor: '#f0f4f8', py: 6 }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
          Our Focus Areas
        </Typography>
        <Grid container spacing={4}>
          {focusData.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
