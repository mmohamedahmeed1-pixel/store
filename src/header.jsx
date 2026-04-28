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
        background: "linear-gradient(to right,#0f0c29,#302b63,#24243e)",
        color: "white"
      }}
    >

      <Grid container spacing={5} alignItems="center">

        {/* Left Side */}
        <Grid item xs={12} md={6}>

          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "40px", md: "58px" }
            }}
          >
            Can Your PC  
            <span style={{ color: "#4fc3f7" }}> Run This Game?</span>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.8
            }}
          >
            ادخل مواصفات جهازك وتأكد إذا كانت لعبتك المفضلة هتشتغل  
            بدون لاج ولا لا… بشكل سريع ودقيق.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/proudects")}
            sx={{
              background: "#4fc3f7",
              fontSize: "18px",
              px: 5,
              py: 1.5,
              borderRadius: "10px",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                background: "#29b6f6"
              }
            }}
          >
            ابدأ الفحص الآن
          </Button>

        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>

<Box
  component="img"
  src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
  sx={{
    width: "80%",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
  }}
/>


        </Grid>

      </Grid>

    </Box>
  );
}