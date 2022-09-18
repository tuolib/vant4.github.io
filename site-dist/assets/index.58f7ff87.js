import{c as Ce,X as Pe,p as Ae,e as Te,a as Re}from"./use-translate.a196871a.js";import{m as ne,b as De,n as Ie,t as G,u as Le,w as je}from"./with-install.a0bab54c.js";import{f as Me}from"./constant.80c6de18.js";import{I as Fe}from"./index.75bcb902.js";import{P as Be,V as Ne}from"./index.f37d16f9.js";import{A as he,x as H,N as Ve,J as _e,y as qe,e as v,B as We,F as re,q as Ue,r as Xe,o as ce,a as ue,w as b,C as p,h as X,t as $,d as we,b as $e}from"./vue-libs.fd74807a.js";import{V as Y}from"./index.93cac71d.js";import{V as Ye}from"./index.82ad6040.js";import{V as He}from"./index.a67ad7ac.js";import{V as ze,a as Ge}from"./index.af1b15c3.js";import{T as Je}from"./function-call.33ac04a1.js";import"./interceptor.2cd9e46b.js";import"./use-expose.c7cd3ed1.js";import"./use-touch.0eed9279.js";import"./use-lazy-render.9a7d5f45.js";import"./on-popup-reopen.0f034b19.js";import"./index.36766f9d.js";import"./use-route.e217ff91.js";import"./index.e0b746cb.js";import"./index.abc86992.js";import"./use-id.c3e45cc3.js";import"./Picker.7e7dcd72.js";import"./deep-clone.885fcaa7.js";import"./mount-component.f6c89a43.js";function C(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ye(t){var e=C(t).Element;return t instanceof e||t instanceof Element}function k(t){var e=C(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function be(t){if(typeof ShadowRoot>"u")return!1;var e=C(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var _=Math.round;function Q(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),n=1,r=1;if(k(t)&&e){var a=t.offsetHeight,l=t.offsetWidth;l>0&&(n=_(o.width)/l||1),a>0&&(r=_(o.height)/a||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function ge(t){var e=C(t),o=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:o,scrollTop:n}}function Ke(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Qe(t){return t===C(t)||!k(t)?ge(t):Ke(t)}function A(t){return t?(t.nodeName||"").toLowerCase():null}function te(t){return((ye(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ze(t){return Q(te(t)).left+ge(t).scrollLeft}function T(t){return C(t).getComputedStyle(t)}function ie(t){var e=T(t),o=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function et(t){var e=t.getBoundingClientRect(),o=_(e.width)/t.offsetWidth||1,n=_(e.height)/t.offsetHeight||1;return o!==1||n!==1}function tt(t,e,o){o===void 0&&(o=!1);var n=k(e),r=k(e)&&et(e),a=te(e),l=Q(t,r),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!o)&&((A(e)!=="body"||ie(a))&&(s=Qe(e)),k(e)?(c=Q(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):a&&(c.x=Ze(a))),{x:l.left+s.scrollLeft-c.x,y:l.top+s.scrollTop-c.y,width:l.width,height:l.height}}function ot(t){var e=Q(t),o=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:n}}function se(t){return A(t)==="html"?t:t.assignedSlot||t.parentNode||(be(t)?t.host:null)||te(t)}function Oe(t){return["html","body","#document"].indexOf(A(t))>=0?t.ownerDocument.body:k(t)&&ie(t)?t:Oe(se(t))}function K(t,e){var o;e===void 0&&(e=[]);var n=Oe(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),a=C(n),l=r?[a].concat(a.visualViewport||[],ie(n)?n:[]):n,s=e.concat(l);return r?s:s.concat(K(se(l)))}function nt(t){return["table","td","th"].indexOf(A(t))>=0}function le(t){return!k(t)||T(t).position==="fixed"?null:t.offsetParent}function rt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&k(t)){var n=T(t);if(n.position==="fixed")return null}var r=se(t);for(be(r)&&(r=r.host);k(r)&&["html","body"].indexOf(A(r))<0;){var a=T(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function xe(t){for(var e=C(t),o=le(t);o&&nt(o)&&T(o).position==="static";)o=le(o);return o&&(A(o)==="html"||A(o)==="body"&&T(o).position==="static")?e:o||rt(t)||e}var V="top",Z="bottom",z="right",M="left",Ee="auto",at=[V,Z,z,M],Se="start",ee="end",it=[].concat(at,[Ee]).reduce(function(t,e){return t.concat([e,e+"-"+Se,e+"-"+ee])},[]),st="beforeRead",ct="read",ut="afterRead",lt="beforeMain",ft="main",pt="afterMain",dt="beforeWrite",vt="write",mt="afterWrite",ae=[st,ct,ut,lt,ft,pt,dt,vt,mt];function ht(t){var e=new Map,o=new Set,n=[];t.forEach(function(a){e.set(a.name,a)});function r(a){o.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(s){if(!o.has(s)){var c=e.get(s);c&&r(c)}}),n.push(a)}return t.forEach(function(a){o.has(a.name)||r(a)}),n}function wt(t){var e=ht(t);return ae.reduce(function(o,n){return o.concat(e.filter(function(r){return r.phase===n}))},[])}function yt(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function D(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(r,a){return r.replace(/%s/,a)},t)}var L='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',bt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',fe=["name","enabled","phase","fn","effect","requires","options"];function gt(t){t.forEach(function(e){[].concat(Object.keys(e),fe).filter(function(o,n,r){return r.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof e.name!="string"&&console.error(D(L,String(e.name),'"name"','"string"','"'+String(e.name)+'"'));break;case"enabled":typeof e.enabled!="boolean"&&console.error(D(L,e.name,'"enabled"','"boolean"','"'+String(e.enabled)+'"'));break;case"phase":ae.indexOf(e.phase)<0&&console.error(D(L,e.name,'"phase"',"either "+ae.join(", "),'"'+String(e.phase)+'"'));break;case"fn":typeof e.fn!="function"&&console.error(D(L,e.name,'"fn"','"function"','"'+String(e.fn)+'"'));break;case"effect":e.effect!=null&&typeof e.effect!="function"&&console.error(D(L,e.name,'"effect"','"function"','"'+String(e.fn)+'"'));break;case"requires":e.requires!=null&&!Array.isArray(e.requires)&&console.error(D(L,e.name,'"requires"','"array"','"'+String(e.requires)+'"'));break;case"requiresIfExists":Array.isArray(e.requiresIfExists)||console.error(D(L,e.name,'"requiresIfExists"','"array"','"'+String(e.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+e.name+'" modifier, valid properties are '+fe.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}e.requires&&e.requires.forEach(function(n){t.find(function(r){return r.name===n})==null&&console.error(D(bt,String(e.name),n,n))})})})}function Ot(t,e){var o=new Set;return t.filter(function(n){var r=e(n);if(!o.has(r))return o.add(r),!0})}function oe(t){return t.split("-")[0]}function xt(t){var e=t.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(e).map(function(o){return e[o]})}function ke(t){return t.split("-")[1]}function Et(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function St(t){var e=t.reference,o=t.element,n=t.placement,r=n?oe(n):null,a=n?ke(n):null,l=e.x+e.width/2-o.width/2,s=e.y+e.height/2-o.height/2,c;switch(r){case V:c={x:l,y:e.y-o.height};break;case Z:c={x:l,y:e.y+e.height};break;case z:c={x:e.x+e.width,y:s};break;case M:c={x:e.x-o.width,y:s};break;default:c={x:e.x,y:e.y}}var u=r?Et(r):null;if(u!=null){var i=u==="y"?"height":"width";switch(a){case Se:c[u]=c[u]-(e[i]/2-o[i]/2);break;case ee:c[u]=c[u]+(e[i]/2-o[i]/2);break}}return c}var pe="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",kt="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",de={placement:"bottom",modifiers:[],strategy:"absolute"};function ve(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ct(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,n=o===void 0?[]:o,r=e.defaultOptions,a=r===void 0?de:r;return function(s,c,u){u===void 0&&(u=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},de,a),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],P=!1,m={state:i,setOptions:function(w){var S=typeof w=="function"?w(i.options):w;g(),i.options=Object.assign({},a,i.options,S),i.scrollParents={reference:ye(s)?K(s):s.contextElement?K(s.contextElement):[],popper:K(c)};var x=wt(xt([].concat(n,i.options.modifiers)));i.orderedModifiers=x.filter(function(E){return E.enabled});{var O=Ot([].concat(x,i.options.modifiers),function(E){var B=E.name;return B});if(gt(O),oe(i.options.placement)===Ee){var y=i.orderedModifiers.find(function(E){var B=E.name;return B==="flip"});y||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var h=T(c),R=h.marginTop,I=h.marginRight,q=h.marginBottom,W=h.marginLeft;[R,I,q,W].some(function(E){return parseFloat(E)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return F(),m.update()},forceUpdate:function(){if(!P){var w=i.elements,S=w.reference,x=w.popper;if(!ve(S,x)){console.error(pe);return}i.rects={reference:tt(S,xe(x),i.options.strategy==="fixed"),popper:ot(x)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(E){return i.modifiersData[E.name]=Object.assign({},E.data)});for(var O=0,y=0;y<i.orderedModifiers.length;y++){if(O+=1,O>100){console.error(kt);break}if(i.reset===!0){i.reset=!1,y=-1;continue}var h=i.orderedModifiers[y],R=h.fn,I=h.options,q=I===void 0?{}:I,W=h.name;typeof R=="function"&&(i=R({state:i,options:q,name:W,instance:m})||i)}}},update:yt(function(){return new Promise(function(f){m.forceUpdate(),f(i)})}),destroy:function(){g(),P=!0}};if(!ve(s,c))return console.error(pe),m;m.setOptions(u).then(function(f){!P&&u.onFirstUpdate&&u.onFirstUpdate(f)});function F(){i.orderedModifiers.forEach(function(f){var w=f.name,S=f.options,x=S===void 0?{}:S,O=f.effect;if(typeof O=="function"){var y=O({state:i,name:w,instance:m,options:x}),h=function(){};d.push(y||h)}})}function g(){d.forEach(function(f){return f()}),d=[]}return m}}var J={passive:!0};function Pt(t){var e=t.state,o=t.instance,n=t.options,r=n.scroll,a=r===void 0?!0:r,l=n.resize,s=l===void 0?!0:l,c=C(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&u.forEach(function(i){i.addEventListener("scroll",o.update,J)}),s&&c.addEventListener("resize",o.update,J),function(){a&&u.forEach(function(i){i.removeEventListener("scroll",o.update,J)}),s&&c.removeEventListener("resize",o.update,J)}}var At={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Pt,data:{}};function Tt(t){var e=t.state,o=t.name;e.modifiersData[o]=St({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Rt={name:"popperOffsets",enabled:!0,phase:"read",fn:Tt,data:{}},Dt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function It(t){var e=t.x,o=t.y,n=window,r=n.devicePixelRatio||1;return{x:_(e*r)/r||0,y:_(o*r)/r||0}}function me(t){var e,o=t.popper,n=t.popperRect,r=t.placement,a=t.variation,l=t.offsets,s=t.position,c=t.gpuAcceleration,u=t.adaptive,i=t.roundOffsets,d=t.isFixed,P=l.x,m=P===void 0?0:P,F=l.y,g=F===void 0?0:F,f=typeof i=="function"?i({x:m,y:g}):{x:m,y:g};m=f.x,g=f.y;var w=l.hasOwnProperty("x"),S=l.hasOwnProperty("y"),x=M,O=V,y=window;if(u){var h=xe(o),R="clientHeight",I="clientWidth";if(h===C(o)&&(h=te(o),T(h).position!=="static"&&s==="absolute"&&(R="scrollHeight",I="scrollWidth")),h=h,r===V||(r===M||r===z)&&a===ee){O=Z;var q=d&&h===y&&y.visualViewport?y.visualViewport.height:h[R];g-=q-n.height,g*=c?1:-1}if(r===M||(r===V||r===Z)&&a===ee){x=z;var W=d&&h===y&&y.visualViewport?y.visualViewport.width:h[I];m-=W-n.width,m*=c?1:-1}}var E=Object.assign({position:s},u&&Dt),B=i===!0?It({x:m,y:g}):{x:m,y:g};if(m=B.x,g=B.y,c){var U;return Object.assign({},E,(U={},U[O]=S?"0":"",U[x]=w?"0":"",U.transform=(y.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",U))}return Object.assign({},E,(e={},e[O]=S?g+"px":"",e[x]=w?m+"px":"",e.transform="",e))}function Lt(t){var e=t.state,o=t.options,n=o.gpuAcceleration,r=n===void 0?!0:n,a=o.adaptive,l=a===void 0?!0:a,s=o.roundOffsets,c=s===void 0?!0:s;{var u=T(e.elements.popper).transitionProperty||"";l&&["transform","top","right","bottom","left"].some(function(d){return u.indexOf(d)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var i={placement:oe(e.placement),variation:ke(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,me(Object.assign({},i,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:l,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,me(Object.assign({},i,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var jt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Lt,data:{}};function Mt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var n=e.styles[o]||{},r=e.attributes[o]||{},a=e.elements[o];!k(a)||!A(a)||(Object.assign(a.style,n),Object.keys(r).forEach(function(l){var s=r[l];s===!1?a.removeAttribute(l):a.setAttribute(l,s===!0?"":s)}))})}function Ft(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],a=e.attributes[n]||{},l=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:o[n]),s=l.reduce(function(c,u){return c[u]="",c},{});!k(r)||!A(r)||(Object.assign(r.style,s),Object.keys(a).forEach(function(c){r.removeAttribute(c)}))})}}var Bt={name:"applyStyles",enabled:!0,phase:"write",fn:Mt,effect:Ft,requires:["computeStyles"]},Nt=[At,Rt,jt,Bt],Vt=Ct({defaultModifiers:Nt});function _t(t,e,o){var n=oe(t),r=[M,V].indexOf(n)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,l=a[0],s=a[1];return l=l||0,s=(s||0)*r,[M,z].indexOf(n)>=0?{x:s,y:l}:{x:l,y:s}}function qt(t){var e=t.state,o=t.options,n=t.name,r=o.offset,a=r===void 0?[0,0]:r,l=it.reduce(function(i,d){return i[d]=_t(d,e.rects,a),i},{}),s=l[e.placement],c=s.x,u=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=l}var Wt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qt};const[Ut,j]=Ce("popover"),Xt=["show","overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],$t={show:Boolean,theme:ne("light"),overlay:Boolean,actions:De(),trigger:ne("click"),duration:Ie,showArrow:G,placement:ne("bottom"),iconPrefix:String,overlayClass:Le,overlayStyle:Object,closeOnClickAction:G,closeOnClickOverlay:G,closeOnClickOutside:G,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},Yt=he({name:Ut,props:$t,emits:["select","touchstart","update:show"],setup(t,{emit:e,slots:o,attrs:n}){let r;const a=H(),l=H(),s=()=>a.value&&l.value?Vt(a.value,l.value.popupRef.value,{placement:t.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Te({},Wt,{options:{offset:t.offset}})]}):null,c=()=>{Ue(()=>{!t.show||(r?r.setOptions({placement:t.placement}):r=s())})},u=f=>e("update:show",f),i=()=>{t.trigger==="click"&&u(!t.show)},d=f=>{f.stopPropagation(),e("touchstart",f)},P=(f,w)=>{f.disabled||(e("select",f,w),t.closeOnClickAction&&u(!1))},m=()=>{t.closeOnClickOutside&&(!t.overlay||t.closeOnClickOverlay)&&u(!1)},F=(f,w)=>o.action?o.action({action:f,index:w}):[f.icon&&v(Fe,{name:f.icon,classPrefix:t.iconPrefix,class:j("action-icon")},null),v("div",{class:[j("action-text"),Me]},[f.text])],g=(f,w)=>{const{icon:S,color:x,disabled:O,className:y}=f;return v("div",{role:"menuitem",class:[j("action",{disabled:O,"with-icon":S}),y],style:{color:x},tabindex:O?void 0:0,"aria-disabled":O||void 0,onClick:()=>P(f,w)},[F(f,w)])};return Ve(c),_e(()=>{r&&(r.destroy(),r=null)}),qe(()=>[t.show,t.placement],c),Pe(a,m,{eventName:"touchstart"}),()=>{var f;return v(re,null,[v("span",{ref:a,class:j("wrapper"),onClick:i},[(f=o.reference)==null?void 0:f.call(o)]),v(Be,We({ref:l,class:j([t.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,onTouchstart:d,"onUpdate:show":u},n,Ae(t,Xt)),{default:()=>[t.showArrow&&v("div",{class:j("arrow")},null),v("div",{role:"menu",class:j("content")},[o.default?o.default():t.actions.map(g)])]})])}}}),Ht=je(Yt),N=Ht,zt={class:"demo-popover-box"},Gt=we("div",{class:"demo-popover-refer"},null,-1),Oo=he({__name:"index",setup(t){const e=Re({"zh-CN":{actions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"},{text:"\u9009\u9879\u4E09"}],shortActions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"}],actionsWithIcon:[{text:"\u9009\u9879\u4E00",icon:"add-o"},{text:"\u9009\u9879\u4E8C",icon:"music-o"},{text:"\u9009\u9879\u4E09",icon:"more-o"}],actionsDisabled:[{text:"\u9009\u9879\u4E00",disabled:!0},{text:"\u9009\u9879\u4E8C",disabled:!0},{text:"\u9009\u9879\u4E09"}],showIcon:"\u5C55\u793A\u56FE\u6807",placement:"\u5F39\u51FA\u4F4D\u7F6E",darkTheme:"\u6DF1\u8272\u98CE\u683C",lightTheme:"\u6D45\u8272\u98CE\u683C",showPopover:"\u70B9\u51FB\u5F39\u51FA\u6C14\u6CE1",actionOptions:"\u9009\u9879\u914D\u7F6E",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",disableAction:"\u7981\u7528\u9009\u9879",choosePlacement:"\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],n=H({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=H(!1),a=H("top"),l=c=>{setTimeout(()=>{n.value.placement=!0,a.value=c})},s=c=>Je(c.text);return(c,u)=>{const i=Xe("demo-block");return ce(),ue(re,null,[v(i,{title:p(e)("basicUsage")},{default:b(()=>[v(p(N),{show:n.value.lightTheme,"onUpdate:show":u[0]||(u[0]=d=>n.value.lightTheme=d),actions:p(e)("actions"),placement:"bottom-start",onSelect:s},{reference:b(()=>[v(p(Y),{type:"primary"},{default:b(()=>[X($(p(e)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),v(p(N),{show:n.value.darkTheme,"onUpdate:show":u[1]||(u[1]=d=>n.value.darkTheme=d),theme:"dark",actions:p(e)("actions"),onSelect:s},{reference:b(()=>[v(p(Y),{type:"primary"},{default:b(()=>[X($(p(e)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),v(i,{title:p(e)("placement")},{default:b(()=>[v(p(Ye),{"is-link":"",readonly:"",name:"picker",label:p(e)("choosePlacement"),onClick:u[2]||(u[2]=d=>r.value=!0)},null,8,["label"]),v(p(Ne),{show:r.value,"onUpdate:show":u[4]||(u[4]=d=>r.value=d),round:"",position:"bottom",teleport:"body"},{default:b(()=>[we("div",zt,[v(p(N),{show:n.value.placement,"onUpdate:show":u[3]||(u[3]=d=>n.value.placement=d),theme:"dark",actions:p(e)("shortActions"),placement:a.value,onSelect:s},{reference:b(()=>[Gt]),_:1},8,["show","actions","placement"])]),v(p(He),{columns:o,"show-toolbar":!1,onChange:l})]),_:1},8,["show"])]),_:1},8,["title"]),v(i,{title:p(e)("actionOptions")},{default:b(()=>[v(p(N),{show:n.value.showIcon,"onUpdate:show":u[5]||(u[5]=d=>n.value.showIcon=d),actions:p(e)("actionsWithIcon"),placement:"bottom-start",onSelect:s},{reference:b(()=>[v(p(Y),{type:"primary"},{default:b(()=>[X($(p(e)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),v(p(N),{show:n.value.disableAction,"onUpdate:show":u[6]||(u[6]=d=>n.value.disableAction=d),actions:p(e)("actionsDisabled"),onSelect:s},{reference:b(()=>[v(p(Y),{type:"primary"},{default:b(()=>[X($(p(e)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),v(i,{title:p(e)("customContent")},{default:b(()=>[v(p(N),{show:n.value.customContent,"onUpdate:show":u[8]||(u[8]=d=>n.value.customContent=d),placement:"top-start",onSelect:s},{reference:b(()=>[v(p(Y),{type:"primary"},{default:b(()=>[X($(p(e)("customContent")),1)]),_:1})]),default:b(()=>[v(p(ze),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:b(()=>[(ce(),ue(re,null,$e(6,d=>v(p(Ge),{key:d,icon:"photo-o",text:p(e)("option"),onClick:u[7]||(u[7]=P=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Oo as default};