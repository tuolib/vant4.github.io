import{V as m}from"./index.19bfa835.js";import{V as f}from"./index.abc86992.js";import{a as v}from"./use-translate.a196871a.js";import{D as _}from"./function-call.d7d818d9.js";import{A as g,x as r,r as F,o as U,a as k,e as l,w as a,C as e,F as x}from"./vue-libs.fd74807a.js";import"./with-install.a0bab54c.js";import"./index.e0b746cb.js";import"./use-route.e217ff91.js";import"./index.75bcb902.js";import"./mount-component.f6c89a43.js";import"./use-expose.c7cd3ed1.js";import"./constant.80c6de18.js";import"./interceptor.2cd9e46b.js";import"./index.f37d16f9.js";import"./use-touch.0eed9279.js";import"./use-lazy-render.9a7d5f45.js";import"./on-popup-reopen.0f034b19.js";import"./index.36766f9d.js";import"./index.93cac71d.js";import"./index.f8431f04.js";const O=g({__name:"index",setup(A){const u=v({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customColor:"Custom Color",asyncControl:"Async Control"}}),n=r(!0),s=r(!0),d=r(!0),p=r(!0),c=r(!0),C=V=>{_.confirm({title:u("title"),message:u("message")}).then(()=>{p.value=V})};return(V,t)=>{const i=F("demo-block");return U(),k(x,null,[l(i,{title:e(u)("basicUsage")},{default:a(()=>[l(e(m),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),l(i,{title:e(u)("disabled")},{default:a(()=>[l(e(m),{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(i,{title:e(u)("loadingStatus")},{default:a(()=>[l(e(m),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=o=>n.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),l(i,{title:e(u)("customSize")},{default:a(()=>[l(e(m),{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=o=>s.value=o),size:"24px"},null,8,["modelValue"])]),_:1},8,["title"]),l(i,{title:e(u)("customColor")},{default:a(()=>[l(e(m),{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=o=>d.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),l(i,{title:e(u)("asyncControl")},{default:a(()=>[l(e(m),{"model-value":p.value,"onUpdate:modelValue":C},null,8,["model-value"])]),_:1},8,["title"]),l(i,{title:e(u)("withCell")},{default:a(()=>[l(e(f),{center:"",title:e(u)("title")},{"right-icon":a(()=>[l(e(m),{modelValue:c.value,"onUpdate:modelValue":t[5]||(t[5]=o=>c.value=o),size:"24"},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{O as default};