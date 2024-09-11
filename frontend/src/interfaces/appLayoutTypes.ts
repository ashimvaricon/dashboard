import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export interface AppBarImplementationProps {
  open: boolean;
  handleDrawerOpen: () => void;
  handleLogout: () => void;
}

export interface MainContainerProps {
  open: boolean;
}
