import React from "react";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins) return <Empty resource="cabins" />;

  let filteredData = cabins;

  const sortFilter = searchParams.get("sortBy")?.split("-");
  const sortDirection = sortFilter?.[1] || null;
  const sortFactor = sortFilter?.[0] || null;

  const discountFilter = searchParams.get("discount");
  if (discountFilter && discountFilter === "with-discount") {
    filteredData = cabins?.filter((cabin) => cabin.discount);
  }
  if (discountFilter && discountFilter === "no-discount") {
    filteredData = cabins?.filter((cabin) => !cabin.discount);
  }
  if (discountFilter && discountFilter === "avilable") {
    filteredData = cabins?.filter((cabin) => cabin.state === "avilable");
  }

  const sortByName = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  };

  const sortByCapacity = (a, b) => a.maxCapacity - b.maxCapacity;

  const sortByPrice = (a, b) => a.regularPrice - b.regularPrice;

  if (sortDirection && sortFactor && filteredData) {
    const sortMap = {
      name: sortByName,
      capacity: sortByCapacity,
      price: sortByPrice,
    };

    filteredData = filteredData.sort((a, b) => {
      const result = sortMap[sortFactor](a, b);
      return sortDirection === "asc" ? result : -result;
    });
  }

  return (
    <Menus>
      <Table columns="0.6fr 1fr 1fr 2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>State</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        {filteredData.length ? (
          <Table.Body
            data={filteredData}
            render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />
        ) : (
          <Empty resource="Cabins" />
        )}
      </Table>
    </Menus>
  );
}

export default CabinTable;
