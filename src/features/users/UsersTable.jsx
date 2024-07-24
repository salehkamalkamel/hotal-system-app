import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import UserRow from "./UserRow";
import { useUsers } from "./useUsers";

export default function UsersTable() {
  const { isLoading, users, error } = useUsers();

  if (isLoading) return <Spinner />;
  if (!users || error) return <Empty resource="users" />;
  console.log(users);
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2fr 2fr 1fr">
        <Table.Header>
          <div></div>
          <div>Email</div>
          <div>Name</div>
          <div>Created-at</div>
          <div>ID</div>
        </Table.Header>
        {users.length ? (
          <Table.Body
            data={users}
            render={(user) => <UserRow user={user} key={user.id} />}
          />
        ) : (
          <Empty resource="users" />
        )}
      </Table>
    </Menus>
  );
}
