import React from "react";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import { useSettings } from "../settings/useSettings";
import Button from "../../ui/Button";
import { useAddUser } from "./useAddUser";
import { useGetAvilableCabins } from "./useGetAvilableCabins";
import { addDaysToCurrentDate, getToday } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import { useAddBooking } from "./useAddBooking";
import { useLatestGuest } from "./useLatestGuest";
import { useUpdateCabinState } from "./useUpdateCabinState";
import FormColumn from "../../ui/FormColumn";
import Row from "../../ui/Row";
import FormRow from "../../ui/FormRow";

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default function CreateBookingForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { settings } = useSettings();
  const { errors } = formState;
  const { addUser, isAddingUser } = useAddUser();
  const { adding, mutate } = useAddBooking();
  const { avilableCabins, isLoading, error } = useGetAvilableCabins();
  const { latestGuest, gettingLatestGuest } = useLatestGuest();
  const { updateCabinState } = useUpdateCabinState();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading available cabins: {error.message}</p>;

  // Ensure there's at least one cabin available
  const currentCabin = avilableCabins?.[avilableCabins.length - 1];
  if (!currentCabin) {
    return <p>No cabins available. Please try again later.</p>;
  }

  function onSubmit(data) {
    // Add user before creating booking
    addUser(data);

    // Calculate total price with optional breakfast
    const breakfastPrice = data.addBreakfast ? settings.breakfastPrice : 0;
    const totalPrice =
      (currentCabin.regularPrice + breakfastPrice) * data.nights;

    const bookingObj = {
      startDate: getToday(),
      endDate: addDaysToCurrentDate(data.nights),
      numNights: data.nights,
      cabinPrice: currentCabin.regularPrice,
      totalPrice,
      hasBreakfast: data.addBreakfast,
      cabinId: currentCabin.id,
      guestId: latestGuest?.id || null, // Fallback if latestGuest is not available
      numGuests: data.numberOfGuests,
      extrasPrice: data.nights * breakfastPrice, // Calculate extras price
      observations: data.observations,
    };

    mutate(bookingObj);
    updateCabinState(currentCabin.id);
    reset();
  }

  function onError(errors) {
    console.log("Form validation errors:", errors);
  }

  return (
    <ErrorBoundary>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Row type="horizontal">
          <FormColumn label="Guest Name" error={errors?.name?.message}>
            <Input
              type="text"
              id="name"
              {...register("name", {
                required: "This field is required",
              })}
            />
          </FormColumn>
          <FormColumn label="Guest Email" error={errors?.email?.message}>
            <Input
              type="text"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormColumn>
        </Row>

        <Row type="horizontal">
          <FormColumn label="Nationality" error={errors?.nationality?.message}>
            <Input
              type="text"
              id="nationality"
              {...register("nationality", {
                required: "This field is required",
              })}
            />
          </FormColumn>
          <FormColumn label="National ID" error={errors?.id?.message}>
            <Input
              type="text"
              id="id"
              {...register("id", {
                required: "This field is required",
              })}
            />
          </FormColumn>
        </Row>

        <Row type="horizontal">
          <FormColumn label="Nights" error={errors?.nights?.message}>
            <Input
              type="number"
              id="nights"
              min="0"
              {...register("nights", {
                required: "This field is required",
                max: {
                  value: settings?.maxBookingLength,
                  message: `Booking must be less than ${settings?.maxBookingLength} nights`,
                },
              })}
            />
          </FormColumn>
          <FormColumn
            label="Number of Guests"
            error={errors?.numberOfGuests?.message}
          >
            <Input
              type="number"
              id="numberOfGuests"
              min="0"
              {...register("numberOfGuests", {
                required: "This field is required",
                max: {
                  value: settings?.maxGuestsPerBooking,
                  message: `Number of guests must be less than ${settings?.maxGuestsPerBooking}`,
                },
              })}
            />
          </FormColumn>
        </Row>

        <FormColumn label="Observations">
          <Textarea
            id="observations"
            defaultValue=""
            {...register("observations")}
          />
        </FormColumn>
        <FormRow label="Add Breakfast">
          <Input
            type="checkbox"
            id="addBreakfast"
            {...register("addBreakfast")}
          />
        </FormRow>
        <Row type="horizontal">
          <Button variation="secondary" type="reset" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isAddingUser}>
            Add Booking
          </Button>
        </Row>
      </Form>
    </ErrorBoundary>
  );
}
