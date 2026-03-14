import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 4, md: 10 },
        background: "linear-gradient(to right,#0f2027,#203a43,#2c5364)",
        color: "white"
      }}
    >

      <Grid container spacing={5} alignItems="center">

     
        <Grid item xs={12} md={6}>

          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "40px", md: "60px" }
            }}
          >
            Best Electronics Store
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.8
            }}
          >
            Discover the latest laptops, smartphones and accessories
            with the best prices in the market.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/proudects")}
            sx={{
              background: "#ff9800",
              fontSize: "18px",
              px: 5,
              py: 1.5,
              borderRadius: "10px",
              "&:hover": {
                background: "#fb8c00"
              }
            }}
          >
            Shop Now
          </Button>

        </Grid>

      
        <Grid item xs={12} md={6}>

          <Box
            component="img"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            sx={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          />

        </Grid>

      </Grid>

    </Box>
  );
}
