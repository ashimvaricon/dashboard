// AddProductForm.tsx
import React from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AddProductFormProps } from "../../interfaces/interface";
import CloseIcon from "@mui/icons-material/Close";

const AddProductForm: React.FC<AddProductFormProps> = ({
  register,
  handleSubmit,
  onSubmit,
  handleClose,
  errors,
  isAdding,
}) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" color="black" component="h2">
          Add Product
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Product Name"
            {...register("productsName")}
            fullWidth
            error={!!errors.productsName}
            helperText={errors.productsName?.message}
          />
          <TextField
            label="Category"
            {...register("category")}
            fullWidth
            error={!!errors.category}
            helperText={errors.category?.message}
          />
          <TextField
            label="Brand"
            {...register("brand")}
            fullWidth
            error={!!errors.brand}
            helperText={errors.brand?.message}
          />
          <TextField
            label="Price"
            {...register("price")}
            type="number"
            fullWidth
            error={!!errors.price}
            helperText={errors.price?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            {isAdding ? "Adding" : "Add Product"}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default AddProductForm;
