import { useQuery } from "@tanstack/react-query";
import { getAvilableCabins } from "../../services/apiCabins";

export function useGetAvilableCabins() {
  const {
    data: avilableCabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["avilableCabins"],
    queryFn: getAvilableCabins,
  });
  return { avilableCabins, isLoading, error };
}
