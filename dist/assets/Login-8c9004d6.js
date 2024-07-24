import{q as p,l as h,w as v,M as f,_ as y,s as c,r as d,b as g,j as e,B as b,N as w,O as L,P as S,k as x}from"./index-adccf17c.js";import{F as l,I as u}from"./FormRow-cfe24e74.js";function C(){const r=p(),n=h(),{mutate:t,isLoading:s}=v({mutationFn:({email:o,password:i})=>f({email:o,password:i}),onSuccess:o=>{n("/dashboard"),r.setQueryData(["user"],o.user)},onError:()=>{y.error("Unvalid Email or Password")}});return{loginUser:t,isLoading:s}}const E=c.form`
  padding: 3rem;
  width: fit-content;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
`;function F(){const[r,n]=d.useState(""),[t,s]=d.useState(""),{loginUser:o,isLoading:i}=C();function m(a){a.preventDefault(),!(!r||!t)&&(o({email:r,password:t},{onSettled:()=>{n(""),s("")}}),L())}return g(E,{onSubmit:m,children:[e(l,{label:"Email address",orientation:"vertical",children:e(u,{type:"email",id:"email",autoComplete:"username",value:r,onChange:a=>n(a.target.value)})}),e(l,{label:"Password",orientation:"vertical",children:e(u,{type:"password",id:"password",autoComplete:"current-password",value:t,onChange:a=>s(a.target.value)})}),e(l,{orientation:"vertical",children:e(b,{size:"large",children:i?e(w,{}):"Login"})})]})}const j=c.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function k(){return g(j,{children:[e(S,{}),e(x,{as:"h4",children:"Login to start using this app"}),e(F,{})]})}export{k as default};
