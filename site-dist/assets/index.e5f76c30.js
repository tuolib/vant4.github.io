import{c as g,a as T}from"./use-translate.a196871a.js";import{u as C,w as _}from"./with-install.a0bab54c.js";import{T as x}from"./index.1324fe32.js";import{I as k}from"./index.75bcb902.js";import{C as v}from"./index.abc86992.js";import{a as V,R as E}from"./index.d2514588.js";import{B as S}from"./index.93cac71d.js";import{A as f,e as o,x as b,r as h,o as B,c as I,w,C as u}from"./vue-libs.fd74807a.js";import{T as p}from"./function-call.33ac04a1.js";import"./constant.80c6de18.js";import"./use-route.e217ff91.js";import"./Checker.43ee3aa3.js";import"./index.e0b746cb.js";import"./mount-component.f6c89a43.js";import"./use-expose.c7cd3ed1.js";import"./index.f37d16f9.js";import"./interceptor.2cd9e46b.js";import"./use-touch.0eed9279.js";import"./use-lazy-render.9a7d5f45.js";import"./on-popup-reopen.0f034b19.js";import"./index.36766f9d.js";const[y,a,A]=g("contact-list"),D={list:Array,addText:String,modelValue:C,defaultTagText:String},L=f({name:y,props:D,emits:["add","edit","select","update:modelValue"],setup(n,{emit:t}){const d=(e,i)=>{const c=()=>{t("update:modelValue",e.id),t("select",e,i)},s=()=>o(E,{class:a("radio"),name:e.id,iconSize:16},null),r=()=>o(k,{name:"edit",class:a("edit"),onClick:l=>{l.stopPropagation(),t("edit",e,i)}},null),m=()=>{const l=[`${e.name}\uFF0C${e.tel}`];return e.isDefault&&n.defaultTagText&&l.push(o(x,{type:"danger",round:!0,class:a("item-tag")},{default:()=>[n.defaultTagText]})),l};return o(v,{key:e.id,isLink:!0,center:!0,class:a("item"),valueClass:a("item-value"),onClick:c},{icon:r,value:m,"right-icon":s})};return()=>o("div",{class:a()},[o(V,{modelValue:n.modelValue,class:a("group")},{default:()=>[n.list&&n.list.map(d)]}),o("div",{class:[a("bottom"),"van-safe-area-bottom"]},[o(S,{round:!0,block:!0,type:"danger",class:a("add"),text:n.addText||A("addContact"),onClick:()=>t("add")},null)])])}}),N=_(L),R=N,ot=f({__name:"index",setup(n){const t=T({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000"}],select:"\u9009\u62E9",defaultTagText:"\u9ED8\u8BA4"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),d=b("1"),e=()=>{p(t("add"))},i=s=>{p(t("edit")+s.id)},c=s=>{p(t("select")+s.id)};return(s,r)=>{const m=h("demo-block");return B(),I(m,{title:u(t)("basicUsage")},{default:w(()=>[o(u(R),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=l=>d.value=l),list:u(t)("list"),"default-tag-text":u(t)("defaultTagText"),onAdd:e,onEdit:i,onSelect:c},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{ot as default};
