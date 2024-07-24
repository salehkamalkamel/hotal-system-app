import Row from "../../ui/Row";
import WindowToggle from "../../ui/WindowToggle";

export default function BookingNavigator() {
  return (
    <Row type="horizontal" gap="1rem" center={true}>
      <WindowToggle
        windows={[
          { label: "Booking control", direction: "control" },
          { label: "Bookings", direction: "allbookings" },
        ]}
      />
    </Row>
  );
}
