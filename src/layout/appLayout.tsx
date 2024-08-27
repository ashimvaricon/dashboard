import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  ButtonStyled,
  ChevronLeftIconStyled,
  DashboardIconStyled,
  DividerStyled,
  Drawer,
  DrawerHeader,
  ListStyled,
  LocalShippingIconStyled,
  LogoutIconStyled,
} from "./appLayoutStyle";

const drawerWidth = 240;

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerItemClick = (path: any) => {
    navigate(path);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    console.log("Logging out");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open && { display: "none" }), color: "#233759" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={theme.status.purple}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <ButtonStyled onClick={handleLogout} variant="outlined">
            <LogoutIconStyled />
            Logout
          </ButtonStyled>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <>
                <h5 style={{ marginRight: "50px", color: "white" }}>
                  Dashboard App
                </h5>
                <ChevronLeftIconStyled />
              </>
            )}
          </IconButton>
        </DrawerHeader>
        <DividerStyled />
        <ListStyled>
          {[
            { text: "Dashboard", path: "/" },
            { text: "Suppliers", path: "/suppliers" },
          ].map(({ text, path }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleDrawerItemClick(path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <DashboardIconStyled />
                  ) : (
                    <LocalShippingIconStyled />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </ListStyled>
        <DividerStyled />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: "transform 0.3s",
          transform: open
            ? `translateX(${drawerWidth * 0}px)`
            : "translateX(0)",
          overflow: "auto", // Ensure content is scrollable
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
