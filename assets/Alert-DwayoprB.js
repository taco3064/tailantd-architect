import{g as ee,r as ne,u as B,a as i,b as oe,c as w,p as te,C as re,d as se,e as ie,R as ce,f as ae,h as le,i as de,j as pe,_ as T,k as ue,l as me,m as ge,n as fe,o as ye,q as s,D as be}from"./index-DnMWEFWx.js";const j=(e,n,o,t,r)=>({background:e,border:`${B(t.lineWidth)} ${t.lineType} ${n}`,[`${r}-icon`]:{color:o}}),xe=e=>{const{componentCls:n,motionDurationSlow:o,marginXS:t,marginSM:r,fontSize:c,fontSizeLG:p,lineHeight:u,borderRadiusLG:g,motionEaseInOutCirc:m,withDescriptionIconSize:y,colorText:b,colorTextHeading:h,withDescriptionPadding:$,defaultPadding:a}=e;return{[n]:Object.assign(Object.assign({},ne(e)),{position:"relative",display:"flex",alignItems:"center",padding:a,wordWrap:"break-word",borderRadius:g,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:c,lineHeight:u},"&-message":{color:h},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${o} ${m}, opacity ${o} ${m},
        padding-top ${o} ${m}, padding-bottom ${o} ${m},
        margin-bottom ${o} ${m}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",padding:$,[`${n}-icon`]:{marginInlineEnd:r,fontSize:y,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:t,color:h,fontSize:p},[`${n}-description`]:{display:"block",color:b}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Ie=e=>{const{componentCls:n,colorSuccess:o,colorSuccessBorder:t,colorSuccessBg:r,colorWarning:c,colorWarningBorder:p,colorWarningBg:u,colorError:g,colorErrorBorder:m,colorErrorBg:y,colorInfo:b,colorInfoBorder:h,colorInfoBg:$}=e;return{[n]:{"&-success":j(r,t,o,e,n),"&-info":j($,h,b,e,n),"&-warning":j(u,p,c,e,n),"&-error":Object.assign(Object.assign({},j(y,m,g,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},he=e=>{const{componentCls:n,iconCls:o,motionDurationMid:t,marginXS:r,fontSizeIcon:c,colorIcon:p,colorIconHover:u}=e;return{[n]:{"&-action":{marginInlineStart:r},[`${n}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:c,lineHeight:B(c),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${o}-close`]:{color:p,transition:`color ${t}`,"&:hover":{color:u}}},"&-close-text":{color:p,transition:`color ${t}`,"&:hover":{color:u}}}}},$e=e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}),Ce=ee("Alert",e=>[xe(e),Ie(e),he(e)],$e);var R=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const Se={success:ae,info:le,error:de,warning:pe},je=e=>{const{icon:n,prefixCls:o,type:t}=e,r=Se[t]||null;return n?ie(n,i.createElement("span",{className:`${o}-icon`},n),()=>({className:w(`${o}-icon`,n.props.className)})):i.createElement(r,{className:`${o}-icon`})},we=e=>{const{isClosable:n,prefixCls:o,closeIcon:t,handleClose:r,ariaProps:c}=e,p=t===!0||t===void 0?i.createElement(ce,null):t;return n?i.createElement("button",Object.assign({type:"button",onClick:r,className:`${o}-close-icon`,tabIndex:0},c),p):null},H=i.forwardRef((e,n)=>{const{description:o,prefixCls:t,message:r,banner:c,className:p,rootClassName:u,style:g,onMouseEnter:m,onMouseLeave:y,onClick:b,afterClose:h,showIcon:$,closable:a,closeText:S,closeIcon:x,action:E,id:M}=e,z=R(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[v,A]=i.useState(!1),D=i.useRef(null);i.useImperativeHandle(n,()=>({nativeElement:D.current}));const{getPrefixCls:W,direction:_,closable:I,closeIcon:N,className:k,style:L}=oe("alert"),l=W("alert",t),[F,G,V]=Ce(l),X=f=>{var C;A(!0),(C=e.onClose)===null||C===void 0||C.call(e,f)},O=i.useMemo(()=>e.type!==void 0?e.type:c?"warning":"info",[e.type,c]),q=i.useMemo(()=>typeof a=="object"&&a.closeIcon||S?!0:typeof a=="boolean"?a:x!==!1&&x!==null&&x!==void 0?!0:!!I,[S,x,a,I]),P=c&&$===void 0?!0:$,J=w(l,`${l}-${O}`,{[`${l}-with-description`]:!!o,[`${l}-no-icon`]:!P,[`${l}-banner`]:!!c,[`${l}-rtl`]:_==="rtl"},k,p,u,V,G),K=te(z,{aria:!0,data:!0}),Q=i.useMemo(()=>typeof a=="object"&&a.closeIcon?a.closeIcon:S||(x!==void 0?x:typeof I=="object"&&I.closeIcon?I.closeIcon:N),[x,a,S,N]),U=i.useMemo(()=>{const f=a??I;return typeof f=="object"?R(f,["closeIcon"]):{}},[a,I]);return F(i.createElement(re,{visible:!v,motionName:`${l}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:f=>({maxHeight:f.offsetHeight}),onLeaveEnd:h},(f,C)=>{let{className:Y,style:Z}=f;return i.createElement("div",Object.assign({id:M,ref:se(D,C),"data-show":!v,className:w(J,Y),style:Object.assign(Object.assign(Object.assign({},L),g),Z),onMouseEnter:m,onMouseLeave:y,onClick:b,role:"alert"},K),P?i.createElement(je,{description:o,icon:e.icon,prefixCls:l,type:O}):null,i.createElement("div",{className:`${l}-content`},r?i.createElement("div",{className:`${l}-message`},r):null,o?i.createElement("div",{className:`${l}-description`},o):null),E?i.createElement("div",{className:`${l}-action`},E):null,i.createElement(we,{isClosable:q,prefixCls:l,closeIcon:Q,handleClose:X,ariaProps:U}))}))});function Ee(e,n,o){return n=T(n),ue(e,me()?Reflect.construct(n,o||[],T(e).constructor):n.apply(e,o))}let ve=function(e){function n(){var o;return ye(this,n),o=Ee(this,n,arguments),o.state={error:void 0,info:{componentStack:""}},o}return ge(n,e),fe(n,[{key:"componentDidCatch",value:function(t,r){this.setState({error:t,info:r})}},{key:"render",value:function(){const{message:t,description:r,id:c,children:p}=this.props,{error:u,info:g}=this.state,m=(g==null?void 0:g.componentStack)||null,y=typeof t>"u"?(u||"").toString():t,b=typeof r>"u"?m:r;return u?i.createElement(H,{id:c,type:"error",message:y,description:i.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},b)}):p}}])}(i.Component);const d=H;d.ErrorBoundary=ve;const De=()=>s.jsxs(s.Fragment,{children:[s.jsx(d,{message:"Success Text",description:"Success Description Success Description Success Description",type:"success"}),s.jsx("br",{}),s.jsx(d,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),s.jsx("br",{}),s.jsx(d,{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),s.jsx("br",{}),s.jsx(d,{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"})]}),Ne=()=>s.jsxs(s.Fragment,{children:[s.jsx(d,{message:"Success Tips",type:"success",showIcon:!0}),s.jsx("br",{}),s.jsx(d,{message:"Informational Notes",type:"info",showIcon:!0}),s.jsx("br",{}),s.jsx(d,{message:"Warning",type:"warning",showIcon:!0,closable:!0}),s.jsx("br",{}),s.jsx(d,{message:"Error",type:"error",showIcon:!0}),s.jsx("br",{}),s.jsx(d,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),s.jsx("br",{}),s.jsx(d,{message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),s.jsx("br",{}),s.jsx(d,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0,closable:!0}),s.jsx("br",{}),s.jsx(d,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]});function Pe(){return s.jsx(be,{title:"Alert",items:{Description:De,Icon:Ne}})}export{Pe as default};
