import { Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";
import {
  AppBar,
  BoxStyledNav,
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

        {/* Container to push Typography to the left and Button to the right */}
        <BoxStyledNav>
          <Typography
            component="div"
            color={theme.status.purple}
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>

          <ButtonStyled onClick={handleLogout} variant="outlined">
            <LogoutIconStyled />
            Logout
          </ButtonStyled>
        </BoxStyledNav>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarImplementation;
