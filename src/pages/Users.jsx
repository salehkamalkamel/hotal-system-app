import UserTableOperations from "../features/users/UsersTableOperations";
import { Outlet } from "react-router-dom";

function NewUsers() {
  return (
    <>
      <UserTableOperations />
      <Outlet />
    </>
  );
}

export default NewUsers;
