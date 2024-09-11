// useModal.ts
import { useState } from "react";
import { Person } from "../../../interfaces/product";

export const useHandleModal = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<Person | null>(null);

  const handleOpen = (newData?: Person) => {
    if (newData) {
      setEditData(newData);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    editData,
    setEditData,
  };
};
