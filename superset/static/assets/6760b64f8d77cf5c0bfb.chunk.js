(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{3367:function(t,e,n){"use strict";function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[B]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[U]||!!t.constructor[U]||p(t)||d(t))}function u(t,e,n){void 0===n&&(n=!1),0===c(t)?(n?Object.keys:G)(t).forEach((function(r){n&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(n,r){return e(r,n,t)}))}function c(t){var e=t[B];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:d(t)?3:0}function a(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function f(t,e){return 2===c(t)?t.get(e):t[e]}function l(t,e,n){var r=c(t);2===r?t.set(e,n):3===r?(t.delete(e),t.add(n)):t[e]=n}function s(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return T&&t instanceof Map}function d(t){return W&&t instanceof Set}function h(t){return t.o||t.t}function b(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=q(t);delete e[B];for(var n=G(e),r=0;r<n.length;r++){var o=n[r],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function v(t,e){return void 0===e&&(e=!1),O(t)||o(t)||!i(t)?t:(c(t)>1&&(t.set=t.add=t.clear=t.delete=y),Object.freeze(t),e&&u(t,(function(t,e){return v(e,!0)}),!0),t)}function y(){r(2)}function O(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=H[t];return e||r(18,t),e}function j(){return z}function g(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function S(t){w(t),t.p.forEach(A),t.p=null}function w(t){t===z&&(z=t.l)}function P(t){return z={p:[],l:z,h:t,m:!0,_:0}}function A(t){var e=t[B];0===e.i||1===e.i?e.j():e.g=!0}function F(t,e){e._=e.p.length;var n=e.p[0],o=void 0!==t&&t!==n;return e.h.O||m("ES5").S(e,t,o),o?(n[B].P&&(S(e),r(4)),i(t)&&(t=D(e,t),e.l||_(e,t)),e.u&&m("Patches").M(n[B],t,e.u,e.s)):t=D(e,n,[]),S(e),e.u&&e.v(e.u,e.s),t!==J?t:void 0}function D(t,e,n){if(O(e))return e;var r=e[B];if(!r)return u(e,(function(o,i){return E(t,r,e,o,i,n)}),!0),e;if(r.A!==t)return e;if(!r.P)return _(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=b(r.k):r.o;u(3===r.i?new Set(o):o,(function(e,i){return E(t,r,o,e,i,n)})),_(t,o,!1),n&&t.u&&m("Patches").R(r,n,t.u,t.s)}return r.o}function E(t,e,n,r,u,c){if(o(u)){var f=D(t,u,c&&e&&3!==e.i&&!a(e.D,r)?c.concat(r):void 0);if(l(n,r,f),!o(f))return;t.m=!1}if(i(u)&&!O(u)){if(!t.h.N&&t._<1)return;D(t,u),e&&e.A.l||_(t,u)}}function _(t,e,n){void 0===n&&(n=!1),t.h.N&&t.m&&v(e,n)}function x(t,e){var n=t[B];return(n?h(n):t)[e]}function I(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function k(t){t.P||(t.P=!0,t.l&&k(t.l))}function M(t){t.o||(t.o=b(t.t))}function N(t,e,n){var r=p(e)?m("MapSet").T(e,n):d(e)?m("MapSet").F(e,n):t.O?function(t,e){var n=Array.isArray(t),r={i:n?1:0,A:e?e.A:j(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=r,i=Q;n&&(o=[r],i=V);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return r.k=a,r.j=c,a}(e,n):m("ES5").J(e,n);return(n?n.A:j()).p.push(r),r}function C(t){return o(t)||r(22,t),function t(e){if(!i(e))return e;var n,r=e[B],o=c(e);if(r){if(!r.P&&(r.i<4||!m("ES5").K(r)))return r.t;r.I=!0,n=R(e,o),r.I=!1}else n=R(e,o);return u(n,(function(e,o){r&&f(r.t,e)===o||l(n,e,t(o))})),3===o?new Set(n):n}(t)}function R(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return b(t)}var $,z,L="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),T="undefined"!=typeof Map,W="undefined"!=typeof Set,K="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=L?Symbol.for("immer-nothing"):(($={})["immer-nothing"]=!0,$),U=L?Symbol.for("immer-draftable"):"__$immer_draftable",B=L?Symbol.for("immer-state"):"__$immer_state",G=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),q=Object.getOwnPropertyDescriptors||function(t){var e={};return G(t).forEach((function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)})),e},H={},Q={get:function(t,e){if(e===B)return t;var n=h(t);if(!a(n,e))return function(t,e,n){var r,o=I(e,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(t.k):void 0}(t,n,e);var r=n[e];return t.I||!i(r)?r:r===x(t.t,e)?(M(t),t.o[e]=N(t.A.h,r,t)):r},has:function(t,e){return e in h(t)},ownKeys:function(t){return Reflect.ownKeys(h(t))},set:function(t,e,n){var r=I(h(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,n),!0;if(!t.P){var o=x(h(t),e),i=null==o?void 0:o[B];if(i&&i.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(s(n,o)&&(void 0!==n||a(t.t,e)))return!0;M(t),k(t)}return t.o[e]=n,t.D[e]=!0,!0},deleteProperty:function(t,e){return void 0!==x(t.t,e)||e in t.t?(t.D[e]=!1,M(t),k(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=h(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:n[e]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){r(12)}},V={};u(Q,(function(t,e){V[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),V.deleteProperty=function(t,e){return Q.deleteProperty.call(this,t[0],e)},V.set=function(t,e,n){return Q.set.call(this,t[0],e,n,t[0])};var X=new(function(){function t(t){this.O=K,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,n){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(t){var n=this;void 0===t&&(t=o);for(var r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];return u.produce(t,(function(t){var r;return(r=e).call.apply(r,[n,t].concat(i))}))}}var c;if("function"!=typeof e&&r(6),void 0!==n&&"function"!=typeof n&&r(7),i(t)){var a=P(this),f=N(this,t,void 0),l=!0;try{c=e(f),l=!1}finally{l?S(a):w(a)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return g(a,n),F(t,a)}),(function(t){throw S(a),t})):(g(a,n),F(c,a))}if(!t||"object"!=typeof t){if((c=e(t))===J)return;return void 0===c&&(c=t),this.N&&v(c,!0),c}r(21,t)},e.produceWithPatches=function(t,e){var n,r,o=this;return"function"==typeof t?function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(r))}))}:[this.produce(t,e,(function(t,e){n=t,r=e})),n,r]},e.createDraft=function(t){i(t)||r(8),o(t)&&(t=C(t));var e=P(this),n=N(this,t,void 0);return n[B].C=!0,w(e),n},e.finishDraft=function(t,e){var n=(t&&t[B]).A;return g(n,e),F(void 0,n)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!K&&r(20),this.O=t},e.applyPatches=function(t,e){var n;for(n=e.length-1;n>=0;n--){var r=e[n];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(n+1))}))},t}()),Y=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseProxies.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);e.a=Y},4311:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n(65),o=n(20);const i=r.g.div`
  height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,u=Object(r.g)(o.t)`
  width: 100%;
`},4405:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n(3367),o=n(0);function i(t){var e=Object(o.useState)(t),n=e[1];return[e[0],Object(o.useCallback)((function(t){n(Object(r.a)(t))}),[])]}function u(t,e,n){var i=Object(o.useMemo)((function(){return Object(r.a)(t)}),[t]);return Object(o.useReducer)(i,e,n)}},4406:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return c}));var r=n(373),o=n(350);const i=(t,e,n=!1,r=!1)=>{const o={};return n?o.adhoc_filters=[{expressionType:"SQL",clause:"WHERE",sqlExpression:"1 = 0"}]:null!=e&&0!==e.length&&(o.filters=[{col:t,op:r?"NOT IN":"IN",val:e}]),o},u=(t,e,n)=>{const r=[];return null!=e&&r.push({col:t,op:">=",val:e}),null!=n&&r.push({col:t,op:"<=",val:n}),r.length?{filters:r}:{}};function c({timeFormatter:t,numberFormatter:e}={}){return(n,i)=>{if(null==n)return o.b;if("boolean"==typeof n)return n?o.c:o.a;if(i===r.a.BOOLEAN)try{return JSON.parse(String(n).toLowerCase())?o.c:o.a}catch{return o.a}return"string"==typeof n?n:t&&i===r.a.TEMPORAL?t(n):e&&"number"==typeof n&&i===r.a.NUMERIC?e(n):String(n)}}},4717:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));n(52);var r=n(183),o=n.n(r),i=n(14),u=n.n(i),c=n(82),a=n.n(c),f=n(41),l=n.n(f),s=n(33),p=n.n(s),d=n(825),h=n(18),b=n(471),v=n(1421),y=n(0),O=n(20),m=n(118),j=n.n(m),g=n(177),S=n(4405),w=n(103),P=n(4311),A=n(4406),F=n(1);const{Option:D}=O.t;function E(t,e){switch(e.type){case"ownState":return t.ownState={...t.ownState,...e.ownState},t;case"filterState":return t.extraFormData=e.extraFormData,t.__cache=e.__cache,t.filterState={...t.filterState,...e.filterState},t;default:return t}}function _(t){var e;const{coltypeMap:n,data:r,filterState:i,formData:c,height:f,isRefreshing:s,width:O,setDataMask:m,setFocusedFilter:_,unsetFocusedFilter:x,appSection:I}=t,{enableEmptyFilter:k,multiSelect:M,showSearch:N,inverseSelection:C,inputRef:R,defaultToFirstItem:$,searchAllOptions:z}=c,L=Object(d.a)(c.groupby),[T]=L,[W]=Object(y.useState)(n),[K,J]=Object(y.useState)(i.value),U=Object(y.useMemo)(()=>{const t=[],e=[];return p()(r).call(r,n=>{null!=K&&l()(K).call(K,n[T])?t.push(n):e.push(n)}),[...t,...e]},[T,K,r]),[B,G]=Object(y.useState)(!1),[q,H]=Object(y.useState)(""),[Q,V]=Object(S.b)(E,{extraFormData:{},filterState:i}),X=Object(y.useCallback)(t=>{const e=k&&!C&&!(null!=t&&t.length),n=C&&null!=t&&t.length?` (${Object(h.e)("excluded")})`:"";V({type:"filterState",__cache:i,extraFormData:Object(A.c)(T,t,e,C),filterState:{label:`${(t||[]).join(", ")}${n}`,value:I===b.a.FILTER_CONFIG_MODAL&&$?void 0:t}})},[I,T,$,V,k,C,a()(i)]);Object(y.useEffect)(()=>{B||J(i.value),X(i.value)},[a()(i.value)]);const Y=I===b.a.FILTER_CONFIG_MODAL&&$,Z=Object(y.useCallback)(j()(t=>{V({type:"ownState",ownState:{coltypeMap:W,search:t}})},g.e),[]),tt=()=>{H(""),z&&V({type:"ownState",ownState:{coltypeMap:W,search:null}})},et=n[T],nt=Object(A.a)({timeFormatter:v.a});Object(y.useEffect)(()=>{if($&&void 0===i.value){const t=r[0]?u()(L).call(L,t=>r[0][t]):null;t&&void 0!==t[0]&&X(t)}else X(Y?null:i.value)},[T,Y,$,k,C,X,r,L,a()(i)]),Object(y.useEffect)(()=>{m(Q)},[a()(Q)]);const rt=0===r.length?Object(h.e)("No data"):Object(h.f)("%s option","%s options",r.length,r.length),ot=C?w.a.StopOutlined:w.a.CheckOutlined;return Object(F.d)(P.b,{height:f,width:O},Object(F.d)(P.a,{allowClear:!k,value:i.value||[],disabled:Y,showSearch:N,mode:M?"multiple":void 0,placeholder:rt,onSearch:t=>{z&&Z(t),H(t)},onSelect:tt,onBlur:()=>{tt(),x(),J(i.value)},onDropdownVisibleChange:G,onFocus:_,onChange:t=>{const e=Object(d.a)(t);0===e.length?X(null):X(e)},ref:R,loading:s,maxTagCount:5,menuItemSelectedIcon:Object(F.d)(ot,{iconSize:"m"})},u()(U).call(U,t=>{const[e]=u()(L).call(L,e=>t[e]);return(Object(F.d)(D,{key:`${e}`,value:e},nt(e,et)))}),q&&!o()(e=Object(d.a)(i.value)).call(e,t=>t===q)&&Object(F.d)(D,{value:q},`${Object(h.e)('Create "%s"',q)}`)))}}}]);