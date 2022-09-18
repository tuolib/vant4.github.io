import{c as h,e as d,v as C,a as S}from"./use-translate.a196871a.js";import{w as B}from"./with-install.a0bab54c.js";import{C as D}from"./index.abc86992.js";import{F as E}from"./index.fedc8baa.js";import{F as b}from"./index.82ad6040.js";import{B as _}from"./index.93cac71d.js";import{S as w}from"./index.19bfa835.js";import{A as g,H as x,y as V,e as a,x as y,r as k,o as F,c as T,w as A,C as u}from"./vue-libs.fd74807a.js";import{T as v}from"./function-call.33ac04a1.js";import"./use-route.e217ff91.js";import"./index.75bcb902.js";import"./constant.80c6de18.js";import"./use-expose.c7cd3ed1.js";import"./use-id.c3e45cc3.js";import"./index.e0b746cb.js";import"./mount-component.f6c89a43.js";import"./index.f37d16f9.js";import"./interceptor.2cd9e46b.js";import"./use-touch.0eed9279.js";import"./use-lazy-render.9a7d5f45.js";import"./on-popup-reopen.0f034b19.js";import"./index.36766f9d.js";const[L,s,n]=h("contact-edit"),m={tel:"",name:""},U={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:C}},I=g({name:L,props:U,emits:["save","delete","change-default"],setup(t,{emit:l}){const e=x(d({},m,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"danger",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(w,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,size:24,onChange:o=>l("change-default",o)},null),r=()=>{if(t.showSetDefault)return a(D,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return V(()=>t.contactInfo,o=>d(e,m,o)),()=>a(E,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),N=B(I),z=N,se=g({__name:"index",setup(t){const l=S({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({tel:"",name:""}),i=()=>v(l("save")),c=()=>v(l("delete"));return(f,p)=>{const r=k("demo-block");return F(),T(r,{title:u(l)("basicUsage")},{default:A(()=>[a(u(z),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{se as default};