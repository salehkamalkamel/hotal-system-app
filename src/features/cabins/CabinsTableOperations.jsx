import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import SortBy from "../../ui/SortBy";

export default function CabinsTableOperations() {
  return (
    <Row type="horizontal" gap="1rem">
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "Discount", value: "with-discount" },
          { label: "No discount", value: "no-discount" },
          { label: "Avilable", value: "avilable" },
        ]}
      />
      <SortBy
        options={[
          { label: "Name (A-Z)", value: "name-asc" },
          { label: "Name (Z-A)", value: "name-des" },
          { label: "Price (0-9)", value: "price-asc" },
          { label: "Price (9-0)", value: "price-des" },
          { label: "Capacity (0-9)", value: "capacity-asc" },
          { label: "Capacity (9-0)", value: "capacity-des" },
        ]}
      />
    </Row>
  );
}
