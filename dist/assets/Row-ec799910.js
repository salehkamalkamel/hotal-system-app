import{s as a,G as t}from"./index-adccf17c.js";const i=a.div`
  display: flex;
  ${e=>e.gap?t`
          gap: ${e.gap};
        `:""}

  ${e=>e.type==="horizontal"&&t`
      justify-content: space-between;
      align-items: center;
    `}

  ${e=>e.type==="vertical"&&t`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;i.defaultProps={type:"vertical"};export{i as R};
