import{P as n}from"./vue-libs.fd74807a.js";const c={to:[String,Object],url:String,replace:Boolean};function a({to:e,url:o,replace:t,$router:r}){e&&r?r[t?"replace":"push"](e):o&&(t?location.replace(o):location.href=o)}function i(){const e=n().proxy;return()=>a(e)}export{a,c as r,i as u};
