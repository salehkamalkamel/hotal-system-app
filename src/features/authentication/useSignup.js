import { useMutation } from "@tanstack/react-query";
import { Signup as SignupApi } from "./apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      SignupApi({ fullName, email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "User successfuly confirmed! Please verify your email address"
      );
    },
  });
  return { signup, isLoading };
}
