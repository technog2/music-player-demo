import{o,c as n,t as p,u as P,r,w as T,a as B,b as g,d as t,e as b,v as y,f as I,g as k,F as N,h as D}from"./index.5597beed.js";import{u as E}from"./Auth.39197e71.js";const M=()=>{function l(c){var s;(s=document.getElementById(c))==null||s.focus()}return{focus:l}},U={type:"submit",class:"w-full bg-rose-900 rounded-xl px-4 py-2 outline-none text-center mt-2"},q={key:0,class:"loading loading-spinner"},F={key:1},w={props:["value","loading"],setup(l){return(c,s)=>(o(),n("button",U,[l.loading?(o(),n("span",q)):(o(),n("span",F,p(l.value),1))]))}},K={class:"bg-[url('/src/assets/images/bg.png')] bg-no-repeat bg-center bg-cover"},L=["onSubmit"],A=t("div",{class:"text-center px-14 pt-28"},[t("h2",{class:"text-white font-bold text-3xl"},"Cellphone"),t("p",{class:"text-gray-300 mt-4"},"Please perform your country code and enter your cellphone number.")],-1),R={class:"pt-20 px-10"},j={key:0,class:"text-error text-sm mt-2 transition"},z=["onSubmit"],G={class:"text-center px-14 pt-28"},H=t("h2",{class:"text-white font-bold text-3xl"},"Perform",-1),J={class:"text-gray-300 mt-4"},O={class:"pt-20 px-10"},Q={class:"flex gap-2 mt-2",dir:"ltr"},W=["onUpdate:modelValue","onKeyup","id"],Z={setup(l){const c=P(),s=M(),$=E(),m=r(0),u=r(""),S=r(),h=r([]),x=r(!1),i=r();T(u,e=>/^09\d{9}$/.test(e)?i.value=null:i.value="Cellphone number is not valid."),B(()=>{v(),s.focus("phone-input")});async function V(){try{const e={ok:!0,data:{verificationId:"xxx"}};e.ok&&(S.value=e.data.verificationId,m.value++,await v(),s.focus("index-1"))}catch(e){console.error(e)}}async function f(){try{const e={ok:!0,data:{accessToken:"xxx",refreshToken:"xxx"}};e.ok&&($.setToken(e.data),c.push({name:"home"}))}catch(e){console.error(e)}}async function C(e){e===5?await f():s.focus(`index-${e+1}`)}function v(e=500){return new Promise(d=>setTimeout(d,e))}return(e,d)=>(o(),n("div",K,[m.value===0?(o(),n("form",{key:0,onSubmit:g(V,["prevent"]),class:""},[A,t("div",R,[b(t("input",{"onUpdate:modelValue":d[0]||(d[0]=a=>u.value=a),type:"text",id:"phone-input",placeholder:"Phone number",class:"w-full bg-transparent border-[1.5px] border-gray-700 rounded-xl px-4 py-2 outline-none",required:""},null,512),[[y,u.value]]),i.value?(o(),n("span",j,p(i.value),1)):I("",!0),k(w,{loading:x.value,value:"Continue"},null,8,["loading"])])],40,L)):(o(),n("form",{key:1,onSubmit:g(f,["prevent"]),class:""},[t("div",G,[H,t("p",J,'Enter the validation code sent to the phone number "'+p(u.value)+'"',1)]),t("div",O,[t("div",Q,[(o(),n(N,null,D(5,a=>b(t("input",{"onUpdate:modelValue":_=>h.value[a]=_,onKeyup:_=>C(a),id:`index-${a}`,type:"text",class:"bg-transparent border-[1.5px] border-gray-700 rounded-xl p-2 w-full text-center outline-none",maxlength:"1",required:""},null,40,W),[[y,h.value[a]]])),64))]),k(w,{loading:x.value,value:"Login",class:"mt-4"},null,8,["loading"])])],40,z))]))}};export{Z as default};
