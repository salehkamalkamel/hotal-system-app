import { useMutation } from "@tanstack/react-query";
import { addBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useAddBooking() {
  const { isLoading: adding, mutate } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      toast.success("New Booking had been added");
    },
    onError: (err) => toast.error(err.message),
  });
  return { adding, mutate };
}
