import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import AvilableCabinRow from "./AvilableCabinRow";
import { useAvilableCabins } from "./useAvilableCabins";

export default function CabinsForBookingTable() {
  // Ensure avilableCabins is always an array
  const { avilableCabins = [], loadingAvilableCabins } = useAvilableCabins();

  // Show a spinner while loading
  if (loadingAvilableCabins) return <Spinner />;

  // Group the cabins by capacity and price
  const groupedCabins = avilableCabins.reduce((acc, cabin) => {
    const key = `${cabin.maxCapacity}-${cabin.regularPrice}`;

    if (!acc[key]) {
      acc[key] = { price: cabin.regularPrice, capacity: 0, count: 0 };
    }

    acc[key].capacity += cabin.maxCapacity;
    acc[key].count += 1;

    return acc;
  }, {});

  // Convert groupedCabins to an array
  const resultArray = Object.values(groupedCabins);

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Number of cabins</div>
        <div></div>
      </Table.Header>
      {resultArray.length ? (
        <Table.Body
          data={resultArray}
          render={(cabin) => (
            <AvilableCabinRow cabin={cabin} key={cabin.price} />
          )}
        >
          {/* Optionally show a spinner in Table.Body, though it's not typical */}
          {loadingAvilableCabins && <Spinner />}
        </Table.Body>
      ) : (
        <Empty resource="Cabins" />
      )}
    </Table>
  );
}
