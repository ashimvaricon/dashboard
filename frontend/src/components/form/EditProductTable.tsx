import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UpdateProductFormProps } from "../../interfaces/interface";

const ProductForm: React.FC<UpdateProductFormProps> = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  editData,
  setEditData,
  isUpdating,
  handleClose,
}) => {
  return (
    <Box>
      {/* Header with Title and Close Icon */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" color="black" component="h2">
          Edit Product
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      {/* Form */}
      {editData && (
        <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
          <TextField
            label="Product's Name"
            {...register("productsName")}
            defaultValue={editData.productsName}
            error={!!errors.productsName}
            helperText={errors.productsName?.message}
          />
          <TextField
            label="Category"
            {...register("category")}
            error={!!errors.category}
            helperText={errors.category?.message}
            defaultValue={editData.category}
          />
          <TextField
            label="Brand"
            {...register("brand")}
            error={!!errors.brand}
            helperText={errors.brand?.message}
            defaultValue={editData.brand}
          />
          <TextField
            label="Price"
            {...register("price")}
            error={!!errors.price}
            helperText={errors.price?.message}
            type="number"
            defaultValue={editData.price || ""}
          />
          <Button variant="contained" type="submit" disabled={isUpdating}>
            {isUpdating ? "Saving..." : "Save"}
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default ProductForm;
