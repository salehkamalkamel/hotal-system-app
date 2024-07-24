import { useQuery } from "@tanstack/react-query";

import { getAvilableCabins } from "../../services/apiCabins";

export function useAvilableCabins() {
  const {
    data: avilableCabins,
    isLoading,
    error,
  } = useQuery({
    queryFn: getAvilableCabins,
    queryKey: ["avilableCabins"],
  });
  return { avilableCabins, isLoading, error };
}
