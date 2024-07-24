import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: () => getCurrentUser(),
    queryKey: ["user"],
  });
  return { user, isLoading, isAuthenticated: !!user?.role };
}
