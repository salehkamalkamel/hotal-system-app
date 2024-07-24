import { HiArchiveBoxXMark } from "react-icons/hi2";
import styled from "styled-components";

const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #555;
`;

const EmptyListMessage = styled.p`
  font-size: 1.5em;
  margin: 0;
  color: #888;
`;

const EmptyListIcon = styled.div`
  font-size: 3em;
  color: #ccc;
  margin-bottom: 10px;
`;

const Empty = ({ resource }) => {
  return (
    <EmptyListContainer>
      <EmptyListIcon>
        <HiArchiveBoxXMark />
      </EmptyListIcon>
      <EmptyListMessage>
        No {resource} to display at the momtent
      </EmptyListMessage>
    </EmptyListContainer>
  );
};

export default Empty;
