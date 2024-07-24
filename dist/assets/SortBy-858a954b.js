import{s,r as i,j as r,D as y,E as f,b,u as v}from"./index-adccf17c.js";import{u as x}from"./ConfirmDelete-a7b5b5a7.js";const w=s.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`,p=s.div`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,S=s(p)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,C=s(p)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,k=s.section`
  margin: 0.4rem 0;
`,B=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,P=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,h=i.createContext();function u({columns:e,children:o}){return r(h.Provider,{value:{columns:e},children:r(w,{role:"table",children:o})})}function T({children:e}){const{columns:o}=i.useContext(h);return r(S,{role:"row",columns:o,as:"header",children:e})}function j({children:e}){const{columns:o}=i.useContext(h);return r(C,{role:"row",columns:o,children:e})}function z({data:e,render:o}){return e.length?r(k,{children:e.map(o)}):r(P,{children:"No data to show at the moment"})}u.Header=T;u.Body=z;u.Row=j;u.Footer=B;const E=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,M=s.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,R=s.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
`,H=s.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,g=i.createContext();function m({children:e}){const[o,t]=i.useState(""),[n,a]=i.useState(null),l=()=>t(""),c=t;return r(g.Provider,{value:{openId:o,close:l,open:c,position:n,setPosition:a},children:e})}function I({id:e}){const{openId:o,close:t,open:n,setPosition:a}=i.useContext(g);function l(c){c.stopPropagation();const d=c.target.closest("button").getBoundingClientRect();a({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),o===""||o!==e?n(e):t()}return r(M,{onClick:l,children:r(y,{})})}function $({id:e,children:o}){const{openId:t,position:n,close:a}=i.useContext(g),l=x(a,!1);return t!==e?null:f.createPortal(r(R,{position:n,ref:l,children:o}),document.body)}function L({children:e,icon:o,onClick:t}){const{close:n}=i.useContext(g);function a(){t==null||t(),n()}return r("li",{children:b(H,{onClick:a,children:[o,r("span",{children:e})]})})}m.Menu=E;m.Toggle=I;m.List=$;m.Button=L;const O=s.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`,D=s.option`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--color-grey-0);
  font-weight: 500;
`;function F({options:e,value:o,onChange:t}){return r(O,{value:o,onChange:t,children:e.map(n=>r(D,{value:n.value,children:n.label},n.value))})}function W({options:e}){const[o,t]=v(),n=o.get("sortBy")||"";function a(l){o.set("sortBy",l.target.value),t(o)}return r(F,{options:e,value:n,type:"white",onChange:a})}export{m as M,W as S,u as T};
