// products.tsx
import React from "react";
import { Button, Typography } from "@mui/material";
import { BoxStyled } from "./productStyled";
import { useAddProduct } from "./hooks/useAddProduct";
import AddProductForm from "./components/form/AddProductForm";
import Modals from "../../components/modal/Modal";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productZodSchema } from "../../schema/productZodSchema";
import Table from "./components/table/table";

const { productSchema } = productZodSchema();
type AddProductFormInterface = z.infer<typeof productSchema>;

const Products: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddProductFormInterface>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<AddProductFormInterface> = (data) => {
    addSupplierMutate(data);
    reset();
  };

  const { isAdding, addSupplierMutate, handleOpen, handleClose, open } =
    useAddProduct();

  return (
    <>
      <BoxStyled>
        <Typography>Products</Typography>
        <Button onClick={handleOpen}>Open modal</Button>
      </BoxStyled>
      <Modals open={open} onClose={handleClose}>
        <AddProductForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          handleClose={handleClose}
          isAdding={isAdding}
        />
      </Modals>
      <Table />
    </>
  );
};

export default Products;
