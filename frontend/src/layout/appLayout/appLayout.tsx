// MiniDrawer.tsx
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarImplementation from "../components/AppBar";
import DrawerComponent from "../components/Drawer";
import { BoxContainerStyled, BoxStyled, DrawerHeader } from "./appLayoutStyle";
import { Outlet, useNavigate } from "react-router-dom";
import { removeItem } from "../../utils/TokensManagement";

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerItemClick = (path: string) => {
    navigate(path);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Logout Functionality
  const handleLogout = () => {
    removeItem("authToken");
    removeItem("refreshToken");

    navigate("/login");
  };

  return (
    <BoxContainerStyled>
      <CssBaseline />
      <AppBarImplementation
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleLogout={handleLogout}
      />
      <DrawerComponent
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerItemClick={handleDrawerItemClick}
      />
      <BoxStyled open={open} component="main">
        <DrawerHeader />
        <Outlet />
      </BoxStyled>
    </BoxContainerStyled>
  );
}
