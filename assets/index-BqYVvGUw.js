import{r as a,G as ne,v as Z,p as re,c as M,l as W,_ as ae,d as F,R as ie,w as X,h as le,m as de,Z as q,N as j,af as J,C as A,aw as se,ak as ce,ai as K,ah as ue,bA as be,bB as fe,ay as pe,ao as ge,F as Ce}from"./index-7_GR9guO.js";const Q=a.createContext(null),he=Q.Provider,U=a.createContext(null),me=U.Provider;var Se=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],ke=a.forwardRef(function(e,n){var r=e.prefixCls,o=r===void 0?"rc-checkbox":r,t=e.className,i=e.style,g=e.checked,C=e.disabled,l=e.defaultChecked,R=l===void 0?!1:l,h=e.type,y=h===void 0?"checkbox":h,B=e.title,v=e.onChange,w=ne(e,Se),m=a.useRef(null),d=a.useRef(null),x=Z(R,{value:g}),b=re(x,2),S=b[0],k=b[1];a.useImperativeHandle(n,function(){return{focus:function(p){var c;(c=m.current)===null||c===void 0||c.focus(p)},blur:function(){var p;(p=m.current)===null||p===void 0||p.blur()},input:m.current,nativeElement:d.current}});var E=M(o,t,W(W({},"".concat(o,"-checked"),S),"".concat(o,"-disabled"),C)),s=function(p){C||("checked"in e||k(p.target.checked),v==null||v({target:F(F({},e),{},{type:y,checked:p.target.checked}),stopPropagation:function(){p.stopPropagation()},preventDefault:function(){p.preventDefault()},nativeEvent:p.nativeEvent}))};return a.createElement("span",{className:E,title:B,style:i,ref:d},a.createElement("input",ae({},w,{className:"".concat(o,"-input"),ref:m,onChange:s,disabled:C,checked:!!S,type:y})),a.createElement("span",{className:"".concat(o,"-inner")}))});function ve(e){const n=ie.useRef(null),r=()=>{X.cancel(n.current),n.current=null};return[()=>{r(),n.current=X(()=>{n.current=null})},i=>{n.current&&(i.stopPropagation(),r()),e==null||e(i)}]}const ye=e=>{const{componentCls:n,antCls:r}=e,o=`${n}-group`;return{[o]:Object.assign(Object.assign({},q(e)),{display:"inline-block",fontSize:0,[`&${o}-rtl`]:{direction:"rtl"},[`&${o}-block`]:{display:"flex"},[`${r}-badge ${r}-badge-count`]:{zIndex:1},[`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]:{borderInlineStart:"none"}})}},xe=e=>{const{componentCls:n,wrapperMarginInlineEnd:r,colorPrimary:o,radioSize:t,motionDurationSlow:i,motionDurationMid:g,motionEaseInOutCirc:C,colorBgContainer:l,colorBorder:R,lineWidth:h,colorBgContainerDisabled:y,colorTextDisabled:B,paddingXS:v,dotColorDisabled:w,lineType:m,radioColor:d,radioBgColor:x,calc:b}=e,S=`${n}-inner`,E=b(t).sub(b(4).mul(2)),s=b(1).mul(t).equal({unit:!0});return{[`${n}-wrapper`]:Object.assign(Object.assign({},q(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:r,cursor:"pointer",[`&${n}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},"&-block":{flex:1,justifyContent:"center"},[`${n}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${j(h)} ${m} ${o}`,borderRadius:"50%",visibility:"hidden",opacity:0,content:'""'},[n]:Object.assign(Object.assign({},q(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${n}-wrapper:hover &,
        &:hover ${S}`]:{borderColor:o},[`${n}-input:focus-visible + ${S}`]:Object.assign({},J(e)),[`${n}:hover::after, ${n}-wrapper:hover &::after`]:{visibility:"visible"},[`${n}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:s,height:s,marginBlockStart:b(1).mul(t).div(-2).equal({unit:!0}),marginInlineStart:b(1).mul(t).div(-2).equal({unit:!0}),backgroundColor:d,borderBlockStart:0,borderInlineStart:0,borderRadius:s,transform:"scale(0)",opacity:0,transition:`all ${i} ${C}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:s,height:s,backgroundColor:l,borderColor:R,borderStyle:"solid",borderWidth:h,borderRadius:"50%",transition:`all ${g}`},[`${n}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${n}-checked`]:{[S]:{borderColor:o,backgroundColor:x,"&::after":{transform:`scale(${e.calc(e.dotSize).div(t).equal()})`,opacity:1,transition:`all ${i} ${C}`}}},[`${n}-disabled`]:{cursor:"not-allowed",[S]:{backgroundColor:y,borderColor:R,cursor:"not-allowed","&::after":{backgroundColor:w}},[`${n}-input`]:{cursor:"not-allowed"},[`${n}-disabled + span`]:{color:B,cursor:"not-allowed"},[`&${n}-checked`]:{[S]:{"&::after":{transform:`scale(${b(E).div(t).equal()})`}}}},[`span${n} + *`]:{paddingInlineStart:v,paddingInlineEnd:v}})}},$e=e=>{const{buttonColor:n,controlHeight:r,componentCls:o,lineWidth:t,lineType:i,colorBorder:g,motionDurationSlow:C,motionDurationMid:l,buttonPaddingInline:R,fontSize:h,buttonBg:y,fontSizeLG:B,controlHeightLG:v,controlHeightSM:w,paddingXS:m,borderRadius:d,borderRadiusSM:x,borderRadiusLG:b,buttonCheckedBg:S,buttonSolidCheckedColor:k,colorTextDisabled:E,colorBgContainerDisabled:s,buttonCheckedBgDisabled:O,buttonCheckedColorDisabled:p,colorPrimary:c,colorPrimaryHover:z,colorPrimaryActive:u,buttonSolidCheckedBg:I,buttonSolidCheckedHoverBg:P,buttonSolidCheckedActiveBg:_,calc:$}=e;return{[`${o}-button-wrapper`]:{position:"relative",display:"inline-block",height:r,margin:0,paddingInline:R,paddingBlock:0,color:n,fontSize:h,lineHeight:j($(r).sub($(t).mul(2)).equal()),background:y,border:`${j(t)} ${i} ${g}`,borderBlockStartWidth:$(t).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:t,cursor:"pointer",transition:[`color ${l}`,`background ${l}`,`box-shadow ${l}`].join(","),a:{color:n},[`> ${o}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:$(t).mul(-1).equal(),insetInlineStart:$(t).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:t,paddingInline:0,backgroundColor:g,transition:`background-color ${C}`,content:'""'}},"&:first-child":{borderInlineStart:`${j(t)} ${i} ${g}`,borderStartStartRadius:d,borderEndStartRadius:d},"&:last-child":{borderStartEndRadius:d,borderEndEndRadius:d},"&:first-child:last-child":{borderRadius:d},[`${o}-group-large &`]:{height:v,fontSize:B,lineHeight:j($(v).sub($(t).mul(2)).equal()),"&:first-child":{borderStartStartRadius:b,borderEndStartRadius:b},"&:last-child":{borderStartEndRadius:b,borderEndEndRadius:b}},[`${o}-group-small &`]:{height:w,paddingInline:$(m).sub(t).equal(),paddingBlock:0,lineHeight:j($(w).sub($(t).mul(2)).equal()),"&:first-child":{borderStartStartRadius:x,borderEndStartRadius:x},"&:last-child":{borderStartEndRadius:x,borderEndEndRadius:x}},"&:hover":{position:"relative",color:c},"&:has(:focus-visible)":Object.assign({},J(e)),[`${o}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${o}-button-wrapper-disabled)`]:{zIndex:1,color:c,background:S,borderColor:c,"&::before":{backgroundColor:c},"&:first-child":{borderColor:c},"&:hover":{color:z,borderColor:z,"&::before":{backgroundColor:z}},"&:active":{color:u,borderColor:u,"&::before":{backgroundColor:u}}},[`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]:{color:k,background:I,borderColor:I,"&:hover":{color:k,background:P,borderColor:P},"&:active":{color:k,background:_,borderColor:_}},"&-disabled":{color:E,backgroundColor:s,borderColor:g,cursor:"not-allowed","&:first-child, &:hover":{color:E,backgroundColor:s,borderColor:g}},[`&-disabled${o}-button-wrapper-checked`]:{color:p,backgroundColor:O,borderColor:g,boxShadow:"none"},"&-block":{flex:1,textAlign:"center"}}}},Re=e=>{const{wireframe:n,padding:r,marginXS:o,lineWidth:t,fontSizeLG:i,colorText:g,colorBgContainer:C,colorTextDisabled:l,controlItemBgActiveDisabled:R,colorTextLightSolid:h,colorPrimary:y,colorPrimaryHover:B,colorPrimaryActive:v,colorWhite:w}=e,m=4,d=i,x=n?d-m*2:d-(m+t)*2;return{radioSize:d,dotSize:x,dotColorDisabled:l,buttonSolidCheckedColor:h,buttonSolidCheckedBg:y,buttonSolidCheckedHoverBg:B,buttonSolidCheckedActiveBg:v,buttonBg:C,buttonCheckedBg:C,buttonColor:g,buttonCheckedBgDisabled:R,buttonCheckedColorDisabled:l,buttonPaddingInline:r-t,wrapperMarginInlineEnd:o,radioColor:n?y:w,radioBgColor:n?C:y}},Y=le("Radio",e=>{const{controlOutline:n,controlOutlineWidth:r}=e,o=`0 0 0 ${j(r)} ${n}`,i=de(e,{radioFocusShadow:o,radioButtonFocusShadow:o});return[ye(i),xe(i),$e(i)]},Re,{unitless:{radioSize:!0,dotSize:!0}});var we=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]]);return r};const Be=(e,n)=>{var r,o;const t=a.useContext(Q),i=a.useContext(U),{getPrefixCls:g,direction:C,radio:l}=a.useContext(A),R=a.useRef(null),h=se(n,R),{isFormItemInput:y}=a.useContext(ce),B=T=>{var N,D;(N=e.onChange)===null||N===void 0||N.call(e,T),(D=t==null?void 0:t.onChange)===null||D===void 0||D.call(t,T)},{prefixCls:v,className:w,rootClassName:m,children:d,style:x,title:b}=e,S=we(e,["prefixCls","className","rootClassName","children","style","title"]),k=g("radio",v),E=((t==null?void 0:t.optionType)||i)==="button",s=E?`${k}-button`:k,O=K(k),[p,c,z]=Y(k,O),u=Object.assign({},S),I=a.useContext(ue);t&&(u.name=t.name,u.onChange=B,u.checked=e.value===t.value,u.disabled=(r=u.disabled)!==null&&r!==void 0?r:t.disabled),u.disabled=(o=u.disabled)!==null&&o!==void 0?o:I;const P=M(`${s}-wrapper`,{[`${s}-wrapper-checked`]:u.checked,[`${s}-wrapper-disabled`]:u.disabled,[`${s}-wrapper-rtl`]:C==="rtl",[`${s}-wrapper-in-form-item`]:y,[`${s}-wrapper-block`]:!!(t!=null&&t.block)},l==null?void 0:l.className,w,m,c,z,O),[_,$]=ve(u.onClick);return p(a.createElement(be,{component:"Radio",disabled:u.disabled},a.createElement("label",{className:P,style:Object.assign(Object.assign({},l==null?void 0:l.style),x),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,title:b,onClick:_},a.createElement(ke,Object.assign({},u,{className:M(u.className,{[fe]:!E}),type:"radio",prefixCls:s,ref:h,onClick:$})),d!==void 0?a.createElement("span",null,d):null)))},L=a.forwardRef(Be),Ee=a.forwardRef((e,n)=>{const{getPrefixCls:r,direction:o}=a.useContext(A),t=pe(),{prefixCls:i,className:g,rootClassName:C,options:l,buttonStyle:R="outline",disabled:h,children:y,size:B,style:v,id:w,optionType:m,name:d=t,defaultValue:x,value:b,block:S=!1,onChange:k,onMouseEnter:E,onMouseLeave:s,onFocus:O,onBlur:p}=e,[c,z]=Z(x,{value:b}),u=a.useCallback(f=>{const te=c,V=f.target.value;"value"in e||z(V),V!==te&&(k==null||k(f))},[c,z,k]),I=r("radio",i),P=`${I}-group`,_=K(I),[$,T,N]=Y(I,_);let D=y;l&&l.length>0&&(D=l.map(f=>typeof f=="string"||typeof f=="number"?a.createElement(L,{key:f.toString(),prefixCls:I,disabled:h,value:f,checked:c===f},f):a.createElement(L,{key:`radio-group-value-options-${f.value}`,prefixCls:I,disabled:f.disabled||h,value:f.value,checked:c===f.value,title:f.title,style:f.style,id:f.id,required:f.required},f.label)));const H=ge(B),ee=M(P,`${P}-${R}`,{[`${P}-${H}`]:H,[`${P}-rtl`]:o==="rtl",[`${P}-block`]:S},g,C,T,N,_),oe=a.useMemo(()=>({onChange:u,value:c,disabled:h,name:d,optionType:m,block:S}),[u,c,h,d,m,S]);return $(a.createElement("div",Object.assign({},Ce(e,{aria:!0,data:!0}),{className:ee,style:v,onMouseEnter:E,onMouseLeave:s,onFocus:O,onBlur:p,id:w,ref:n}),a.createElement(he,{value:oe},D)))}),Ie=a.memo(Ee);var Pe=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]]);return r};const Oe=(e,n)=>{const{getPrefixCls:r}=a.useContext(A),{prefixCls:o}=e,t=Pe(e,["prefixCls"]),i=r("radio",o);return a.createElement(me,{value:"button"},a.createElement(L,Object.assign({prefixCls:i},t,{type:"radio",ref:n})))},ze=a.forwardRef(Oe),G=L;G.Button=ze;G.Group=Ie;G.__ANT_RADIO=!0;export{G as R};
