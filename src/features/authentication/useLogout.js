import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutUser } from "./apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
  });
  return { logout, isLoading };
}