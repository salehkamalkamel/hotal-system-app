import{s as a,b as r,j as e,U as D,V as M,W as E,X as P,Y as C,a as F}from"./index-adccf17c.js";import{F as N}from"./Flag-2fa34f02.js";import{b as j,f as s}from"./helpers-28d71949.js";import{f as l,e as H}from"./apiBookings-fd5c752d.js";import{i as $}from"./index-bdb4f77d.js";const z=a.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,I=a.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;function c({icon:o,label:t,children:n}){return r(z,{children:[r(I,{children:[o,e("span",{children:t})]}),n]})}const O=a.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`,T=a.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`,S=a.section`
  padding: 3.2rem 4rem 1.2rem;
`,G=a.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,q=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${o=>o.isPaid?"var(--color-green-100)":"var(--color-yellow-100)"};
  color: ${o=>o.isPaid?"var(--color-green-700)":"var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`,L=a.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;function V({booking:o}){if(!o)return null;const{created_at:t,startDate:n,endDate:i,numNights:u,numGuests:d,cabinPrice:h,extrasPrice:y,totalPrice:b,hasBreakfast:m,observations:g,isPaid:p,guests:{fullName:v,email:x,country:w,countryFlag:f,nationalID:k},cabins:{name:B}}=o;return r(O,{children:[r(T,{children:[r("div",{children:[e(D,{}),r("p",{children:[u," nights in Cabin ",e("span",{children:B})]})]}),r("p",{children:[l(new Date(n),"EEE, MMM dd yyyy")," (",$(new Date(n))?"Today":j(n),") — ",l(new Date(i),"EEE, MMM dd yyyy")]})]}),r(S,{children:[r(G,{children:[f&&e(N,{src:f,alt:`Flag of ${w}`}),r("p",{children:[v," ",d>1?`+ ${d-1} guests`:""]}),e("span",{children:"•"}),e("p",{children:x}),e("span",{children:"•"}),r("p",{children:["National ID ",k]})]}),g&&e(c,{icon:e(M,{}),label:"Observations",children:g}),e(c,{icon:e(E,{}),label:"Breakfast included?",children:m?"Yes":"No"}),r(q,{isPaid:p,children:[r(c,{icon:e(P,{}),label:"Total price",children:[s(b),m&&` (${s(h)} cabin + ${s(y)} breakfast)`]}),e("p",{children:p?"Paid":"Will pay at property"})]})]}),e(L,{children:r("p",{children:["Booked ",l(new Date(t),"EEE, MMM dd yyyy, p")]})})]})}const X=a.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,_=a.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;function A(){const{bookingId:o}=C(),{data:t,isLoading:n,error:i}=F({queryKey:["booking",o],queryFn:()=>H(o)});return{booking:t,isLoading:n,error:i}}export{_ as B,V as a,X as b,A as u};
