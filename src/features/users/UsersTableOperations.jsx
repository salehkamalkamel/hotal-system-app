import Row from "../../ui/Row";
import WindowToggle from "../../ui/WindowToggle";

export default function UserTableOperations() {
  return (
    <Row type="horizontal" gap="1rem" center={true}>
      <WindowToggle
        windows={[
          { label: "All users", direction: "allUsers" },
          { label: "Add user", direction: "addUser" },
        ]}
      />
    </Row>
  );
}
