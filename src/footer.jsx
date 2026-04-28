import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#0f172a",
        color: "white",
        mt: 5,
        pt: 4,
        pb: 3,
        textAlign: "center"
      }}
    >
      {/* Logo or Title */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        GameCheck
      </Typography>

      <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
        Check if your PC can run any game instantly!
      </Typography>

      {/* Social Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
        <IconButton sx={{ color: "white" }}>
          <FaFacebook />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <FaInstagram />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <FaTwitter />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <FaYoutube />
        </IconButton>
      </Box>

      {/* Bottom Text */}
      <Typography variant="body2" sx={{ opacity: 0.5 }}>
        © {new Date().getFullYear()} GameCheck. All Rights Reserved.
      </Typography>
    </Box>
  );
}