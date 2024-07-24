import { useMutation } from "@tanstack/react-query";
import { updateCabinSate } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabinState() {
  const {
    mutate: updateCabinState,
    isLoading: updatingCabinState,
    error,
  } = useMutation({
    mutationFn: updateCabinSate,
    onError: (err) => toast.error(err.message),
  });

  return { updateCabinState, updatingCabinState, error };
}
