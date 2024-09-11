import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../constants/keys";
import { fetchProducts } from "../../../services/dataFetchServices";

export const useFetchProduct = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.PRODUCT_QUERY_KEY],
    queryFn: fetchProducts,
  });

  return { data, isLoading, error };
};
