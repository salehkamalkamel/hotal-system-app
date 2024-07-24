import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginUser } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: () => {
      toast.error("Unvalid Email or Password");
    },
  });
  return { login, isLoading };
}
