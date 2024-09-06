import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateProduct } from "../../../services/dataFetchServices";
import { AxiosError } from "axios";
import { queryKeys } from "../../../keys/keys";
import { toastSuccess } from "../../../utils/Toaster";

export const useUpdateProduct = (handleClose: () => void) => {
  const queryClient = useQueryClient();

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      toastSuccess("Successfully Updated");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PRODUCT_QUERY_KEY],
      });
      handleClose();
    },
    onError: (error: AxiosError) => {
      toast.error("Not Updated");
      console.error("Error updating product:", error);
    },
  });
  return { update, isUpdating };
};
