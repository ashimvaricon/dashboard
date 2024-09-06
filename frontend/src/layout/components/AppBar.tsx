import { Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";
import {
  AppBar,
  ButtonStyled,
  IconButtonStyled,
  LogoutIconStyled,
} from "../appLayoutStyle";
import { theme } from "../../theme/customTheme";
import { AppBarImplementationProps } from "../../interfaces/interface";

const AppBarImplementation: React.FC<AppBarImplementationProps> = ({
  open,
  handleDrawerOpen,
  handleLogout,
}) => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default AppBarImplementation;
