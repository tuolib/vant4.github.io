import{c as H,w as J,q as A,i as X,e as x,B as K,r as Q,p as z}from"./use-translate.a196871a.js";import{n as C,d as W,c as L,m as y,t as P,b as Y,w as Z}from"./with-install.a0bab54c.js";import{u as $}from"./use-expose.c7cd3ed1.js";import{I as k}from"./index.75bcb902.js";import{I as ee}from"./function-call.7989afb4.js";import{c as ae}from"./interceptor.2cd9e46b.js";import{I as ne}from"./index.91d56b29.js";import{L as te}from"./index.e0b746cb.js";import{A as D,e as l,x as le,J as ie,B as re,H as oe}from"./vue-libs.fd74807a.js";const[se,i,ce]=H("uploader"),B=e=>Array.isArray(e)?e:[e];function S(e,n){return new Promise(r=>{if(n==="file"){r();return}const c=new FileReader;c.onload=f=>{r(f.target.result)},n==="dataUrl"?c.readAsDataURL(e):n==="text"&&c.readAsText(e)})}function O(e,n){return B(e).some(r=>r.file?J(n)?n(r.file):r.file.size>n:!1)}function ue(e,n){const r=[],c=[];return e.forEach(f=>{O(f,n)?c.push(f):r.push(f)}),{valid:r,invalid:c}}const de=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,fe=e=>de.test(e);function j(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?fe(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}const me=D({props:{name:C,item:W(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,previewSize:C,beforeDelete:Function},emits:["delete","preview"],setup(e,{emit:n,slots:r}){const c=()=>{const{status:o,message:d}=e.item;if(o==="uploading"||o==="failed"){const h=o==="failed"?l(k,{name:"close",class:i("mask-icon")},null):l(te,{class:i("loading")},null),I=X(d)&&d!=="";return l("div",{class:i("mask")},[h,I&&l("div",{class:i("mask-message")},[d])])}},f=o=>{const{name:d,item:h,index:I,beforeDelete:F}=e;o.stopPropagation(),ae(F,{args:[h,{name:d,index:I}],done:()=>n("delete")})},m=()=>n("preview"),w=()=>{if(e.deletable&&e.item.status!=="uploading")return l("div",{role:"button",class:i("preview-delete"),tabindex:0,"aria-label":ce("delete"),onClick:f},[l(k,{name:"cross",class:i("preview-delete-icon")},null)])},p=()=>{if(r["preview-cover"]){const{index:o,item:d}=e;return l("div",{class:i("preview-cover")},[r["preview-cover"](x({index:o},d))])}},b=()=>{const{item:o}=e;return j(o)?l(ne,{fit:e.imageFit,src:o.content||o.url,class:i("preview-image"),width:e.previewSize,height:e.previewSize,lazyLoad:e.lazyLoad,onClick:m},{default:p}):l("div",{class:i("file"),style:A(e.previewSize)},[l(k,{class:i("file-icon"),name:"description"},null),l("div",{class:[i("file-name"),"van-ellipsis"]},[o.file?o.file.name:o.url]),p()])};return()=>l("div",{class:i("preview")},[b(),c(),w()])}}),ve={name:L(""),accept:y("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:L(1/0),imageFit:y("cover"),resultType:y("dataUrl"),uploadIcon:y("photograph"),uploadText:String,deletable:P,afterRead:Function,showUpload:P,modelValue:Y(),beforeRead:Function,beforeDelete:Function,previewSize:C,previewImage:P,previewOptions:Object,previewFullImage:P,maxSize:{type:[Number,String,Function],default:1/0}},ge=D({name:se,props:ve,emits:["delete","oversize","click-upload","close-preview","click-preview","update:modelValue"],setup(e,{emit:n,slots:r}){const c=le(),f=[],m=(a=e.modelValue.length)=>({name:e.name,index:a}),w=()=>{c.value&&(c.value.value="")},p=a=>{if(w(),O(a,e.maxSize))if(Array.isArray(a)){const t=ue(a,e.maxSize);if(a=t.valid,n("oversize",t.invalid,m()),!a.length)return}else{n("oversize",a,m());return}a=oe(a),n("update:modelValue",[...e.modelValue,...B(a)]),e.afterRead&&e.afterRead(a,m())},b=a=>{const{maxCount:t,modelValue:u,resultType:s}=e;if(Array.isArray(a)){const v=+t-u.length;a.length>v&&(a=a.slice(0,v)),Promise.all(a.map(g=>S(g,s))).then(g=>{const G=a.map((_,R)=>{const V={file:_,status:"",message:""};return g[R]&&(V.content=g[R]),V});p(G)})}else S(a,s).then(v=>{const g={file:a,status:"",message:""};v&&(g.content=v),p(g)})},o=a=>{const{files:t}=a.target;if(e.disabled||!t||!t.length)return;const u=t.length===1?t[0]:[].slice.call(t);if(e.beforeRead){const s=e.beforeRead(u,m());if(!s){w();return}if(Q(s)){s.then(v=>{b(v||u)}).catch(w);return}}b(u)};let d;const h=()=>n("close-preview"),I=a=>{if(e.previewFullImage){const t=e.modelValue.filter(j),u=t.map(s=>(s.file&&!s.url&&(s.url=URL.createObjectURL(s.file),f.push(s.url)),s.url)).filter(Boolean);d=ee(x({images:u,startPosition:t.indexOf(a),onClose:h},e.previewOptions))}},F=()=>{d&&d.close()},E=(a,t)=>{const u=e.modelValue.slice(0);u.splice(t,1),n("update:modelValue",u),n("delete",a,m(t))},N=(a,t)=>{const u=["imageFit","deletable","previewSize","beforeDelete"],s=x(z(e,u),z(a,u,!0));return l(me,re({item:a,index:t,onClick:()=>n("click-preview",a,m(t)),onDelete:()=>E(a,t),onPreview:()=>I(a)},z(e,["name","lazyLoad"]),s),{"preview-cover":r["preview-cover"]})},M=()=>{if(e.previewImage)return e.modelValue.map(N)},U=a=>n("click-upload",a),T=()=>{if(e.modelValue.length>=e.maxCount||!e.showUpload)return;const a=e.readonly?null:l("input",{ref:c,type:"file",class:i("input"),accept:e.accept,capture:e.capture,multiple:e.multiple,disabled:e.disabled,onChange:o},null);return r.default?l("div",{class:i("input-wrapper"),onClick:U},[r.default(),a]):l("div",{class:i("upload",{readonly:e.readonly}),style:A(e.previewSize),onClick:U},[l(k,{name:e.uploadIcon,class:i("upload-icon")},null),e.uploadText&&l("span",{class:i("upload-text")},[e.uploadText]),a])},q=()=>{c.value&&!e.disabled&&c.value.click()};return ie(()=>{f.forEach(a=>URL.revokeObjectURL(a))}),$({chooseFile:q,closeImagePreview:F}),K(()=>e.modelValue),()=>l("div",{class:i()},[l("div",{class:i("wrapper",{disabled:e.disabled})},[M(),T()])])}}),we=Z(ge),xe=we;export{xe as V};
