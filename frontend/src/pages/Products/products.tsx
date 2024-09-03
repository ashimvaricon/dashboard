import React, { FormEvent, useState } from "react";
import Table from "../../utils/table";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { BoxStyled } from "./productStyled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSupplier } from "../../services/dataFetchServices";
import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
};

const Products: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    productsName: "",
    category: "",
    brand: "",
    price: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { mutate: addSupplierMutate, isPending: isAdding } = useMutation({
    mutationFn: addSupplier,
    onSuccess: () => {
      toast.success("Product Added");
      queryClient.invalidateQueries({ queryKey: ["products"] }); // Invalidate query to refetch updated data
      handleClose(); // Close modal after successful update
    },
    onError: () => {
      toast.error("Error adding supplier:");
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSupplierMutate(formData); // Call the mutation function with formData
  };

  return (
    <>
      <BoxStyled>
        <Typography>Products</Typography>
        <Button onClick={handleOpen}>Open modal</Button>
      </BoxStyled>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} mt={2}>
              <TextField
                label="Product Name"
                name="productsName"
                value={formData.productsName}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                fullWidth
                required
              />

              <TextField
                label="Brand"
                name="brand"
                type="text"
                value={formData.brand}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                fullWidth
                required
              />

              <Button type="submit" variant="contained" color="primary">
                {isAdding ? "Adding" : "Add Product"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>

      <Table />
    </>
  );
};

export default Products;
