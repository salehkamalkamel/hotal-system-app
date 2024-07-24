import { useQuery } from "@tanstack/react-query";
import { getLatestGuest } from "../../services/apiGustes";

export function useLatestGuest() {
  const {
    isLoading: gettingLatestGuest,
    data: latestGuest,
    error,
  } = useQuery({
    queryFn: getLatestGuest,
    queryKey: ["latestGuest"],
  });

  return { gettingLatestGuest, latestGuest, error };
}
