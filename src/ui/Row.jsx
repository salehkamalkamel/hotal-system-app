import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.gap
      ? css`
          gap: ${props.gap};
        `
      : ""}

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

    ${(props) =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
