import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useAddUser() {
  const { mutate: createUser } = useMutation({
    mutationFn: addUser,
    onError: (err) => toast.error(err.message),
  });
  return { createUser };
}
