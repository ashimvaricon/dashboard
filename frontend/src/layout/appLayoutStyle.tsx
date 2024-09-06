import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  Box,
  Button,
  CSSObject,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  styled,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps } from "../interfaces/interface";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import { MainContainerProps } from "../interfaces/interface";

export const DashboardIconStyled = styled(DashboardIcon)(({ theme }) => ({
  color: theme.status.white,
}));

export const ShoppingBagIconStyled = styled(ShoppingBagIcon)(({ theme }) => ({
  color: theme.status.white,
}));

export const ListStyled = styled(List)(({ theme }) => ({
  color: theme.status.white,
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
  borderColor: theme.status.white,
  opacity: 0.4,
}));

export const ChevronLeftIconStyled = styled(ChevronLeftIcon)(({ theme }) => ({
  color: theme.status.white,
}));

export const LogoutIconStyled = styled(LogoutIcon)({
  marginRight: "8px",
});

export const ButtonStyled = styled(Button)({
  color: "#233759",
});

//-------------------------------------------------------------

const DRAWER_WIDTH = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// Replace with your actual drawer width

export const BoxContainerStyled = styled(Box)({
  display: "flex",
});

export const BoxStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<MainContainerProps>(({ theme, open }: { theme: Theme; open: boolean }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: "transform 0.3s",
  transform: open ? `translateX(${DRAWER_WIDTH}px*-0)` : "translateX(0)",
  overflow: "auto", // Ensure content is scrollable
}));

export const ListItemButtonStyled = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<MainContainerProps>(({ open }: { theme: Theme; open: boolean }) => ({
  minHeight: 48,
  justifyContent: open ? "initial" : "center",
  px: 2.5,
}));

export const IconButtonStyled = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<MainContainerProps>(({ open }: { theme: Theme; open: boolean }) => ({
  ...(open && { display: "none" }),
  color: "#233759",
}));

export const ListItemTextStyled = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "open",
})<MainContainerProps>(({ open }: { theme: Theme; open: boolean }) => ({
  opacity: open ? 1 : 0,
}));

export const ListItemIconStyled = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})<MainContainerProps>(({ open }: { theme: Theme; open: boolean }) => ({
  minWidth: 0,
  mr: open ? 3 : "auto",
  justifyContent: "center",
  marginRight: "10px",
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#233759",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#233759",
    },
  }),
}));
