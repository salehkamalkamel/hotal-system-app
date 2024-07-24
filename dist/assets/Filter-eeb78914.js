import{s as d,G as n,u as t,j as s}from"./index-adccf17c.js";const i=d.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,u=d.button`
  background-color: var(--color-grey-0);
  border: none;

  ${o=>o.active&&n`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function v({filterField:o,options:c}){const[r,e]=t();function l(a){r.set(o,a),e(r),r.get("currentPage")&&(r.set("currentPage",1),e(r))}return s(i,{children:c.map(a=>s(u,{onClick:()=>l(a.value),active:r.get(o)===a.value,children:a.label},a.value))})}export{v as F};
