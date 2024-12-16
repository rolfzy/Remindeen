var content=function(){"use strict";var N=Object.defineProperty;var P=(l,o,a)=>o in l?N(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a;var c=(l,o,a)=>P(l,typeof o!="symbol"?o+"":o,a);var m,w;function l(n){return n}const o={matches:["*://*.google.com/*"],main(){console.log("Hello content.")}},a=((w=(m=globalThis.browser)==null?void 0:m.runtime)==null?void 0:w.id)==null?globalThis.chrome:globalThis.browser;function d(n,...e){}const v={debug:(...n)=>d(console.debug,...n),log:(...n)=>d(console.log,...n),warn:(...n)=>d(console.warn,...n),error:(...n)=>d(console.error,...n)},f=class f extends Event{constructor(e,t){super(f.EVENT_NAME,{}),this.newUrl=e,this.oldUrl=t}};c(f,"EVENT_NAME",y("wxt:locationchange"));let b=f;function y(n){var e;return`${(e=a==null?void 0:a.runtime)==null?void 0:e.id}:content:${n}`}function E(n){let e,t;return{run(){e==null&&(t=new URL(location.href),e=n.setInterval(()=>{let s=new URL(location.href);s.href!==t.href&&(window.dispatchEvent(new b(s,t)),t=s)},1e3))}}}const u=class u{constructor(e,t){c(this,"isTopFrame",window.self===window.top);c(this,"abortController");c(this,"locationWatcher",E(this));this.contentScriptName=e,this.options=t,this.abortController=new AbortController,this.isTopFrame?(this.listenForNewerScripts({ignoreFirstEvent:!0}),this.stopOldScripts()):this.listenForNewerScripts()}get signal(){return this.abortController.signal}abort(e){return this.abortController.abort(e)}get isInvalid(){return a.runtime.id==null&&this.notifyInvalidated(),this.signal.aborted}get isValid(){return!this.isInvalid}onInvalidated(e){return this.signal.addEventListener("abort",e),()=>this.signal.removeEventListener("abort",e)}block(){return new Promise(()=>{})}setInterval(e,t){const s=setInterval(()=>{this.isValid&&e()},t);return this.onInvalidated(()=>clearInterval(s)),s}setTimeout(e,t){const s=setTimeout(()=>{this.isValid&&e()},t);return this.onInvalidated(()=>clearTimeout(s)),s}requestAnimationFrame(e){const t=requestAnimationFrame((...s)=>{this.isValid&&e(...s)});return this.onInvalidated(()=>cancelAnimationFrame(t)),t}requestIdleCallback(e,t){const s=requestIdleCallback((...r)=>{this.signal.aborted||e(...r)},t);return this.onInvalidated(()=>cancelIdleCallback(s)),s}addEventListener(e,t,s,r){var i;t==="wxt:locationchange"&&this.isValid&&this.locationWatcher.run(),(i=e.addEventListener)==null||i.call(e,t.startsWith("wxt:")?y(t):t,s,{...r,signal:this.signal})}notifyInvalidated(){this.abort("Content script context invalidated"),v.debug(`Content script "${this.contentScriptName}" context invalidated`)}stopOldScripts(){window.postMessage({type:u.SCRIPT_STARTED_MESSAGE_TYPE,contentScriptName:this.contentScriptName},"*")}listenForNewerScripts(e){let t=!0;const s=r=>{var i,h;if(((i=r.data)==null?void 0:i.type)===u.SCRIPT_STARTED_MESSAGE_TYPE&&((h=r.data)==null?void 0:h.contentScriptName)===this.contentScriptName){const I=t;if(t=!1,I&&(e!=null&&e.ignoreFirstEvent))return;this.notifyInvalidated()}};addEventListener("message",s),this.onInvalidated(()=>removeEventListener("message",s))}};c(u,"SCRIPT_STARTED_MESSAGE_TYPE",y("wxt:content-script-started"));let g=u;const S=Symbol("null");let T=0;class K extends Map{constructor(){super(),this._objectHashes=new WeakMap,this._symbolHashes=new Map,this._publicKeys=new Map;const[e]=arguments;if(e!=null){if(typeof e[Symbol.iterator]!="function")throw new TypeError(typeof e+" is not iterable (cannot read property Symbol(Symbol.iterator))");for(const[t,s]of e)this.set(t,s)}}_getPublicKeys(e,t=!1){if(!Array.isArray(e))throw new TypeError("The keys parameter must be an array");const s=this._getPrivateKey(e,t);let r;return s&&this._publicKeys.has(s)?r=this._publicKeys.get(s):t&&(r=[...e],this._publicKeys.set(s,r)),{privateKey:s,publicKey:r}}_getPrivateKey(e,t=!1){const s=[];for(let r of e){r===null&&(r=S);const i=typeof r=="object"||typeof r=="function"?"_objectHashes":typeof r=="symbol"?"_symbolHashes":!1;if(!i)s.push(r);else if(this[i].has(r))s.push(this[i].get(r));else if(t){const h=`@@mkm-ref-${T++}@@`;this[i].set(r,h),s.push(h)}else return!1}return JSON.stringify(s)}set(e,t){const{publicKey:s}=this._getPublicKeys(e,!0);return super.set(s,t)}get(e){const{publicKey:t}=this._getPublicKeys(e);return super.get(t)}has(e){const{publicKey:t}=this._getPublicKeys(e);return super.has(t)}delete(e){const{publicKey:t,privateKey:s}=this._getPublicKeys(e);return!!(t&&super.delete(t)&&this._publicKeys.delete(s))}clear(){super.clear(),this._symbolHashes.clear(),this._publicKeys.clear()}get[Symbol.toStringTag](){return"ManyKeysMap"}get size(){return super.size}}new K;function A(){}function p(n,...e){}const _={debug:(...n)=>p(console.debug,...n),log:(...n)=>p(console.log,...n),warn:(...n)=>p(console.warn,...n),error:(...n)=>p(console.error,...n)};return(async()=>{try{const{main:n,...e}=o,t=new g("content",e);return await n(t)}catch(n){throw _.error('The content script "content" crashed on startup!',n),n}})()}();
content;