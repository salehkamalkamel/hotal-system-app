import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const StyledOption = styled.option`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--color-grey-0);
  font-weight: 500;
`;

export default function Select({ options, value, onChange }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}