import{r as o,s as p}from"./use-translate.a196871a.js";function e(l,{args:r=[],done:i,canceled:s}){if(l){const f=l.apply(null,r);o(f)?f.then(t=>{t?i():s&&s()}).catch(p):f?i():s&&s()}else i()}export{e as c};