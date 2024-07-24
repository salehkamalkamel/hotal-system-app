import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export default function Pagination({ pageLength, itemsLength }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);
  const numOfPages = Math.ceil(itemsLength / pageLength);
  const showedItems = Math.min(pageLength * currentPage, itemsLength);

  useEffect(() => {
    if (pageLength) {
      searchParams.set("pageLength", pageLength);
      setSearchParams(searchParams, { replace: true });
    }
  }, [pageLength, searchParams, setSearchParams]);

  function handleAdd() {
    if (currentPage < numOfPages) {
      const newPage = currentPage + 1;
      searchParams.set("currentPage", newPage);
      setSearchParams(searchParams);
    }
  }

  function handleDec() {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      searchParams.set("currentPage", newPage);
      setSearchParams(searchParams);
    }
  }

  return (
    <StyledPagination>
      <P>
        Showed <span>{showedItems}</span> of <span>{itemsLength}</span>
      </P>
      <Buttons>
        <PaginationButton onClick={handleDec} disabled={currentPage === 1}>
          <HiChevronLeft />
          Prev
        </PaginationButton>
        <PaginationButton
          onClick={handleAdd}
          disabled={currentPage === numOfPages}
        >
          Next
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
