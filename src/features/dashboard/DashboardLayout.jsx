import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {
    bookings,
    isLoading: isLoadingBookings,
    error: errorBookings,
    daysNum,
  } = useRecentBookings();
  const {
    confirmedStays,
    isLoading: isLoadingStays,
    error: errorStays,
  } = useRecentStays();
  const {
    cabins,
    isLoading: isLoadingCabins,
    error: errorCabins,
  } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins) {
    return <Spinner />;
  }

  if (errorBookings || errorStays || errorCabins) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <StyledDashboardLayout>
      <Stats
        cabinCount={cabins?.length}
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={daysNum}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={daysNum} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
