import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filterValue = searchParams.get("status") || "all";
  const filter =
    filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: null };

  const sortOptRow = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortOptRow.split("-");
  const sortBy = { field, direction };

  const page = Number(searchParams.get("currentPage")) || 1;
  const pageLength = Number(searchParams.get("pageLength")) || 10;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, page, pageLength],
    queryFn: () => getBookings({ filter, sortBy, page, pageLength }),
  });

  const bookings = data?.data || [];
  const count = data?.count || 0;

  // Correct total page count calculation
  const pageCount = Math.ceil(count / pageLength);

  // Prefetch the next page if it exists
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1, pageLength],
      queryFn: () =>
        getBookings({ filter, sortBy, page: page + 1, pageLength }),
    });
  }

  // Prefetch the previous page if it exists
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1, pageLength],
      queryFn: () =>
        getBookings({ filter, sortBy, page: page - 1, pageLength }),
    });
  }

  if (isError) {
    console.error("Error fetching bookings:", error);
    return { bookings: [], isLoading: false, count: 0 };
  }

  return { bookings, isLoading, count };
}
