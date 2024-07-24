import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const daysNum = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  let queryDate = subDays(new Date(), daysNum).toISOString();

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${daysNum}`],
  });

  if (error) throw new Error(error);
  return { bookings, isLoading, daysNum };
}
