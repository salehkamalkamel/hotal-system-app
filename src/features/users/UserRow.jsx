import styled from "styled-components";
import Table from "../../ui/Table";
import { format, parseISO } from "date-fns";

const Img = styled.img`
  display: block;
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 2rem;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Email = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserName = styled.div`
  font-family: "Sono";
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Time = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserId = styled.div`
  font-family: "Sono";
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function UserRow({ user }) {
  const { email, userName, userPhoto, created_at, id: userId } = user;

  // Correctly format the created_at date
  const formattedDate = format(parseISO(created_at), "dd MMMM yyyy");

  return (
    <Table.Row>
      <Img src={userPhoto || `../../../public/default-user.jpg`} />
      <Email>{email}</Email>
      <UserName>{userName}</UserName>
      <Time>{formattedDate}</Time>
      <UserId>{userId}</UserId>
    </Table.Row>
  );
}
