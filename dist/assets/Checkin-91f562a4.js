import{s as C,b as n,j as a,q as L,l as $,w as j,x as p,r as h,S as E,F as N,k as q,B as b}from"./index-adccf17c.js";import{u as G,B as M,a as Q,b as R}from"./useBooking-13f6c6c4.js";import{R as T}from"./Row-ec799910.js";import{u as z}from"./useMoveBack-67aec5f7.js";import{f as c}from"./helpers-28d71949.js";import{u as A}from"./apiBookings-fd5c752d.js";import{a as D}from"./useSettings-3f7291ef.js";import"./Flag-2fa34f02.js";import"./index-bdb4f77d.js";const H=C.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;function B({checked:r,onChange:i,disabled:t=!1,id:o,children:e}){return n(H,{children:[a("input",{type:"checkbox",id:o,checked:r,onChange:i,disabled:t}),a("label",{htmlFor:t?"":o,children:e})]})}function W(){const r=L(),i=$(),{mutate:t,isLoading:o}=j({mutationFn:({bookingId:e,breakfast:u})=>A(e,{status:"checked-in",isPaid:!0,...u}),onSuccess:e=>{p.success(`Booking #${e.id} successfully checked in`),r.invalidateQueries({active:!0}),i("/")},onError:()=>p.error("There was an error while checking in")});return{checkin:t,isCheckingIn:o}}const x=C.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;function J(){const[r,i]=h.useState(!1),[t,o]=h.useState(!1),{booking:e,isLoading:u}=G(),{settings:y,isLoading:v}=D();h.useEffect(()=>i((e==null?void 0:e.isPaid)??!1),[e]);const k=z(),{checkin:m,isCheckingIn:g}=W();if(u||v)return a(E,{});const{id:d,guests:P,totalPrice:l,numGuests:S,hasBreakfast:w,numNights:F}=e,s=y.breakfastPrice*F*S;function I(){r&&m(t?{bookingId:d,breakfast:{hasBreakfast:!0,extrasPrice:s,totalPrice:l+s}}:{bookingId:d,breakfast:{}})}return n(N,{children:[n(T,{type:"horizontal",children:[n(q,{as:"h1",children:["Check in booking #",d]}),a(M,{onClick:k,children:"← Back"})]}),a(Q,{booking:e}),!w&&a(x,{children:n(B,{checked:t,onChange:()=>{o(f=>!f),i(!1)},id:"breakfast",children:["Want to add breakfast for ",c(s),"?"]})}),a(x,{children:n(B,{checked:r,onChange:()=>i(f=>!f),disabled:r||g,id:"confirm",children:["I confirm that ",P.fullName," has paid the total amount of"," ",t?`${c(l+s)} (${c(l)} + ${c(s)})`:c(l)]})}),n(R,{children:[n(b,{onClick:I,disabled:!r||g,children:["Check in booking #",d]}),a(b,{variation:"secondary",onClick:k,children:"Back"})]})]})}function ae(){return a(J,{})}export{ae as default};
