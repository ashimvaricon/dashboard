import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface Person {
  _id: string;
  sn: number;
  productsName: string;
  category: string;
  brand: string;
  price: string;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface MainContainerProps {
  open: boolean;
}

export interface MuiLinkProps {
  component?: boolean;
}
