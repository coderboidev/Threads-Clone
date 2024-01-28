import{r as a,l as A,o as ie,a6 as Y,p as x,j as N,h as ye,a7 as re,s as oe,n as Te,i as Oe,q as ze}from"./index-ejOMQ5mP.js";import{_ as Ae,T as fe,u as H}from"./TransitionGroupContext-prrqPGpl.js";import{u as de}from"./useForkRef-kwGwuOoY.js";let G=!0,te=!1,he;const Xe={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function We(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&Xe[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Ye(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function He(){this.visibilityState==="hidden"&&te&&(G=!0)}function Ge(e){e.addEventListener("keydown",Ye,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",He,!0)}function qe(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||We(t)}function Je(){const e=a.useCallback(n=>{n!=null&&Ge(n.ownerDocument)},[]),t=a.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function l(n){return qe(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:r,ref:e}}function Qe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){var r=function(i){return t&&a.isValidElement(i)?t(i):i},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Ze(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var l=Object.create(null),n=[];for(var i in e)i in t?n.length&&(l[i]=n,n=[]):n.push(i);var o,c={};for(var u in t){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function et(e,t){return se(e.children,function(r){return a.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function tt(e,t,r){var l=se(e.children),n=Ze(t,l);return Object.keys(n).forEach(function(i){var o=n[i];if(a.isValidElement(o)){var c=i in t,u=i in l,p=t[i],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:S(o,"exit",e),enter:S(o,"enter",e)}):!u&&c&&!d?n[i]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:S(o,"exit",e),enter:S(o,"enter",e)}))}}),n}var nt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},it={component:"div",childFactory:function(t){return t}},ae=function(e){Ae(t,e);function t(l,n){var i;i=e.call(this,l,n)||this;var o=i.handleExited.bind(Qe(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var o=i.children,c=i.handleExited,u=i.firstRender;return{children:u?et(n,c):tt(n,o,c),firstRender:!1}},r.handleExited=function(n,i){var o=se(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,i=n.component,o=n.childFactory,c=ie(n,["component","childFactory"]),u=this.state.contextValue,p=nt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,i===null?Y.createElement(fe.Provider,{value:u},p):Y.createElement(fe.Provider,{value:u},Y.createElement(i,c,p))},t}(Y.Component);ae.propTypes={};ae.defaultProps=it;const rt=ae;function ot(e){const{className:t,classes:r,pulsate:l=!1,rippleX:n,rippleY:i,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=x(t,r.ripple,r.rippleVisible,l&&r.ripplePulsate),C={width:o,height:o,top:-(o/2)+i,left:-(o/2)+n},h=x(r.child,d&&r.childLeaving,l&&r.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N.jsx("span",{className:b,style:C,children:N.jsx("span",{className:h})})}const m=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),st=["center","classes","className"];let q=e=>e,me,be,ge,Re;const ne=550,at=80,lt=re(me||(me=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ut=re(be||(be=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ct=re(ge||(ge=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),pt=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ft=oe(ot,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,lt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ut,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ct,({theme:e})=>e.transitions.easing.easeInOut),dt=a.forwardRef(function(t,r){const l=Te({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:o}=l,c=ie(l,st),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const U=a.useCallback(f=>{const{pulsate:y,rippleX:T,rippleY:D,rippleSize:j,cb:_}=f;p(E=>[...E,N.jsx(ft,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:T,rippleY:D,rippleSize:j},d.current)]),d.current+=1,g.current=_},[i]),$=a.useCallback((f={},y={},T=()=>{})=>{const{pulsate:D=!1,center:j=n||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=_?null:R.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,L;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:F,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(F-B.left),P=Math.round(V-B.top)}if(j)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const F=Math.max(Math.abs((E?E.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-P),P)*2+2;L=Math.sqrt(F**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:D,rippleX:v,rippleY:P,rippleSize:L,cb:T})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},at)):U({pulsate:D,rippleX:v,rippleY:P,rippleSize:L,cb:T})},[n,U]),K=a.useCallback(()=>{$({},{pulsate:!0})},[$]),I=a.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{I(f,y)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=y},[]);return a.useImperativeHandle(r,()=>({pulsate:K,start:$,stop:I}),[K,$,I]),N.jsx(pt,A({className:x(m.root,i.root,o),ref:R},c,{children:N.jsx(rt,{component:null,exit:!0,children:u})}))}),ht=dt;function mt(e){return Oe("MuiButtonBase",e)}const bt=ye("MuiButtonBase",["root","disabled","focusVisible"]),gt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Rt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=ze({root:["root",t&&"disabled",r&&"focusVisible"]},mt,n);return r&&l&&(o.root+=` ${l}`),o},yt=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${bt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Tt=a.forwardRef(function(t,r){const l=Te({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:$,onFocus:K,onFocusVisible:I,onKeyDown:f,onKeyUp:y,onMouseDown:T,onMouseLeave:D,onMouseUp:j,onTouchEnd:_,onTouchMove:E,onTouchStart:B,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:L,type:F}=l,V=ie(l,gt),O=a.useRef(null),M=a.useRef(null),Ee=de(M,L),{isFocusVisibleRef:le,onFocus:Me,onBlur:xe,ref:Ce}=Je(),[k,X]=a.useState(!1);p&&k&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[J,ve]=a.useState(!1);a.useEffect(()=>{ve(!0)},[]);const Ve=J&&!d&&!p;a.useEffect(()=>{k&&b&&!d&&J&&M.current.pulsate()},[d,b,k,J]);function w(s,ce,_e=g){return H(pe=>(ce&&ce(pe),!_e&&M.current&&M.current[s](pe),!0))}const we=w("start",T),Be=w("stop",U),Pe=w("stop",$),Le=w("stop",j),De=w("stop",s=>{k&&s.preventDefault(),D&&D(s)}),Fe=w("start",B),ke=w("stop",_),Se=w("stop",E),Ne=w("stop",s=>{xe(s),le.current===!1&&X(!1),h&&h(s)},!1),$e=H(s=>{O.current||(O.current=s.currentTarget),Me(s),le.current===!0&&(X(!0),I&&I(s)),K&&K(s)}),Q=()=>{const s=O.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.useRef(!1),Ie=H(s=>{b&&!Z.current&&k&&M.current&&s.key===" "&&(Z.current=!0,M.current.stop(s,()=>{M.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),je=H(s=>{b&&s.key===" "&&M.current&&k&&!s.defaultPrevented&&(Z.current=!1,M.current.stop(s,()=>{M.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=u;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=F===void 0?"button":F,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ue=de(r,Ce,O),ue=A({},l,{centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),Ke=Rt(ue);return N.jsxs(yt,A({as:W,className:x(Ke.root,c),ownerState:ue,onBlur:Ne,onClick:R,onContextMenu:Be,onFocus:$e,onKeyDown:Ie,onKeyUp:je,onMouseDown:we,onMouseLeave:De,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:ke,onTouchMove:Se,onTouchStart:Fe,ref:Ue,tabIndex:p?-1:v,type:F},z,V,{children:[o,Ve?N.jsx(ht,A({ref:Ee,center:i},P)):null]}))}),vt=Tt;export{vt as B};
