import{b as d,V as v}from"./index.6c8df2ad.js";import{V as c}from"./index.5ce8008a.js";import{a as V}from"./use-translate.a196871a.js";import{T}from"./function-call.33ac04a1.js";import{A as y,x as g,D as _,N as x,o as B,c as b,w as o,e as n,C as t,d as a,t as f,g as h}from"./vue-libs.fd74807a.js";import"./with-install.a0bab54c.js";import"./use-id.c3e45cc3.js";import"./use-expose.c7cd3ed1.js";import"./use-route.e217ff91.js";import"./index.6f3320db.js";import"./use-touch.0eed9279.js";import"./on-popup-reopen.0f034b19.js";import"./constant.80c6de18.js";import"./interceptor.2cd9e46b.js";import"./use-refs.0cf5deac.js";import"./index.d96cd329.js";import"./index.75bcb902.js";import"./index.e0b746cb.js";import"./mount-component.f6c89a43.js";import"./index.f37d16f9.js";import"./use-lazy-render.9a7d5f45.js";import"./index.36766f9d.js";const z=a("img",{src:"https://b.yzcdn.cn/vant/doge.png",class:"doge"},null,-1),C=a("img",{src:"https://b.yzcdn.cn/vant/doge-fire.jpg",class:"doge"},null,-1),X=y({__name:"index",setup(R){const u=V({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),i=g(0),l=g(!1),p=_(()=>i.value?`${u("text")}: ${i.value}`:u("try")),m=r=>{setTimeout(()=>{r&&T(u("success")),l.value=!1,i.value++},1e3)};return x(()=>{const r=new Image,e=new Image;r.src="https://b.yzcdn.cn/vant/doge.png",e.src="https://b.yzcdn.cn/vant/doge-fire.jpg"}),(r,e)=>(B(),b(t(v),null,{default:o(()=>[n(t(d),{title:t(u)("basicUsage")},{default:o(()=>[n(t(c),{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),onRefresh:e[1]||(e[1]=s=>m(!0))},{default:o(()=>[a("p",null,f(t(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),n(t(d),{title:t(u)("successTip")},{default:o(()=>[n(t(c),{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l.value=s),"success-text":t(u)("success"),onRefresh:e[3]||(e[3]=s=>m(!1))},{default:o(()=>[a("p",null,f(t(p)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),n(t(d),{title:t(u)("customTips")},{default:o(()=>[n(t(c),{modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=s=>l.value=s),"head-height":"80",onRefresh:e[5]||(e[5]=s=>m(!0))},{pulling:o(({distance:s})=>[a("img",{class:"doge",src:"https://b.yzcdn.cn/vant/doge.png",style:h({transform:`scale(${s/80})`})},null,4)]),loosing:o(()=>[z]),loading:o(()=>[C]),default:o(()=>[a("p",null,f(t(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{X as default};