import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import BookingTableOperations from "./BookingTableOperations";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings) return <Empty resource="bookings" />;

  return (
    <Menus>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        {bookings.length ? (
          <Table.Body
            data={bookings}
            render={(booking) => (
              <BookingRow key={booking.id} booking={booking} />
            )}
          />
        ) : (
          <Empty resource="Bookings" />
        )}
        <Table.Footer>
          <Pagination pageLength={10} itemsLength={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
