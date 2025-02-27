import{T as x,Q as J,c as B,Z as T,a5 as U,a0 as F,_ as z,e as ae,a6 as te,t as Y,n as le,ai as oe,aj as ie,W as re,a2 as se,r as O,C as ce,h as de,m as ue,k as E,ak as fe,i as me,ac as he,al as pe,l as ge,af as ye,am as be,an as Q,ao as Ce,o as Z,j,D as xe}from"./index-29UGgA2u.js";var ee=x.forwardRef(function(n,e){var a=n.prefixCls,t=n.forceRender,r=n.className,m=n.style,s=n.children,i=n.isActive,d=n.role,p=n.classNames,v=n.styles,u=x.useState(i||t),g=J(u,2),l=g[0],c=g[1];return x.useEffect(function(){(t||i)&&c(!0)},[t,i]),l?x.createElement("div",{ref:e,className:B("".concat(a,"-content"),T(T({},"".concat(a,"-content-active"),i),"".concat(a,"-content-inactive"),!i),r),style:m,role:d},x.createElement("div",{className:B("".concat(a,"-content-box"),p==null?void 0:p.body),style:v==null?void 0:v.body},s)):null});ee.displayName="PanelContent";var ve=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],ne=x.forwardRef(function(n,e){var a=n.showArrow,t=a===void 0?!0:a,r=n.headerClass,m=n.isActive,s=n.onItemClick,i=n.forceRender,d=n.className,p=n.classNames,v=p===void 0?{}:p,u=n.styles,g=u===void 0?{}:u,l=n.prefixCls,c=n.collapsible,y=n.accordion,b=n.panelKey,h=n.extra,o=n.header,$=n.expandIcon,f=n.openMotion,N=n.destroyInactivePanel,I=n.children,S=U(n,ve),C=c==="disabled",P=h!=null&&typeof h!="boolean",A=T(T(T({onClick:function(){s==null||s(b)},onKeyDown:function(R){(R.key==="Enter"||R.keyCode===F.ENTER||R.which===F.ENTER)&&(s==null||s(b))},role:y?"tab":"button"},"aria-expanded",m),"aria-disabled",C),"tabIndex",C?-1:0),M=typeof $=="function"?$(n):x.createElement("i",{className:"arrow"}),H=M&&x.createElement("div",z({className:"".concat(l,"-expand-icon")},["header","icon"].includes(c)?A:{}),M),w=B("".concat(l,"-item"),T(T({},"".concat(l,"-item-active"),m),"".concat(l,"-item-disabled"),C),d),k=B(r,"".concat(l,"-header"),T({},"".concat(l,"-collapsible-").concat(c),!!c),v.header),K=ae({className:k,style:g.header},["header","icon"].includes(c)?{}:A);return x.createElement("div",z({},S,{ref:e,className:w}),x.createElement("div",K,t&&H,x.createElement("span",z({className:"".concat(l,"-header-text")},c==="header"?A:{}),o),P&&x.createElement("div",{className:"".concat(l,"-extra")},h)),x.createElement(te,z({visible:m,leavedClassName:"".concat(l,"-content-hidden")},f,{forceRender:i,removeOnLeave:N}),function(_,R){var D=_.className,G=_.style;return x.createElement(ee,{ref:R,prefixCls:l,className:D,classNames:v,style:G,styles:g,isActive:m,forceRender:i,role:y?"tabpanel":void 0},I)}))}),$e=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],Ie=function(e,a){var t=a.prefixCls,r=a.accordion,m=a.collapsible,s=a.destroyInactivePanel,i=a.onItemClick,d=a.activeKey,p=a.openMotion,v=a.expandIcon;return e.map(function(u,g){var l=u.children,c=u.label,y=u.key,b=u.collapsible,h=u.onItemClick,o=u.destroyInactivePanel,$=U(u,$e),f=String(y??g),N=b??m,I=o??s,S=function(A){N!=="disabled"&&(i(A),h==null||h(A))},C=!1;return r?C=d[0]===f:C=d.indexOf(f)>-1,x.createElement(ne,z({},$,{prefixCls:t,key:f,panelKey:f,isActive:C,accordion:r,openMotion:p,expandIcon:v,header:c,collapsible:N,onItemClick:S,destroyInactivePanel:I}),l)})},Pe=function(e,a,t){if(!e)return null;var r=t.prefixCls,m=t.accordion,s=t.collapsible,i=t.destroyInactivePanel,d=t.onItemClick,p=t.activeKey,v=t.openMotion,u=t.expandIcon,g=e.key||String(a),l=e.props,c=l.header,y=l.headerClass,b=l.destroyInactivePanel,h=l.collapsible,o=l.onItemClick,$=!1;m?$=p[0]===g:$=p.indexOf(g)>-1;var f=h??s,N=function(C){f!=="disabled"&&(d(C),o==null||o(C))},I={key:g,panelKey:g,header:c,headerClass:y,isActive:$,prefixCls:r,destroyInactivePanel:b??i,openMotion:v,accordion:m,children:e.props.children,onItemClick:N,expandIcon:u,collapsible:f};return typeof e.type=="string"?e:(Object.keys(I).forEach(function(S){typeof I[S]>"u"&&delete I[S]}),x.cloneElement(e,I))};function Ne(n,e,a){return Array.isArray(n)?Ie(n,a):Y(e).map(function(t,r){return Pe(t,r,a)})}function Se(n){var e=n;if(!Array.isArray(e)){var a=re(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var we=x.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,r=n.destroyInactivePanel,m=r===void 0?!1:r,s=n.style,i=n.accordion,d=n.className,p=n.children,v=n.collapsible,u=n.openMotion,g=n.expandIcon,l=n.activeKey,c=n.defaultActiveKey,y=n.onChange,b=n.items,h=B(t,d),o=le([],{value:l,onChange:function(P){return y==null?void 0:y(P)},defaultValue:c,postState:Se}),$=J(o,2),f=$[0],N=$[1],I=function(P){return N(function(){if(i)return f[0]===P?[]:[P];var A=f.indexOf(P),M=A>-1;return M?f.filter(function(H){return H!==P}):[].concat(se(f),[P])})};ie(!p,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var S=Ne(b,p,{prefixCls:t,accordion:i,openMotion:u,expandIcon:g,collapsible:v,destroyInactivePanel:m,onItemClick:I,activeKey:f});return x.createElement("div",z({ref:e,className:h,style:s,role:i?"tablist":void 0},oe(n,{aria:!0,data:!0})),S)});const V=Object.assign(we,{Panel:ne});V.Panel;const Ae=O.forwardRef((n,e)=>{const{getPrefixCls:a}=O.useContext(ce),{prefixCls:t,className:r,showArrow:m=!0}=n,s=a("collapse",t),i=B({[`${s}-no-arrow`]:!m},r);return O.createElement(V.Panel,Object.assign({ref:e},n,{prefixCls:s,className:i}))}),ke=n=>{const{componentCls:e,contentBg:a,padding:t,headerBg:r,headerPadding:m,collapseHeaderPaddingSM:s,collapseHeaderPaddingLG:i,collapsePanelBorderRadius:d,lineWidth:p,lineType:v,colorBorder:u,colorText:g,colorTextHeading:l,colorTextDisabled:c,fontSizeLG:y,lineHeight:b,lineHeightLG:h,marginSM:o,paddingSM:$,paddingLG:f,paddingXS:N,motionDurationSlow:I,fontSizeIcon:S,contentPadding:C,fontHeight:P,fontHeightLG:A}=n,M=`${E(p)} ${v} ${u}`;return{[e]:Object.assign(Object.assign({},me(n)),{backgroundColor:r,border:M,borderRadius:d,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:M,"&:first-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`${E(d)} ${E(d)} 0 0`}},"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${E(d)} ${E(d)}`}},[`> ${e}-header`]:Object.assign(Object.assign({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:m,color:l,lineHeight:b,cursor:"pointer",transition:`all ${I}, visibility 0s`},he(n)),{[`> ${e}-header-text`]:{flex:"auto"},[`${e}-expand-icon`]:{height:P,display:"flex",alignItems:"center",paddingInlineEnd:o},[`${e}-arrow`]:Object.assign(Object.assign({},pe()),{fontSize:S,transition:`transform ${I}`,svg:{transition:`transform ${I}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}}),[`${e}-collapsible-header`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-collapsible-icon`]:{cursor:"unset",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:g,backgroundColor:a,borderTop:M,[`& > ${e}-content-box`]:{padding:C},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:s,paddingInlineStart:N,[`> ${e}-expand-icon`]:{marginInlineStart:n.calc($).sub(N).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:$}}},"&-large":{[`> ${e}-item`]:{fontSize:y,lineHeight:h,[`> ${e}-header`]:{padding:i,paddingInlineStart:t,[`> ${e}-expand-icon`]:{height:A,marginInlineStart:n.calc(f).sub(t).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:f}}},[`${e}-item:last-child`]:{borderBottom:0,[`> ${e}-content`]:{borderRadius:`0 0 ${E(d)} ${E(d)}`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:c,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:o}}}}})}},Ee=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},je=n=>{const{componentCls:e,headerBg:a,paddingXXS:t,colorBorder:r}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${r}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},Me=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},Re=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),Ke=de("Collapse",n=>{const e=ue(n,{collapseHeaderPaddingSM:`${E(n.paddingXS)} ${E(n.paddingSM)}`,collapseHeaderPaddingLG:`${E(n.padding)} ${E(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[ke(e),je(e),Me(e),Ee(e),fe(e)]},Re),Oe=O.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t,expandIcon:r,className:m,style:s}=ge("collapse"),{prefixCls:i,className:d,rootClassName:p,style:v,bordered:u=!0,ghost:g,size:l,expandIconPosition:c="start",children:y,expandIcon:b}=n,h=ye(w=>{var k;return(k=l??w)!==null&&k!==void 0?k:"middle"}),o=a("collapse",i),$=a(),[f,N,I]=Ke(o),S=O.useMemo(()=>c==="left"?"start":c==="right"?"end":c,[c]),C=b??r,P=O.useCallback(function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const k=typeof C=="function"?C(w):O.createElement(be,{rotate:w.isActive?t==="rtl"?-90:90:void 0,"aria-label":w.isActive?"expanded":"collapsed"});return Q(k,()=>{var K;return{className:B((K=k==null?void 0:k.props)===null||K===void 0?void 0:K.className,`${o}-arrow`)}})},[C,o]),A=B(`${o}-icon-position-${S}`,{[`${o}-borderless`]:!u,[`${o}-rtl`]:t==="rtl",[`${o}-ghost`]:!!g,[`${o}-${h}`]:h!=="middle"},m,d,p,N,I),M=Object.assign(Object.assign({},Ce($)),{motionAppear:!1,leavedClassName:`${o}-content-hidden`}),H=O.useMemo(()=>y?Y(y).map((w,k)=>{var K,_;const R=w.props;if(R!=null&&R.disabled){const D=(K=w.key)!==null&&K!==void 0?K:String(k),G=Object.assign(Object.assign({},Z(w.props,["disabled"])),{key:D,collapsible:(_=R.collapsible)!==null&&_!==void 0?_:"disabled"});return Q(w,G)}return w}):null,[y]);return f(O.createElement(V,Object.assign({ref:e,openMotion:M},Z(n,["rootClassName"]),{expandIcon:P,prefixCls:o,className:A,style:Object.assign(Object.assign({},s),v)}),H))}),q=Object.assign(Oe,{Panel:Ae}),L=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,_e=[{key:"1",label:"This is panel header 1",children:j.jsx("p",{children:L})},{key:"2",label:"This is panel header 2",children:j.jsx("p",{children:L})},{key:"3",label:"This is panel header 3",children:j.jsx("p",{children:L})}],Te=()=>j.jsx(q,{accordion:!0,items:_e}),W=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,Be=[{key:"1",label:"This is panel header 1",children:j.jsx("p",{children:W})},{key:"2",label:"This is panel header 2",children:j.jsx("p",{children:W})},{key:"3",label:"This is panel header 3",children:j.jsx("p",{children:W})}],ze=()=>{const n=e=>{console.log(e)};return j.jsx(q,{items:Be,defaultActiveKey:["1"],onChange:n})},X=j.jsx("p",{style:{paddingInlineStart:24},children:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."}),He=[{key:"1",label:"This is panel header 1",children:X},{key:"2",label:"This is panel header 2",children:X},{key:"3",label:"This is panel header 3",children:X}],De=()=>j.jsx(q,{items:He,bordered:!1,defaultActiveKey:["1"]});function Le(){return j.jsx(xe,{title:"Collapse",items:{Accordion:Te,Basic:ze,Borderless:De}})}export{Le as default};
