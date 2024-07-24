import { MdOutlineBedroomChild, MdOutlineNightsStay } from "react-icons/md";
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";

import Row from "../../ui/Row";
import Stat from "../dashboard/Stat";
import { useAvilableCabins } from "./useAvilableCabins";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";
import CabinsForBookingTable from "./CabinsForBookingTable";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateBookingForm from "./CreateBookingForm";
import Spinner from "../../ui/Spinner";

export default function BookingInfo() {
  const { avilableCabins, loadingAvilableCabins } = useAvilableCabins();
  const { settings, isLoading } = useSettings();
  if (isLoading || loadingAvilableCabins) return <Spinner />;
  return (
    <>
      <Modal>
        <Row type="horizontal" gap="1rem">
          <Stat
            icon={<MdOutlineBedroomChild />}
            title="Avilable Cabins"
            value={avilableCabins?.length}
            color="green"
          />
          <Stat
            icon={<MdOutlineNightsStay />}
            title="Max Nights"
            value={settings?.maxBookingLength}
            color="red"
          />
          <Stat
            icon={<IoPeopleOutline />}
            title="Max Gustes"
            value={settings?.maxGuestsPerBooking}
            color="red"
          />
          <Stat
            icon={<IoFastFoodOutline />}
            title="Breackfast Price"
            value={formatCurrency(settings?.breakfastPrice)}
            color="yellow"
          />
        </Row>
        <Heading as="h2">Avilable Cabins</Heading>
        <CabinsForBookingTable />
        <Modal.Open opens="addBooking">
          <Button>Add Booking</Button>
        </Modal.Open>
        <Modal.Window name="addBooking">
          <CreateBookingForm />
        </Modal.Window>
      </Modal>
    </>
  );
}
