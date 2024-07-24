import { useMutation } from "@tanstack/react-query";
import { addGuste } from "../../services/apiGustes";
import toast from "react-hot-toast";

export function useAddUser() {
  const { mutate: addUser, isLoading: isAddingUser } = useMutation({
    mutationFn: addGuste,
    onSuccess: () => {
      toast.success("New user successfully created");
    },
    onError: (err) => toast.error(err.message),
  });
  return { addUser, isAddingUser };
}
