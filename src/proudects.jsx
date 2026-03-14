import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

export default function Home() {
  const products = [
    { id: 1, name: "Headphones", price: 50, img: "https://images.unsplash.com/photo-1585386959984-a41552231693" },
    { id: 2, name: "Smart Watch", price: 80, img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f" },
    { id: 3, name: "Laptop", price: 900, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 4, name: "Camera", price: 400, img: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e" },
    { id: 5, name: "Keyboard", price: 40, img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f" },
    { id: 6, name: "Mouse", price: 25, img: "https://images.unsplash.com/photo-1527814050087-3793815479db" },
    { id: 7, name: "Phone", price: 600, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
    { id: 8, name: "Tablet", price: 300, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e" },
    { id: 9, name: "Speaker", price: 70, img: "https://images.unsplash.com/photo-1589003077984-894e133dabab" },
    { id: 10, name: "Monitor", price: 200, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf" },
  ];

  const [counts, setCounts] = useState(Array(products.length).fill(0));

  const increase = (index) => {
    setCounts(prev => {
      const newCounts = [...prev];
      newCounts[index]++;
      return newCounts;
    });
  };

  const decrease = (index) => {
    setCounts(prev => {
      const newCounts = [...prev];
      if (newCounts[index] > 0) {
        newCounts[index]--;
      }
      return newCounts;
    });
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", padding: "20px" }}>
     
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {products.map((product, index) => (
          <Card key={product.id} sx={{ width: 250 }}>
            <CardMedia component="img" height="160" image={product.img} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="text.secondary">Price: ${product.price}</Typography>
              <Typography>Quantity: {counts[index]}</Typography>
              <Button
                variant="contained"
                onClick={() => increase(index)}
                sx={{ backgroundColor: "red", marginRight: 1, "&:hover": { backgroundColor: "blue" } }}
              >
                +
              </Button>
              <Button
                variant="contained"
                onClick={() => decrease(index)}
                sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "blue" } }}
              >
                -
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
