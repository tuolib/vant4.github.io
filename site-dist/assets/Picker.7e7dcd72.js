import{c as et,u as dt,f as nt,l as ot,D as U,e as at,b as ht,E as gt}from"./use-translate.a196871a.js";import{d as _,u as vt,a as xt,n as z,b as st,c as p,m as bt,t as Ct}from"./with-install.a0bab54c.js";import{H as G,a as Tt}from"./constant.80c6de18.js";import{u as lt}from"./use-expose.c7cd3ed1.js";import{L as yt}from"./index.e0b746cb.js";import{d as Q}from"./deep-clone.885fcaa7.js";import{u as It}from"./use-touch.0eed9279.js";import{A as it,x as J,H as wt,y as q,e as r,D as W}from"./vue-libs.fd74807a.js";const X=200,Z=300,Ot=15,[ct,Y]=et("picker-column");function kt(e){const{transform:x}=window.getComputedStyle(e),i=x.slice(7,x.length-1).split(", ")[5];return Number(i)}const ut=Symbol(ct),F=e=>nt(e)&&e.disabled,Ht=it({name:ct,props:{textKey:_(String),readonly:Boolean,allowHtml:Boolean,className:vt,itemHeight:_(Number),defaultIndex:xt(0),swipeDuration:_(z),initialOptions:st(),visibleItemCount:_(z)},emits:["change"],setup(e,{emit:x,slots:i}){let d,h,O,g,c;const T=J(),a=wt({index:e.defaultIndex,offset:0,duration:0,options:Q(e.initialOptions)}),b=It(),m=()=>a.options.length,P=()=>e.itemHeight*(+e.visibleItemCount-1)/2,A=o=>{o=U(o,0,m());for(let s=o;s<m();s++)if(!F(a.options[s]))return s;for(let s=o-1;s>=0;s--)if(!F(a.options[s]))return s},f=(o,s)=>{o=A(o)||0;const u=-o*e.itemHeight,v=()=>{o!==a.index&&(a.index=o,s&&x("change",o))};d&&u!==a.offset?c=v:v(),a.offset=u},N=o=>{JSON.stringify(o)!==JSON.stringify(a.options)&&(a.options=Q(o),f(e.defaultIndex))},S=o=>{d||e.readonly||(c=null,a.duration=X,f(o,!0))},y=o=>nt(o)&&e.textKey in o?o[e.textKey]:o,k=o=>U(Math.round(-o/e.itemHeight),0,m()-1),D=(o,s)=>{const u=Math.abs(o/s);o=a.offset+u/.003*(o<0?-1:1);const v=k(o);a.duration=+e.swipeDuration,f(v,!0)},H=()=>{d=!1,a.duration=0,c&&(c(),c=null)},E=o=>{if(!e.readonly){if(b.start(o),d){const s=kt(T.value);a.offset=Math.min(0,s-P()),h=a.offset}else h=a.offset;a.duration=0,O=Date.now(),g=h,c=null}},$=o=>{if(e.readonly)return;b.move(o),b.isVertical()&&(d=!0,ot(o,!0)),a.offset=U(h+b.deltaY.value,-(m()*e.itemHeight),e.itemHeight);const s=Date.now();s-O>Z&&(O=s,g=a.offset)},M=()=>{if(e.readonly)return;const o=a.offset-g,s=Date.now()-O;if(s<Z&&Math.abs(o)>Ot){D(o,s);return}const v=k(a.offset);a.duration=X,f(v,!0),setTimeout(()=>{d=!1},0)},L=()=>{const o={height:`${e.itemHeight}px`};return a.options.map((s,u)=>{const v=y(s),V=F(s),R={role:"button",style:o,tabindex:V?-1:0,class:Y("item",{disabled:V,selected:u===a.index}),onClick:()=>S(u)},K={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:v};return r("li",R,[i.option?i.option(s):r("div",K,null)])})},j=o=>{const{options:s}=a;for(let u=0;u<s.length;u++)if(y(s[u])===o)return f(u)},B=()=>a.options[a.index];return f(a.index),dt(ut),lt({state:a,setIndex:f,getValue:B,setValue:j,setOptions:N,stopMomentum:H}),q(()=>e.initialOptions,N),q(()=>e.defaultIndex,o=>f(o)),()=>r("div",{class:[Y(),e.className],onTouchstart:E,onTouchmove:$,onTouchend:M,onTouchcancel:M},[r("ul",{ref:T,style:{transform:`translate3d(0, ${a.offset+P()}px, 0)`,transitionDuration:`${a.duration}ms`,transitionProperty:a.duration?"all":"none"},class:Y("wrapper"),onTransitionend:H},[L()])])}}),[Mt,C,tt]=et("picker"),Nt={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:p(44),showToolbar:Ct,swipeDuration:p(1e3),visibleItemCount:p(6),cancelButtonText:String,confirmButtonText:String},St=at({},Nt,{columns:st(),valueKey:String,defaultIndex:p(0),toolbarPosition:bt("top"),columnsFieldNames:Object}),At=it({name:Mt,props:St,emits:["confirm","cancel","change"],setup(e,{emit:x,slots:i}){const d=J(!1),h=J([]),{text:O,values:g,children:c}=at({text:e.valueKey||"text",values:"values",children:"children"},e.columnsFieldNames),{children:T,linkChildren:a}=ht(ut);a();const b=W(()=>gt(e.itemHeight)),m=W(()=>{const t=e.columns[0];if(typeof t=="object"){if(c in t)return"cascade";if(g in t)return"object"}return"plain"}),P=()=>{var l;const t=[];let n={[c]:e.columns};for(;n&&n[c];){const I=n[c];let w=(l=n.defaultIndex)!=null?l:+e.defaultIndex;for(;I[w]&&I[w].disabled;)if(w<I.length-1)w++;else{w=0;break}t.push({[g]:n[c],className:n.className,defaultIndex:w}),n=I[w]}h.value=t},A=()=>{const{columns:t}=e;m.value==="plain"?h.value=[{[g]:t}]:m.value==="cascade"?P():h.value=t,d.value=h.value.some(n=>n[g]&&n[g].length!==0)},f=()=>T.map(t=>t.state.index),N=(t,n)=>{const l=T[t];l&&(l.setOptions(n),d.value=!0)},S=t=>{let n={[c]:e.columns};const l=f();for(let I=0;I<=t;I++)n=n[c][l[I]];for(;n&&n[c];)t++,N(t,n[c]),n=n[c][n.defaultIndex||0]},y=t=>T[t],k=t=>{const n=y(t);if(n)return n.getValue()},D=(t,n)=>{const l=y(t);l&&(l.setValue(n),m.value==="cascade"&&S(t))},H=t=>{const n=y(t);if(n)return n.state.index},E=(t,n)=>{const l=y(t);l&&(l.setIndex(n),m.value==="cascade"&&S(t))},$=t=>{const n=y(t);if(n)return n.state.options},M=()=>T.map(t=>t.getValue()),L=t=>{t.forEach((n,l)=>{D(l,n)})},j=t=>{t.forEach((n,l)=>{E(l,n)})},B=t=>{m.value==="plain"?x(t,k(0),H(0)):x(t,M(),f())},o=t=>{m.value==="cascade"&&S(t),m.value==="plain"?x("change",k(0),H(0)):x("change",M(),t)},s=()=>{T.forEach(t=>t.stopMomentum()),B("confirm")},u=()=>B("cancel"),v=()=>{if(i.title)return i.title();if(e.title)return r("div",{class:[C("title"),"van-ellipsis"]},[e.title])},V=()=>{const t=e.cancelButtonText||tt("cancel");return r("button",{type:"button",class:[C("cancel"),G],onClick:u},[i.cancel?i.cancel():t])},R=()=>{const t=e.confirmButtonText||tt("confirm");return r("button",{type:"button",class:[C("confirm"),G],onClick:s},[i.confirm?i.confirm():t])},K=()=>{if(e.showToolbar){const t=i.toolbar||i.default;return r("div",{class:C("toolbar")},[t?t():[V(),v(),R()]])}},rt=()=>h.value.map((t,n)=>{var l;return r(Ht,{textKey:O,readonly:e.readonly,allowHtml:e.allowHtml,className:t.className,itemHeight:b.value,defaultIndex:(l=t.defaultIndex)!=null?l:+e.defaultIndex,swipeDuration:e.swipeDuration,initialOptions:t[g],visibleItemCount:e.visibleItemCount,onChange:()=>o(n)},{option:i.option})}),mt=t=>{if(d.value){const n={height:`${b.value}px`},l={backgroundSize:`100% ${(t-b.value)/2}px`};return[r("div",{class:C("mask"),style:l},null),r("div",{class:[Tt,C("frame")],style:n},null)]}},ft=()=>{const t=b.value*+e.visibleItemCount,n={height:`${t}px`};return r("div",{class:C("columns"),style:n,onTouchmove:ot},[rt(),mt(t)])};return q(()=>e.columns,A,{immediate:!0}),lt({confirm:s,getValues:M,setValues:L,getIndexes:f,setIndexes:j,getColumnIndex:H,setColumnIndex:E,getColumnValue:k,setColumnValue:D,getColumnValues:$,setColumnValues:N}),()=>{var t,n;return r("div",{class:C()},[e.toolbarPosition==="top"?K():null,e.loading?r(yt,{class:C("loading")},null):null,(t=i["columns-top"])==null?void 0:t.call(i),ft(),(n=i["columns-bottom"])==null?void 0:n.call(i),e.toolbarPosition==="bottom"?K():null])}}});export{At as _,Nt as p};