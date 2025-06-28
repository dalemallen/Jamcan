import React from "react";
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

const recipes = [
  {
    name: "Spicy Jerk Tacos",
    image: "/images/jerk-tacos.jpg"
  },
  {
    name: "Pineapple Heat Salad",
    image: "/images/pineapple-salad.jpg"
  },
  {
    name: "Ghost Pepper BBQ Wings",
    image: "/images/ghost-wings.jpg"
  },
  {
    name: "Mango Chicken Skewers",
    image: "/images/mango-skewers.jpg"
  }
];

const RecipeSection = () => {
  return (
    <Grid container sx={{ py: 10, backgroundColor: "#FFF2E1" }} justifyContent="center">
          <Grid container spacing={4} justifyContent="center" size={{xs:12}}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Get Cooking with Jam Can
      </Typography>
</Grid>
      <Grid container spacing={4}  size={{xs:10}}>
        {recipes.map((recipe, index) => (
          <Grid key={index} item size={{xs:12, sm:6, md:3}} >
            <Card sx={{ textAlign: "center", boxShadow: 2 }}>
              <CardMedia
                component="img"
                image={recipe.image}
                alt={recipe.name}
                sx={{ height: 160, objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {recipe.name}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#EF4423",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: 2,
                    px: 2,
                    "&:hover": {
                      backgroundColor: "#d63718"
                    }
                  }}
                >
                  See Recipe
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default RecipeSection;
