import{c as i,b as x,e as h,u as C}from"./use-translate.a196871a.js";import{t as P,w as c}from"./with-install.a0bab54c.js";import{A as u,e as l,D as s}from"./vue-libs.fd74807a.js";import{u as S}from"./use-expose.c7cd3ed1.js";import{r as y,u as I}from"./use-route.e217ff91.js";import{B as V}from"./index.93cac71d.js";const[p,_]=i("action-bar"),m=Symbol(p),N={safeAreaInsetBottom:P},k=u({name:p,props:N,setup(a,{slots:n}){const{linkChildren:e}=x(m);return e(),()=>{var o;return l("div",{class:[_(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(o=n.default)==null?void 0:o.call(n)])}}}),w=c(k),j=w,[E,R]=i("action-bar-button"),$=h({},y,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),z=u({name:E,props:$,setup(a,{slots:n}){const e=I(),{parent:o,index:r}=C(m),d=s(()=>{if(o){const t=o.children[r.value-1];return!(t&&"isButton"in t)}}),B=s(()=>{if(o){const t=o.children[r.value+1];return!(t&&"isButton"in t)}});return S({isButton:!0}),()=>{const{type:t,icon:f,text:b,color:A,loading:g,disabled:v}=a;return l(V,{class:R([t,{last:B.value,first:d.value}]),size:"large",type:t,icon:f,color:A,loading:g,disabled:v,onClick:e},{default:()=>[n.default?n.default():b]})}}}),D=c(z),q=D;export{m as A,j as V,q as a,D as b,w as c};
