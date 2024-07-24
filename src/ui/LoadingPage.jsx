import styled from "styled-components";
import Spinner from "./Spinner";

const StyledLoading = styled.div`
  background: var(--color-grey-0);
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingPage() {
  return (
    <StyledLoading>
      <Spinner />
    </StyledLoading>
  );
}
