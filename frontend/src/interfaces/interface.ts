import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Dispatch, SetStateAction } from "react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
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

export interface AddProductFormInterface {
  productsName: string;
  category: string;
  brand: string;
  price: string;
}

export interface AddProductFormProps {
  register: UseFormRegister<AddProductFormInterface>;
  handleSubmit: UseFormHandleSubmit<AddProductFormInterface>;
  handleClose: () => void;
  onSubmit: (data: AddProductFormInterface) => void;
  errors: FieldErrors<AddProductFormInterface>;
  isAdding: boolean;
}

//Edit ko lagi
export interface UpdateProductFormInterface {
  _id: string;
  sn: number;
  productsName: string;
  category: string;
  brand: string;
  price: string;
}

export interface UpdateProductFormProps {
  register: UseFormRegister<AddProductFormInterface>;
  handleSubmit: UseFormHandleSubmit<AddProductFormInterface>;
  onSubmit: (data: AddProductFormInterface) => void;
  errors: FieldErrors<AddProductFormInterface>;
  handleClose: () => void;
  editData: Person | null;
  setEditData: Dispatch<SetStateAction<Person | null>>;
  isUpdating: boolean;
}

export interface MuiLinkProps {
  component?: boolean;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export type FormFields = {
  username: string;
  password: string;
};

//Appbar Props
export interface AppBarImplementationProps {
  open: boolean;
  handleDrawerOpen: () => void;
  handleLogout: () => void;
}

export interface DrawerImplementationProps {
  open: boolean;
  onClick1: () => void;
  onClick2: () => void;
}
