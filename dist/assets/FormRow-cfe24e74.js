import{s as r,b as e,j as t}from"./index-adccf17c.js";const c=r.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`,a=r.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,i=r.label`
  font-weight: 500;
`,n=r.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function m({label:o,error:d,children:s}){return e(a,{children:[o&&t(i,{htmlFor:s.props.id,children:o}),s,d&&t(n,{children:d})]})}export{m as F,c as I};
