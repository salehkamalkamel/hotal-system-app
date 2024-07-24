import styled from "styled-components";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const NumberOfCabins = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function AvilableCabinRow({ cabin }) {
  const { capacity, price, count } = cabin;
  return (
    <Table.Row>
      <div></div>
      <div>Fits up to {capacity} guests</div>
      <Price>{formatCurrency(price)}</Price>
      <NumberOfCabins>{count}</NumberOfCabins>
      <div></div>
    </Table.Row>
  );
}
