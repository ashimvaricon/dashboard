import { useCallback, useEffect, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Person } from "../../interfaces/interface";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDeleteProduct } from "./hooks/useDeleteProduct";
import { useFetchProduct } from "./hooks/useFetchProduct";
import { useUpdateProduct } from "./hooks/useUpdateProducts";
import { useHandleModal } from "./hooks/useHandleModal";
import ProductForm from "./components/EditProductTable";
import Modals from "../../components/modal/Modal";
import { updateZodSchema } from "../../schema/updateZodSchema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const { updateSchema } = updateZodSchema();
type UpdateProductFormInterface = z.infer<typeof updateSchema>;

const Table = () => {
  const { handleDelete } = useDeleteProduct();
  const { data, isLoading, error } = useFetchProduct();
  const { open, handleOpen, handleClose, editData, setEditData } =
    useHandleModal();
  const { update, isUpdating } = useUpdateProduct(handleClose);

  const handleEdit = useCallback(
    (rowData: Person) => {
      handleOpen(rowData);
    },
    [handleOpen]
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

  // Initialize form with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateProductFormInterface>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      productsName: editData?.productsName || "",
      category: editData?.category || "",
      brand: editData?.brand || "",
      price: editData?.price || "",
    },
  });

  // Update default values when editData changes
  useEffect(() => {
    if (editData) {
      reset({
        productsName: editData.productsName || "",
        category: editData.category || "",
        brand: editData.brand || "",
        price: editData.price || "",
      });
    }
  }, [editData, reset]);

  const onSubmit: SubmitHandler<UpdateProductFormInterface> = (formData) => {
    if (editData) {
      const updatedProduct: Person = {
        _id: editData._id,
        sn: editData.sn,
        ...formData,
      };

      update(updatedProduct);
    }
    reset(); // Reset form after submission
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
      <Modals open={open} onClose={handleClose}>
        <ProductForm
          editData={editData}
          setEditData={setEditData}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          isUpdating={isUpdating}
          handleClose={handleClose}
        />
      </Modals>
    </>
  );
};

export default Table;
