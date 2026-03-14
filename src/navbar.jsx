import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar({ cartCount, toggleDarkMode }) {
  return (
    <AppBar position="sticky" sx={{ background: "#0f172a" }}>
      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: "1px"
          }}
        >
          mohamed Store
        </Typography>

        <Box>

          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/proudects">
            Products
          </Button>

          <Button color="inherit" component={Link} to="/service">
            Service
          </Button>

          <Button color="inherit" component={Link} to="/help">
            Help
          </Button>

        </Box>

        <IconButton color="inherit" sx={{ ml: 2 }}>
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit" onClick={toggleDarkMode}>
          <DarkModeIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}