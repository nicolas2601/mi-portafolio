import{i as u,j as a,m}from"./proxy.DiKztg8X.js";import"./index.DtoOFyvK.js";import{u as g,a as l}from"./use-combine-values.DmZNRw1d.js";function f(n,...i){const s=n.length;function r(){let o="";for(let e=0;e<s;e++){o+=n[e];const t=i[e];t&&(o+=u(t)?t.get():t)}return o}return g(i.filter(u),r)}function h({children:n,className:i=""}){const s=l(0),r=l(0);function o({currentTarget:e,clientX:t,clientY:c}){const{left:p,top:d}=e.getBoundingClientRect();s.set(t-p),r.set(c-d)}return a.jsxs("div",{className:`group relative border border-white/10 bg-[var(--bg-secondary)] overflow-hidden ${i}`,onMouseMove:o,children:[a.jsx(m.div,{className:"pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100",style:{background:f`
            radial-gradient(
              650px circle at ${s}px ${r}px,
              rgba(255, 215, 0, 0.15),
              transparent 80%
            )
          `}}),a.jsx("div",{className:"relative h-full",children:n})]})}export{h as S};
