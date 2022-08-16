import{A as I,H as S,x as U,r as B,o as k,a as p,e as t,w as l,C as e,h as s,t as n,d as h,F as x,b as y,c as F,V as D}from"./vue-libs.fd74807a.js";import{V as i}from"./index.2fe75897.js";import{V as r}from"./index.8893bf33.js";import{V}from"./index.93cac71d.js";import{V as R}from"./index.c224a35f.js";import{V as L}from"./index.abc86992.js";import{a as N}from"./use-translate.a196871a.js";import{u as w}from"./use-refs.0cf5deac.js";import"./with-install.a0bab54c.js";import"./use-expose.c7cd3ed1.js";import"./Checker.43ee3aa3.js";import"./index.75bcb902.js";import"./constant.80c6de18.js";import"./use-route.e217ff91.js";import"./index.e0b746cb.js";const G=["src"],T={class:"demo-checkbox-buttons"},oe=I({__name:"index",setup($){const o=N({"zh-CN":{checkbox:"\u590D\u9009\u6846",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customIconSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customShape:"\u81EA\u5B9A\u4E49\u5F62\u72B6",title3:"\u590D\u9009\u6846\u7EC4",title4:"\u9650\u5236\u6700\u5927\u53EF\u9009\u6570",title5:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",toggleAll:"\u5168\u9009\u4E0E\u53CD\u9009",checkAll:"\u5168\u9009",inverse:"\u53CD\u9009",horizontal:"\u6C34\u5E73\u6392\u5217",disableLabel:"\u7981\u7528\u6587\u672C\u70B9\u51FB"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}}),c=S({checkbox1:!0,checkbox2:!0,checkbox3:!0,checkboxShape:!0,checkboxLabel:!0,checboxIcon:!0,list:["a","b"],result:["a","b"],result2:[],result3:[],checkAllResult:[],horizontalResult:[]}),_="https://img.yzcdn.cn/vant/user-active.png",C="https://img.yzcdn.cn/vant/user-inactive.png",b=U(),[g,A]=w(),v=m=>{g.value[m].toggle()},z=()=>{var m;(m=b.value)==null||m.toggleAll(!0)},E=()=>{var m;(m=b.value)==null||m.toggleAll()};return(m,a)=>{const d=B("demo-block");return k(),p(x,null,[t(d,{title:e(o)("basicUsage")},{default:l(()=>[t(e(i),{modelValue:c.checkbox1,"onUpdate:modelValue":a[0]||(a[0]=u=>c.checkbox1=u)},{default:l(()=>[s(n(e(o)("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("disabled")},{default:l(()=>[t(e(i),{"model-value":!1,disabled:""},{default:l(()=>[s(n(e(o)("checkbox")),1)]),_:1}),t(e(i),{"model-value":!0,disabled:""},{default:l(()=>[s(n(e(o)("checkbox")),1)]),_:1})]),_:1},8,["title"]),t(d,{title:e(o)("customShape")},{default:l(()=>[t(e(i),{modelValue:c.checkboxShape,"onUpdate:modelValue":a[1]||(a[1]=u=>c.checkboxShape=u),shape:"square"},{default:l(()=>[s(n(e(o)("customShape")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("customColor")},{default:l(()=>[t(e(i),{modelValue:c.checkbox2,"onUpdate:modelValue":a[2]||(a[2]=u=>c.checkbox2=u),"checked-color":"#ee0a24"},{default:l(()=>[s(n(e(o)("customColor")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("customIconSize")},{default:l(()=>[t(e(i),{modelValue:c.checboxIcon,"onUpdate:modelValue":a[3]||(a[3]=u=>c.checboxIcon=u),"icon-size":"24px"},{default:l(()=>[s(n(e(o)("customIconSize")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("customIcon")},{default:l(()=>[t(e(i),{modelValue:c.checkbox3,"onUpdate:modelValue":a[4]||(a[4]=u=>c.checkbox3=u)},{icon:l(({checked:u})=>[h("img",{src:u?_:C},null,8,G)]),default:l(()=>[s(n(e(o)("customIcon"))+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("disableLabel")},{default:l(()=>[t(e(i),{modelValue:c.checkboxLabel,"onUpdate:modelValue":a[5]||(a[5]=u=>c.checkboxLabel=u),"label-disabled":""},{default:l(()=>[s(n(e(o)("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("title3")},{default:l(()=>[t(e(r),{modelValue:c.result,"onUpdate:modelValue":a[6]||(a[6]=u=>c.result=u)},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(n(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(n(e(o)("checkbox"))+" b",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("horizontal")},{default:l(()=>[t(e(r),{modelValue:c.horizontalResult,"onUpdate:modelValue":a[7]||(a[7]=u=>c.horizontalResult=u),direction:"horizontal"},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(n(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(n(e(o)("checkbox"))+" b",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("title4")},{default:l(()=>[t(e(r),{modelValue:c.result2,"onUpdate:modelValue":a[8]||(a[8]=u=>c.result2=u),max:2},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(n(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(n(e(o)("checkbox"))+" b",1)]),_:1}),t(e(i),{name:"c"},{default:l(()=>[s(n(e(o)("checkbox"))+" c",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("toggleAll")},{default:l(()=>[t(e(r),{modelValue:c.checkAllResult,"onUpdate:modelValue":a[9]||(a[9]=u=>c.checkAllResult=u),ref_key:"group",ref:b},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(n(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(n(e(o)("checkbox"))+" b",1)]),_:1}),t(e(i),{name:"c"},{default:l(()=>[s(n(e(o)("checkbox"))+" c",1)]),_:1})]),_:1},8,["modelValue"]),h("div",T,[t(e(V),{type:"primary",onClick:z},{default:l(()=>[s(n(e(o)("checkAll")),1)]),_:1}),t(e(V),{type:"primary",onClick:E},{default:l(()=>[s(n(e(o)("inverse")),1)]),_:1})])]),_:1},8,["title"]),t(d,{title:e(o)("title5")},{default:l(()=>[t(e(r),{modelValue:c.result3,"onUpdate:modelValue":a[11]||(a[11]=u=>c.result3=u)},{default:l(()=>[t(e(R),{inset:""},{default:l(()=>[(k(!0),p(x,null,y(c.list,(u,f)=>(k(),F(e(L),{clickable:"",key:f,title:`${e(o)("checkbox")} ${u}`,onClick:H=>v(f)},{"right-icon":l(()=>[t(e(i),{ref_for:!0,ref:e(A)(f),name:u,onClick:a[10]||(a[10]=D(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{oe as default};
