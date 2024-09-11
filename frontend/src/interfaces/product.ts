import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

export interface Person {
  _id: string;
  sn: number;
  productsName: string;
  category: string;
  brand: string;
  price: string;
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
