import { useState, useCallback, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Person } from "../interfaces/interface";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../services/dataFetchServices";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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

const Table = () => {
  const queryClient = useQueryClient();

  // Modal state
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<Person | null>(null);

  const handleOpen = (data: Person) => {
    setEditData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success("Successfully Deleted");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      toast.success("Successfully Updated");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      handleClose();
    },
    onError: (error) => {
      toast.error("Not Updated");

      console.error("Error updating product:", error);
    },
  });

  const handleEdit = useCallback((rowData: Person) => {
    handleOpen(rowData);
  }, []);

  const handleDelete = useCallback(
    (rowData: Person) => {
      const id = rowData._id;
      if (window.confirm(`Are you sure you want to delete product ${id}?`)) {
        deleteMutation.mutate(id);
      }
    },
    [deleteMutation]
  );

  const allData: Person[] = useMemo(
    () =>
      data?.map((item: any, index: number) => ({
        _id: item._id,
        sn: index + 1,
        productsName: item.productsName || "N/A",
        category: item.category || "N/A",
        brand: item.brand || "N/A",
        price: item.price || "N/A",
        actions: index,
      })) || [],
    [data]
  );

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      { accessorKey: "sn", header: "S.N.", size: 100 },
      { accessorKey: "productsName", header: "Product Name", size: 150 },
      { accessorKey: "category", header: "Category", size: 200 },
      { accessorKey: "brand", header: "Brand", size: 150 },
      { accessorKey: "price", header: "Price", size: 150 },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => (
          <div>
            <IconButton onClick={() => handleEdit(row.original)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(row.original)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ],
    [handleDelete, handleEdit]
  );

  const handleSubmit = () => {
    if (editData) {
      update(editData); // Pass the updated data
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: allData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <>
      <MaterialReactTable table={table} />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Product
          </Typography>
          {editData && (
            <Stack spacing={2}>
              <TextField
                label="Product's Name"
                name="productsName"
                value={editData.productsName}
                onChange={(e) =>
                  setEditData({ ...editData, productsName: e.target.value })
                }
              />
              <TextField
                label="Category"
                name="category"
                value={editData.category}
                onChange={(e) =>
                  setEditData({ ...editData, category: e.target.value })
                }
              />
              <TextField
                label="Brand"
                name="brand"
                value={editData.brand}
                onChange={(e) =>
                  setEditData({ ...editData, brand: e.target.value })
                }
              />
              <TextField
                label="Price"
                name="price"
                type="number"
                value={editData.price || ""}
                onChange={(e) =>
                  setEditData({ ...editData, price: e.target.value })
                }
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isUpdating}
              >
                {isUpdating ? "Saving..." : "Save"}
              </Button>
            </Stack>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Table;
