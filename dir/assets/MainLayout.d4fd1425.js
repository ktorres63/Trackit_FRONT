import{e as be,h as xe,a as ge,Q as V,R as ae}from"./QBtn.0ad5278d.js";import{Q as Xe,a as je,b as Ue,c as Ye}from"./QLayout.c943ac2e.js";import{c as Ke,u as Je,a as Ge,b as Ze,d as et,e as tt,f as H,g as at,Q as rt,h as ot,i as re,j as $}from"./format.89b542e2.js";import{u as ut,a as nt}from"./use-dark.cd4d1793.js";import{k as it,J as P,A as lt,K as st,m as N,L as oe,t as we,s as ue,p as se,n as ne,q as dt,g as Be,C as Te,D,E as Le,r as M,e as m,F as w,B as Ce,z as ct,v as ft,f as j,h as A,i as Me,H as vt,M as mt,u as ht,N as pt,o as R,c as X,w as y,a as p,O as z}from"./index.5ebe2dc0.js";import"./scroll.7716672b.js";const de={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},yt=Object.keys(de);de.all=!0;function ke(t){const o={};for(const i of yt)t[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?de:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const bt=["INPUT","TEXTAREA"];function qe(t,o){return o.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof o.handler=="function"&&bt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(o.uid)===-1)}function ie(t,o,i){const d=se(t);let e,r=d.left-o.event.x,n=d.top-o.event.y,f=Math.abs(r),v=Math.abs(n);const s=o.direction;s.horizontal===!0&&s.vertical!==!0?e=r<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=n<0?"up":"down":s.up===!0&&n<0?(e="up",f>v&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.down===!0&&n>0?(e="down",f>v&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.left===!0&&r<0?(e="left",f<v&&(s.up===!0&&n<0?e="up":s.down===!0&&n>0&&(e="down"))):s.right===!0&&r>0&&(e="right",f<v&&(s.up===!0&&n<0?e="up":s.down===!0&&n>0&&(e="down")));let u=!1;if(e===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};e=o.event.lastDir,u=!0,e==="left"||e==="right"?(d.left-=r,f=0,r=0):(d.top-=n,v=0,n=0)}return{synthetic:u,payload:{evt:t,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:d,direction:e,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:f,y:v},offset:{x:r,y:n},delta:{x:d.left-o.event.lastX,y:d.top-o.event.lastY}}}}let gt=0;var le=it({name:"touch-pan",beforeMount(t,{value:o,modifiers:i}){if(i.mouse!==!0&&P.has.touch!==!0)return;function d(r,n){i.mouse===!0&&n===!0?dt(r):(i.stop===!0&&ue(r),i.prevent===!0&&we(r))}const e={uid:"qvtp_"+gt++,handler:o,modifiers:i,direction:ke(i),noop:lt,mouseStart(r){qe(r,e)&&st(r)&&(N(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(qe(r,e)){const n=r.target;N(e,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,n){if(P.is.firefox===!0&&oe(t,!0),e.lastEvt=r,n===!0||i.stop===!0){if(e.direction.all!==!0&&(n!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&we(s),r.cancelBubble===!0&&ue(s),Object.assign(s,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:s}}ue(r)}const{left:f,top:v}=se(r);e.event={x:f,y:v,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:v}},move(r){if(e.event===void 0)return;const n=se(r),f=n.left-e.event.x,v=n.top-e.event.y;if(f===0&&v===0)return;e.lastEvt=r;const s=e.event.mouse===!0,u=()=>{d(r,s);let g;i.preserveCursor!==!0&&i.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ke(),e.styleCleanup=c=>{if(e.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),s===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{B(),c()},50):B()}else c!==void 0&&c()}};if(e.event.detected===!0){e.event.isFirst!==!0&&d(r,e.event.mouse);const{payload:g,synthetic:c}=ie(r,e,!1);g!==void 0&&(e.handler(g)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&u(),e.event.lastX=g.position.left,e.event.lastY=g.position.top,e.event.lastDir=c===!0?void 0:g.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){u(),e.event.detected=!0,e.move(r);return}const _=Math.abs(f),b=Math.abs(v);_!==b&&(e.direction.horizontal===!0&&_>b||e.direction.vertical===!0&&_<b||e.direction.up===!0&&_<b&&v<0||e.direction.down===!0&&_<b&&v>0||e.direction.left===!0&&_>b&&f<0||e.direction.right===!0&&_>b&&f>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,n){if(e.event!==void 0){if(ne(e,"temp"),P.is.firefox===!0&&oe(t,!1),n===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ie(r===void 0?e.lastEvt:r,e).payload);const{payload:f}=ie(r===void 0?e.lastEvt:r,e,!0),v=()=>{e.handler(f)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,i.mouse===!0){const r=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";N(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}P.has.touch===!0&&N(e,"main",[[t,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,o){const i=t.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=ke(o.modifiers))},beforeUnmount(t){const o=t.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ne(o,"main"),ne(o,"temp"),P.is.firefox===!0&&oe(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchpan)}});const _e=150;var wt=Be({name:"QDrawer",inheritAttrs:!1,props:{...Je,...ut,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ge,"onLayout","miniState"],setup(t,{slots:o,emit:i,attrs:d}){const e=Me(),{proxy:{$q:r}}=e,n=nt(t,r),{preventBodyScroll:f}=at(),{registerTimeout:v,removeTimeout:s}=Ze(),u=Te(Le,D);if(u===D)return console.error("QDrawer needs to be child of QLayout"),D;let _,b=null,g;const c=M(t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint),B=m(()=>t.mini===!0&&c.value!==!0),k=m(()=>B.value===!0?t.miniWidth:t.width),h=M(t.showIfAbove===!0&&c.value===!1?!0:t.modelValue===!0),ce=m(()=>t.persistent!==!0&&(c.value===!0||$e.value===!0));function fe(a,l){if(Se(),a!==!1&&u.animate(),q(0),c.value===!0){const C=u.instances[W.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),T(1),u.isContainer.value!==!0&&f(!0)}else T(0),a!==!1&&Z(!1);v(()=>{a!==!1&&Z(!0),l!==!0&&i("show",a)},_e)}function ve(a,l){Oe(),a!==!1&&u.animate(),T(0),q(S.value*k.value),ee(),l!==!0?v(()=>{i("hide",a)},_e):s()}const{show:U,hide:E}=et({showing:h,hideOnRouteChange:ce,handleShow:fe,handleHide:ve}),{addToHistory:Se,removeFromHistory:Oe}=tt(h,E,ce),F={belowBreakpoint:c,hide:E},x=m(()=>t.side==="right"),S=m(()=>(r.lang.rtl===!0?-1:1)*(x.value===!0?1:-1)),me=M(0),O=M(!1),Y=M(!1),he=M(k.value*S.value),W=m(()=>x.value===!0?"left":"right"),K=m(()=>h.value===!0&&c.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:k.value:0),J=m(()=>t.overlay===!0||t.miniToOverlay===!0||u.view.value.indexOf(x.value?"R":"L")!==-1||r.platform.is.ios===!0&&u.isContainer.value===!0),Q=m(()=>t.overlay===!1&&h.value===!0&&c.value===!1),$e=m(()=>t.overlay===!0&&h.value===!0&&c.value===!1),De=m(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&O.value===!1?" hidden":"")),Ee=m(()=>({backgroundColor:`rgba(0,0,0,${me.value*.4})`})),pe=m(()=>x.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),Qe=m(()=>x.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Pe=m(()=>{const a={};return u.header.space===!0&&pe.value===!1&&(J.value===!0?a.top=`${u.header.offset}px`:u.header.space===!0&&(a.top=`${u.header.size}px`)),u.footer.space===!0&&Qe.value===!1&&(J.value===!0?a.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(a.bottom=`${u.footer.size}px`)),a}),ze=m(()=>{const a={width:`${k.value}px`,transform:`translateX(${he.value}px)`};return c.value===!0?a:Object.assign(a,Pe.value)}),Ae=m(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Fe=m(()=>`q-drawer q-drawer--${t.side}`+(Y.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(O.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(J.value===!0||Q.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(pe.value===!0?" q-drawer--top-padding":""))),We=m(()=>{const a=r.lang.rtl===!0?t.side:W.value;return[[le,Ne,void 0,{[a]:!0,mouse:!0}]]}),Ie=m(()=>{const a=r.lang.rtl===!0?W.value:t.side;return[[le,ye,void 0,{[a]:!0,mouse:!0}]]}),Ve=m(()=>{const a=r.lang.rtl===!0?W.value:t.side;return[[le,ye,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function G(){Re(c,t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint)}w(c,a=>{a===!0?(_=h.value,h.value===!0&&E(!1)):t.overlay===!1&&t.behavior!=="mobile"&&_!==!1&&(h.value===!0?(q(0),T(0),ee()):U(!1))}),w(()=>t.side,(a,l)=>{u.instances[l]===F&&(u.instances[l]=void 0,u[l].space=!1,u[l].offset=0),u.instances[a]=F,u[a].size=k.value,u[a].space=Q.value,u[a].offset=K.value}),w(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&G()}),w(()=>t.behavior+t.breakpoint,G),w(u.isContainer,a=>{h.value===!0&&f(a!==!0),a===!0&&G()}),w(u.scrollbarWidth,()=>{q(h.value===!0?0:void 0)}),w(K,a=>{L("offset",a)}),w(Q,a=>{i("onLayout",a),L("space",a)}),w(x,()=>{q()}),w(k,a=>{q(),te(t.miniToOverlay,a)}),w(()=>t.miniToOverlay,a=>{te(a,k.value)}),w(()=>r.lang.rtl,()=>{q()}),w(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(He(),u.animate())}),w(B,a=>{i("miniState",a)});function q(a){a===void 0?Ce(()=>{a=h.value===!0?0:k.value,q(S.value*a)}):(u.isContainer.value===!0&&x.value===!0&&(c.value===!0||Math.abs(a)===k.value)&&(a+=S.value*u.scrollbarWidth.value),he.value=a)}function T(a){me.value=a}function Z(a){const l=a===!0?"remove":u.isContainer.value!==!0?"add":"";l!==""&&document.body.classList[l]("q-body--drawer-toggle")}function He(){b!==null&&clearTimeout(b),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),Y.value=!0,b=setTimeout(()=>{b=null,Y.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ne(a){if(h.value!==!1)return;const l=k.value,C=H(a.distance.x,0,l);if(a.isFinal===!0){C>=Math.min(75,l)===!0?U():(u.animate(),T(0),q(S.value*l)),O.value=!1;return}q((r.lang.rtl===!0?x.value!==!0:x.value)?Math.max(l-C,0):Math.min(0,C-l)),T(H(C/l,0,1)),a.isFirst===!0&&(O.value=!0)}function ye(a){if(h.value!==!0)return;const l=k.value,C=a.direction===t.side,I=(r.lang.rtl===!0?C!==!0:C)?H(a.distance.x,0,l):0;if(a.isFinal===!0){Math.abs(I)<Math.min(75,l)===!0?(u.animate(),T(1),q(0)):E(),O.value=!1;return}q(S.value*I),T(H(1-I/l,0,1)),a.isFirst===!0&&(O.value=!0)}function ee(){f(!1),Z(!0)}function L(a,l){u.update(t.side,a,l)}function Re(a,l){a.value!==l&&(a.value=l)}function te(a,l){L("size",a===!0?t.miniWidth:l)}return u.instances[t.side]=F,te(t.miniToOverlay,k.value),L("space",Q.value),L("offset",K.value),t.showIfAbove===!0&&t.modelValue!==!0&&h.value===!0&&t["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),ct(()=>{i("onLayout",Q.value),i("miniState",B.value),_=t.showIfAbove===!0;const a=()=>{(h.value===!0?fe:ve)(!1,!0)};if(u.totalWidth.value!==0){Ce(a);return}g=w(u.totalWidth,()=>{g(),g=void 0,h.value===!1&&t.showIfAbove===!0&&c.value===!1?U(!1):a()})}),ft(()=>{g!==void 0&&g(),b!==null&&(clearTimeout(b),b=null),h.value===!0&&ee(),u.instances[t.side]===F&&(u.instances[t.side]=void 0,L("size",0),L("offset",0),L("space",!1))}),()=>{const a=[];c.value===!0&&(t.noSwipeOpen===!1&&a.push(j(A("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),We.value)),a.push(be("div",{ref:"backdrop",class:De.value,style:Ee.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",t.noSwipeBackdrop!==!0&&h.value===!0,()=>Ve.value)));const l=B.value===!0&&o.mini!==void 0,C=[A("div",{...d,key:""+l,class:[Ae.value,d.class]},l===!0?o.mini():xe(o.default))];return t.elevated===!0&&h.value===!0&&C.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(be("aside",{ref:"content",class:Fe.value,style:ze.value},C,"contentclose",t.noSwipeClose!==!0&&c.value===!0,()=>Ie.value)),A("div",{class:"q-drawer-container"},a)}}}),Ct=Be({name:"QPageContainer",setup(t,{slots:o}){const{proxy:{$q:i}}=Me(),d=Te(Le,D);if(d===D)return console.error("QPageContainer needs to be child of QLayout"),D;vt(mt,!0);const e=m(()=>{const r={};return d.header.space===!0&&(r.paddingTop=`${d.header.size}px`),d.right.space===!0&&(r[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${d.right.size}px`),d.footer.space===!0&&(r.paddingBottom=`${d.footer.size}px`),d.left.space===!0&&(r[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${d.left.size}px`),r});return()=>A("div",{class:"q-page-container",style:e.value},xe(o.default))}});const Mt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(t){const o=ht(),i=M(!1);function d(){i.value=!i.value}function e(){o.push("/")}return(r,n)=>{const f=pt("router-view");return R(),X(Xe,{view:"hHh lpr fff"},{default:y(()=>[p(Ye,{elevated:"",class:"tw-h-16 tw-flex"},{default:y(()=>[p(je,null,{default:y(()=>[p(ge,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:d}),p(Ue,null,{default:y(()=>[p(V,{name:"route"}),n[1]||(n[1]=z(" Trackit "))]),_:1}),p(ge,{label:"Cerrar Sesion",color:"secondary",onClick:e})]),_:1})]),_:1}),p(wt,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=v=>i.value=v),"show-if-above":"",bordered:""},{default:y(()=>[p(rt,null,{default:y(()=>[p(ot,{header:""},{default:y(()=>n[2]||(n[2]=[z(" Opciones ")])),_:1}),j((R(),X(re,{to:"/dashboard/usuarios",clickable:""},{default:y(()=>[p($,{avatar:""},{default:y(()=>[p(V,{name:"people"})]),_:1}),p($,null,{default:y(()=>n[3]||(n[3]=[z("Usuarios")])),_:1})]),_:1})),[[ae]]),j((R(),X(re,{to:"/dashboard/paquetes",clickable:""},{default:y(()=>[p($,{avatar:""},{default:y(()=>[p(V,{name:"inventory_2"})]),_:1}),p($,null,{default:y(()=>n[4]||(n[4]=[z("Paquetes")])),_:1})]),_:1})),[[ae]]),j((R(),X(re,{to:"/dashboard/rutas",clickable:""},{default:y(()=>[p($,{avatar:""},{default:y(()=>[p(V,{name:"route"})]),_:1}),p($,null,{default:y(()=>n[5]||(n[5]=[z("Rutas")])),_:1})]),_:1})),[[ae]])]),_:1})]),_:1},8,["modelValue"]),p(Ct,null,{default:y(()=>[p(f)]),_:1})]),_:1})}}});export{Mt as default};
