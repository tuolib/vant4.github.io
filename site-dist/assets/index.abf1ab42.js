import{c as p,a as f}from"./use-translate.a196871a.js";import{m as _,t as k,w as F}from"./with-install.a0bab54c.js";import{C as b}from"./index.abc86992.js";import{A as C,e as a,D as B,r as E,o as y,a as A,w as l,C as t,F as h}from"./vue-libs.fd74807a.js";import{T as s}from"./function-call.33ac04a1.js";import"./use-route.e217ff91.js";import"./index.75bcb902.js";import"./mount-component.f6c89a43.js";import"./use-expose.c7cd3ed1.js";import"./index.f37d16f9.js";import"./constant.80c6de18.js";import"./interceptor.2cd9e46b.js";import"./use-touch.0eed9279.js";import"./use-lazy-render.9a7d5f45.js";import"./on-popup-reopen.0f034b19.js";import"./index.36766f9d.js";import"./index.e0b746cb.js";const[v,u,r]=p("contact-card"),x={tel:String,name:String,type:_("add"),addText:String,editable:k},S=C({name:v,props:x,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||r("addContact"):[a("div",null,[`${r("name")}\uFF1A${e.name}`]),a("div",null,[`${r("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:u([e.type]),border:!1,isLink:e.editable,valueClass:u("value"),onClick:o},{value:d})}}),g=F(S),m=g,Q=C({__name:"index",setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(w,T)=>{const c=E("demo-block");return y(),A(h,null,[a(c,{title:t(n)("addContact")},{default:l(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(c,{title:t(n)("editContact")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(c,{title:t(n)("uneditable")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{Q as default};