import React from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

const NewsletterSection = () => {
  return (
    <Box sx={{ backgroundColor: "#E94E1B", py: 4, color: "#fff", textAlign: "center" }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Get the Heat First
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Be the first to know about new drops, discounts, and recipes.
        </Typography>

        <Grid container justifyContent="center" spacing={2}>
          <Grid container size={{xs:12, sm:6 , md:4}}      textAlign="center">
            <TextField
              placeholder="Enter your email"
              fullWidth
              variant="filled"
              sx={{
         
                backgroundColor: "#FFF3E6",
                borderRadius: 1,
                input: { color: "#333" }
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8B2B17",
                color: "#fff",
                height: "100%",
                fontWeight: "bold",
                px: 4,
                "&:hover": {
                  backgroundColor: "#6c2112"
                }
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsletterSection;
