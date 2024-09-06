import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { deleteProduct } from "../../../services/dataFetchServices";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { Person } from "../../../interfaces/interface";
import { queryKeys } from "../../../keys/keys";
import { toastError, toastSuccess } from "../../../utils/Toaster";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toastSuccess("Successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PRODUCT_QUERY_KEY],
      });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || "Deleting product failed";
      toastError(errorMessage);
    },
  });

  const handleDelete = useCallback(
    (rowData: Person) => {
      const id = rowData._id;
      if (window.confirm(`Are you sure you want to delete product ${id}?`)) {
        deleteMutation.mutate(id);
      }
    },
    [deleteMutation]
  );

  return { handleDelete };
};
