import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSupplier } from "../../../services/dataFetchServices";
import { toast } from "react-toastify";
import { useHandleModal } from "./useHandleModal";
import { queryKeys } from "../../../keys/keys";
import { toastError, toastSuccess } from "../../../utils/Toaster";
export const useAddProduct = () => {
  const { open, setOpen } = useHandleModal();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const queryClient = useQueryClient();

  const { mutate: addSupplierMutate, isPending: isAdding } = useMutation({
    mutationFn: addSupplier,
    onSuccess: () => {
      toastSuccess("Product Added");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PRODUCT_QUERY_KEY],
      });
      handleClose();
    },
    onError: () => {
      toastError("Error adding supplier:");
    },
  });
  return {
    addSupplierMutate,
    isAdding,

    handleOpen,
    handleClose,
    open,
  };
};
