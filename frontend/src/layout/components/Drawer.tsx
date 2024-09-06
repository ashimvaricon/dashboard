// DrawerComponent.tsx
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import {
  Drawer,
  DrawerHeader,
  DividerStyled,
  ListStyled,
  ListItemButtonStyled,
  ListItemIconStyled,
  ListItemTextStyled,
  DashboardIconStyled,
  ShoppingBagIconStyled,
} from "../appLayoutStyle";
import { IconButton } from "@mui/material";
import { ChevronLeftIconStyled } from "../appLayoutStyle";
import { drawerItems } from "../../constants/drawerItems";

interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
  handleDrawerItemClick: (path: string) => void;
}

const DrawerComponent: React.FC<DrawerProps> = ({
  open,
  handleDrawerClose,
  handleDrawerItemClick,
}) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIconStyled />
          )}
        </IconButton>
      </DrawerHeader>
      <DividerStyled />
      <ListStyled>
        {drawerItems.map(({ text, path }, index) => (
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
  );
};

export default DrawerComponent;
