import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  styled,
  InputBase,
  alpha,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Hero from "../HeroSection/hero";
const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ zIndex: 0, boxShadow: "none", border: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <StorefrontIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            STORECART
          </Typography>
          <Stack direction="row" spacing={2} sx={{ ml: 10 }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ ml: 10, flexGrow: "1" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search…"
              sx={{ ml: 2, width: 200 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack direction="row" spacing={2} sx={{ ml: 7 }}>
            <Button color="inherit">
              {" "}
              <Person2OutlinedIcon sx={{ mr: 1 }} /> Account
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ ml: 7 }}>
            <Button color="inherit">
              {" "}
              <AddShoppingCartIcon sx={{ mr: 1 }} /> Cart
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: "100%",
          height: "400px",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          maxWidth: "1920px",
          margin: "0 auto", // Center the hero section horizontally
        }}
      >
        {/* Add your content here, such as a heading or call-to-action */}
        <h1 style={{ color: "#fff" }}>Welcome to My Website</h1>
      </Box>
    </>
  );
};

export default Navbar;
