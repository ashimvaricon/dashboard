import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";

import { Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  BoxContainerStyled,
  BoxStyled,
  ButtonStyled,
  ChevronLeftIconStyled,
  DashboardIconStyled,
  DividerStyled,
  Drawer,
  DrawerHeader,
  IconButtonStyled,
  ListItemButtonStyled,
  ListItemIconStyled,
  ListItemTextStyled,
  ListStyled,
  ShoppingBagIconStyled,
  LogoutIconStyled,
} from "./appLayoutStyle";
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

  //Logout Functionality
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");

    navigate("/login");
  };

  return (
    <BoxContainerStyled>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButtonStyled
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            open={open}
          >
            <MenuIcon />
          </IconButtonStyled>
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
                <ChevronLeftIconStyled />
              </>
            )}
          </IconButton>
        </DrawerHeader>
        <DividerStyled />
        <ListStyled>
          {[
            { text: "Dashboard", path: "/" },
            { text: "Products", path: "/products" },
          ].map(({ text, path }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButtonStyled
                onClick={() => handleDrawerItemClick(path)}
                open={open}
              >
                <ListItemIconStyled open={open}>
                  {index % 2 === 0 ? (
                    <DashboardIconStyled />
                  ) : (
                    <ShoppingBagIconStyled />
                  )}
                </ListItemIconStyled>
                <ListItemTextStyled open={open} primary={text} />
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </ListStyled>
        <DividerStyled />
      </Drawer>
      <BoxStyled open={open} component="main">
        <DrawerHeader />
        <Outlet />
      </BoxStyled>
    </BoxContainerStyled>
  );
}
