import{s as h,l as x,b as r,j as e,m as q,n as F,o as H,p as N,u as D,q as O,a as A,r as E,t as R,v as j,S as z,F as L,k as Q}from"./index-adccf17c.js";import{T as m,M as u,S as $}from"./SortBy-858a954b.js";import{M as C,C as K,E as P}from"./ConfirmDelete-a7b5b5a7.js";import{u as G,T as U}from"./useCheckout-b11df3a2.js";import{b as V,f as W}from"./helpers-28d71949.js";import{u as _}from"./useDeleteBooking-68193c0c.js";import{i as J}from"./index-bdb4f77d.js";import{f as S,c as B}from"./apiBookings-fd5c752d.js";import{F as X}from"./Filter-eeb78914.js";import{R as Y}from"./Row-ec799910.js";const Z=h.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,M=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`,I=h.div`
  font-family: "Sono";
  font-weight: 500;
`;function ee({booking:{id:n,created_at:l,startDate:o,endDate:t,numNights:c,numGuests:f,totalPrice:g,status:i,guests:{fullName:s,email:a},cabins:{name:d}}}){const p=x(),{checkout:b,isCheckingOut:v}=G(),{deleteBooking:k,isDeleting:y}=_(),w={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};return r(m.Row,{children:[e(Z,{children:d}),r(M,{children:[e("span",{children:s}),e("span",{children:a})]}),r(M,{children:[r("span",{children:[J(new Date(o))?"Today":V(o)," ","→ ",c," night stay"]}),r("span",{children:[S(new Date(o),"MMM dd yyyy")," —"," ",S(new Date(t),"MMM dd yyyy")]})]}),e(U,{type:w[i],children:i.replace("-"," ")}),e(I,{children:W(g)}),r(C,{children:[r(u.Menu,{children:[e(u.Toggle,{id:n}),r(u.List,{id:n,children:[e(u.Button,{icon:e(q,{}),onClick:()=>p(`/bookings/${n}`),children:"See details"}),i==="unconfirmed"&&e(u.Button,{icon:e(F,{}),onClick:()=>p(`/checkin/${n}`),children:"Check in"}),i==="checked-in"&&e(u.Button,{icon:e(H,{}),onClick:()=>b(n),disabled:v,children:"Check out"}),e(C.Open,{opens:"delete",children:e(u.Button,{icon:e(N,{}),children:"Delete booking"})})]})]}),e(C.Window,{name:"delete",children:e(K,{resourceName:"booking",disabled:y,onConfirm:()=>k(n)})})]})]})}function ne(){const[n]=D(),l=O(),o=n.get("status")||"all",t=o==="all"?null:{field:"status",value:o,method:null},c=n.get("sortBy")||"startDate-asc",[f,g]=c.split("-"),i={field:f,direction:g},s=Number(n.get("currentPage"))||1,a=Number(n.get("pageLength"))||10,{data:d,isLoading:p,isError:b,error:v}=A({queryKey:["bookings",t,i,s,a],queryFn:()=>B({filter:t,sortBy:i,page:s,pageLength:a})}),k=(d==null?void 0:d.data)||[],y=(d==null?void 0:d.count)||0,w=Math.ceil(y/a);return s<w&&l.prefetchQuery({queryKey:["bookings",t,i,s+1,a],queryFn:()=>B({filter:t,sortBy:i,page:s+1,pageLength:a})}),s>1&&l.prefetchQuery({queryKey:["bookings",t,i,s-1,a],queryFn:()=>B({filter:t,sortBy:i,page:s-1,pageLength:a})}),b?(console.error("Error fetching bookings:",v),{bookings:[],isLoading:!1,count:0}):{bookings:k,isLoading:p,count:y}}const re=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oe=h.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,te=h.div`
  display: flex;
  gap: 0.6rem;
`,T=h.button`
  background-color: ${n=>n.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${n=>n.active?" var(--color-brand-50)":"inherit"};
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
`;function ie({pageLength:n,itemsLength:l}){const[o,t]=D(),c=parseInt(o.get("currentPage")||"1",10),f=Math.ceil(l/n),g=Math.min(n*c,l);E.useEffect(()=>{n&&(o.set("pageLength",n),t(o,{replace:!0}))},[n,o,t]);function i(){if(c<f){const a=c+1;o.set("currentPage",a),t(o)}}function s(){if(c>1){const a=c-1;o.set("currentPage",a),t(o)}}return r(re,{children:[r(oe,{children:["Showed ",e("span",{children:g})," of ",e("span",{children:l})]}),r(te,{children:[r(T,{onClick:s,disabled:c===1,children:[e(R,{}),"Prev"]}),r(T,{onClick:i,disabled:c===f,children:["Next",e(j,{})]})]})]})}function ae(){const{bookings:n,isLoading:l,count:o}=ne();return l?e(z,{}):n?e(u,{children:r(m,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[r(m.Header,{children:[e("div",{children:"Cabin"}),e("div",{children:"Guest"}),e("div",{children:"Dates"}),e("div",{children:"Status"}),e("div",{children:"Amount"}),e("div",{})]}),n.length?e(m.Body,{data:n,render:t=>e(ee,{booking:t},t.id)}):e(P,{resource:"Bookings"}),e(m.Footer,{children:e(ie,{pageLength:10,itemsLength:o})})]})}):e(P,{resource:"bookings"})}const se=h.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;function ce(){return r(se,{children:[e(X,{filterField:"status",options:[{value:"all",label:"All"},{value:"checked-out",label:"Checked out"},{value:"checked-in",label:"Checked in"},{value:"unconfirmed",label:"Unconfirmed"}]}),e($,{options:[{value:"startDate-desc",label:"Sort by date (recent first)"},{value:"startDate-asc",label:"Sort by date (earlier first)"},{value:"totalPrice-desc",label:"Sort by amount (high first)"},{value:"totalPrice-asc",label:"Sort by amount (low first)"}]})]})}function ve(){return r(L,{children:[r(Y,{type:"horizontal",children:[e(Q,{as:"h1",children:"All bookings"}),e(ce,{})]}),e(ae,{})]})}export{ve as default};
