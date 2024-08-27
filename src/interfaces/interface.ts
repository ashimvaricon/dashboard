import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface Person {
  sn: number;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
