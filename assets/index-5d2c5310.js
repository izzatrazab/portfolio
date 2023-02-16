(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const f of r)if(f.type==="childList")for(const l of f.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const f={};return r.integrity&&(f.integrity=r.integrity),r.referrerpolicy&&(f.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?f.credentials="include":r.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(r){if(r.ep)return;r.ep=!0;const f=n(r);fetch(r.href,f)}})();function S(){}function p(t,e){for(const n in e)t[n]=e[n];return t}function Be(t){return t()}function Me(){return Object.create(null)}function Q(t){t.forEach(Be)}function Ee(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let oe;function Ze(t,e){return oe||(oe=document.createElement("a")),oe.href=e,t===oe.href}function Fe(t){return Object.keys(t).length===0}function Ke(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _e(t,e,n){t.$$.on_destroy.push(Ke(e,n))}function te(t,e,n,i){if(t){const r=Pe(t,e,n,i);return t[0](r)}}function Pe(t,e,n,i){return t[1]&&i?p(n.ctx.slice(),t[1](i(e))):n.ctx}function ne(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const f=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)f[s]=e.dirty[s]|r[s];return f}return e.dirty|r}return e.dirty}function ie(t,e,n,i,r,f){if(r){const l=Pe(e,n,i,f);t.p(l,r)}}function le(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function P(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function L(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function z(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function j(){return D(" ")}function Ue(){return D("")}function fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function K(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:C(t,i,e[i])}function U(t,e){for(const n in e)C(t,n,e[n])}function We(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e,n){t.classList[n?"add":"remove"](e)}function ae(t,e){return new t(e)}let se;function re(t){se=t}function Ge(){if(!se)throw new Error("Function called outside component initialization");return se}function Je(t){Ge().$$.on_mount.push(t)}function Re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const ee=[],J=[],ue=[],he=[],Qe=Promise.resolve();let ge=!1;function Xe(){ge||(ge=!0,Qe.then(Ve))}function de(t){ue.push(t)}function je(t){he.push(t)}const me=new Set;let x=0;function Ve(){if(x!==0)return;const t=se;do{try{for(;x<ee.length;){const e=ee[x];x++,re(e),xe(e.$$)}}catch(e){throw ee.length=0,x=0,e}for(re(null),ee.length=0,x=0;J.length;)J.pop()();for(let e=0;e<ue.length;e+=1){const n=ue[e];me.has(n)||(me.add(n),n())}ue.length=0}while(ee.length);for(;he.length;)he.pop()();ge=!1,me.clear(),re(t)}function xe(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}const ce=new Set;let G;function ke(){G={r:0,c:[],p:G}}function ve(){G.r||Q(G.c),G=G.p}function M(t,e){t&&t.i&&(ce.delete(t),t.i(e))}function A(t,e,n,i){if(t&&t.o){if(ce.has(t))return;ce.add(t),G.c.push(()=>{ce.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function W(t,e){const n={},i={},r={$$scope:1};let f=t.length;for(;f--;){const l=t[f],s=e[f];if(s){for(const u in l)u in s||(i[u]=1);for(const u in s)r[u]||(n[u]=s[u],r[u]=1);t[f]=s}else for(const u in l)r[u]=1}for(const l in i)l in n||(n[l]=void 0);return n}function Ie(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function q(t){t&&t.c()}function I(t,e,n,i){const{fragment:r,after_update:f}=t.$$;r&&r.m(e,n),i||de(()=>{const l=t.$$.on_mount.map(Be).filter(Ee);t.$$.on_destroy?t.$$.on_destroy.push(...l):Q(l),t.$$.on_mount=[]}),f.forEach(de)}function T(t,e){const n=t.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(t,e){t.$$.dirty[0]===-1&&(ee.push(t),Xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,i,r,f,l,s=[-1]){const u=se;re(t);const o=t.$$={fragment:null,ctx:[],props:f,update:S,not_equal:r,bound:Me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Me(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};l&&l(o.root);let c=!1;if(o.ctx=n?n(t,e.props||{},(a,d,...m)=>{const H=m.length?m[0]:d;return o.ctx&&r(o.ctx[a],o.ctx[a]=H)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](H),c&&$e(t,a)),d}):[],o.update(),c=!0,Q(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){const a=We(e.target);o.fragment&&o.fragment.l(a),a.forEach(b)}else o.fragment&&o.fragment.c();e.intro&&M(t.$$.fragment),I(t,e.target,e.anchor,e.customElement),Ve()}re(u)}class F{$destroy(){T(this,1),this.$destroy=S}$on(e,n){if(!Ee(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const et="/portfolio/assets/svelte-a39f39b7.svg",tt={email:"izzatrazab@gmail.com",github:"izzatrazab"},nt=[{}],it=[{name:"Typing Test",description:"I built this in "}],be={contact:tt,project:nt,personalProject:it};function lt(t){let e,n,i,r,f;return{c(){e=O("button"),n=D("count is "),i=D(t[0])},m(l,s){k(l,e,s),z(e,n),z(e,i),r||(f=fe(e,"click",t[1]),r=!0)},p(l,[s]){s&1&&X(i,l[0])},i:S,o:S,d(l){l&&b(e),r=!1,f()}}}function rt(t,e,n){let i=0;return[i,()=>{n(0,i+=1)}]}class ft extends F{constructor(e){super(),Z(this,e,rt,lt,Y,{})}}function ze(t){let e,n;return{c(){e=V("title"),n=D(t[1])},m(i,r){k(i,e,r),z(e,n)},p(i,r){r&2&&X(n,i[1])},d(i){i&&b(e)}}}function st(t){let e,n,i=t[1]&&ze(t),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:t[0]},{height:t[0]},t[2],t[3]],f={};for(let l=0;l<r.length;l+=1)f=p(f,r[l]);return{c(){e=V("svg"),i&&i.c(),n=V("path"),C(n,"fill-rule","evenodd"),C(n,"d","M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"),U(e,f)},m(l,s){k(l,e,s),i&&i.m(e,null),z(e,n)},p(l,[s]){l[1]?i?i.p(l,s):(i=ze(l),i.c(),i.m(e,n)):i&&(i.d(1),i=null),U(e,f=W(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:S,o:S,d(l){l&&b(e),i&&i.d()}}}function ot(t,e,n){let i,r;const f=["size","title"];let l=L(e,f),{size:s=16}=e,{title:u=void 0}=e;return t.$$set=o=>{n(5,e=p(p({},e),P(o))),n(3,l=L(e,f)),"size"in o&&n(0,s=o.size),"title"in o&&n(1,u=o.title)},t.$$.update=()=>{n(4,i=e["aria-label"]||e["aria-labelledby"]||u),n(2,r={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=P(e),[s,u,r,l,i]}class ut extends F{constructor(e){super(),Z(this,e,ot,st,Y,{size:0,title:1})}}function ye(t){let e,n;return{c(){e=V("title"),n=D(t[1])},m(i,r){k(i,e,r),z(e,n)},p(i,r){r&2&&X(n,i[1])},d(i){i&&b(e)}}}function ct(t){let e,n,i=t[1]&&ye(t),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:t[0]},{height:t[0]},t[2],t[3]],f={};for(let l=0;l<r.length;l+=1)f=p(f,r[l]);return{c(){e=V("svg"),i&&i.c(),n=V("path"),C(n,"d","M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"),U(e,f)},m(l,s){k(l,e,s),i&&i.m(e,null),z(e,n)},p(l,[s]){l[1]?i?i.p(l,s):(i=ye(l),i.c(),i.m(e,n)):i&&(i.d(1),i=null),U(e,f=W(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:S,o:S,d(l){l&&b(e),i&&i.d()}}}function at(t,e,n){let i,r;const f=["size","title"];let l=L(e,f),{size:s=16}=e,{title:u=void 0}=e;return t.$$set=o=>{n(5,e=p(p({},e),P(o))),n(3,l=L(e,f)),"size"in o&&n(0,s=o.size),"title"in o&&n(1,u=o.title)},t.$$.update=()=>{n(4,i=e["aria-label"]||e["aria-labelledby"]||u),n(2,r={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=P(e),[s,u,r,l,i]}class dt extends F{constructor(e){super(),Z(this,e,at,ct,Y,{size:0,title:1})}}const $=[];function pe(t,e=S){let n;const i=new Set;function r(s){if(Y(t,s)&&(t=s,n)){const u=!$.length;for(const o of i)o[1](),$.push(o,t);if(u){for(let o=0;o<$.length;o+=2)$[o][0]($[o+1]);$.length=0}}}function f(s){r(s(t))}function l(s,u=S){const o=[s,u];return i.add(o),i.size===1&&(n=e(r)||S),s(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:r,update:f,subscribe:l}}function Ce(t){let e,n;return{c(){e=V("title"),n=D(t[1])},m(i,r){k(i,e,r),z(e,n)},p(i,r){r&2&&X(n,i[1])},d(i){i&&b(e)}}}function mt(t){let e,n,i=t[1]&&Ce(t),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:t[0]},{height:t[0]},t[2],t[3]],f={};for(let l=0;l<r.length;l+=1)f=p(f,r[l]);return{c(){e=V("svg"),i&&i.c(),n=V("path"),C(n,"d","M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"),U(e,f)},m(l,s){k(l,e,s),i&&i.m(e,null),z(e,n)},p(l,[s]){l[1]?i?i.p(l,s):(i=Ce(l),i.c(),i.m(e,n)):i&&(i.d(1),i=null),U(e,f=W(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:S,o:S,d(l){l&&b(e),i&&i.d()}}}function _t(t,e,n){let i,r;const f=["size","title"];let l=L(e,f),{size:s=16}=e,{title:u=void 0}=e;return t.$$set=o=>{n(5,e=p(p({},e),P(o))),n(3,l=L(e,f)),"size"in o&&n(0,s=o.size),"title"in o&&n(1,u=o.title)},t.$$.update=()=>{n(4,i=e["aria-label"]||e["aria-labelledby"]||u),n(2,r={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=P(e),[s,u,r,l,i]}class ht extends F{constructor(e){super(),Z(this,e,_t,mt,Y,{size:0,title:1})}}const Te=ht;function Ne(t){let e,n;return{c(){e=V("title"),n=D(t[1])},m(i,r){k(i,e,r),z(e,n)},p(i,r){r&2&&X(n,i[1])},d(i){i&&b(e)}}}function gt(t){let e,n,i=t[1]&&Ne(t),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:t[0]},{height:t[0]},t[2],t[3]],f={};for(let l=0;l<r.length;l+=1)f=p(f,r[l]);return{c(){e=V("svg"),i&&i.c(),n=V("path"),C(n,"d","M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"),U(e,f)},m(l,s){k(l,e,s),i&&i.m(e,null),z(e,n)},p(l,[s]){l[1]?i?i.p(l,s):(i=Ne(l),i.c(),i.m(e,n)):i&&(i.d(1),i=null),U(e,f=W(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:S,o:S,d(l){l&&b(e),i&&i.d()}}}function bt(t,e,n){let i,r;const f=["size","title"];let l=L(e,f),{size:s=16}=e,{title:u=void 0}=e;return t.$$set=o=>{n(5,e=p(p({},e),P(o))),n(3,l=L(e,f)),"size"in o&&n(0,s=o.size),"title"in o&&n(1,u=o.title)},t.$$.update=()=>{n(4,i=e["aria-label"]||e["aria-labelledby"]||u),n(2,r={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=P(e),[s,u,r,l,i]}class kt extends F{constructor(e){super(),Z(this,e,bt,gt,Y,{size:0,title:1})}}const Ye=kt,vt=pe(!1),pt=pe(!1),Mt=pe(!1);function zt(t){let e,n,i,r,f;var l=t[0]?t[4]:t[3];function s(c){return{props:{size:20}}}l&&(n=ae(l,s()));let u=[{type:"button"},{title:t[2]},{"aria-label":t[2]},t[5]],o={};for(let c=0;c<u.length;c+=1)o=p(o,u[c]);return{c(){e=O("button"),n&&q(n.$$.fragment),K(e,o),N(e,"bx--header__action",!0),N(e,"bx--header__menu-trigger",!0),N(e,"bx--header__menu-toggle",!0)},m(c,a){k(c,e,a),n&&I(n,e,null),e.autofocus&&e.focus(),t[7](e),i=!0,r||(f=[fe(e,"click",t[6]),fe(e,"click",t[8])],r=!0)},p(c,[a]){if(l!==(l=c[0]?c[4]:c[3])){if(n){ke();const d=n;A(d.$$.fragment,1,0,()=>{T(d,1)}),ve()}l?(n=ae(l,s()),q(n.$$.fragment),M(n.$$.fragment,1),I(n,e,null)):n=null}K(e,o=W(u,[{type:"button"},(!i||a&4)&&{title:c[2]},(!i||a&4)&&{"aria-label":c[2]},a&32&&c[5]])),N(e,"bx--header__action",!0),N(e,"bx--header__menu-trigger",!0),N(e,"bx--header__menu-toggle",!0)},i(c){i||(n&&M(n.$$.fragment,c),i=!0)},o(c){n&&A(n.$$.fragment,c),i=!1},d(c){c&&b(e),n&&T(n),t[7](null),r=!1,Q(f)}}}function yt(t,e,n){const i=["ariaLabel","isOpen","iconMenu","iconClose","ref"];let r=L(e,i),{ariaLabel:f=void 0}=e,{isOpen:l=!1}=e,{iconMenu:s=Ye}=e,{iconClose:u=Te}=e,{ref:o=null}=e;function c(m){Re.call(this,t,m)}function a(m){J[m?"unshift":"push"](()=>{o=m,n(1,o)})}const d=()=>n(0,l=!l);return t.$$set=m=>{e=p(p({},e),P(m)),n(5,r=L(e,i)),"ariaLabel"in m&&n(2,f=m.ariaLabel),"isOpen"in m&&n(0,l=m.isOpen),"iconMenu"in m&&n(3,s=m.iconMenu),"iconClose"in m&&n(4,u=m.iconClose),"ref"in m&&n(1,o=m.ref)},[l,o,f,s,u,r,c,a,d]}class Ct extends F{constructor(e){super(),Z(this,e,yt,zt,Y,{ariaLabel:2,isOpen:0,iconMenu:3,iconClose:4,ref:1})}}const Nt=Ct,At=t=>({}),Ae=t=>({}),St=t=>({}),Se=t=>({});function we(t){let e,n,i;function r(l){t[19](l)}let f={iconClose:t[8],iconMenu:t[7]};return t[0]!==void 0&&(f.isOpen=t[0]),e=new Nt({props:f}),J.push(()=>Ie(e,"isOpen",r)),{c(){q(e.$$.fragment)},m(l,s){I(e,l,s),i=!0},p(l,s){const u={};s&256&&(u.iconClose=l[8]),s&128&&(u.iconMenu=l[7]),!n&&s&1&&(n=!0,u.isOpen=l[0],je(()=>n=!1)),e.$set(u)},i(l){i||(M(e.$$.fragment,l),i=!0)},o(l){A(e.$$.fragment,l),i=!1},d(l){T(e,l)}}}function Oe(t){let e,n,i;return{c(){e=O("span"),n=D(t[3]),i=D(" "),N(e,"bx--header__name--prefix",!0)},m(r,f){k(r,e,f),z(e,n),z(e,i)},p(r,f){f&8&&X(n,r[3])},d(r){r&&b(e)}}}function wt(t){let e;return{c(){e=D(t[4])},m(n,i){k(n,e,i)},p(n,i){i&16&&X(e,n[4])},d(n){n&&b(e)}}}function Ot(t){let e,n,i,r,f,l,s,u,o;de(t[18]);const c=t[16]["skip-to-content"],a=te(c,t,t[15],Se);let d=(t[11]&&t[9]<t[6]||t[5])&&we(t),m=t[3]&&Oe(t);const H=t[16].platform,B=te(H,t,t[15],Ae),y=B||wt(t);let E=[{href:t[2]},t[12]],R={};for(let _=0;_<E.length;_+=1)R=p(R,E[_]);const h=t[16].default,v=te(h,t,t[15],null);return{c(){e=O("header"),a&&a.c(),n=j(),d&&d.c(),i=j(),r=O("a"),m&&m.c(),f=j(),y&&y.c(),l=j(),v&&v.c(),K(r,R),N(r,"bx--header__name",!0),C(e,"aria-label",t[10]),N(e,"bx--header",!0)},m(_,w){k(_,e,w),a&&a.m(e,null),z(e,n),d&&d.m(e,null),z(e,i),z(e,r),m&&m.m(r,null),z(r,f),y&&y.m(r,null),t[20](r),z(e,l),v&&v.m(e,null),s=!0,u||(o=[fe(window,"resize",t[18]),fe(r,"click",t[17])],u=!0)},p(_,[w]){a&&a.p&&(!s||w&32768)&&ie(a,c,_,_[15],s?ne(c,_[15],w,St):le(_[15]),Se),_[11]&&_[9]<_[6]||_[5]?d?(d.p(_,w),w&2656&&M(d,1)):(d=we(_),d.c(),M(d,1),d.m(e,i)):d&&(ke(),A(d,1,1,()=>{d=null}),ve()),_[3]?m?m.p(_,w):(m=Oe(_),m.c(),m.m(r,f)):m&&(m.d(1),m=null),B?B.p&&(!s||w&32768)&&ie(B,H,_,_[15],s?ne(H,_[15],w,At):le(_[15]),Ae):y&&y.p&&(!s||w&16)&&y.p(_,s?w:-1),K(r,R=W(E,[(!s||w&4)&&{href:_[2]},w&4096&&_[12]])),N(r,"bx--header__name",!0),v&&v.p&&(!s||w&32768)&&ie(v,h,_,_[15],s?ne(h,_[15],w,null):le(_[15]),null),(!s||w&1024)&&C(e,"aria-label",_[10])},i(_){s||(M(a,_),M(d),M(y,_),M(v,_),s=!0)},o(_){A(a,_),A(d),A(y,_),A(v,_),s=!1},d(_){_&&b(e),a&&a.d(_),d&&d.d(),m&&m.d(),y&&y.d(_),t[20](null),v&&v.d(_),u=!1,Q(o)}}}function Lt(t,e,n){let i;const r=["expandedByDefault","isSideNavOpen","uiShellAriaLabel","href","company","platformName","persistentHamburgerMenu","expansionBreakpoint","ref","iconMenu","iconClose"];let f=L(e,r),l;_e(t,vt,g=>n(11,l=g));let{$$slots:s={},$$scope:u}=e,{expandedByDefault:o=!0}=e,{isSideNavOpen:c=!1}=e,{uiShellAriaLabel:a=void 0}=e,{href:d=void 0}=e,{company:m=void 0}=e,{platformName:H=""}=e,{persistentHamburgerMenu:B=!1}=e,{expansionBreakpoint:y=1056}=e,{ref:E=null}=e,{iconMenu:R=Ye}=e,{iconClose:h=Te}=e,v;function _(g){Re.call(this,t,g)}function w(){n(9,v=window.innerWidth)}function De(g){c=g,n(0,c),n(13,o),n(9,v),n(6,y),n(5,B)}function qe(g){J[g?"unshift":"push"](()=>{E=g,n(1,E)})}return t.$$set=g=>{n(21,e=p(p({},e),P(g))),n(12,f=L(e,r)),"expandedByDefault"in g&&n(13,o=g.expandedByDefault),"isSideNavOpen"in g&&n(0,c=g.isSideNavOpen),"uiShellAriaLabel"in g&&n(14,a=g.uiShellAriaLabel),"href"in g&&n(2,d=g.href),"company"in g&&n(3,m=g.company),"platformName"in g&&n(4,H=g.platformName),"persistentHamburgerMenu"in g&&n(5,B=g.persistentHamburgerMenu),"expansionBreakpoint"in g&&n(6,y=g.expansionBreakpoint),"ref"in g&&n(1,E=g.ref),"iconMenu"in g&&n(7,R=g.iconMenu),"iconClose"in g&&n(8,h=g.iconClose),"$$scope"in g&&n(15,u=g.$$scope)},t.$$.update=()=>{t.$$.dirty&8800&&n(0,c=o&&v>=y&&!B),n(10,i=m?`${m} `:""+(a||e["aria-label"]||H))},e=P(e),[c,E,d,m,H,B,y,R,h,v,i,l,f,o,a,u,s,_,w,De,qe]}class Ht extends F{constructor(e){super(),Z(this,e,Lt,Ot,Y,{expandedByDefault:13,isSideNavOpen:0,uiShellAriaLabel:14,href:2,company:3,platformName:4,persistentHamburgerMenu:5,expansionBreakpoint:6,ref:1,iconMenu:7,iconClose:8})}}const Bt=Ht;const Et=t=>({}),Le=t=>({});function Pt(t){let e,n,i;var r=t[3];function f(l){return{props:{size:20}}}return r&&(e=ae(r,f())),{c(){e&&q(e.$$.fragment),n=Ue()},m(l,s){e&&I(e,l,s),k(l,n,s),i=!0},p(l,s){if(r!==(r=l[3])){if(e){ke();const u=e;A(u.$$.fragment,1,0,()=>{T(u,1)}),ve()}r?(e=ae(r,f()),q(e.$$.fragment),M(e.$$.fragment,1),I(e,n.parentNode,n)):e=null}},i(l){i||(e&&M(e.$$.fragment,l),i=!0)},o(l){e&&A(e.$$.fragment,l),i=!1},d(l){l&&b(n),e&&T(e,l)}}}function Rt(t){let e,n,i;const r=t[6].icon,f=te(r,t,t[5],Le),l=f||Pt(t);let s=[{href:t[2]},{rel:n=t[4].target==="_blank"?"noopener noreferrer":void 0},t[4]],u={};for(let o=0;o<s.length;o+=1)u=p(u,s[o]);return{c(){e=O("a"),l&&l.c(),K(e,u),N(e,"bx--header__action",!0),N(e,"bx--header__action--active",t[1]),N(e,"svelte-smaelc",!0)},m(o,c){k(o,e,c),l&&l.m(e,null),t[7](e),i=!0},p(o,[c]){f?f.p&&(!i||c&32)&&ie(f,r,o,o[5],i?ne(r,o[5],c,Et):le(o[5]),Le):l&&l.p&&(!i||c&8)&&l.p(o,i?c:-1),K(e,u=W(s,[(!i||c&4)&&{href:o[2]},(!i||c&16&&n!==(n=o[4].target==="_blank"?"noopener noreferrer":void 0))&&{rel:n},c&16&&o[4]])),N(e,"bx--header__action",!0),N(e,"bx--header__action--active",o[1]),N(e,"svelte-smaelc",!0)},i(o){i||(M(l,o),i=!0)},o(o){A(l,o),i=!1},d(o){o&&b(e),l&&l.d(o),t[7](null)}}}function jt(t,e,n){const i=["linkIsActive","href","icon","ref"];let r=L(e,i),{$$slots:f={},$$scope:l}=e,{linkIsActive:s=!1}=e,{href:u=void 0}=e,{icon:o=void 0}=e,{ref:c=null}=e;function a(d){J[d?"unshift":"push"](()=>{c=d,n(0,c)})}return t.$$set=d=>{e=p(p({},e),P(d)),n(4,r=L(e,i)),"linkIsActive"in d&&n(1,s=d.linkIsActive),"href"in d&&n(2,u=d.href),"icon"in d&&n(3,o=d.icon),"ref"in d&&n(0,c=d.ref),"$$scope"in d&&n(5,l=d.$$scope)},[c,s,u,o,r,l,f,a]}class Vt extends F{constructor(e){super(),Z(this,e,jt,Rt,Y,{linkIsActive:1,href:2,icon:3,ref:0})}}const He=Vt;function It(t){let e,n;const i=t[1].default,r=te(i,t,t[0],null);return{c(){e=O("div"),r&&r.c(),N(e,"bx--header__global",!0)},m(f,l){k(f,e,l),r&&r.m(e,null),n=!0},p(f,[l]){r&&r.p&&(!n||l&1)&&ie(r,i,f,f[0],n?ne(i,f[0],l,null):le(f[0]),null)},i(f){n||(M(r,f),n=!0)},o(f){A(r,f),n=!1},d(f){f&&b(e),r&&r.d(f)}}}function Tt(t,e,n){let{$$slots:i={},$$scope:r}=e;return t.$$set=f=>{"$$scope"in f&&n(0,r=f.$$scope)},[r,i]}class Yt extends F{constructor(e){super(),Z(this,e,Tt,It,Y,{})}}const Dt=Yt;function qt(t){let e,n,i;const r=t[6].default,f=te(r,t,t[5],null);let l=[{id:t[0]},t[2],{style:n=(t[1]?"margin-left: 0;":"")+" "+t[2].style}],s={};for(let u=0;u<l.length;u+=1)s=p(s,l[u]);return{c(){e=O("main"),f&&f.c(),K(e,s),N(e,"bx--content",!0)},m(u,o){k(u,e,o),f&&f.m(e,null),i=!0},p(u,[o]){f&&f.p&&(!i||o&32)&&ie(f,r,u,u[5],i?ne(r,u[5],o,null):le(u[5]),null),K(e,s=W(l,[(!i||o&1)&&{id:u[0]},o&4&&u[2],(!i||o&6&&n!==(n=(u[1]?"margin-left: 0;":"")+" "+u[2].style))&&{style:n}])),N(e,"bx--content",!0)},i(u){i||(M(f,u),i=!0)},o(u){A(f,u),i=!1},d(u){u&&b(e),f&&f.d(u)}}}function Zt(t,e,n){let i;const r=["id"];let f=L(e,r),l,s;_e(t,Mt,a=>n(3,l=a)),_e(t,pt,a=>n(4,s=a));let{$$slots:u={},$$scope:o}=e,{id:c="main-content"}=e;return t.$$set=a=>{e=p(p({},e),P(a)),n(2,f=L(e,r)),"id"in a&&n(0,c=a.id),"$$scope"in a&&n(5,o=a.$$scope)},t.$$.update=()=>{t.$$.dirty&24&&n(1,i=s&&!l)},[c,i,f,l,s,o,u]}class Ft extends F{constructor(e){super(),Z(this,e,Zt,qt,Y,{id:0})}}const Kt=Ft;function Ut(t){let e,n,i,r;return e=new He({props:{href:"https://github.com/"+be.contact.github,icon:ut,target:"_blank"}}),i=new He({props:{href:"mailto: "+be.contact.email,icon:dt}}),{c(){q(e.$$.fragment),n=j(),q(i.$$.fragment)},m(f,l){I(e,f,l),k(f,n,l),I(i,f,l),r=!0},p:S,i(f){r||(M(e.$$.fragment,f),M(i.$$.fragment,f),r=!0)},o(f){A(e.$$.fragment,f),A(i.$$.fragment,f),r=!1},d(f){T(e,f),f&&b(n),T(i,f)}}}function Wt(t){let e,n;return e=new Dt({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},m(i,r){I(e,i,r),n=!0},p(i,r){const f={};r&4&&(f.$$scope={dirty:r,ctx:i}),e.$set(f)},i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){T(e,i)}}}function Gt(t){let e,n,i,r,f,l,s,u,o,c,a,d,m,H,B,y,E,R;return m=new ft({}),{c(){e=O("h2"),e.textContent="Hi I'm Izzat, This will be my portfolio website soon.",n=j(),i=O("h2"),i.textContent="Built by using Vite and Svelte",r=j(),f=O("div"),l=O("a"),l.innerHTML='<img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/>',s=j(),u=O("a"),o=O("img"),a=j(),d=O("div"),q(m.$$.fragment),H=j(),B=O("p"),B.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',y=j(),E=O("p"),E.textContent="Click on the Vite and Svelte logos to learn more",C(l,"href","https://vitejs.dev"),C(l,"target","_blank"),C(l,"rel","noreferrer"),Ze(o.src,c=et)||C(o,"src",c),C(o,"class","logo svelte svelte-c9fbf7"),C(o,"alt","Svelte Logo"),C(u,"href","https://svelte.dev"),C(u,"target","_blank"),C(u,"rel","noreferrer"),C(d,"class","card"),C(E,"class","read-the-docs svelte-c9fbf7")},m(h,v){k(h,e,v),k(h,n,v),k(h,i,v),k(h,r,v),k(h,f,v),z(f,l),z(f,s),z(f,u),z(u,o),k(h,a,v),k(h,d,v),I(m,d,null),k(h,H,v),k(h,B,v),k(h,y,v),k(h,E,v),R=!0},p:S,i(h){R||(M(m.$$.fragment,h),R=!0)},o(h){A(m.$$.fragment,h),R=!1},d(h){h&&b(e),h&&b(n),h&&b(i),h&&b(r),h&&b(f),h&&b(a),h&&b(d),T(m),h&&b(H),h&&b(B),h&&b(y),h&&b(E)}}}function Jt(t){let e,n,i,r,f;function l(u){t[1](u)}let s={company:"Izzat Razab",platformName:"Portfolio",$$slots:{default:[Wt]},$$scope:{ctx:t}};return t[0]!==void 0&&(s.isSideNavOpen=t[0]),e=new Bt({props:s}),J.push(()=>Ie(e,"isSideNavOpen",l)),r=new Kt({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment),i=j(),q(r.$$.fragment)},m(u,o){I(e,u,o),k(u,i,o),I(r,u,o),f=!0},p(u,[o]){const c={};o&4&&(c.$$scope={dirty:o,ctx:u}),!n&&o&1&&(n=!0,c.isSideNavOpen=u[0],je(()=>n=!1)),e.$set(c);const a={};o&4&&(a.$$scope={dirty:o,ctx:u}),r.$set(a)},i(u){f||(M(e.$$.fragment,u),M(r.$$.fragment,u),f=!0)},o(u){A(e.$$.fragment,u),A(r.$$.fragment,u),f=!1},d(u){T(e,u),u&&b(i),T(r,u)}}}function Qt(t,e,n){let i=!1;Je(async()=>{console.log(be.contact)});function r(f){i=f,n(0,i)}return[i,r]}class Xt extends F{constructor(e){super(),Z(this,e,Qt,Jt,Y,{})}}new Xt({target:document.getElementById("app")});
