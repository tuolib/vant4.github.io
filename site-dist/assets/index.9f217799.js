import{c as K,e as S,p as j,V as f,D as E,I as N}from"./use-translate.a196871a.js";import{c as I,m as te,w as ae}from"./with-install.a0bab54c.js";import{u as B}from"./use-expose.c7cd3ed1.js";import{s as Q,t as R,p as U,a as W,g as J,b as ne}from"./utils.aebdf3bd.js";import{P as X}from"./index.a67ad7ac.js";import{A as q,x as w,D as C,N as A,q as g,y as h,e as Z,B as _}from"./vue-libs.fd74807a.js";const[ue]=K("time-picker"),z=q({name:ue,props:S({},Q,{minHour:I(0),maxHour:I(23),minMinute:I(0),maxMinute:I(59),modelValue:String}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=u=>{const{minHour:e,maxHour:a,maxMinute:n,minMinute:r}=t;u||(u=`${f(e)}:${f(r)}`);let[i,c]=u.split(":");return i=f(E(+i,+e,+a)),c=f(E(+c,+r,+n)),`${i}:${c}`},m=w(),o=w(d(t.modelValue)),P=C(()=>[{type:"hour",range:[+t.minHour,+t.maxHour]},{type:"minute",range:[+t.minMinute,+t.maxMinute]}]),Y=C(()=>P.value.map(({type:u,range:e})=>{let a=R(e[1]-e[0]+1,n=>f(e[0]+n));return t.filter&&(a=t.filter(u,a)),{type:u,values:a}})),x=C(()=>Y.value.map(u=>({values:u.values.map(e=>t.formatter(u.type,e))}))),k=()=>{const u=o.value.split(":"),e=[t.formatter("hour",u[0]),t.formatter("minute",u[1])];g(()=>{var a;(a=m.value)==null||a.setValues(e)})},D=()=>{const[u,e]=m.value.getIndexes(),[a,n]=Y.value,r=a.values[u]||a.values[0],i=n.values[e]||n.values[0];o.value=d(`${r}:${i}`),k()},V=()=>s("confirm",o.value),O=()=>s("cancel"),T=()=>{D(),g(()=>{g(()=>s("change",o.value))})};return A(()=>{k(),g(D)}),h(x,k),h(()=>[t.filter,t.maxHour,t.minMinute,t.maxMinute],D),h(()=>t.minHour,()=>{g(D)}),h(o,u=>s("update:modelValue",u)),h(()=>t.modelValue,u=>{u=d(u),u!==o.value&&(o.value=u,k())}),B({getPicker:()=>m.value&&W(m.value,D)}),()=>Z(X,_({ref:m,columns:x.value,onChange:T,onCancel:O,onConfirm:V},j(t,U)),$)}}),L=new Date().getFullYear(),[oe]=K("date-picker"),G=q({name:oe,props:S({},Q,{type:te("datetime"),modelValue:Date,minDate:{type:Date,default:()=>new Date(L-10,0,1),validator:N},maxDate:{type:Date,default:()=>new Date(L+10,11,31),validator:N}}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=e=>{if(N(e)){const a=E(e.getTime(),t.minDate.getTime(),t.maxDate.getTime());return new Date(a)}},m=w(),o=w(d(t.modelValue)),P=(e,a)=>{const n=t[`${e}Date`],r=n.getFullYear();let i=1,c=1,v=0,y=0;return e==="max"&&(i=12,c=J(a.getFullYear(),a.getMonth()+1),v=23,y=59),a.getFullYear()===r&&(i=n.getMonth()+1,a.getMonth()+1===i&&(c=n.getDate(),a.getDate()===c&&(v=n.getHours(),a.getHours()===v&&(y=n.getMinutes())))),{[`${e}Year`]:r,[`${e}Month`]:i,[`${e}Date`]:c,[`${e}Hour`]:v,[`${e}Minute`]:y}},Y=C(()=>{const{maxYear:e,maxDate:a,maxMonth:n,maxHour:r,maxMinute:i}=P("max",o.value||t.minDate),{minYear:c,minDate:v,minMonth:y,minHour:b,minMinute:p}=P("min",o.value||t.minDate);let l=[{type:"year",range:[c,e]},{type:"month",range:[y,n]},{type:"day",range:[v,a]},{type:"hour",range:[b,r]},{type:"minute",range:[p,i]}];switch(t.type){case"date":l=l.slice(0,3);break;case"year-month":l=l.slice(0,2);break;case"month-day":l=l.slice(1,3);break;case"datehour":l=l.slice(0,4);break}if(t.columnsOrder){const M=t.columnsOrder.concat(l.map(H=>H.type));l.sort((H,F)=>M.indexOf(H.type)-M.indexOf(F.type))}return l}),x=C(()=>Y.value.map(({type:e,range:a})=>{let n=R(a[1]-a[0]+1,r=>f(a[0]+r));return t.filter&&(n=t.filter(e,n)),{type:e,values:n}})),k=C(()=>x.value.map(e=>({values:e.values.map(a=>t.formatter(e.type,a))}))),D=()=>{const e=o.value||t.minDate,{formatter:a}=t,n=x.value.map(r=>{switch(r.type){case"year":return a("year",`${e.getFullYear()}`);case"month":return a("month",f(e.getMonth()+1));case"day":return a("day",f(e.getDate()));case"hour":return a("hour",f(e.getHours()));case"minute":return a("minute",f(e.getMinutes()));default:return""}});g(()=>{var r;(r=m.value)==null||r.setValues(n)})},V=()=>{const{type:e}=t,a=m.value.getIndexes(),n=l=>{let M=0;x.value.forEach((F,ee)=>{l===F.type&&(M=ee)});const{values:H}=x.value[M];return ne(H[a[M]])};let r,i,c;e==="month-day"?(r=(o.value||t.minDate).getFullYear(),i=n("month"),c=n("day")):(r=n("year"),i=n("month"),c=e==="year-month"?1:n("day"));const v=J(r,i);c=c>v?v:c;let y=0,b=0;e==="datehour"&&(y=n("hour")),e==="datetime"&&(y=n("hour"),b=n("minute"));const p=new Date(r,i-1,c,y,b);o.value=d(p)},O=()=>{s("update:modelValue",o.value),s("confirm",o.value)},T=()=>s("cancel"),u=()=>{V(),g(()=>{g(()=>s("change",o.value))})};return A(()=>{D(),g(V)}),h(k,D),h(o,(e,a)=>s("update:modelValue",a?e:null)),h(()=>[t.filter,t.maxDate],V),h(()=>t.minDate,()=>{g(V)}),h(()=>t.modelValue,e=>{var a;e=d(e),e&&e.valueOf()!==((a=o.value)==null?void 0:a.valueOf())&&(o.value=e)}),B({getPicker:()=>m.value&&W(m.value,V)}),()=>Z(X,_({ref:m,columns:k.value,onChange:u,onCancel:T,onConfirm:O},j(t,U)),$)}}),[re,me]=K("datetime-picker"),ie=Object.keys(z.props),ce=Object.keys(G.props),le=S({},z.props,G.props,{modelValue:[String,Date]}),se=q({name:re,props:le,setup(t,{attrs:s,slots:$}){const d=w();return B({getPicker:()=>{var m;return(m=d.value)==null?void 0:m.getPicker()}}),()=>{const m=t.type==="time",o=m?z:G,P=j(t,m?ie:ce);return Z(o,_({ref:d,class:me()},P,s),$)}}}),de=ae(se),xe=de;export{xe as V};