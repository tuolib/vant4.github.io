import{d as S,o as k,c as P,L as I,E as $,e as R,t as T,n as B,N,G as u,K as O}from"./use-translate.a196871a.js";import{n as V,m as E,c as p,w as H}from"./with-install.a0bab54c.js";import{M as z,J as A,A as C,x as D,H as L,D as m,y as M,e as x}from"./vue-libs.fd74807a.js";function j(o,f){if(!S||!window.IntersectionObserver)return;const c=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),n=()=>{o.value&&c.observe(o.value)},l=()=>{o.value&&c.unobserve(o.value)};z(l),A(l),k(n)}const[F,G]=P("sticky"),J={zIndex:V,position:E("top"),container:Object,offsetTop:p(0),offsetBottom:p(0)},K=C({name:F,props:J,emits:["scroll","change"],setup(o,{emit:f,slots:c}){const n=D(),l=I(n),e=L({fixed:!1,width:0,height:0,transform:0}),i=m(()=>$(o.position==="top"?o.offsetTop:o.offsetBottom)),w=m(()=>{const{fixed:t,height:d,width:s}=e;if(t)return{width:`${s}px`,height:`${d}px`}}),b=m(()=>{if(!e.fixed)return;const t=R(T(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),y=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),h=()=>{if(!n.value||N(n))return;const{container:t,position:d}=o,s=u(n),g=O(window);if(e.width=s.width,e.height=s.height,d==="top")if(t){const r=u(t),a=r.bottom-i.value-e.height;e.fixed=i.value>s.top&&r.bottom>0,e.transform=a<0?a:0}else e.fixed=i.value>s.top;else{const{clientHeight:r}=document.documentElement;if(t){const a=u(t),v=r-a.top-i.value-e.height;e.fixed=r-i.value<s.bottom&&r>a.top,e.transform=v<0?-v:0}else e.fixed=r-i.value<s.bottom}y(g)};return M(()=>e.fixed,t=>f("change",t)),B("scroll",h,{target:l}),j(n,h),()=>{var t;return x("div",{ref:n,style:w.value},[x("div",{class:G({fixed:e.fixed}),style:b.value},[(t=c.default)==null?void 0:t.call(c)])])}}}),U=H(K),Q=U;export{U as S,Q as V};
