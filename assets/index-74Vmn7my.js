import{c as d,h as F,m as N,a7 as f,C as E,cl as p,o as P}from"./index-DzVgSI8Z.js";const u=["wrap","nowrap","wrap-reverse"],m=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],y=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],V=(e,t)=>{const l=t.wrap===!0?"wrap":t.wrap;return{[`${e}-wrap-${l}`]:l&&u.includes(l)}},I=(e,t)=>{const l={};return y.forEach(n=>{l[`${e}-align-${n}`]=t.align===n}),l[`${e}-align-stretch`]=!t.align&&!!t.vertical,l},W=(e,t)=>{const l={};return m.forEach(n=>{l[`${e}-justify-${n}`]=t.justify===n}),l};function L(e,t){return d(Object.assign(Object.assign(Object.assign({},V(e,t)),I(e,t)),W(e,t)))}const z=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},A=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},D=e=>{const{componentCls:t}=e,l={};return u.forEach(n=>{l[`${t}-wrap-${n}`]={flexWrap:n}}),l},J=e=>{const{componentCls:t}=e,l={};return y.forEach(n=>{l[`${t}-align-${n}`]={alignItems:n}}),l},M=e=>{const{componentCls:t}=e,l={};return m.forEach(n=>{l[`${t}-justify-${n}`]={justifyContent:n}}),l},R=()=>({}),T=F("Flex",e=>{const{paddingXS:t,padding:l,paddingLG:n}=e,s=N(e,{flexGapSM:t,flexGap:l,flexGapLG:n});return[z(s),A(s),D(s),J(s),M(s)]},R,{resetStyle:!1});var _=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(l[n[s]]=e[n[s]]);return l};const X=f.forwardRef((e,t)=>{const{prefixCls:l,rootClassName:n,className:s,style:x,flex:g,gap:c,children:C,vertical:o=!1,component:S="div"}=e,j=_(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:a,direction:h,getPrefixCls:w}=f.useContext(E),r=w("flex",l),[$,b,O]=T(r),v=o??(a==null?void 0:a.vertical),G=d(s,n,a==null?void 0:a.className,r,b,O,L(r,e),{[`${r}-rtl`]:h==="rtl",[`${r}-gap-${c}`]:p(c),[`${r}-vertical`]:v}),i=Object.assign(Object.assign({},a==null?void 0:a.style),x);return g&&(i.flex=g),c&&!p(c)&&(i.gap=c),$(f.createElement(S,Object.assign({ref:t,className:G,style:i},P(j,["justify","wrap","align"])),C))});export{X as F};
