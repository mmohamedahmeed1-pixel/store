import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ cartCount, darkMode, setDarkMode }) {

  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/proudects" },
    { name: "Service", path: "/service" },
    { name: "Help", path: "/help" }
  ];

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="sticky" sx={{ background: darkMode ? "#111" : "#0f172a" }}>
      <Toolbar>

        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "1px" }}
        >
          GameCheck
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{
                color: location.pathname === page.path ? "#4fc3f7" : "#fff",
                fontWeight: "bold",
                "&:hover": {
                  color: "#4fc3f7"
                }
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        {/* Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>

          {/* Dark Mode */}
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Cart */}
          <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>

        </Box>

        {/* Mobile Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.name}
              component={Link}
              to={page.path}
              onClick={handleClose}
            >
              {page.name}
            </MenuItem>
          ))}
        </Menu>

      </Toolbar>
    </AppBar>
  );
}