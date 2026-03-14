import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { FaLaptop, FaMobileAlt, FaCamera, FaHeadphones } from "react-icons/fa";

export default function Service() {
  const services = [
    { id: 1, name: "Laptop Repair", description: "We fix all laptop brands quickly.", icon: <FaLaptop size={40} /> },
    { id: 2, name: "Phone Repair", description: "Fast and reliable smartphone repair.", icon: <FaMobileAlt size={40} /> },
    { id: 3, name: "Camera Service", description: "Camera maintenance and repairs.", icon: <FaCamera size={40} /> },
    { id: 4, name: "Audio Equipment", description: "Headphones, speakers repair & setup.", icon: <FaHeadphones size={40} /> },
  ];

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", padding: "40px 20px" }}>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 5 }}>
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item key={service.id}>
            <Card sx={{ width: 250, textAlign: "center", padding: 2 }}>
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <CardContent>
                <Typography variant="h6">{service.name}</Typography>
                <Typography color="text.secondary">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}