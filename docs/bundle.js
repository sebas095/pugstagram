!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function s(){}n.r(t);const r=e=>e;function o(e,t){for(const n in t)e[n]=t[n];return e}function l(e){return e()}function i(){return Object.create(null)}function a(e){e.forEach(l)}function c(e){return"function"==typeof e}function d(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e){return 0===Object.keys(e).length}function f(e,...t){if(null==e)return s;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function m(e,t,n,s){if(e){const r=p(e,t,n,s);return e[0](r)}}function p(e,t,n,s){return e[1]&&s?o(n.ctx.slice(),e[1](s(t))):n.ctx}function v(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}function g(e,t,n,s,r,o,l){const i=v(t,s,r,o);if(i){const r=p(t,n,s,l);e.p(r,i)}}const h="undefined"!=typeof window;let b=h?()=>window.performance.now():()=>Date.now(),y=h?e=>requestAnimationFrame(e):s;const $=new Set;function x(e){$.forEach(t=>{t.c(e)||($.delete(t),t.f())}),0!==$.size&&y(x)}function k(e){let t;return 0===$.size&&y(x),{promise:new Promise(n=>{$.add(t={c:e,f:n})}),abort(){$.delete(t)}}}function w(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function z(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function M(){return S(" ")}function E(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function j(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function L(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function P(e,t,n){e.classList[n?"add":"remove"](t)}function H(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}const T=new Set;let B,O=0;function I(e,t,n,s,r,o,l,i=0){const a=16.666/s;let c="{\n";for(let e=0;e<=1;e+=a){const s=t+(n-t)*o(e);c+=100*e+`%{${l(s,1-s)}}\n`}const d=c+`100% {${l(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${i}`,f=e.ownerDocument;T.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(z("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[u]||(p[u]=!0,m.insertRule(`@keyframes ${u} ${d}`,m.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?v+", ":""}${u} ${s}ms linear ${r}ms 1 both`,O+=1,u}function A(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-s.length;r&&(e.style.animation=s.join(", "),O-=r,O||y(()=>{O||(T.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),T.clear())}))}function F(e){B=e}function q(){if(!B)throw new Error("Function called outside component initialization");return B}const R=[],D=[],N=[],G=[],U=Promise.resolve();let V=!1;function Y(){V||(V=!0,U.then(Q))}function Z(e){N.push(e)}let J=!1;const K=new Set;function Q(){if(!J){J=!0;do{for(let e=0;e<R.length;e+=1){const t=R[e];F(t),W(t.$$)}for(F(null),R.length=0;D.length;)D.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];K.has(t)||(K.add(t),t())}N.length=0}while(R.length);for(;G.length;)G.pop()();V=!1,J=!1,K.clear()}}function W(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}let X;function ee(){return X||(X=Promise.resolve(),X.then(()=>{X=null})),X}function te(e,t,n){e.dispatchEvent(H(`${t?"intro":"outro"}${n}`))}const ne=new Set;let se;function re(){se={r:0,c:[],p:se}}function oe(){se.r||a(se.c),se=se.p}function le(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function ie(e,t,n,s){if(e&&e.o){if(ne.has(e))return;ne.add(e),se.c.push(()=>{ne.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}const ae={duration:0};function ce(e,t,n,o){let l=t(e,n),i=o?0:1,d=null,u=null,f=null;function m(){f&&A(e,f)}function p(e,t){const n=e.b-i;return t*=Math.abs(n),{a:i,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function v(t){const{delay:n=0,duration:o=300,easing:c=r,tick:v=s,css:g}=l||ae,h={start:b()+n,b:t};t||(h.group=se,se.r+=1),d||u?u=h:(g&&(m(),f=I(e,i,t,o,n,c,g)),t&&v(0,1),d=p(h,o),Z(()=>te(e,t,"start")),k(t=>{if(u&&t>u.start&&(d=p(u,o),u=null,te(e,d.b,"start"),g&&(m(),f=I(e,i,d.b,d.duration,0,c,l.css))),d)if(t>=d.end)v(i=d.b,1-i),te(e,d.b,"end"),u||(d.b?m():--d.group.r||a(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;i=d.a+d.d*c(e/d.duration),v(i,1-i)}return!(!d&&!u)}))}return{run(e){c(l)?ee().then(()=>{l=l(),v(e)}):v(e)},end(){m(),d=u=null}}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function de(e,t){e.d(1),t.delete(e.key)}function ue(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const l=e[o],i=t[o];if(i){for(const e in l)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in l)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function fe(e){return"object"==typeof e&&null!==e?e:{}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let me;function pe(e){e&&e.c()}function ve(e,t,n,s){const{fragment:r,on_mount:o,on_destroy:i,after_update:d}=e.$$;r&&r.m(t,n),s||Z(()=>{const t=o.map(l).filter(c);i?i.push(...t):a(t),e.$$.on_mount=[]}),d.forEach(Z)}function ge(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function he(e,t,n,r,o,l,c=[-1]){const d=B;F(e);const u=e.$$={fragment:null,ctx:null,props:l,update:s,not_equal:o,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:i(),dirty:c,skip_bound:!1};let f=!1;if(u.ctx=n?n(e,t.props||{},(t,n,...s)=>{const r=s.length?s[0]:n;return u.ctx&&o(u.ctx[t],u.ctx[t]=r)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](r),f&&function(e,t){-1===e.$$.dirty[0]&&(R.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n}):[],u.update(),f=!0,a(u.before_update),u.fragment=!!r&&r(u.ctx),t.target){if(t.hydrate){const e=(m=t.target,Array.from(m.childNodes));u.fragment&&u.fragment.l(e),e.forEach(_)}else u.fragment&&u.fragment.c();t.intro&&le(e.$$.fragment),ve(e,t.target,t.anchor,t.customElement),Q()}var m;F(d)}"function"==typeof HTMLElement&&(me=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(l).filter(c);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){a(this.$$.on_disconnect)}$destroy(){ge(this,1),this.$destroy=s}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!u(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class be{$destroy(){ge(this,1),this.$destroy=s}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!u(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ye=[];function $e(e,t=s){let n;const r=[];function o(t){if(d(e,t)&&(e=t,n)){const t=!ye.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),ye.push(n,e)}if(t){for(let e=0;e<ye.length;e+=2)ye[e][0](ye[e+1]);ye.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(l,i=s){const a=[l,i];return r.push(a),1===r.length&&(n=t(o)||s),l(e),()=>{const e=r.indexOf(a);-1!==e&&r.splice(e,1),0===r.length&&(n(),n=null)}}}}var xe=$e(0);function ke(e){let t,n,r,o,l,i,a,c,d,u,f,m,p,v=(0===e[0]?"":e[0])+"";return{c(){t=z("div"),n=z("div"),r=z("div"),o=z("div"),o.innerHTML='<h1 class="svelte-nkymcb">Pugstagram</h1>',l=M(),i=z("div"),a=z("ul"),c=z("li"),d=z("i"),u=M(),f=S(v),m=M(),p=z("li"),p.innerHTML='<i class="fas fa-user-alt svelte-nkymcb"></i>',j(o,"class","Header-logo"),j(d,"class","fas fa-heart svelte-nkymcb"),j(c,"class","svelte-nkymcb"),j(p,"class","svelte-nkymcb"),j(a,"class","svelte-nkymcb"),j(i,"class","Header-nav"),j(r,"class","Header-content svelte-nkymcb"),j(n,"class","Header-container svelte-nkymcb"),j(t,"class","Header svelte-nkymcb")},m(e,s){C(e,t,s),w(t,n),w(n,r),w(r,o),w(r,l),w(r,i),w(i,a),w(a,c),w(c,d),w(c,u),w(c,f),w(a,m),w(a,p)},p(e,[t]){1&t&&v!==(v=(0===e[0]?"":e[0])+"")&&L(f,v)},i:s,o:s,d(e){e&&_(t)}}}function we(e,t,n){let s;var r,o;return r=xe,o=e=>n(0,s=e),e.$$.on_destroy.push(f(r,o)),[s]}var Ce=class extends be{constructor(e){var t;super(),document.getElementById("svelte-nkymcb-style")||((t=z("style")).id="svelte-nkymcb-style",t.textContent='.Header.svelte-nkymcb.svelte-nkymcb{background-color:white;position:fixed;width:100%}.Header-container.svelte-nkymcb.svelte-nkymcb{grid-template-columns:minmax(auto, 936px);display:grid;justify-content:center;background-color:white;border-bottom:1ps solid rgba(38, 38, 38, 0.4)}.Header-content.svelte-nkymcb.svelte-nkymcb{display:flex;align-items:center;justify-content:space-between;padding:0.5em}.Header.svelte-nkymcb ul.svelte-nkymcb{list-style:none}.Header.svelte-nkymcb li.svelte-nkymcb{display:inline-block;margin:0 0 0 1em}.Header.svelte-nkymcb i.svelte-nkymcb{font-size:16px;color:rgba(38, 38, 38, 0.7);cursor:pointer}h1.svelte-nkymcb.svelte-nkymcb{padding:0;margin:0;font-size:28px;color:black;font-family:"Pacifico", cursive;cursor:pointer;position:relative;background:#fff;mix-blend-mode:multiply;display:inline-block}h1.svelte-nkymcb.svelte-nkymcb:before{content:"";display:block;width:100%;height:100%;background:radial-gradient(circle at top left, #f09433, #bc1888);mix-blend-mode:screen;position:absolute;top:0;left:0}',w(document.head,t)),he(this,e,we,ke,d,{})}};function _e(e){let t,n,s;const r=e[1].default,o=m(r,e,e[0],null);return{c(){t=z("div"),n=z("div"),o&&o.c(),j(n,"class","Main-container svelte-1kwuoxm"),j(t,"class","Main svelte-1kwuoxm")},m(e,r){C(e,t,r),w(t,n),o&&o.m(n,null),s=!0},p(e,[t]){o&&o.p&&1&t&&g(o,r,e,e[0],t,null,null)},i(e){s||(le(o,e),s=!0)},o(e){ie(o,e),s=!1},d(e){e&&_(t),o&&o.d(e)}}}function ze(e,t,n){let{$$slots:s={},$$scope:r}=t;return e.$$set=e=>{"$$scope"in e&&n(0,r=e.$$scope)},[r,s]}var Se=class extends be{constructor(e){var t;super(),document.getElementById("svelte-1kwuoxm-style")||((t=z("style")).id="svelte-1kwuoxm-style",t.textContent=".Main.svelte-1kwuoxm{display:grid;grid-template-columns:minmax(auto, 936px);justify-content:center;background-color:#fafafa}.Main-container.svelte-1kwuoxm{display:grid;grid-template-columns:3fr 1fr;grid-gap:2em;padding:2em 0}",w(document.head,t)),he(this,e,ze,_e,d,{})}};function Me(e,t,n){const s=e.slice();return s[2]=t[n],s}function Ee(e,t){let n,s,r,o,l,i,a=t[2].username+"",c=t[2].text+"";return{key:e,first:null,c(){n=z("div"),s=z("h3"),r=S(a),o=M(),l=z("span"),i=S(c),j(s,"class","svelte-rfnsl2"),j(l,"class","svelte-rfnsl2"),j(n,"class","Comments-users svelte-rfnsl2"),this.first=n},m(e,t){C(e,n,t),w(n,s),w(s,r),w(n,o),w(n,l),w(l,i)},p(e,n){t=e,1&n&&a!==(a=t[2].username+"")&&L(r,a),1&n&&c!==(c=t[2].text+"")&&L(i,c)},d(e){e&&_(n)}}}function je(e){let t,n,r,o,l,i,a,c=[],d=new Map,u=e[0];const f=e=>e[2].id;for(let t=0;t<u.length;t+=1){let n=Me(e,u,t),s=f(n);d.set(s,c[t]=Ee(s,n))}return{c(){t=z("div"),n=z("div");for(let e=0;e<c.length;e+=1)c[e].c();r=M(),o=z("div"),l=z("form"),l.innerHTML='<input type="text" class="Comments-input svelte-rfnsl2" placeholder="Agregar Comentario..." id="text"/> \n        <button type="submit" class="svelte-rfnsl2">Post</button>',j(l,"class","svelte-rfnsl2"),j(o,"class","Comments-add svelte-rfnsl2"),j(n,"class","Comments-content svelte-rfnsl2"),j(t,"class","Comments svelte-rfnsl2")},m(s,d){C(s,t,d),w(t,n);for(let e=0;e<c.length;e+=1)c[e].m(n,null);var u;w(n,r),w(n,o),w(o,l),i||(a=E(l,"submit",(u=e[1],function(e){return e.preventDefault(),u.call(this,e)})),i=!0)},p(e,[t]){1&t&&(u=e[0],c=function(e,t,n,s,r,o,l,i,a,c,d,u){let f=e.length,m=o.length,p=f;const v={};for(;p--;)v[e[p].key]=p;const g=[],h=new Map,b=new Map;for(p=m;p--;){const e=u(r,o,p),i=n(e);let a=l.get(i);a?s&&a.p(e,t):(a=c(i,e),a.c()),h.set(i,g[p]=a),i in v&&b.set(i,Math.abs(p-v[i]))}const y=new Set,$=new Set;function x(e){le(e,1),e.m(i,d),l.set(e.key,e),d=e.first,m--}for(;f&&m;){const t=g[m-1],n=e[f-1],s=t.key,r=n.key;t===n?(d=t.first,f--,m--):h.has(r)?!l.has(s)||y.has(s)?x(t):$.has(r)?f--:b.get(s)>b.get(r)?($.add(s),x(t)):(y.add(r),f--):(a(n,l),f--)}for(;f--;){const t=e[f];h.has(t.key)||a(t,l)}for(;m;)x(g[m-1]);return g}(c,t,f,1,e,u,d,n,de,Ee,r,Me))},i:s,o:s,d(e){e&&_(t);for(let e=0;e<c.length;e+=1)c[e].d();i=!1,a()}}}function Le(e,t,n){let{comments:s=[]}=t;return e.$$set=e=>{"comments"in e&&n(0,s=e.comments)},[s,function(e){const t=e.target.text.value;if(t.length>3){const r={id:Date.now(),text:t,username:"gndx"};n(0,s=[...s,r]),e.target.text.value=""}}]}var Pe=class extends be{constructor(e){var t;super(),document.getElementById("svelte-rfnsl2-style")||((t=z("style")).id="svelte-rfnsl2-style",t.textContent=".Comments.svelte-rfnsl2 h3.svelte-rfnsl2{font-size:14px;color:black;font-weight:bold;margin:0;padding:0}.Comments.svelte-rfnsl2 span.svelte-rfnsl2{font-size:14px;margin:0 0 0 0.5em;font-weight:normal;color:rgba(black, 0.9)}.Comments-add.svelte-rfnsl2.svelte-rfnsl2{padding:1em 1em 1em 1em;border-top:1px solid rgba(219, 219, 219, 0.8)}.Comments-add.svelte-rfnsl2 form.svelte-rfnsl2{display:flex;justify-content:space-between;align-items:center}.Comments-content.svelte-rfnsl2.svelte-rfnsl2{padding:0 1em 0.5em 1em}.Comments-users.svelte-rfnsl2.svelte-rfnsl2{margin:0 0 0.5em 0;display:flex}input.svelte-rfnsl2.svelte-rfnsl2{border:solid 1px #e9e9e9;border-radius:5px;color:#696969;border:1px solid transparent;font-size:12px;outline:none;width:100%;display:flex}button.svelte-rfnsl2.svelte-rfnsl2{border:none;color:#3897f0;font-size:12px;outline:none;cursor:pointer;background:transparent;font-weight:bold}",w(document.head,t)),he(this,e,Le,je,d,{comments:0})}};function He(e){let t,n,s,r;const o=e[1].default,l=m(o,e,e[0],null);return{c(){t=z("div"),n=z("div"),s=M(),l&&l.c(),j(n,"class","Modal-overlay svelte-1wbe31h"),j(t,"class","Modal svelte-1wbe31h")},m(e,o){C(e,t,o),w(t,n),w(t,s),l&&l.m(t,null),r=!0},p(e,[t]){l&&l.p&&1&t&&g(l,o,e,e[0],t,null,null)},i(e){r||(le(l,e),r=!0)},o(e){ie(l,e),r=!1},d(e){e&&_(t),l&&l.d(e)}}}function Te(e,t,n){let{$$slots:s={},$$scope:r}=t;return e.$$set=e=>{"$$scope"in e&&n(0,r=e.$$scope)},[r,s]}var Be=class extends be{constructor(e){var t;super(),document.getElementById("svelte-1wbe31h-style")||((t=z("style")).id="svelte-1wbe31h-style",t.textContent=".Modal.svelte-1wbe31h{position:relative}.Modal-overlay.svelte-1wbe31h{background-color:rgba(0, 0, 0, 0.7);position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:8;cursor:pointer}",w(document.head,t)),he(this,e,Te,He,d,{})}};function Oe(e){let t,n,r,o,l,i,a,c,d;return{c(){t=z("div"),n=z("div"),r=z("h2"),r.textContent="Compartir",o=M(),l=z("i"),i=M(),a=z("div"),a.innerHTML='<a href="https://www.facebook.com/sharer/sharer.php?&amp;u=https://sebas095.github.io/pugstagram/" target="_blank" class="svelte-7g55p3"><i class="fab fa-facebook-square svelte-7g55p3"></i>\n      Compartir en Facebook</a>',j(r,"class","svelte-7g55p3"),j(l,"class","fas fa-times-circle svelte-7g55p3"),j(n,"class","Share-head svelte-7g55p3"),j(a,"class","Share-content svelte-7g55p3"),j(t,"class","Share svelte-7g55p3")},m(s,u){C(s,t,u),w(t,n),w(n,r),w(n,o),w(n,l),w(t,i),w(t,a),c||(d=E(l,"click",e[0]),c=!0)},p:s,i:s,o:s,d(e){e&&_(t),c=!1,d()}}}function Ie(e){return[function(t){!function(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}(e,t)}]}var Ae=class extends be{constructor(e){var t;super(),document.getElementById("svelte-7g55p3-style")||((t=z("style")).id="svelte-7g55p3-style",t.textContent=".Share.svelte-7g55p3.svelte-7g55p3{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;background-color:white;margin:0 0 2em 0;width:300px;height:80px;position:absolute;top:300px;left:30%;z-index:9;padding:1em}.Share-head.svelte-7g55p3.svelte-7g55p3{display:flex;justify-content:space-between;align-items:center}.Share-head.svelte-7g55p3 h2.svelte-7g55p3{font-size:16px}.Share-head.svelte-7g55p3 i.svelte-7g55p3{cursor:pointer}.Share-content.svelte-7g55p3 a.svelte-7g55p3{display:flex;align-items:center;text-decoration:none;color:black;font-size:14px;margin:2em 0 0 0}.Share-content.svelte-7g55p3 i.svelte-7g55p3{color:#3b5998;margin:0 0.5em 0 0;font-size:20px}",w(document.head,t)),he(this,e,Ie,Oe,d,{})}};function Fe(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function qe(e,{delay:t=0,duration:n=400,easing:s=Fe,amount:r=5,opacity:o=0}={}){const l=getComputedStyle(e),i=+l.opacity,a="none"===l.filter?"":l.filter,c=i*(1-o);return{delay:t,duration:n,easing:s,css:(e,t)=>`opacity: ${i-c*t}; filter: ${a} blur(${t*r}px);`}}function Re(e){let t,n,s,r;return n=new Be({props:{$$slots:{default:[De]},$$scope:{ctx:e}}}),{c(){t=z("div"),pe(n.$$.fragment)},m(e,s){C(e,t,s),ve(n,t,null),r=!0},p(e,t){const s={};4096&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){r||(le(n.$$.fragment,e),Z(()=>{s||(s=ce(t,qe,{},!0)),s.run(1)}),r=!0)},o(e){ie(n.$$.fragment,e),s||(s=ce(t,qe,{},!1)),s.run(0),r=!1},d(e){e&&_(t),ge(n),e&&s&&s.end()}}}function De(e){let t,n;return t=new Ae({}),t.$on("click",e[9]),{c(){pe(t.$$.fragment)},m(e,s){ve(t,e,s),n=!0},p:s,i(e){n||(le(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){ge(t,e)}}}function Ne(e){let t,n,s,r,o,l,i,c,d,u,f,m,p,v,g,h,b,y,$,x,k,H,T,B,O,I,A,F,q,R,D,N,G,U,V,Y,Z,J,K,Q,W,X=e[6]&&Re(e);return J=new Pe({props:{comments:e[4]}}),{c(){t=z("div"),X&&X.c(),n=M(),s=z("div"),r=z("div"),o=z("div"),l=z("img"),c=M(),d=z("h2"),u=S(e[0]),f=M(),m=z("span"),p=S(e[1]),v=M(),g=z("div"),g.innerHTML='<i class="fas fa-ellipsis-h svelte-dri73u"></i>',h=M(),b=z("div"),y=z("figur"),$=z("img"),k=M(),H=z("div"),T=z("div"),B=z("i"),O=M(),I=z("i"),A=M(),F=z("div"),q=z("i"),R=M(),D=z("div"),N=z("h3"),G=S(e[0]),U=M(),V=z("span"),Y=S(e[3]),Z=M(),pe(J.$$.fragment),l.src!==(i=e[5])&&j(l,"src",i),j(l,"alt",e[0]),j(l,"class","svelte-dri73u"),j(m,"class","svelte-dri73u"),j(d,"class","svelte-dri73u"),j(o,"class","Card-user svelte-dri73u"),j(g,"class","Card-settings svelte-dri73u"),j(r,"class","Card-header svelte-dri73u"),$.src!==(x=e[2])&&j($,"src",x),j($,"alt",e[0]),j($,"class","svelte-dri73u"),j(b,"class","Card-photo svelte-dri73u"),j(B,"class","fas fa-heart svelte-dri73u"),P(B,"active-like",e[7]),j(I,"class","fas fa-paper-plane svelte-dri73u"),j(T,"class","Card-icons-first"),j(q,"class","fas fa-bookmark svelte-dri73u"),P(q,"active-bookmark",e[8]),j(F,"class","Card-icons-second"),j(H,"class","Card-icons svelte-dri73u"),j(N,"class","svelte-dri73u"),j(V,"class","svelte-dri73u"),j(D,"class","Card-description svelte-dri73u"),j(s,"class","Card-container"),j(t,"class","Card svelte-dri73u")},m(i,a){C(i,t,a),X&&X.m(t,null),w(t,n),w(t,s),w(s,r),w(r,o),w(o,l),w(o,c),w(o,d),w(d,u),w(d,f),w(d,m),w(m,p),w(r,v),w(r,g),w(s,h),w(s,b),w(b,y),w(y,$),w(s,k),w(s,H),w(H,T),w(T,B),w(T,O),w(T,I),w(H,A),w(H,F),w(F,q),w(s,R),w(s,D),w(D,N),w(N,G),w(D,U),w(D,V),w(V,Y),w(s,Z),ve(J,s,null),K=!0,Q||(W=[E(y,"dblclick",e[10]),E(B,"click",e[10]),E(I,"click",e[9]),E(q,"click",e[11])],Q=!0)},p(e,[s]){e[6]?X?(X.p(e,s),64&s&&le(X,1)):(X=Re(e),X.c(),le(X,1),X.m(t,n)):X&&(re(),ie(X,1,1,()=>{X=null}),oe()),(!K||32&s&&l.src!==(i=e[5]))&&j(l,"src",i),(!K||1&s)&&j(l,"alt",e[0]),(!K||1&s)&&L(u,e[0]),(!K||2&s)&&L(p,e[1]),(!K||4&s&&$.src!==(x=e[2]))&&j($,"src",x),(!K||1&s)&&j($,"alt",e[0]),128&s&&P(B,"active-like",e[7]),256&s&&P(q,"active-bookmark",e[8]),(!K||1&s)&&L(G,e[0]),(!K||8&s)&&L(Y,e[3]);const r={};16&s&&(r.comments=e[4]),J.$set(r)},i(e){K||(le(X),le(J.$$.fragment,e),K=!0)},o(e){ie(X),ie(J.$$.fragment,e),K=!1},d(e){e&&_(t),X&&X.d(),ge(J),Q=!1,a(W)}}}function Ge(e,t,n){let{username:s}=t,{location:r}=t,{photo:o}=t,{postComment:l}=t,{comments:i}=t,{avatar:a}=t,c=!1,d=!1,u=!1;return e.$$set=e=>{"username"in e&&n(0,s=e.username),"location"in e&&n(1,r=e.location),"photo"in e&&n(2,o=e.photo),"postComment"in e&&n(3,l=e.postComment),"comments"in e&&n(4,i=e.comments),"avatar"in e&&n(5,a=e.avatar)},[s,r,o,l,i,a,c,d,u,function(){n(6,c=!c)},function(){n(7,d=!d),d?xe.update(e=>e+1):xe.update(e=>e-1)},function(){n(8,u=!u)}]}var Ue=class extends be{constructor(e){var t;super(),document.getElementById("svelte-dri73u-style")||((t=z("style")).id="svelte-dri73u-style",t.textContent=".Card.svelte-dri73u.svelte-dri73u{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;background-color:white;margin:0 0 2em 0}.Card-header.svelte-dri73u.svelte-dri73u{display:flex;justify-content:space-between;align-items:center;padding:1em}.Card-user.svelte-dri73u.svelte-dri73u{display:flex;align-items:center;justify-content:flex-end}.Card-user.svelte-dri73u img.svelte-dri73u{width:32px;height:32px;border-radius:50%}.Card-user.svelte-dri73u h2.svelte-dri73u{margin:0;padding:0;font-size:14px;font-weight:600;margin:0 0 0 1em;color:black}.Card-user.svelte-dri73u h2 span.svelte-dri73u{display:block;font-size:12px;font-weight:normal;color:rgba(38, 38, 38, 0.7)}.Card-photo.svelte-dri73u.svelte-dri73u{padding:0;margin:0}.Card-photo.svelte-dri73u img.svelte-dri73u{width:100%;height:auto}.Card-settings.svelte-dri73u i.svelte-dri73u{cursor:pointer}.Card-icons.svelte-dri73u.svelte-dri73u{padding:1em;display:flex;justify-content:space-between;align-items:center}.Card-icons.svelte-dri73u i.svelte-dri73u{margin:0 1em 0 0;cursor:pointer;font-size:20px}.Card-icons.svelte-dri73u i.svelte-dri73u:last-child{margin:0}.Card-description.svelte-dri73u.svelte-dri73u{padding:0 1em 1em 1em}.Card-description.svelte-dri73u h3.svelte-dri73u{font-size:14px;font-weight:bold;color:black}.Card-description.svelte-dri73u span.svelte-dri73u{font-size:14px}.active-like.svelte-dri73u.svelte-dri73u{color:#bc1888;animation:svelte-dri73u-bounce linear 0.8s;animation-iteration-count:1;transform-origin:20% 20%}.active-bookmark.svelte-dri73u.svelte-dri73u{color:#f09433}@keyframes svelte-dri73u-bounce{0%{transform:translate(0px, 0px)}15%{transform:translate(0px, -25px)}30%{transform:translate(0px, 0px)}45%{transform:translate(0px, -15px)}60%{transform:translate(0px, 0px)}75%{transform:translate(0px, -5px)}100%{transform:translate(0px, 0px)}}",w(document.head,t)),he(this,e,Ge,Ne,d,{username:0,location:1,photo:2,postComment:3,comments:4,avatar:5})}};function Ve(e){let t;return{c(){t=z("div"),t.innerHTML='<div class="Loader-container svelte-1yl1ozh"></div>',j(t,"class","Loader svelte-1yl1ozh")},m(e,n){C(e,t,n)},p:s,i:s,o:s,d(e){e&&_(t)}}}var Ye=class extends be{constructor(e){var t;super(),document.getElementById("svelte-1yl1ozh-style")||((t=z("style")).id="svelte-1yl1ozh-style",t.textContent=".Loader.svelte-1yl1ozh{display:grid;place-items:center;height:80vh}.Loader-container.svelte-1yl1ozh{border:8px solid white;border-radius:50%;border-top-color:#999;width:80px;height:80px;animation:svelte-1yl1ozh-spin 2s linear infinite}@keyframes svelte-1yl1ozh-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",w(document.head,t)),he(this,e,null,Ve,d,{})}};function Ze(e,t,n){const s=e.slice();return s[1]=t[n],s}function Je(e){let t,n;return t=new Ye({}),{c(){pe(t.$$.fragment)},m(e,s){ve(t,e,s),n=!0},i(e){n||(le(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){ge(t,e)}}}function Ke(e){let t,n;const s=[e[1]];let r={};for(let e=0;e<s.length;e+=1)r=o(r,s[e]);return t=new Ue({props:r}),{c(){pe(t.$$.fragment)},m(e,s){ve(t,e,s),n=!0},p(e,n){const r=1&n?ue(s,[fe(e[1])]):{};t.$set(r)},i(e){n||(le(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){ge(t,e)}}}function Qe(e){let t,n,s,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=Ke(Ze(e,r,t));const l=e=>ie(o[e],1,1,()=>{o[e]=null});let i=null;return r.length||(i=Je()),{c(){t=z("div"),n=z("div");for(let e=0;e<o.length;e+=1)o[e].c();i&&i.c(),j(n,"class","TimeLine-container"),j(t,"class","TimeLine svelte-1rnklec")},m(e,r){C(e,t,r),w(t,n);for(let e=0;e<o.length;e+=1)o[e].m(n,null);i&&i.m(n,null),s=!0},p(e,[t]){if(1&t){let s;for(r=e[0],s=0;s<r.length;s+=1){const l=Ze(e,r,s);o[s]?(o[s].p(l,t),le(o[s],1)):(o[s]=Ke(l),o[s].c(),le(o[s],1),o[s].m(n,null))}for(re(),s=r.length;s<o.length;s+=1)l(s);oe(),r.length?i&&(re(),ie(i,1,1,()=>{i=null}),oe()):i||(i=Je(),i.c(),le(i,1),i.m(n,null))}},i(e){if(!s){for(let e=0;e<r.length;e+=1)le(o[e]);s=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ie(o[e]);s=!1},d(e){e&&_(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(o,e),i&&i.d()}}}function We(e,t,n){let{posts:s=[]}=t;return e.$$set=e=>{"posts"in e&&n(0,s=e.posts)},[s]}var Xe=class extends be{constructor(e){var t;super(),document.getElementById("svelte-1rnklec-style")||((t=z("style")).id="svelte-1rnklec-style",t.textContent=".TimeLine.svelte-1rnklec{padding:4em 0 0 0}",w(document.head,t)),he(this,e,We,Qe,d,{posts:0})}};function et(e){let t,n,r,o,l,i,a,c,d,u;return{c(){t=z("div"),n=z("div"),r=z("div"),r.innerHTML='<img src="https://arepa.s3.amazonaws.com/oscar.png" alt="" class="svelte-byhrz7"/>',o=M(),l=z("div"),i=z("h2"),a=S(e[0]),c=M(),d=z("span"),u=S(e[1]),j(r,"class","Profile-avatar svelte-byhrz7"),j(i,"class","svelte-byhrz7"),j(d,"class","svelte-byhrz7"),j(l,"class","Profile-info svelte-byhrz7"),j(n,"class","Profile-content svelte-byhrz7"),j(t,"class","Profile")},m(e,s){C(e,t,s),w(t,n),w(n,r),w(n,o),w(n,l),w(l,i),w(i,a),w(l,c),w(l,d),w(d,u)},p(e,[t]){1&t&&L(a,e[0]),2&t&&L(u,e[1])},i:s,o:s,d(e){e&&_(t)}}}function tt(e,t,n){let{nickname:s}=t,{name:r}=t;return e.$$set=e=>{"nickname"in e&&n(0,s=e.nickname),"name"in e&&n(1,r=e.name)},[s,r]}var nt=class extends be{constructor(e){var t;super(),document.getElementById("svelte-byhrz7-style")||((t=z("style")).id="svelte-byhrz7-style",t.textContent=".Profile-content.svelte-byhrz7.svelte-byhrz7{display:flex;align-items:center}.Profile-avatar.svelte-byhrz7 img.svelte-byhrz7{width:42px;height:42px;border-radius:50%}.Profile-info.svelte-byhrz7.svelte-byhrz7{margin:0 0 0 0.5em}.Profile-info.svelte-byhrz7 h2.svelte-byhrz7{font-size:14px;color:black;margin:0;padding:0}.Profile-info.svelte-byhrz7 span.svelte-byhrz7{font-size:12px;font-weight:normal}",w(document.head,t)),he(this,e,tt,et,d,{nickname:0,name:1})}};function st(e){let t;return{c(){t=z("div"),t.innerHTML='<div class="Stories-container"><div class="Stories-head svelte-t733xm"><h2 class="svelte-t733xm">Historias</h2> \n      <span class="svelte-t733xm">Ver todas</span></div> \n    <div class="Stories-items svelte-t733xm"><div class="Stories-item svelte-t733xm"><div class="Stories-item-box svelte-t733xm"><img src="https://arepa.s3.amazonaws.com/oscar.png" alt="" class="svelte-t733xm"/></div> \n        <h2 class="svelte-t733xm">gndx\n          <span class="svelte-t733xm">10 horas antes</span></h2></div></div></div>',j(t,"class","Stories svelte-t733xm")},m(e,n){C(e,t,n)},p:s,i:s,o:s,d(e){e&&_(t)}}}var rt=class extends be{constructor(e){var t;super(),document.getElementById("svelte-t733xm-style")||((t=z("style")).id="svelte-t733xm-style",t.textContent=".Stories.svelte-t733xm.svelte-t733xm{border:1px solid rgba(219, 219, 219, 1);border-radius:4px;margin:1em 0;padding:0.5em 1em;background-color:white}.Stories-item.svelte-t733xm img.svelte-t733xm{width:32px;height:32px;border-radius:50%}.Stories-item.svelte-t733xm.svelte-t733xm{display:flex;align-items:center;margin:0 0 0.5em 0}.Stories-item.svelte-t733xm h2.svelte-t733xm{font-size:14px;color:black;margin:0 0 0 0.5em}.Stories-item.svelte-t733xm h2 span.svelte-t733xm{display:block;font-size:9px;text-transform:uppercase;color:gray}.Stories-head.svelte-t733xm.svelte-t733xm{display:flex;justify-content:space-between;align-items:center;padding:0.5em 0 0 0}.Stories-head.svelte-t733xm h2.svelte-t733xm{font-size:12px;font-weight:600}.Stories-head.svelte-t733xm span.svelte-t733xm{font-size:12px;font-weight:normal;color:black}.Stories-items.svelte-t733xm.svelte-t733xm{margin:0.5em 0 0.5em 0}.Stories-item-box.svelte-t733xm.svelte-t733xm{width:32px;height:32px;border:double 2px transparent;border-radius:100%;background-image:linear-gradient(#fff, #fff),\r\n      radial-gradient(circle at top left, #f09433, #bc1888);background-origin:border-box;background-clip:content-box, border-box}",w(document.head,t)),he(this,e,null,st,d,{})}};function ot(e){let t,n,r,o,l,i;return{c(){t=z("div"),n=z("div"),r=z("div"),o=S("© "),l=z("span"),l.textContent=""+e[0],i=S(" PUGSTAGRAM FROM PLATZI"),j(r,"class","Footer-copy"),j(n,"class","Footer-container"),j(t,"class","Footer svelte-kbe64f")},m(e,s){C(e,t,s),w(t,n),w(n,r),w(r,o),w(r,l),w(r,i)},p:s,i:s,o:s,d(e){e&&_(t)}}}function lt(e){return[(new Date).getFullYear()]}var it=class extends be{constructor(e){var t;super(),document.getElementById("svelte-kbe64f-style")||((t=z("style")).id="svelte-kbe64f-style",t.textContent=".Footer.svelte-kbe64f{font-size:11px;letter-spacing:1px;font-weight:normal;color:#c7c7c7}",w(document.head,t)),he(this,e,lt,ot,d,{})}};function at(e){let t,n,s,r,o,l,i,a;return s=new nt({props:{nickname:e[0],name:e[1]}}),o=new rt({}),i=new it({}),{c(){t=z("div"),n=z("div"),pe(s.$$.fragment),r=M(),pe(o.$$.fragment),l=M(),pe(i.$$.fragment),j(n,"class","SideBar-container svelte-v4nl10"),j(t,"class","SideBar svelte-v4nl10")},m(e,c){C(e,t,c),w(t,n),ve(s,n,null),w(n,r),ve(o,n,null),w(n,l),ve(i,n,null),a=!0},p(e,[t]){const n={};1&t&&(n.nickname=e[0]),2&t&&(n.name=e[1]),s.$set(n)},i(e){a||(le(s.$$.fragment,e),le(o.$$.fragment,e),le(i.$$.fragment,e),a=!0)},o(e){ie(s.$$.fragment,e),ie(o.$$.fragment,e),ie(i.$$.fragment,e),a=!1},d(e){e&&_(t),ge(s),ge(o),ge(i)}}}function ct(e,t,n){let{nickname:s}=t,{name:r}=t;return e.$$set=e=>{"nickname"in e&&n(0,s=e.nickname),"name"in e&&n(1,r=e.name)},[s,r]}var dt=class extends be{constructor(e){var t;super(),document.getElementById("svelte-v4nl10-style")||((t=z("style")).id="svelte-v4nl10-style",t.textContent=".SideBar.svelte-v4nl10{position:relative;padding:4.5em 0 0 0}.SideBar-container.svelte-v4nl10{position:fixed}",w(document.head,t)),he(this,e,ct,at,d,{nickname:0,name:1})}};function ut(e){let t,n,s,r;t=new Xe({props:{posts:e[0].posts}});const l=[e[0].user];let i={};for(let e=0;e<l.length;e+=1)i=o(i,l[e]);return s=new dt({props:i}),{c(){pe(t.$$.fragment),n=M(),pe(s.$$.fragment)},m(e,o){ve(t,e,o),C(e,n,o),ve(s,e,o),r=!0},p(e,n){const r={};1&n&&(r.posts=e[0].posts),t.$set(r);const o=1&n?ue(l,[fe(e[0].user)]):{};s.$set(o)},i(e){r||(le(t.$$.fragment,e),le(s.$$.fragment,e),r=!0)},o(e){ie(t.$$.fragment,e),ie(s.$$.fragment,e),r=!1},d(e){ge(t,e),e&&_(n),ge(s,e)}}}function ft(e){let t,n,s,r;return t=new Ce({}),s=new Se({props:{$$slots:{default:[ut]},$$scope:{ctx:e}}}),{c(){pe(t.$$.fragment),n=M(),pe(s.$$.fragment)},m(e,o){ve(t,e,o),C(e,n,o),ve(s,e,o),r=!0},p(e,[t]){const n={};3&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){r||(le(t.$$.fragment,e),le(s.$$.fragment,e),r=!0)},o(e){ie(t.$$.fragment,e),ie(s.$$.fragment,e),r=!1},d(e){ge(t,e),e&&_(n),ge(s,e)}}}function mt(e,t,n){let s={};var r;return r=async()=>{const e=await fetch("https://us-central1-pugstagram-co.cloudfunctions.net/data");n(0,s=await e.json())},q().$$.on_mount.push(r),[s]}var pt=new class extends be{constructor(e){var t;super(),document.getElementById("svelte-3rgneb-style")||((t=z("style")).id="svelte-3rgneb-style",t.textContent="@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');body{background-color:#fafafa;color:rgba(38, 38, 38, 0.7);font-family:\"Lato\", sans-serif;margin:0;padding:0}h1, h2, h3{margin:0;padding:0}",w(document.head,t)),he(this,e,mt,ft,d,{})}}({target:document.querySelector("main")});t.default=pt}]);