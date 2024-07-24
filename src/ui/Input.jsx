import styled, { css } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  ${(props) =>
    props.type === "checkbox" &&
    css`
      height: 2.4rem;
      width: 2.4rem;
      outline-offset: 2px;
      transform-origin: 0;
      accent-color: var(--color-brand-600);
      &:disabled {
        accent-color: var(--color-brand-600);
      }
    `}
`;

export default Input;
