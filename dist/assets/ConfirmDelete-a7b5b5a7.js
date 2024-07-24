import{s as a,b as c,j as r,Q as m,r as i,E as p,T as f,k as h,B as d}from"./index-adccf17c.js";const g=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #555;
`,v=a.p`
  font-size: 1.5em;
  margin: 0;
  color: #888;
`,y=a.div`
  font-size: 3em;
  color: #ccc;
  margin-bottom: 10px;
`,D=({resource:e})=>c(g,{children:[r(y,{children:r(m,{})}),c(v,{children:["No ",e," to display at the momtent"]})]});function x(e,t=!0){const o=i.useRef();return i.useEffect(function(){function n(l){o.current&&!o.current.contains(l.target)&&e()}return document.addEventListener("click",n,t),()=>document.addEventListener("click",n,t)},[e]),o}const b=a.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,k=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`,C=a.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`,s=i.createContext();function u({children:e}){const[t,o]=i.useState(""),n=()=>o(""),l=o;return r(s.Provider,{value:{openName:t,close:n,open:l},children:e})}function E({children:e,opens:t}){const{open:o}=i.useContext(s);return i.cloneElement(e,{onClick:()=>o(t)})}function w({children:e,name:t}){const{openName:o,close:n}=i.useContext(s),l=x(n);return t!==o?null:p.createPortal(r(k,{children:c(b,{ref:l,children:[r(C,{onClick:n,children:r(f,{})}),r("div",{children:i.cloneElement(e,{onCloseModal:n})})]})}),document.body)}u.Open=E;u.Window=w;const M=a.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;function L({resource:e,onConfirm:t,disabled:o,onCloseModal:n}){return c(M,{children:[c(h,{type:"h3",children:["Delete ",e]}),c("p",{children:["Are you sure you want to delete this ",e," permanently? This action cannot be undone."]}),c("div",{children:[r(d,{variation:"secondary",onClick:n,children:"Cancel"}),r(d,{variation:"danger",onClick:t,disabled:o,children:"Delete"})]})]})}export{L as C,D as E,u as M,x as u};
