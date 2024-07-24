import { Outlet } from "react-router-dom";
import BookingNavigator from "../features/bookings/BookingNavigator";

function Bookings() {
  return (
    <>
      <BookingNavigator />
      <Outlet />
    </>
  );
}

export default Bookings;
