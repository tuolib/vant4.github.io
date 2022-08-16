import{V as n}from"./index.9f217799.js";import{a as h}from"./use-translate.a196871a.js";import{A as T,H as V,r as D,o as f,a as C,e as l,w as d,C as e,F as E}from"./vue-libs.fd74807a.js";import"./with-install.a0bab54c.js";import"./use-expose.c7cd3ed1.js";import"./utils.aebdf3bd.js";import"./Picker.7e7dcd72.js";import"./constant.80c6de18.js";import"./index.e0b746cb.js";import"./deep-clone.885fcaa7.js";import"./use-touch.0eed9279.js";import"./index.a67ad7ac.js";const Y=T({__name:"index",setup(x){const a=h({"zh-CN":{day:"\u65E5",year:"\u5E74",month:"\u6708",timeType:"\u9009\u62E9\u65F6\u95F4",dateType:"\u9009\u62E9\u5E74\u6708\u65E5",datetimeType:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4",datehourType:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6",monthDayType:"\u9009\u62E9\u6708\u65E5",yearMonthType:"\u9009\u62E9\u5E74\u6708",optionFilter:"\u9009\u9879\u8FC7\u6EE4\u5668",sortColumns:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"},"en-US":{day:" Day",year:" Year",month:" Month",timeType:"Choose Time",dateType:"Choose Date",datetimeType:"Choose DateTime",datehourType:"Choose DateHour",monthDayType:"Choose Month-Day",yearMonthType:"Choose Year-Month",optionFilter:"Option Filter",sortColumns:"Columns Order"}}),o=V({date:new Date(2021,0,17),time:"12:00",datetime:new Date(2020,0,1),datehour:new Date(2020,0,1),monthDay:new Date(2020,0,1),yearMonth:new Date(2020,0,1),optionFilter:"12:00",sortColumnsDate:new Date(2020,0,1)}),i=new Date(2020,0,1),r=new Date(2025,10,1),s=(p,t)=>p==="minute"?t.filter(u=>Number(u)%5===0):t,y=(p,t)=>p==="year"?t+a("year"):p==="month"?t+a("month"):p==="day"?t+a("day"):t;return(p,t)=>{const u=D("demo-block");return f(),C(E,null,[l(u,{card:"",title:e(a)("dateType")},{default:d(()=>[l(e(n),{modelValue:o.date,"onUpdate:modelValue":t[0]||(t[0]=m=>o.date=m),type:"date",title:e(a)("dateType"),"min-date":e(i),"max-date":e(r)},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),l(u,{card:"",title:e(a)("yearMonthType")},{default:d(()=>[l(e(n),{modelValue:o.yearMonth,"onUpdate:modelValue":t[1]||(t[1]=m=>o.yearMonth=m),type:"year-month",title:e(a)("yearMonthType"),"min-date":e(i),"max-date":e(r),formatter:y},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),l(u,{card:"",title:e(a)("monthDayType")},{default:d(()=>[l(e(n),{modelValue:o.monthDay,"onUpdate:modelValue":t[2]||(t[2]=m=>o.monthDay=m),type:"month-day",title:e(a)("monthDayType"),"min-date":e(i),"max-date":e(r),formatter:y},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),l(u,{card:"",title:e(a)("timeType")},{default:d(()=>[l(e(n),{modelValue:o.time,"onUpdate:modelValue":t[3]||(t[3]=m=>o.time=m),type:"time",title:e(a)("timeType"),"min-hour":10,"max-hour":20},null,8,["modelValue","title"])]),_:1},8,["title"]),l(u,{card:"",title:e(a)("datetimeType")},{default:d(()=>[l(e(n),{modelValue:o.datetime,"onUpdate:modelValue":t[4]||(t[4]=m=>o.datetime=m),type:"datetime",title:e(a)("datetimeType"),"min-date":e(i),"max-date":e(r)},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),l(u,{card:"",title:e(a)("datehourType")},{default:d(()=>[l(e(n),{modelValue:o.datehour,"onUpdate:modelValue":t[5]||(t[5]=m=>o.datehour=m),type:"datehour",title:e(a)("datehourType"),"min-date":e(i),"max-date":e(r)},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),l(u,{card:"",title:e(a)("optionFilter")},{default:d(()=>[l(e(n),{modelValue:o.optionFilter,"onUpdate:modelValue":t[6]||(t[6]=m=>o.optionFilter=m),type:"time",title:e(a)("optionFilter"),filter:s},null,8,["modelValue","title"])]),_:1},8,["title"]),l(u,{card:"",title:e(a)("sortColumns")},{default:d(()=>[l(e(n),{modelValue:o.sortColumnsDate,"onUpdate:modelValue":t[7]||(t[7]=m=>o.sortColumnsDate=m),type:"date",title:e(a)("sortColumns"),"columns-order":["month","day","year"],"min-date":e(i),"max-date":e(r),formatter:y},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"])],64)}}});export{Y as default};
