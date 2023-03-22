import{S as Md,i as Bd,s as Fd,k as Y,q as Ue,a as Le,l as J,m as H,r as Ve,h as D,c as Me,n as A,b as Ss,C as E,D as _o,E as $d,o as Wd,F as vn,G as wn,H as go,u as as,I as Hd}from"../chunks/index.6e93ac1d.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(n,e){if(!n)throw cn(e)},cn=function(n){return new Error("Firebase Database ("+ga.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ud=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],l=n[t++],u=n[t++],d=((i&7)<<18|(r&63)<<12|(l&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const r=n[t++],l=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|l&63)}}return e.join("")},Ki={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],l=i+1<n.length,u=l?n[i+1]:0,d=i+2<n.length,h=d?n[i+2]:0,_=r>>2,p=(r&3)<<4|u>>4;let g=(u&15)<<2|h>>6,y=h&63;d||(y=64,l||(g=64)),s.push(t[_],t[p],t[g],t[y])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ma(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ud(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||u==null||h==null||p==null)throw new Vd;const g=r<<2|u>>4;if(s.push(g),h!==64){const y=u<<4&240|h>>2;if(s.push(y),p!==64){const w=h<<6&192|p;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ya=function(n){const e=ma(n);return Ki.encodeByteArray(e,!0)},ls=function(n){return ya(n).replace(/\./g,"")},bi=function(n){try{return Ki.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){return xn(void 0,n)}function xn(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zd(t)||(n[t]=xn(n[t],e[t]));return n}function zd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=()=>qd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bi(n[1]);return e&&JSON.parse(e)},Yd=()=>{try{return Gd()||Kd()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jd=()=>{var n;return(n=Yd())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),u="";return[ls(JSON.stringify(t)),ls(JSON.stringify(l)),u].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function va(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zd())}function eh(){return typeof self=="object"&&self.self===self}function th(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wa(){return ga.NODE_ADMIN===!0}function nh(){try{return typeof indexedDB=="object"}catch{return!1}}function sh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="FirebaseError";class un extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ih,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],l=r?rh(r,s):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new un(i,u,s)}}function rh(n,e){return n.replace(oh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const oh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n){return JSON.parse(n)}function ie(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=kn(bi(r[0])||""),t=kn(bi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ah=function(n){const e=ba(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},lh=function(n){const e=ba(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Bt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ci(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ei(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],l=e[i];if(mo(r)&&mo(l)){if(!Ei(r,l))return!1}else if(r!==l)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function mo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],l=this.chain_[2],u=this.chain_[3],d=this.chain_[4],h,_;for(let p=0;p<80;p++){p<40?p<20?(h=u^r&(l^u),_=1518500249):(h=r^l^u,_=1859775393):p<60?(h=r&l|u&(r|l),_=2400959708):(h=r^l^u,_=3395469782);const g=(i<<5|i>>>27)+h+d+_+s[p]&4294967295;d=u,u=l,l=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let l=this.inbuf_;for(;i<t;){if(l===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[l]=e.charCodeAt(i),++l,++i,l===this.blockSize){this.compress_(r),l=0;break}}else for(;i<t;)if(r[l]=e[i],++l,++i,l===this.blockSize){this.compress_(r),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function dh(n,e){const t=new hh(n,e);return t.subscribe.bind(t)}class hh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");fh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=ai),i.error===void 0&&(i.error=ai),i.complete===void 0&&(i.complete=ai);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ai(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(n,e,t,s){let i;if(s<e?i="at least "+e:s>t&&(i=t===0?"none":"no more than "+t),i){const r=n+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(r)}};function Ne(n,e){return`${n} failed: ${e} argument `}function oe(n,e,t,s){if(!(s&&!t)&&typeof t!="function")throw new Error(Ne(n,e)+"must be a valid function.")}function yo(n,e,t,s){if(!(s&&!t)&&(typeof t!="object"||t===null))throw new Error(Ne(n,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(s)-56320;i=65536+(r<<10)+l}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ts=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n){return n&&n._delegate?n._delegate:n}class wt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xe;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gh(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(r);s===u&&l.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const l=this.instances.get(i);return l&&e(l,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_h(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _h(n){return n===Dt?void 0:n}function gh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ca(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=[];var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Sa={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},mh=j.INFO,yh={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},vh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=yh[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class As{constructor(e){this.name=e,this._logLevel=mh,this._logHandler=vh,this._userLogHandler=null,Qi.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}function wh(n){Qi.forEach(e=>{e.setLogLevel(n)})}function bh(n,e){for(const t of Qi){let s=null;e&&e.level&&(s=Sa[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,r,...l)=>{const u=l.map(d=>{if(d==null)return null;if(typeof d=="string")return d;if(typeof d=="number"||typeof d=="boolean")return d.toString();if(d instanceof Error)return d.message;try{return JSON.stringify(d)}catch{return null}}).filter(d=>d).join(" ");r>=(s??i.logLevel)&&n({level:j[r].toLowerCase(),message:u,args:l,type:i.name})}}}const Ch=(n,e)=>e.some(t=>n instanceof t);let vo,wo;function Eh(){return vo||(vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sh(){return wo||(wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ia=new WeakMap,Si=new WeakMap,Ta=new WeakMap,li=new WeakMap,Yi=new WeakMap;function Ih(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",l)},r=()=>{t(_t(n.result)),i()},l=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Ia.set(t,n)}).catch(()=>{}),Yi.set(e,n),e}function Th(n){if(Si.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",l),n.removeEventListener("abort",l)},r=()=>{t(),i()},l=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",l),n.addEventListener("abort",l)});Si.set(n,e)}let Ii={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Si.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ta.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ah(n){Ii=n(Ii)}function Ph(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ci(this),e,...t);return Ta.set(s,e.sort?e.sort():[e]),_t(s)}:Sh().includes(n)?function(...e){return n.apply(ci(this),e),_t(Ia.get(this))}:function(...e){return _t(n.apply(ci(this),e))}}function xh(n){return typeof n=="function"?Ph(n):(n instanceof IDBTransaction&&Th(n),Ch(n,Eh())?new Proxy(n,Ii):n)}function _t(n){if(n instanceof IDBRequest)return Ih(n);if(li.has(n))return li.get(n);const e=xh(n);return e!==n&&(li.set(n,e),Yi.set(e,n)),e}const ci=n=>Yi.get(n);function kh(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const l=indexedDB.open(n,e),u=_t(l);return s&&l.addEventListener("upgradeneeded",d=>{s(_t(l.result),d.oldVersion,d.newVersion,_t(l.transaction))}),t&&l.addEventListener("blocked",()=>t()),u.then(d=>{r&&d.addEventListener("close",()=>r()),i&&d.addEventListener("versionchange",()=>i())}).catch(()=>{}),u}const Nh=["get","getKey","getAll","getAllKeys","count"],Rh=["put","add","delete","clear"],ui=new Map;function bo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ui.get(e))return ui.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Rh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Nh.includes(t)))return;const r=async function(l,...u){const d=this.transaction(l,i?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),i&&d.done]))[0]};return ui.set(e,r),r}Ah(n=>({...n,get:(e,t,s)=>bo(e,t)||n.get(e,t,s),has:(e,t)=>!!bo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Oh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Oh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ti="@firebase/app",Co="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new As("@firebase/app"),Lh="@firebase/app-compat",Mh="@firebase/analytics-compat",Bh="@firebase/analytics",Fh="@firebase/app-check-compat",$h="@firebase/app-check",Wh="@firebase/auth",Hh="@firebase/auth-compat",Uh="@firebase/database",Vh="@firebase/database-compat",jh="@firebase/functions",zh="@firebase/functions-compat",qh="@firebase/installations",Gh="@firebase/installations-compat",Kh="@firebase/messaging",Qh="@firebase/messaging-compat",Yh="@firebase/performance",Jh="@firebase/performance-compat",Xh="@firebase/remote-config",Zh="@firebase/remote-config-compat",ef="@firebase/storage",tf="@firebase/storage-compat",nf="@firebase/firestore",sf="@firebase/firestore-compat",rf="firebase",of="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="[DEFAULT]",af={[Ti]:"fire-core",[Lh]:"fire-core-compat",[Bh]:"fire-analytics",[Mh]:"fire-analytics-compat",[$h]:"fire-app-check",[Fh]:"fire-app-check-compat",[Wh]:"fire-auth",[Hh]:"fire-auth-compat",[Uh]:"fire-rtdb",[Vh]:"fire-rtdb-compat",[jh]:"fire-fn",[zh]:"fire-fn-compat",[qh]:"fire-iid",[Gh]:"fire-iid-compat",[Kh]:"fire-fcm",[Qh]:"fire-fcm-compat",[Yh]:"fire-perf",[Jh]:"fire-perf-compat",[Xh]:"fire-rc",[Zh]:"fire-rc-compat",[ef]:"fire-gcs",[tf]:"fire-gcs-compat",[nf]:"fire-fst",[sf]:"fire-fst-compat","fire-js":"fire-js",[rf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Map,Nn=new Map;function us(n,e){try{n.container.addComponent(e)}catch(t){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Aa(n,e){n.container.addOrOverwriteComponent(e)}function nn(n){const e=n.name;if(Nn.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Nn.set(e,n);for(const t of Ct.values())us(t,n);return!0}function Pa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function lf(n,e,t=bt){Pa(n,e).clearInstance(t)}function cf(){Nn.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},at=new Is("app","Firebase",uf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let df=class{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=of;function Xi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bt,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw at.create("bad-app-name",{appName:String(i)});if(t||(t=Jd()),!t)throw at.create("no-options");const r=Ct.get(i);if(r){if(Ei(t,r.options)&&Ei(s,r.config))return r;throw at.create("duplicate-app",{appName:i})}const l=new Ea(i);for(const d of Nn.values())l.addComponent(d);const u=new df(t,s,l);return Ct.set(i,u),u}function hf(n=bt){const e=Ct.get(n);if(!e&&n===bt)return Xi();if(!e)throw at.create("no-app",{appName:n});return e}function ff(){return Array.from(Ct.values())}async function xa(n){const e=n.name;Ct.has(e)&&(Ct.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function gt(n,e,t){var s;let i=(s=af[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),l=e.match(/\s|\//);if(r||l){const u=[`Unable to register library "${i}" with version "${e}":`];r&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(u.join(" "));return}nn(new wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ka(n,e){if(n!==null&&typeof n!="function")throw at.create("invalid-log-argument");bh(n,e)}function Na(n){wh(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="firebase-heartbeat-database",_f=1,Rn="firebase-heartbeat-store";let di=null;function Ra(){return di||(di=kh(pf,_f,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}}).catch(n=>{throw at.create("idb-open",{originalErrorMessage:n.message})})),di}async function gf(n){try{return(await Ra()).transaction(Rn).objectStore(Rn).get(Da(n))}catch(e){if(e instanceof un)Ft.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(t.message)}}}async function Eo(n,e){try{const s=(await Ra()).transaction(Rn,"readwrite");return await s.objectStore(Rn).put(e,Da(n)),s.done}catch(t){if(t instanceof un)Ft.warn(t.message);else{const s=at.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(s.message)}}}function Da(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=1024,yf=30*24*60*60*1e3;class vf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=So();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=yf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:t,unsentEntries:s}=wf(this._heartbeatsCache.heartbeats),i=ls(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function So(){return new Date().toISOString().substring(0,10)}function wf(n,e=mf){const t=[];let s=n.slice();for(const i of n){const r=t.find(l=>l.agent===i.agent);if(r){if(r.dates.push(i.date),Io(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Io(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class bf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nh()?sh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Io(n){return ls(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n){nn(new wt("platform-logger",e=>new Dh(e),"PRIVATE")),nn(new wt("heartbeat",e=>new vf(e),"PRIVATE")),gt(Ti,Co,n),gt(Ti,Co,"esm2017"),gt("fire-js","")}Cf("");const Ef=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:un,SDK_VERSION:Ji,_DEFAULT_ENTRY_NAME:bt,_addComponent:us,_addOrOverwriteComponent:Aa,_apps:Ct,_clearComponents:cf,_components:Nn,_getProvider:Pa,_registerComponent:nn,_removeServiceInstance:lf,deleteApp:xa,getApp:hf,getApps:ff,initializeApp:Xi,onLog:ka,registerVersion:gt,setLogLevel:Na},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this._delegate=e,this.firebase=t,us(e,new wt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),xa(this._delegate)))}_getService(e,t=bt){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=bt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){us(this._delegate,e)}_addOrOverwriteComponent(e){Aa(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},To=new Is("app-compat","Firebase",If);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n){const e={},t={__esModule:!0,initializeApp:r,app:i,registerVersion:gt,setLogLevel:Na,onLog:ka,apps:null,SDK_VERSION:Ji,INTERNAL:{registerComponent:u,removeApp:s,useAsService:d,modularAPIs:Ef}};t.default=t,Object.defineProperty(t,"apps",{get:l});function s(h){delete e[h]}function i(h){if(h=h||bt,!Fe(e,h))throw To.create("no-app",{appName:h});return e[h]}i.App=n;function r(h,_={}){const p=Xi(h,_);if(Fe(e,p.name))return e[p.name];const g=new n(p,t);return e[p.name]=g,g}function l(){return Object.keys(e).map(h=>e[h])}function u(h){const _=h.name,p=_.replace("-compat","");if(nn(h)&&h.type==="PUBLIC"){const g=(y=i())=>{if(typeof y[p]!="function")throw To.create("invalid-app-argument",{appName:_});return y[p]()};h.serviceProps!==void 0&&xn(g,h.serviceProps),t[p]=g,n.prototype[p]=function(...y){return this._getService.bind(this,_).apply(this,h.multipleInstances?y:[])}}return h.type==="PUBLIC"?t[p]:null}function d(h,_){return _==="serverAuth"?null:_}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){const n=Tf(Sf);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Oa,extendNamespace:e,createSubscribe:dh,ErrorFactory:Is,deepExtend:xn});function e(t){xn(n,t)}return n}const Af=Oa();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new As("@firebase/app-compat"),Pf="@firebase/app-compat",xf="0.2.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n){gt(Pf,xf,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(eh()&&self.firebase!==void 0){Ao.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Ao.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ps=Af;kf();var Nf="firebase",Rf="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps.registerVersion(Nf,Rf,"app-compat");const Po="@firebase/database",xo="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La="";function Ma(n){La=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:kn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Fe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Df(e)}}catch{}return new Of},Lt=Ba("localStorage"),Ai=Ba("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new As("@firebase/database"),Fa=function(){let n=1;return function(){return n++}}(),$a=function(n){const e=ph(n),t=new uh;t.update(e);const s=t.digest();return Ki.encodeByteArray(s)},Un=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Un.apply(null,s):typeof s=="object"?e+=ie(s):e+=s,e+=" "}return e};let Mt=null,ko=!0;const Wa=function(n,e){v(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(en.logLevel=j.VERBOSE,Mt=en.log.bind(en),e&&Ai.set("logging_enabled",!0)):typeof n=="function"?Mt=n:(Mt=null,Ai.remove("logging_enabled"))},le=function(...n){if(ko===!0&&(ko=!1,Mt===null&&Ai.get("logging_enabled")===!0&&Wa(!0)),Mt){const e=Un.apply(null,n);Mt(e)}},Vn=function(n){return function(...e){le(n,...e)}},Pi=function(...n){const e="FIREBASE INTERNAL ERROR: "+Un(...n);en.error(e)},st=function(...n){const e=`FIREBASE FATAL ERROR: ${Un(...n)}`;throw en.error(e),new Error(e)},ve=function(...n){const e="FIREBASE WARNING: "+Un(...n);en.warn(e)},Lf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Mf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Et="[MIN_NAME]",ct="[MAX_NAME]",Ut=function(n,e){if(n===e)return 0;if(n===Et||e===ct)return-1;if(e===Et||n===ct)return 1;{const t=No(n),s=No(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Bf=function(n,e){return n===e?0:n<e?-1:1},bn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ie(e))},Zi=function(n){if(typeof n!="object"||n===null)return ie(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ie(e[s]),t+=":",t+=Zi(n[e[s]]);return t+="}",t},Ha=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ce(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ua=function(n){v(!xs(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,l,u,d;n===0?(r=0,l=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(u=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=u+s,l=Math.round(n*Math.pow(2,t-u)-Math.pow(2,t))):(r=0,l=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(d=t;d;d-=1)h.push(l%2?1:0),l=Math.floor(l/2);for(d=e;d;d-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const _=h.join("");let p="";for(d=0;d<64;d+=8){let g=parseInt(_.substr(d,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},Ff=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$f=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Hf=new RegExp("^-?(0*)\\d{1,10}$"),Uf=-2147483648,Vf=2147483647,No=function(n){if(Hf.test(n)){const e=Number(n);if(e>=Uf&&e<=Vf)return e}return null},dn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ve("Exception was thrown by user callback.",t),e},Math.floor(0))}},jf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},In=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="5",Va="v",ja="s",za="r",qa="f",Ga=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ka="ls",Qa="p",xi="ac",Ya="websocket",Ja="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,s,i,r=!1,l="",u=!1,d=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=l,this.includeNamespaceInQueryParams=u,this.isUsingEmulator=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Za(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let s;if(e===Ya)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ja)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gf(n)&&(t.ns=n.namespace);const i=[];return ce(t,(r,l)=>{i.push(r+"="+l)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.counters_={}}incrementCounter(e,t=1){Fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={},fi={};function tr(n){const e=n.toString();return hi[e]||(hi[e]=new Kf),hi[e]}function Qf(n,e){const t=n.toString();return fi[t]||(fi[t]=e()),fi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&dn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="start",Jf="close",Xf="pLPCommand",Zf="pRTLPCB",el="id",tl="pw",nl="ser",ep="cb",tp="seg",np="ts",sp="d",ip="dframe",sl=1870,il=30,rp=sl-il,op=25e3,ap=3e4;class ft{constructor(e,t,s,i,r,l,u){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=l,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vn(e),this.stats_=tr(t),this.urlFn=d=>(this.appCheckToken&&(d[xi]=this.appCheckToken),Za(t,Ja,d))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ap)),Mf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nr((...r)=>{const[l,u,d,h,_]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===Ro)this.id=u,this.password=d;else if(l===Jf)u?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(u,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...r)=>{const[l,u]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(l,u)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ro]="t",s[nl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ep]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Va]=er,this.transportSessionId&&(s[ja]=this.transportSessionId),this.lastSessionId&&(s[Ka]=this.lastSessionId),this.applicationId&&(s[Qa]=this.applicationId),this.appCheckToken&&(s[xi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ga.test(location.hostname)&&(s[za]=qa);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ft.forceAllow_=!0}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){return ft.forceAllow_?!0:!ft.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ff()&&!$f()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ya(t),i=Ha(s,rp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[ip]="t",s[el]=e,s[tl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ie(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class nr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fa(),window[Xf+this.uniqueCallbackIdentifier]=e,window[Zf+this.uniqueCallbackIdentifier]=t,this.myIFrame=nr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(u){le("frame writing exception"),u.stack&&le(u.stack),le(u)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[el]=this.myID,e[tl]=this.myPW,e[nl]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+il+s.length<=sl;){const l=this.pendingSegs.shift();s=s+"&"+tp+i+"="+l.seg+"&"+np+i+"="+l.ts+"&"+sp+i+"="+l.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(op)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=16384,cp=45e3;let ds=null;typeof MozWebSocket<"u"?ds=MozWebSocket:typeof WebSocket<"u"&&(ds=WebSocket);class je{constructor(e,t,s,i,r,l,u){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vn(this.connId),this.stats_=tr(t),this.connURL=je.connectionURL_(t,l,u,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const l={};return l[Va]=er,typeof location<"u"&&location.hostname&&Ga.test(location.hostname)&&(l[za]=qa),t&&(l[ja]=t),s&&(l[Ka]=s),i&&(l[xi]=i),r&&(l[Qa]=r),Za(e,Ya,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lt.set("previous_websocket_failure",!0);try{let s;wa(),this.mySock=new ds(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ds!==null&&!je.forceDisallow_}static previouslyFailed(){return Lt.isInMemoryStorage||Lt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Lt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=kn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ha(t,lp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2;je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ft,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=je&&je.isAvailable();let s=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[je];else{const i=this.transports_=[];for(const r of sn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);sn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}sn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=6e4,dp=5e3,hp=10*1024,fp=100*1024,pi="t",Do="d",pp="s",Oo="r",_p="e",Lo="o",Mo="a",Bo="n",Fo="p",gp="h";class mp{constructor(e,t,s,i,r,l,u,d,h,_){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=l,this.onReady_=u,this.onDisconnect_=d,this.onKill_=h,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vn("c:"+this.id+":"),this.transportManager_=new sn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=In(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pi in e){const t=e[pi];t===Mo?this.upgradeIfSecondaryHealthy_():t===Oo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Lo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=bn("t",e),s=bn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=bn("t",e),s=bn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=bn(pi,e);if(Do in e){const s=e[Do];if(t===gp){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Bo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===pp?this.onConnectionShutdown_(s):t===Oo?this.onReset_(s):t===_p?Pi("Server Error: "+s):t===Lo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),er!==s&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),In(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(up))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):In(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends ol{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!va()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hs}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=32,Wo=768;class B{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function O(){return new B("")}function P(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function St(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new B(n.pieces_,e)}function sr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function yp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Dn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function al(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new B(e,0)}function X(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof B)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new B(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function Ie(n,e){const t=P(n),s=P(e);if(t===null)return e;if(t===s)return Ie(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function vp(n,e){const t=Dn(n,0),s=Dn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Ut(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function ir(n,e){if(St(n)!==St(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ze(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(St(n)>St(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class wp{constructor(e,t){this.errorPrefix_=t,this.parts_=Dn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ts(this.parts_[s]);ll(this)}}function bp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ts(e),ll(n)}function Cp(n){const e=n.parts_.pop();n.byteLength_-=Ts(e),n.parts_.length>0&&(n.byteLength_-=1)}function ll(n){if(n.byteLength_>Wo)throw new Error(n.errorPrefix_+"has a key path longer than "+Wo+" bytes ("+n.byteLength_+").");if(n.parts_.length>$o)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$o+") or object contains a cycle "+Ot(n))}function Ot(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ol{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new rr}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=1e3,Ep=60*5*1e3,Ho=30*1e3,Sp=1.3,Ip=3e4,Tp="server_kill",Uo=3;class lt extends rl{constructor(e,t,s,i,r,l,u,d){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=l,this.appCheckTokenProvider_=u,this.authOverride_=d,this.id=lt.nextPersistentConnectionId_++,this.log_=Vn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cn,this.maxReconnectDelay_=Ep,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!wa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ie(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new xe,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const u=l.d;l.s==="ok"?t.resolve(u):t.reject(u)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+r),this.listens.has(l)||this.listens.set(l,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(l).has(r),"listen() called twice for same path/queryId.");const u={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(l).set(r,u),this.connected_&&this.sendListen_(u)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},l="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(l,r,u=>{const d=u.d,h=u.s;lt.warnOnListenWarnings_(d,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",u),h!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(h,d))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Fe(e,"w")){const s=Bt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ho)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ah(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,l=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},l="n";i&&(r.q=s,r.t=i),this.sendRequest(l,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,l=>{i&&setTimeout(()=>{i(l.s,l.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const l={p:t,d:s};r!==void 0&&(l.h=r),this.outstandingPuts_.push({action:e,request:l,onComplete:i}),this.outstandingPutCount_++;const u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Pi("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ip&&(this.reconnectDelay_=Cn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+lt.nextConnectionId_++,r=this.lastSessionId;let l=!1,u=null;const d=function(){u?u.close():(l=!0,s())},h=function(p){v(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(p)};this.realtime_={close:d,sendRequest:h};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);l?le("getToken() completed but was canceled"):(le("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,u=new mp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,y=>{ve(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tp)},r))}catch(p){this.log_("Failed to get token: "+p),l||(this.repoInfo_.nodeAdmin&&ve(p),d())}}}interrupt(e){le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ci(this.interruptReasons_)&&(this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Zi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new B(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){le("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uo&&(this.reconnectDelay_=Ho,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){le("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+La.replace(/\./g,"-")]=1,va()?e["framework.cordova"]=1:th()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hs.getInstance().currentlyOnline();return Ci(this.interruptReasons_)&&e}}lt.nextPersistentConnectionId_=0;lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new k(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new k(Et,e),i=new k(Et,t);return this.compare(s,i)!==0}minPost(){return k.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class cl extends ks{static get __EMPTY_NODE(){return rs}static set __EMPTY_NODE(e){rs=e}compare(e,t){return Ut(e.name,t.name)}isDefinedOn(e){throw cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return k.MIN}maxPost(){return new k(ct,rs)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,rs)}toString(){return".key"}}const nt=new cl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?s(e.key,t):1,i&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ae.RED,this.left=i??ke.EMPTY_NODE,this.right=r??ke.EMPTY_NODE}copy(e,t,s,i,r){return new ae(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class Ap{copy(e,t,s,i,r){return this}insert(e,t,s){return new ae(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ke{constructor(e,t=ke.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ke(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new os(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new os(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new os(this.root_,null,this.comparator_,!0,e)}}ke.EMPTY_NODE=new Ap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n,e){return Ut(n.name,e.name)}function or(n,e){return Ut(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;function xp(n){ki=n}const ul=function(n){return typeof n=="number"?"number:"+Ua(n):"string:"+n},dl=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fe(e,".sv"),"Priority must be a string or number.")}else v(n===ki||n.isEmpty(),"priority of unexpected type.");v(n===ki||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;class re{constructor(e,t=re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dl(this.priorityNode_)}static set __childrenNodeConstructor(e){Vo=e}static get __childrenNodeConstructor(){return Vo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:P(e)===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=P(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||St(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,re.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ul(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ua(this.value_):e+=this.value_,this.lazyHash_=$a(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof re.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=re.VALUE_TYPE_ORDER.indexOf(t),r=re.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl,fl;function kp(n){hl=n}function Np(n){fl=n}class Rp extends ks{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ut(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return k.MIN}maxPost(){return new k(ct,new re("[PRIORITY-POST]",fl))}makePost(e,t){const s=hl(e);return new k(t,new re("[PRIORITY-POST]",s))}toString(){return".priority"}}const K=new Rp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=Math.log(2);class Op{constructor(e){const t=r=>parseInt(Math.log(r)/Dp,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fs=function(n,e,t,s){n.sort(e);const i=function(d,h){const _=h-d;let p,g;if(_===0)return null;if(_===1)return p=n[d],g=t?t(p):p,new ae(g,p.node,ae.BLACK,null,null);{const y=parseInt(_/2,10)+d,w=i(d,y),C=i(y+1,h);return p=n[y],g=t?t(p):p,new ae(g,p.node,ae.BLACK,w,C)}},r=function(d){let h=null,_=null,p=n.length;const g=function(w,C){const L=p-w,ee=p;p-=w;const ne=i(L+1,ee),F=n[L],we=t?t(F):F;y(new ae(we,F.node,C,null,ne))},y=function(w){h?(h.left=w,h=w):(_=w,h=w)};for(let w=0;w<d.count;++w){const C=d.nextBitIsOne(),L=Math.pow(2,d.count-(w+1));C?g(L,ae.BLACK):(g(L,ae.BLACK),g(L,ae.RED))}return _},l=new Op(n.length),u=r(l);return new ke(s||e,u)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;const Zt={};class ot{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return v(Zt&&K,"ChildrenNode.ts has not been loaded"),_i=_i||new ot({".priority":Zt},{".priority":K}),_i}get(e){const t=Bt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ke?t:null}hasIndex(e){return Fe(this.indexSet_,e.toString())}addIndex(e,t){v(e!==nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(k.Wrap);let l=r.getNext();for(;l;)i=i||e.isDefinedOn(l.node),s.push(l),l=r.getNext();let u;i?u=fs(s,e.getCompare()):u=Zt;const d=e.toString(),h=Object.assign({},this.indexSet_);h[d]=e;const _=Object.assign({},this.indexes_);return _[d]=u,new ot(_,h)}addToIndexes(e,t){const s=cs(this.indexes_,(i,r)=>{const l=Bt(this.indexSet_,r);if(v(l,"Missing index implementation for "+r),i===Zt)if(l.isDefinedOn(e.node)){const u=[],d=t.getIterator(k.Wrap);let h=d.getNext();for(;h;)h.name!==e.name&&u.push(h),h=d.getNext();return u.push(e),fs(u,l.getCompare())}else return Zt;else{const u=t.get(e.name);let d=i;return u&&(d=d.remove(new k(e.name,u))),d.insert(e,e.node)}});return new ot(s,this.indexSet_)}removeFromIndexes(e,t){const s=cs(this.indexes_,i=>{if(i===Zt)return i;{const r=t.get(e.name);return r?i.remove(new k(e.name,r)):i}});return new ot(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En;class S{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dl(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return En||(En=new S(new ke(or),null,ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||En}updatePriority(e){return this.children_.isEmpty()?this:new S(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?En:t}}getChild(e){const t=P(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new k(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const l=i.isEmpty()?En:this.priorityNode_;return new S(i,l,r)}}updateChild(e,t){const s=P(e);if(s===null)return t;{v(P(e)!==".priority"||St(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(K,(l,u)=>{t[l]=u.val(e),s++,r&&S.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):r=!1}),!e&&r&&i<2*s){const l=[];for(const u in t)l[u]=t[u];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ul(this.getPriority().val())+":"),this.forEachChild(K,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":$a(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new k(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new k(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new k(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jn?-1:0}withIndex(e){if(e===nt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new S(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(K),i=t.getIterator(K);let r=s.getNext(),l=i.getNext();for(;r&&l;){if(r.name!==l.name||!r.node.equals(l.node))return!1;r=s.getNext(),l=i.getNext()}return r===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===nt?null:this.indexMap_.get(e.toString())}}S.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Lp extends S{constructor(){super(new ke(or),S.EMPTY_NODE,ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return S.EMPTY_NODE}isEmpty(){return!1}}const jn=new Lp;Object.defineProperties(k,{MIN:{value:new k(Et,S.EMPTY_NODE)},MAX:{value:new k(ct,jn)}});cl.__EMPTY_NODE=S.EMPTY_NODE;re.__childrenNodeConstructor=S;xp(jn);Np(jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=!0;function Z(n,e=null){if(n===null)return S.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new re(t,Z(e))}if(!(n instanceof Array)&&Mp){const t=[];let s=!1;if(ce(n,(l,u)=>{if(l.substring(0,1)!=="."){const d=Z(u);d.isEmpty()||(s=s||!d.getPriority().isEmpty(),t.push(new k(l,d)))}}),t.length===0)return S.EMPTY_NODE;const r=fs(t,Pp,l=>l.name,or);if(s){const l=fs(t,K.getCompare());return new S(r,Z(e),new ot({".priority":l},{".priority":K}))}else return new S(r,Z(e),ot.Default)}else{let t=S.EMPTY_NODE;return ce(n,(s,i)=>{if(Fe(n,s)&&s.substring(0,1)!=="."){const r=Z(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Z(e))}}kp(Z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ks{constructor(e){super(),this.indexPath_=e,v(!x(e)&&P(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ut(e.name,t.name):r}makePost(e,t){const s=Z(e),i=S.EMPTY_NODE.updateChild(this.indexPath_,s);return new k(t,i)}maxPost(){const e=S.EMPTY_NODE.updateChild(this.indexPath_,jn);return new k(ct,e)}toString(){return Dn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends ks{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ut(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,t){const s=Z(e);return new k(t,s)}toString(){return".value"}}const lr=new Bp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){return{type:"value",snapshotNode:n}}function rn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function On(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ln(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Fp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,l){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const u=e.getImmediateChild(t);return u.getChild(i).equals(s.getChild(i))&&u.isEmpty()===s.isEmpty()||(l!=null&&(s.isEmpty()?e.hasChild(t)?l.trackChildChange(On(t,u)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):u.isEmpty()?l.trackChildChange(rn(t,s)):l.trackChildChange(Ln(t,s,u))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(K,(i,r)=>{t.hasChild(i)||s.trackChildChange(On(i,r))}),t.isLeafNode()||t.forEachChild(K,(i,r)=>{if(e.hasChild(i)){const l=e.getImmediateChild(i);l.equals(r)||s.trackChildChange(Ln(i,r,l))}else s.trackChildChange(rn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?S.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.indexedFilter_=new cr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mn.getStartPost_(e),this.endPost_=Mn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,l){return this.matches(new k(t,s))||(s=S.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,l)}updateFullNode(e,t,s){t.isLeafNode()&&(t=S.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(S.EMPTY_NODE);const r=this;return t.forEachChild(K,(l,u)=>{r.matches(new k(l,u))||(i=i.updateImmediateChild(l,S.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,l){return this.rangedFilter_.matches(new k(t,s))||(s=S.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,l):this.fullLimitUpdateChild_(e,t,s,r,l)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=S.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=S.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;r.hasNext()&&l<this.limit_;){const u=r.getNext();if(this.withinDirectionalStart(u))if(this.withinDirectionalEnd(u))i=i.updateImmediateChild(u.name,u.node),l++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(S.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let l=0;for(;r.hasNext();){const u=r.getNext();l<this.limit_&&this.withinDirectionalStart(u)&&this.withinDirectionalEnd(u)?l++:i=i.updateImmediateChild(u.name,S.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let l;if(this.reverse_){const p=this.index_.getCompare();l=(g,y)=>p(y,g)}else l=this.index_.getCompare();const u=e;v(u.numChildren()===this.limit_,"");const d=new k(t,s),h=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),_=this.rangedFilter_.matches(d);if(u.hasChild(t)){const p=u.getImmediateChild(t);let g=i.getChildAfterChild(this.index_,h,this.reverse_);for(;g!=null&&(g.name===t||u.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const y=g==null?1:l(g,d);if(_&&!s.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(Ln(t,s,p)),u.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(On(t,p));const C=u.updateImmediateChild(t,S.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(rn(g.name,g.node)),C.updateImmediateChild(g.name,g.node)):C}}else return s.isEmpty()?e:_&&l(h,d)>=0?(r!=null&&(r.trackChildChange(On(h.name,h.node)),r.trackChildChange(rn(t,s))),u.updateImmediateChild(t,s).updateImmediateChild(h.name,S.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=K}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Et}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ct}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===K}copy(){const e=new Ns;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wp(n){return n.loadsAllData()?new cr(n.getIndex()):n.hasLimit()?new $p(n):new Mn(n)}function Hp(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function Up(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Ni(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function Vp(n,e,t){let s;return n.index_===nt||t?s=Ni(n,e,t):s=Ni(n,e,ct),s.startAfterSet_=!0,s}function Ri(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function jp(n,e,t){let s;return n.index_===nt||t?s=Ri(n,e,t):s=Ri(n,e,Et),s.endBeforeSet_=!0,s}function Rs(n,e){const t=n.copy();return t.index_=e,t}function jo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===K?t="$priority":n.index_===lr?t="$value":n.index_===nt?t="$key":(v(n.index_ instanceof ar,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ie(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ie(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ie(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ie(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ie(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function zo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==K&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends rl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Vn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const l=ps.getListenId_(e,s),u={};this.listens_[l]=u;const d=jo(e._queryParams);this.restRequest_(r+".json",d,(h,_)=>{let p=_;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(r,p,!1,s),Bt(this.listens_,l)===u){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",i(g,null)}})}unlisten(e,t){const s=ps.getListenId_(e,t);delete this.listens_[s]}get(e){const t=jo(e._queryParams),s=e._path.toString(),i=new xe;return this.restRequest_(s+".json",t,(r,l)=>{let u=l;r===404&&(u=null,r=null),r===null?(this.onDataUpdate_(s,u,!1,null),i.resolve(u)):i.reject(new Error(u))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ch(t);this.log_("Sending REST request for "+l);const u=new XMLHttpRequest;u.onreadystatechange=()=>{if(s&&u.readyState===4){this.log_("REST Response for "+l+" received. status:",u.status,"response:",u.responseText);let d=null;if(u.status>=200&&u.status<300){try{d=kn(u.responseText)}catch{ve("Failed to parse JSON response for "+l+": "+u.responseText)}s(null,d)}else u.status!==401&&u.status!==404&&ve("Got unsuccessful REST response for "+l+" Status: "+u.status),s(u.status);s=null}},u.open("GET",l,!0),u.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.rootNode_=S.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){return{value:null,children:new Map}}function hn(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=P(e);n.children.has(s)||n.children.set(s,_s());const i=n.children.get(s);e=z(e),hn(i,e,t)}}function Di(n,e){if(x(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(K,(s,i)=>{hn(n,new B(s),i)}),Di(n,e)}}else if(n.children.size>0){const t=P(e);return e=z(e),n.children.has(t)&&Di(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Oi(n,e,t){n.value!==null?t(e,n.value):qp(n,(s,i)=>{const r=new B(e.toString()+"/"+s);Oi(i,r,t)})}function qp(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ce(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=10*1e3,Kp=30*1e3,Qp=5*60*1e3;class Yp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Gp(e);const s=qo+(Kp-qo)*Math.random();In(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ce(e,(i,r)=>{r>0&&Fe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),In(this.reportStats_.bind(this),Math.floor(Math.random()*2*Qp))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function ur(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=ur()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new B(e));return new gs(O(),t,this.revert)}}else return v(P(this.path)===e,"operationForChild called for unrelated child."),new gs(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.source=e,this.path=t,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new Bn(this.source,O()):new Bn(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return x(this.path)?new $t(this.source,O(),this.snap.getImmediateChild(e)):new $t(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new B(e));return t.isEmpty()?null:t.value?new $t(this.source,O(),t.value):new on(this.source,O(),t)}else return v(P(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new on(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=P(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xp(n,e,t,s){const i=[],r=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&r.push(Fp(l.childName,l.snapshotNode))}),Sn(n,i,"child_removed",e,s,t),Sn(n,i,"child_added",e,s,t),Sn(n,i,"child_moved",r,s,t),Sn(n,i,"child_changed",e,s,t),Sn(n,i,"value",e,s,t),i}function Sn(n,e,t,s,i,r){const l=s.filter(u=>u.type===t);l.sort((u,d)=>e_(n,u,d)),l.forEach(u=>{const d=Zp(n,u,r);i.forEach(h=>{h.respondsTo(u.type)&&e.push(h.createEvent(d,n.query_))})})}function Zp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function e_(n,e,t){if(e.childName==null||t.childName==null)throw cn("Should only compare child_ events.");const s=new k(e.childName,e.snapshotNode),i=new k(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n,e){return{eventCache:n,serverCache:e}}function Tn(n,e,t,s){return Ds(new It(e,t,s),n.serverCache)}function _l(n,e,t,s){return Ds(n.eventCache,new It(e,t,s))}function ms(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Wt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;const t_=()=>(gi||(gi=new ke(Bf)),gi);class G{constructor(e,t=t_()){this.value=e,this.children=t}static fromObject(e){let t=new G(null);return ce(e,(s,i)=>{t=t.set(new B(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:O(),value:this.value};if(x(e))return null;{const s=P(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:X(new B(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=P(e),s=this.children.get(t);return s!==null?s.subtree(z(e)):new G(null)}}set(e,t){if(x(e))return new G(t,this.children);{const s=P(e),r=(this.children.get(s)||new G(null)).set(z(e),t),l=this.children.insert(s,r);return new G(this.value,l)}}remove(e){if(x(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const t=P(e),s=this.children.get(t);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=P(e),s=this.children.get(t);return s?s.get(z(e)):null}}setTree(e,t){if(x(e))return t;{const s=P(e),r=(this.children.get(s)||new G(null)).setTree(z(e),t);let l;return r.isEmpty()?l=this.children.remove(s):l=this.children.insert(s,r),new G(this.value,l)}}fold(e){return this.fold_(O(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(X(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,O(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(x(e))return null;{const r=P(e),l=this.children.get(r);return l?l.findOnPath_(z(e),X(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,O(),t)}foreachOnPath_(e,t,s){if(x(e))return this;{this.value&&s(t,this.value);const i=P(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),X(t,i),s):new G(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(X(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new G(null))}}function An(n,e,t){if(x(e))return new Je(new G(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const l=Ie(i,e);return r=r.updateChild(l,t),new Je(n.writeTree_.set(i,r))}else{const i=new G(t),r=n.writeTree_.setTree(e,i);return new Je(r)}}}function Li(n,e,t){let s=n;return ce(t,(i,r)=>{s=An(s,X(e,i),r)}),s}function Go(n,e){if(x(e))return Je.empty();{const t=n.writeTree_.setTree(e,new G(null));return new Je(t)}}function Mi(n,e){return Vt(n,e)!=null}function Vt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ie(t.path,e)):null}function Ko(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(K,(s,i)=>{e.push(new k(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new k(s,i.value))}),e}function mt(n,e){if(x(e))return n;{const t=Vt(n,e);return t!=null?new Je(new G(t)):new Je(n.writeTree_.subtree(e))}}function Bi(n){return n.writeTree_.isEmpty()}function an(n,e){return gl(O(),n.writeTree_,e)}function gl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=gl(X(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(X(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e){return wl(e,n)}function n_(n,e,t,s,i){v(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=An(n.visibleWrites,e,t)),n.lastWriteId=s}function s_(n,e,t,s){v(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Li(n.visibleWrites,e,t),n.lastWriteId=s}function i_(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function r_(n,e){const t=n.allWrites.findIndex(u=>u.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,l=n.allWrites.length-1;for(;i&&l>=0;){const u=n.allWrites[l];u.visible&&(l>=t&&o_(u,s.path)?i=!1:ze(s.path,u.path)&&(r=!0)),l--}if(i){if(r)return a_(n),!0;if(s.snap)n.visibleWrites=Go(n.visibleWrites,s.path);else{const u=s.children;ce(u,d=>{n.visibleWrites=Go(n.visibleWrites,X(s.path,d))})}return!0}else return!1}function o_(n,e){if(n.snap)return ze(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ze(X(n.path,t),e))return!0;return!1}function a_(n){n.visibleWrites=ml(n.allWrites,l_,O()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function l_(n){return n.visible}function ml(n,e,t){let s=Je.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const l=r.path;let u;if(r.snap)ze(t,l)?(u=Ie(t,l),s=An(s,u,r.snap)):ze(l,t)&&(u=Ie(l,t),s=An(s,O(),r.snap.getChild(u)));else if(r.children){if(ze(t,l))u=Ie(t,l),s=Li(s,u,r.children);else if(ze(l,t))if(u=Ie(l,t),x(u))s=Li(s,O(),r.children);else{const d=Bt(r.children,P(u));if(d){const h=d.getChild(z(u));s=An(s,O(),h)}}}else throw cn("WriteRecord should have .snap or .children")}}return s}function yl(n,e,t,s,i){if(!s&&!i){const r=Vt(n.visibleWrites,e);if(r!=null)return r;{const l=mt(n.visibleWrites,e);if(Bi(l))return t;if(t==null&&!Mi(l,O()))return null;{const u=t||S.EMPTY_NODE;return an(l,u)}}}else{const r=mt(n.visibleWrites,e);if(!i&&Bi(r))return t;if(!i&&t==null&&!Mi(r,O()))return null;{const l=function(h){return(h.visible||i)&&(!s||!~s.indexOf(h.writeId))&&(ze(h.path,e)||ze(e,h.path))},u=ml(n.allWrites,l,e),d=t||S.EMPTY_NODE;return an(u,d)}}}function c_(n,e,t){let s=S.EMPTY_NODE;const i=Vt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(K,(r,l)=>{s=s.updateImmediateChild(r,l)}),s;if(t){const r=mt(n.visibleWrites,e);return t.forEachChild(K,(l,u)=>{const d=an(mt(r,new B(l)),u);s=s.updateImmediateChild(l,d)}),Ko(r).forEach(l=>{s=s.updateImmediateChild(l.name,l.node)}),s}else{const r=mt(n.visibleWrites,e);return Ko(r).forEach(l=>{s=s.updateImmediateChild(l.name,l.node)}),s}}function u_(n,e,t,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=X(e,t);if(Mi(n.visibleWrites,r))return null;{const l=mt(n.visibleWrites,r);return Bi(l)?i.getChild(t):an(l,i.getChild(t))}}function d_(n,e,t,s){const i=X(e,t),r=Vt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const l=mt(n.visibleWrites,i);return an(l,s.getNode().getImmediateChild(t))}else return null}function h_(n,e){return Vt(n.visibleWrites,e)}function f_(n,e,t,s,i,r,l){let u;const d=mt(n.visibleWrites,e),h=Vt(d,O());if(h!=null)u=h;else if(t!=null)u=an(d,t);else return[];if(u=u.withIndex(l),!u.isEmpty()&&!u.isLeafNode()){const _=[],p=l.getCompare(),g=r?u.getReverseIteratorFrom(s,l):u.getIteratorFrom(s,l);let y=g.getNext();for(;y&&_.length<i;)p(y,s)!==0&&_.push(y),y=g.getNext();return _}else return[]}function p_(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function ys(n,e,t,s){return yl(n.writeTree,n.treePath,e,t,s)}function fr(n,e){return c_(n.writeTree,n.treePath,e)}function Qo(n,e,t,s){return u_(n.writeTree,n.treePath,e,t,s)}function vs(n,e){return h_(n.writeTree,X(n.treePath,e))}function __(n,e,t,s,i,r){return f_(n.writeTree,n.treePath,e,t,s,i,r)}function pr(n,e,t){return d_(n.writeTree,n.treePath,e,t)}function vl(n,e){return wl(X(n.treePath,e),n.writeTree)}function wl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ln(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,On(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,rn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ln(s,e.snapshotNode,i.oldSnap));else throw cn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const bl=new m_;class _r{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new It(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wt(this.viewCache_),r=__(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n){return{filter:n}}function v_(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function w_(n,e,t,s,i){const r=new g_;let l,u;if(t.type===Ye.OVERWRITE){const h=t;h.source.fromUser?l=Fi(n,e,h.path,h.snap,s,i,r):(v(h.source.fromServer,"Unknown source."),u=h.source.tagged||e.serverCache.isFiltered()&&!x(h.path),l=ws(n,e,h.path,h.snap,s,i,u,r))}else if(t.type===Ye.MERGE){const h=t;h.source.fromUser?l=C_(n,e,h.path,h.children,s,i,r):(v(h.source.fromServer,"Unknown source."),u=h.source.tagged||e.serverCache.isFiltered(),l=$i(n,e,h.path,h.children,s,i,u,r))}else if(t.type===Ye.ACK_USER_WRITE){const h=t;h.revert?l=I_(n,e,h.path,s,i,r):l=E_(n,e,h.path,h.affectedTree,s,i,r)}else if(t.type===Ye.LISTEN_COMPLETE)l=S_(n,e,t.path,s,r);else throw cn("Unknown operation type: "+t.type);const d=r.getChanges();return b_(e,l,d),{viewCache:l,changes:d}}function b_(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ms(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(pl(ms(e)))}}function Cl(n,e,t,s,i,r){const l=e.eventCache;if(vs(s,t)!=null)return e;{let u,d;if(x(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Wt(e),_=h instanceof S?h:S.EMPTY_NODE,p=fr(s,_);u=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const h=ys(s,Wt(e));u=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=P(t);if(h===".priority"){v(St(t)===1,"Can't have a priority with additional path components");const _=l.getNode();d=e.serverCache.getNode();const p=Qo(s,t,_,d);p!=null?u=n.filter.updatePriority(_,p):u=l.getNode()}else{const _=z(t);let p;if(l.isCompleteForChild(h)){d=e.serverCache.getNode();const g=Qo(s,t,l.getNode(),d);g!=null?p=l.getNode().getImmediateChild(h).updateChild(_,g):p=l.getNode().getImmediateChild(h)}else p=pr(s,h,e.serverCache);p!=null?u=n.filter.updateChild(l.getNode(),h,p,_,i,r):u=l.getNode()}}return Tn(e,u,l.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function ws(n,e,t,s,i,r,l,u){const d=e.serverCache;let h;const _=l?n.filter:n.filter.getIndexedFilter();if(x(t))h=_.updateFullNode(d.getNode(),s,null);else if(_.filtersNodes()&&!d.isFiltered()){const y=d.getNode().updateChild(t,s);h=_.updateFullNode(d.getNode(),y,null)}else{const y=P(t);if(!d.isCompleteForPath(t)&&St(t)>1)return e;const w=z(t),L=d.getNode().getImmediateChild(y).updateChild(w,s);y===".priority"?h=_.updatePriority(d.getNode(),L):h=_.updateChild(d.getNode(),y,L,w,bl,null)}const p=_l(e,h,d.isFullyInitialized()||x(t),_.filtersNodes()),g=new _r(i,p,r);return Cl(n,p,t,i,g,u)}function Fi(n,e,t,s,i,r,l){const u=e.eventCache;let d,h;const _=new _r(i,e,r);if(x(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,l),d=Tn(e,h,!0,n.filter.filtersNodes());else{const p=P(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),d=Tn(e,h,u.isFullyInitialized(),u.isFiltered());else{const g=z(t),y=u.getNode().getImmediateChild(p);let w;if(x(g))w=s;else{const C=_.getCompleteChild(p);C!=null?sr(g)===".priority"&&C.getChild(al(g)).isEmpty()?w=C:w=C.updateChild(g,s):w=S.EMPTY_NODE}if(y.equals(w))d=e;else{const C=n.filter.updateChild(u.getNode(),p,w,g,_,l);d=Tn(e,C,u.isFullyInitialized(),n.filter.filtersNodes())}}}return d}function Yo(n,e){return n.eventCache.isCompleteForChild(e)}function C_(n,e,t,s,i,r,l){let u=e;return s.foreach((d,h)=>{const _=X(t,d);Yo(e,P(_))&&(u=Fi(n,u,_,h,i,r,l))}),s.foreach((d,h)=>{const _=X(t,d);Yo(e,P(_))||(u=Fi(n,u,_,h,i,r,l))}),u}function Jo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $i(n,e,t,s,i,r,l,u){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,h;x(t)?h=s:h=new G(null).setTree(t,s);const _=e.serverCache.getNode();return h.children.inorderTraversal((p,g)=>{if(_.hasChild(p)){const y=e.serverCache.getNode().getImmediateChild(p),w=Jo(n,y,g);d=ws(n,d,new B(p),w,i,r,l,u)}}),h.children.inorderTraversal((p,g)=>{const y=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!_.hasChild(p)&&!y){const w=e.serverCache.getNode().getImmediateChild(p),C=Jo(n,w,g);d=ws(n,d,new B(p),C,i,r,l,u)}}),d}function E_(n,e,t,s,i,r,l){if(vs(i,t)!=null)return e;const u=e.serverCache.isFiltered(),d=e.serverCache;if(s.value!=null){if(x(t)&&d.isFullyInitialized()||d.isCompleteForPath(t))return ws(n,e,t,d.getNode().getChild(t),i,r,u,l);if(x(t)){let h=new G(null);return d.getNode().forEachChild(nt,(_,p)=>{h=h.set(new B(_),p)}),$i(n,e,t,h,i,r,u,l)}else return e}else{let h=new G(null);return s.foreach((_,p)=>{const g=X(t,_);d.isCompleteForPath(g)&&(h=h.set(_,d.getNode().getChild(g)))}),$i(n,e,t,h,i,r,u,l)}}function S_(n,e,t,s,i){const r=e.serverCache,l=_l(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return Cl(n,l,t,s,bl,i)}function I_(n,e,t,s,i,r){let l;if(vs(s,t)!=null)return e;{const u=new _r(s,e,i),d=e.eventCache.getNode();let h;if(x(t)||P(t)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=ys(s,Wt(e));else{const p=e.serverCache.getNode();v(p instanceof S,"serverChildren would be complete if leaf node"),_=fr(s,p)}_=_,h=n.filter.updateFullNode(d,_,r)}else{const _=P(t);let p=pr(s,_,e.serverCache);p==null&&e.serverCache.isCompleteForChild(_)&&(p=d.getImmediateChild(_)),p!=null?h=n.filter.updateChild(d,_,p,z(t),u,r):e.eventCache.getNode().hasChild(_)?h=n.filter.updateChild(d,_,S.EMPTY_NODE,z(t),u,r):h=d,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=ys(s,Wt(e)),l.isLeafNode()&&(h=n.filter.updateFullNode(h,l,r)))}return l=e.serverCache.isFullyInitialized()||vs(s,O())!=null,Tn(e,h,l,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new cr(s.getIndex()),r=Wp(s);this.processor_=y_(r);const l=t.serverCache,u=t.eventCache,d=i.updateFullNode(S.EMPTY_NODE,l.getNode(),null),h=r.updateFullNode(S.EMPTY_NODE,u.getNode(),null),_=new It(d,l.isFullyInitialized(),i.filtersNodes()),p=new It(h,u.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ds(p,_),this.eventGenerator_=new Jp(this.query_)}get query(){return this.query_}}function A_(n){return n.viewCache_.serverCache.getNode()}function P_(n){return ms(n.viewCache_)}function x_(n,e){const t=Wt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(P(e)).isEmpty())?t.getChild(e):null}function Xo(n){return n.eventRegistrations_.length===0}function k_(n,e){n.eventRegistrations_.push(e)}function Zo(n,e,t){const s=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const l=r.createCancelEvent(t,i);l&&s.push(l)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const l=n.eventRegistrations_[r];if(!l.matches(e))i.push(l);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ea(n,e,t,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(v(Wt(n.viewCache_),"We should always have a full cache before handling merges"),v(ms(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=w_(n.processor_,i,e,t,s);return v_(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,El(n,r.changes,r.viewCache.eventCache.getNode(),null)}function N_(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(K,(r,l)=>{s.push(rn(r,l))}),t.isFullyInitialized()&&s.push(pl(t.getNode())),El(n,s,t.getNode(),e)}function El(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Xp(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs;class Sl{constructor(){this.views=new Map}}function R_(n){v(!bs,"__referenceConstructor has already been defined"),bs=n}function D_(){return v(bs,"Reference.ts has not been loaded"),bs}function O_(n){return n.views.size===0}function gr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),ea(r,e,t,s)}else{let r=[];for(const l of n.views.values())r=r.concat(ea(l,e,t,s));return r}}function Il(n,e,t,s,i){const r=e._queryIdentifier,l=n.views.get(r);if(!l){let u=ys(t,i?s:null),d=!1;u?d=!0:s instanceof S?(u=fr(t,s),d=!1):(u=S.EMPTY_NODE,d=!1);const h=Ds(new It(u,d,!1),new It(s,i,!1));return new T_(e,h)}return l}function L_(n,e,t,s,i,r){const l=Il(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),k_(l,t),N_(l,t)}function M_(n,e,t,s){const i=e._queryIdentifier,r=[];let l=[];const u=Tt(n);if(i==="default")for(const[d,h]of n.views.entries())l=l.concat(Zo(h,t,s)),Xo(h)&&(n.views.delete(d),h.query._queryParams.loadsAllData()||r.push(h.query));else{const d=n.views.get(i);d&&(l=l.concat(Zo(d,t,s)),Xo(d)&&(n.views.delete(i),d.query._queryParams.loadsAllData()||r.push(d.query)))}return u&&!Tt(n)&&r.push(new(D_())(e._repo,e._path)),{removed:r,events:l}}function Tl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function yt(n,e){let t=null;for(const s of n.views.values())t=t||x_(s,e);return t}function Al(n,e){if(e._queryParams.loadsAllData())return Ls(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Pl(n,e){return Al(n,e)!=null}function Tt(n){return Ls(n)!=null}function Ls(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;function B_(n){v(!Cs,"__referenceConstructor has already been defined"),Cs=n}function F_(){return v(Cs,"Reference.ts has not been loaded"),Cs}let $_=1;class ta{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=p_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mr(n,e,t,s,i){return n_(n.pendingWriteTree_,e,t,s,i),i?fn(n,new $t(ur(),e,t)):[]}function W_(n,e,t,s){s_(n.pendingWriteTree_,e,t,s);const i=G.fromObject(t);return fn(n,new on(ur(),e,i))}function pt(n,e,t=!1){const s=i_(n.pendingWriteTree_,e);if(r_(n.pendingWriteTree_,e)){let r=new G(null);return s.snap!=null?r=r.set(O(),!0):ce(s.children,l=>{r=r.set(new B(l),!0)}),fn(n,new gs(s.path,r,t))}else return[]}function zn(n,e,t){return fn(n,new $t(dr(),e,t))}function H_(n,e,t){const s=G.fromObject(t);return fn(n,new on(dr(),e,s))}function U_(n,e){return fn(n,new Bn(dr(),e))}function V_(n,e,t){const s=yr(n,t);if(s){const i=vr(s),r=i.path,l=i.queryId,u=Ie(r,e),d=new Bn(hr(l),u);return wr(n,r,d)}else return[]}function Es(n,e,t,s,i=!1){const r=e._path,l=n.syncPointTree_.get(r);let u=[];if(l&&(e._queryIdentifier==="default"||Pl(l,e))){const d=M_(l,e,t,s);O_(l)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=d.removed;if(u=d.events,!i){const _=h.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(g,y)=>Tt(y));if(_&&!p){const g=n.syncPointTree_.subtree(r);if(!g.isEmpty()){const y=q_(g);for(let w=0;w<y.length;++w){const C=y[w],L=C.query,ee=Rl(n,C);n.listenProvider_.startListening(Pn(L),Fn(n,L),ee.hashFn,ee.onComplete)}}}!p&&h.length>0&&!s&&(_?n.listenProvider_.stopListening(Pn(e),null):h.forEach(g=>{const y=n.queryToTagMap.get(Bs(g));n.listenProvider_.stopListening(Pn(g),y)}))}G_(n,h)}return u}function xl(n,e,t,s){const i=yr(n,s);if(i!=null){const r=vr(i),l=r.path,u=r.queryId,d=Ie(l,e),h=new $t(hr(u),d,t);return wr(n,l,h)}else return[]}function j_(n,e,t,s){const i=yr(n,s);if(i){const r=vr(i),l=r.path,u=r.queryId,d=Ie(l,e),h=G.fromObject(t),_=new on(hr(u),d,h);return wr(n,l,_)}else return[]}function Wi(n,e,t,s=!1){const i=e._path;let r=null,l=!1;n.syncPointTree_.foreachOnPath(i,(g,y)=>{const w=Ie(g,i);r=r||yt(y,w),l=l||Tt(y)});let u=n.syncPointTree_.get(i);u?(l=l||Tt(u),r=r||yt(u,O())):(u=new Sl,n.syncPointTree_=n.syncPointTree_.set(i,u));let d;r!=null?d=!0:(d=!1,r=S.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((y,w)=>{const C=yt(w,O());C&&(r=r.updateImmediateChild(y,C))}));const h=Pl(u,e);if(!h&&!e._queryParams.loadsAllData()){const g=Bs(e);v(!n.queryToTagMap.has(g),"View does not exist, but we have a tag");const y=K_();n.queryToTagMap.set(g,y),n.tagToQueryMap.set(y,g)}const _=Os(n.pendingWriteTree_,i);let p=L_(u,e,t,_,r,d);if(!h&&!l&&!s){const g=Al(u,e);p=p.concat(Q_(n,e,g))}return p}function Ms(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(l,u)=>{const d=Ie(l,e),h=yt(u,d);if(h)return h});return yl(i,e,r,t,!0)}function z_(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(h,_)=>{const p=Ie(h,t);s=s||yt(_,p)});let i=n.syncPointTree_.get(t);i?s=s||yt(i,O()):(i=new Sl,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,l=r?new It(s,!0,!1):null,u=Os(n.pendingWriteTree_,e._path),d=Il(i,e,u,r?l.getNode():S.EMPTY_NODE,r);return P_(d)}function fn(n,e){return kl(e,n.syncPointTree_,null,Os(n.pendingWriteTree_,O()))}function kl(n,e,t,s){if(x(n.path))return Nl(n,e,t,s);{const i=e.get(O());t==null&&i!=null&&(t=yt(i,O()));let r=[];const l=P(n.path),u=n.operationForChild(l),d=e.children.get(l);if(d&&u){const h=t?t.getImmediateChild(l):null,_=vl(s,l);r=r.concat(kl(u,d,h,_))}return i&&(r=r.concat(gr(i,n,s,t))),r}}function Nl(n,e,t,s){const i=e.get(O());t==null&&i!=null&&(t=yt(i,O()));let r=[];return e.children.inorderTraversal((l,u)=>{const d=t?t.getImmediateChild(l):null,h=vl(s,l),_=n.operationForChild(l);_&&(r=r.concat(Nl(_,u,d,h)))}),i&&(r=r.concat(gr(i,n,s,t))),r}function Rl(n,e){const t=e.query,s=Fn(n,t);return{hashFn:()=>(A_(e)||S.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?V_(n,t._path,s):U_(n,t._path);{const r=Wf(i,t);return Es(n,t,null,r)}}}}function Fn(n,e){const t=Bs(e);return n.queryToTagMap.get(t)}function Bs(n){return n._path.toString()+"$"+n._queryIdentifier}function yr(n,e){return n.tagToQueryMap.get(e)}function vr(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new B(n.substr(0,e))}}function wr(n,e,t){const s=n.syncPointTree_.get(e);v(s,"Missing sync point for query tag that we're tracking");const i=Os(n.pendingWriteTree_,e);return gr(s,t,i,null)}function q_(n){return n.fold((e,t,s)=>{if(t&&Tt(t))return[Ls(t)];{let i=[];return t&&(i=Tl(t)),ce(s,(r,l)=>{i=i.concat(l)}),i}})}function Pn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(F_())(n._repo,n._path):n}function G_(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Bs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function K_(){return $_++}function Q_(n,e,t){const s=e._path,i=Fn(n,e),r=Rl(n,t),l=n.listenProvider_.startListening(Pn(e),i,r.hashFn,r.onComplete),u=n.syncPointTree_.subtree(s);if(i)v(!Tt(u.value),"If we're adding a query, it shouldn't be shadowed");else{const d=u.fold((h,_,p)=>{if(!x(h)&&_&&Tt(_))return[Ls(_).query];{let g=[];return _&&(g=g.concat(Tl(_).map(y=>y.query))),ce(p,(y,w)=>{g=g.concat(w)}),g}});for(let h=0;h<d.length;++h){const _=d[h];n.listenProvider_.stopListening(Pn(_),Fn(n,_))}}return l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new br(t)}node(){return this.node_}}class Cr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new Cr(this.syncTree_,t)}node(){return Ms(this.syncTree_,this.path_)}}const Y_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},na=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return J_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return X_(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},J_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},X_=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const l=i.getValue();return typeof l!="number"?s:l+s},Dl=function(n,e,t,s){return Sr(e,new Cr(t,n),s)},Er=function(n,e,t){return Sr(n,new br(e),t)};function Sr(n,e,t){const s=n.getPriority().val(),i=na(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const l=n,u=na(l.getValue(),e,t);return u!==l.getValue()||i!==l.getPriority().val()?new re(u,Z(i)):n}else{const l=n;return r=l,i!==l.getPriority().val()&&(r=r.updatePriority(new re(i))),l.forEachChild(K,(u,d)=>{const h=Sr(d,e.getImmediateChild(u),t);h!==d&&(r=r.updateImmediateChild(u,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Fs(n,e){let t=e instanceof B?e:new B(e),s=n,i=P(t);for(;i!==null;){const r=Bt(s.node.children,i)||{children:{},childCount:0};s=new Ir(i,s,r),t=z(t),i=P(t)}return s}function jt(n){return n.node.value}function Tr(n,e){n.node.value=e,Hi(n)}function Ol(n){return n.node.childCount>0}function Z_(n){return jt(n)===void 0&&!Ol(n)}function $s(n,e){ce(n.node.children,(t,s)=>{e(new Ir(t,n,s))})}function Ll(n,e,t,s){t&&!s&&e(n),$s(n,i=>{Ll(i,e,!0,s)}),t&&s&&e(n)}function eg(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qn(n){return new B(n.parent===null?n.name:qn(n.parent)+"/"+n.name)}function Hi(n){n.parent!==null&&tg(n.parent,n.name,n)}function tg(n,e,t){const s=Z_(t),i=Fe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Hi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Hi(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=/[\[\].#$\/\u0000-\u001F\u007F]/,sg=/[\[\].#$\u0000-\u001F\u007F]/,mi=10*1024*1024,Ws=function(n){return typeof n=="string"&&n.length!==0&&!ng.test(n)},Ml=function(n){return typeof n=="string"&&n.length!==0&&!sg.test(n)},ig=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ml(n)},$n=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!xs(n)||n&&typeof n=="object"&&Fe(n,".sv")},it=function(n,e,t,s){s&&e===void 0||Gn(Ne(n,"value"),e,t)},Gn=function(n,e,t){const s=t instanceof B?new wp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ot(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ot(s)+" with contents = "+e.toString());if(xs(e))throw new Error(n+"contains "+e.toString()+" "+Ot(s));if(typeof e=="string"&&e.length>mi/3&&Ts(e)>mi)throw new Error(n+"contains a string greater than "+mi+" utf8 bytes "+Ot(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ce(e,(l,u)=>{if(l===".value")i=!0;else if(l!==".priority"&&l!==".sv"&&(r=!0,!Ws(l)))throw new Error(n+" contains an invalid key ("+l+") "+Ot(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bp(s,l),Gn(n,u,s),Cp(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ot(s)+" in addition to actual children.")}},rg=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Dn(s);for(let l=0;l<r.length;l++)if(!(r[l]===".priority"&&l===r.length-1)){if(!Ws(r[l]))throw new Error(n+"contains an invalid key ("+r[l]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vp);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ze(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Bl=function(n,e,t,s){if(s&&e===void 0)return;const i=Ne(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ce(e,(l,u)=>{const d=new B(l);if(Gn(i,u,X(t,d)),sr(d)===".priority"&&!$n(u))throw new Error(i+"contains an invalid value for '"+d.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(d)}),rg(i,r)},Ar=function(n,e,t){if(!(t&&e===void 0)){if(xs(e))throw new Error(Ne(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!$n(e))throw new Error(Ne(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Kn=function(n,e,t,s){if(!(s&&t===void 0)&&!Ws(t))throw new Error(Ne(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Wn=function(n,e,t,s){if(!(s&&t===void 0)&&!Ml(t))throw new Error(Ne(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},og=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wn(n,e,t,s)},qe=function(n,e){if(P(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Fl=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ws(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ig(t))throw new Error(Ne(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ir(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function $l(n,e,t){Hs(n,t),Wl(n,s=>ir(s,e))}function $e(n,e,t){Hs(n,t),Wl(n,s=>ze(s,e)||ze(e,s))}function Wl(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(lg(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function lg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Mt&&le("event: "+t.toString()),dn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="repo_interrupt",cg=25;class ug{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ag,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_s(),this.transactionQueueTree_=new Ir,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dg(n,e,t){if(n.stats_=tr(n.repoInfo_),n.forceRestClient_||jf())n.server_=new ps(n.repoInfo_,(s,i,r,l)=>{sa(n,s,i,r,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ia(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new lt(n.repoInfo_,e,(s,i,r,l)=>{sa(n,s,i,r,l)},s=>{ia(n,s)},s=>{hg(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Qf(n.repoInfo_,()=>new Yp(n.stats_,n.server_)),n.infoData_=new zp,n.infoSyncTree_=new ta({startListening:(s,i,r,l)=>{let u=[];const d=n.infoData_.getNode(s._path);return d.isEmpty()||(u=zn(n.infoSyncTree_,s._path,d),setTimeout(()=>{l("ok")},0)),u},stopListening:()=>{}}),Pr(n,"connected",!1),n.serverSyncTree_=new ta({startListening:(s,i,r,l)=>(n.server_.listen(s,r,i,(u,d)=>{const h=l(u,d);$e(n.eventQueue_,s._path,h)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ul(n){const t=n.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Qn(n){return Y_({timestamp:Ul(n)})}function sa(n,e,t,s,i){n.dataUpdateCount++;const r=new B(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(i)if(s){const d=cs(t,h=>Z(h));l=j_(n.serverSyncTree_,r,d,i)}else{const d=Z(t);l=xl(n.serverSyncTree_,r,d,i)}else if(s){const d=cs(t,h=>Z(h));l=H_(n.serverSyncTree_,r,d)}else{const d=Z(t);l=zn(n.serverSyncTree_,r,d)}let u=r;l.length>0&&(u=ln(n,r)),$e(n.eventQueue_,u,l)}function ia(n,e){Pr(n,"connected",e),e===!1&&_g(n)}function hg(n,e){ce(e,(t,s)=>{Pr(n,t,s)})}function Pr(n,e,t){const s=new B("/.info/"+e),i=Z(t);n.infoData_.updateSnapshot(s,i);const r=zn(n.infoSyncTree_,s,i);$e(n.eventQueue_,s,r)}function Us(n){return n.nextWriteId_++}function fg(n,e,t){const s=z_(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Z(i).withIndex(e._queryParams.getIndex());Wi(n.serverSyncTree_,e,t,!0);let l;if(e._queryParams.loadsAllData())l=zn(n.serverSyncTree_,e._path,r);else{const u=Fn(n.serverSyncTree_,e);l=xl(n.serverSyncTree_,e._path,r,u)}return $e(n.eventQueue_,e._path,l),Es(n.serverSyncTree_,e,t,null,!0),r},i=>(pn(n,"get for query "+ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function xr(n,e,t,s,i){pn(n,"set",{path:e.toString(),value:t,priority:s});const r=Qn(n),l=Z(t,s),u=Ms(n.serverSyncTree_,e),d=Er(l,u,r),h=Us(n),_=mr(n.serverSyncTree_,e,d,h,!0);Hs(n.eventQueue_,_),n.server_.put(e.toString(),l.val(!0),(g,y)=>{const w=g==="ok";w||ve("set at "+e+" failed: "+g);const C=pt(n.serverSyncTree_,h,!w);$e(n.eventQueue_,e,C),At(n,i,g,y)});const p=Nr(n,e);ln(n,p),$e(n.eventQueue_,p,[])}function pg(n,e,t,s){pn(n,"update",{path:e.toString(),value:t});let i=!0;const r=Qn(n),l={};if(ce(t,(u,d)=>{i=!1,l[u]=Dl(X(e,u),Z(d),n.serverSyncTree_,r)}),i)le("update() called with empty data.  Don't do anything."),At(n,s,"ok",void 0);else{const u=Us(n),d=W_(n.serverSyncTree_,e,l,u);Hs(n.eventQueue_,d),n.server_.merge(e.toString(),t,(h,_)=>{const p=h==="ok";p||ve("update at "+e+" failed: "+h);const g=pt(n.serverSyncTree_,u,!p),y=g.length>0?ln(n,e):e;$e(n.eventQueue_,y,g),At(n,s,h,_)}),ce(t,h=>{const _=Nr(n,X(e,h));ln(n,_)}),$e(n.eventQueue_,e,[])}}function _g(n){pn(n,"onDisconnectEvents");const e=Qn(n),t=_s();Oi(n.onDisconnect_,O(),(i,r)=>{const l=Dl(i,r,n.serverSyncTree_,e);hn(t,i,l)});let s=[];Oi(t,O(),(i,r)=>{s=s.concat(zn(n.serverSyncTree_,i,r));const l=Nr(n,i);ln(n,l)}),n.onDisconnect_=_s(),$e(n.eventQueue_,O(),s)}function gg(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Di(n.onDisconnect_,e),At(n,t,s,i)})}function ra(n,e,t,s){const i=Z(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,l)=>{r==="ok"&&hn(n.onDisconnect_,e,i),At(n,s,r,l)})}function mg(n,e,t,s,i){const r=Z(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(l,u)=>{l==="ok"&&hn(n.onDisconnect_,e,r),At(n,i,l,u)})}function yg(n,e,t,s){if(Ci(t)){le("onDisconnect().update() called with empty data.  Don't do anything."),At(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&ce(t,(l,u)=>{const d=Z(u);hn(n.onDisconnect_,X(e,l),d)}),At(n,s,i,r)})}function vg(n,e,t){let s;P(e._path)===".info"?s=Wi(n.infoSyncTree_,e,t):s=Wi(n.serverSyncTree_,e,t),$l(n.eventQueue_,e._path,s)}function Ui(n,e,t){let s;P(e._path)===".info"?s=Es(n.infoSyncTree_,e,t):s=Es(n.serverSyncTree_,e,t),$l(n.eventQueue_,e._path,s)}function Vl(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Hl)}function wg(n){n.persistentConnection_&&n.persistentConnection_.resume(Hl)}function pn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),le(t,...e)}function At(n,e,t,s){e&&dn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const l=new Error(r);l.code=i,e(l)}})}function bg(n,e,t,s,i,r){pn(n,"transaction on "+e);const l={path:e,update:t,onComplete:s,status:null,order:Fa(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},u=kr(n,e,void 0);l.currentInputSnapshot=u;const d=l.update(u.val());if(d===void 0)l.unwatcher(),l.currentOutputSnapshotRaw=null,l.currentOutputSnapshotResolved=null,l.onComplete&&l.onComplete(null,!1,l.currentInputSnapshot);else{Gn("transaction failed: Data returned ",d,l.path),l.status=0;const h=Fs(n.transactionQueueTree_,e),_=jt(h)||[];_.push(l),Tr(h,_);let p;typeof d=="object"&&d!==null&&Fe(d,".priority")?(p=Bt(d,".priority"),v($n(p),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):p=(Ms(n.serverSyncTree_,e)||S.EMPTY_NODE).getPriority().val();const g=Qn(n),y=Z(d,p),w=Er(y,u,g);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=w,l.currentWriteId=Us(n);const C=mr(n.serverSyncTree_,e,w,l.currentWriteId,l.applyLocally);$e(n.eventQueue_,e,C),Vs(n,n.transactionQueueTree_)}}function kr(n,e,t){return Ms(n.serverSyncTree_,e,t)||S.EMPTY_NODE}function Vs(n,e=n.transactionQueueTree_){if(e||js(n,e),jt(e)){const t=zl(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Cg(n,qn(e),t)}else Ol(e)&&$s(e,t=>{Vs(n,t)})}function Cg(n,e,t){const s=t.map(h=>h.currentWriteId),i=kr(n,e,s);let r=i;const l=i.hash();for(let h=0;h<t.length;h++){const _=t[h];v(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const p=Ie(e,_.path);r=r.updateChild(p,_.currentOutputSnapshotRaw)}const u=r.val(!0),d=e;n.server_.put(d.toString(),u,h=>{pn(n,"transaction put response",{path:d.toString(),status:h});let _=[];if(h==="ok"){const p=[];for(let g=0;g<t.length;g++)t[g].status=2,_=_.concat(pt(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&p.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();js(n,Fs(n.transactionQueueTree_,e)),Vs(n,n.transactionQueueTree_),$e(n.eventQueue_,e,_);for(let g=0;g<p.length;g++)dn(p[g])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{ve("transaction at "+d.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}ln(n,e)}},l)}function ln(n,e){const t=jl(n,e),s=qn(t),i=zl(n,t);return Eg(n,i,s),s}function Eg(n,e,t){if(e.length===0)return;const s=[];let i=[];const l=e.filter(u=>u.status===0).map(u=>u.currentWriteId);for(let u=0;u<e.length;u++){const d=e[u],h=Ie(t,d.path);let _=!1,p;if(v(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)_=!0,p=d.abortReason,i=i.concat(pt(n.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=cg)_=!0,p="maxretry",i=i.concat(pt(n.serverSyncTree_,d.currentWriteId,!0));else{const g=kr(n,d.path,l);d.currentInputSnapshot=g;const y=e[u].update(g.val());if(y!==void 0){Gn("transaction failed: Data returned ",y,d.path);let w=Z(y);typeof y=="object"&&y!=null&&Fe(y,".priority")||(w=w.updatePriority(g.getPriority()));const L=d.currentWriteId,ee=Qn(n),ne=Er(w,g,ee);d.currentOutputSnapshotRaw=w,d.currentOutputSnapshotResolved=ne,d.currentWriteId=Us(n),l.splice(l.indexOf(L),1),i=i.concat(mr(n.serverSyncTree_,d.path,ne,d.currentWriteId,d.applyLocally)),i=i.concat(pt(n.serverSyncTree_,L,!0))}else _=!0,p="nodata",i=i.concat(pt(n.serverSyncTree_,d.currentWriteId,!0))}$e(n.eventQueue_,t,i),i=[],_&&(e[u].status=2,function(g){setTimeout(g,Math.floor(0))}(e[u].unwatcher),e[u].onComplete&&(p==="nodata"?s.push(()=>e[u].onComplete(null,!1,e[u].currentInputSnapshot)):s.push(()=>e[u].onComplete(new Error(p),!1,null))))}js(n,n.transactionQueueTree_);for(let u=0;u<s.length;u++)dn(s[u]);Vs(n,n.transactionQueueTree_)}function jl(n,e){let t,s=n.transactionQueueTree_;for(t=P(e);t!==null&&jt(s)===void 0;)s=Fs(s,t),e=z(e),t=P(e);return s}function zl(n,e){const t=[];return ql(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ql(n,e,t){const s=jt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);$s(e,i=>{ql(n,i,t)})}function js(n,e){const t=jt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Tr(e,t.length>0?t:void 0)}$s(e,s=>{js(n,s)})}function Nr(n,e){const t=qn(jl(n,e)),s=Fs(n.transactionQueueTree_,e);return eg(s,i=>{yi(n,i)}),yi(n,s),Ll(s,i=>{yi(n,i)}),t}function yi(n,e){const t=jt(e);if(t){const s=[];let i=[],r=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(v(r===l-1,"All SENT items should be at beginning of queue."),r=l,t[l].status=3,t[l].abortReason="set"):(v(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),i=i.concat(pt(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&s.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Tr(e,void 0):t.length=r+1,$e(n.eventQueue_,qn(e),i);for(let l=0;l<s.length;l++)dn(s[l])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ig(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ve(`Invalid query segment '${t}' in query '${n}'`)}return e}const Vi=function(n,e){const t=Tg(n),s=t.namespace;t.domain==="firebase.com"&&st(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&st("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Lf();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Xa(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new B(t.pathString)}},Tg=function(n){let e="",t="",s="",i="",r="",l=!0,u="https",d=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(u=n.substring(0,h-1),n=n.substring(h+2));let _=n.indexOf("/");_===-1&&(_=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(_,p)),_<p&&(i=Sg(n.substring(_,p)));const g=Ig(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(l=u==="https"||u==="wss",d=parseInt(e.substring(h+1),10)):h=e.length;const y=e.slice(0,h);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:d,domain:t,subdomain:s,secure:l,scheme:u,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ag=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=oa.charAt(t%64),t=Math.floor(t/64);v(t===0,"Cannot push at time == 0");let l=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)l+=oa.charAt(e[i]);return v(l.length===20,"nextPushId: Length should be 20."),l}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class Kl{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pg=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new xe;return gg(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){qe("OnDisconnect.remove",this._path);const e=new xe;return ra(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){qe("OnDisconnect.set",this._path),it("OnDisconnect.set",e,this._path,!1);const t=new xe;return ra(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){qe("OnDisconnect.setWithPriority",this._path),it("OnDisconnect.setWithPriority",e,this._path,!1),Ar("OnDisconnect.setWithPriority",t,!1);const s=new xe;return mg(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){qe("OnDisconnect.update",this._path),Bl("OnDisconnect.update",e,this._path,!1);const t=new xe;return yg(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return x(this._path)?null:sr(this._path)}get ref(){return new Ge(this._repo,this._path)}get _queryIdentifier(){const e=zo(this._queryParams),t=Zi(e);return t==="{}"?"default":t}get _queryObject(){return zo(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof Re))return!1;const t=this._repo===e._repo,s=ir(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yp(this._path)}}function zs(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Pt(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===nt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Et)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==ct)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===K){if(e!=null&&!$n(e)||t!=null&&!$n(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(v(n.getIndex()instanceof ar||n.getIndex()===lr,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function qs(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ge extends Re{constructor(e,t){super(e,t,new Ns,!1)}get parent(){const e=al(this._path);return e===null?null:new Ge(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Gs=class ji{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new B(e),s=Ht(this.ref,e);return new ji(this._node.getChild(t),s,K)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ji(i,Ht(this.ref,s),K)))}hasChild(e){const t=new B(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Ql(n,e){return n=We(n),n._checkNotDeleted("ref"),e!==void 0?Ht(n._root,e):n._root}function aa(n,e){n=We(n),n._checkNotDeleted("refFromURL");const t=Vi(e,n._repo.repoInfo_.nodeAdmin);Fl("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&st("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),Ql(n,t.path.toString())}function Ht(n,e){return n=We(n),P(n._path)===null?og("child","path",e,!1):Wn("child","path",e,!1),new Ge(n._repo,X(n._path,e))}function xg(n,e){n=We(n),qe("push",n._path),it("push",e,n._path,!0);const t=Ul(n._repo),s=Ag(t),i=Ht(n,s),r=Ht(n,s);let l;return e!=null?l=Dr(r,e).then(()=>r):l=Promise.resolve(r),i.then=l.then.bind(l),i.catch=l.then.bind(l,void 0),i}function kg(n){return qe("remove",n._path),Dr(n,null)}function Dr(n,e){n=We(n),qe("set",n._path),it("set",e,n._path,!1);const t=new xe;return xr(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ng(n,e){n=We(n),qe("setPriority",n._path),Ar("setPriority",e,!1);const t=new xe;return xr(n._repo,X(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function Rg(n,e,t){if(qe("setWithPriority",n._path),it("setWithPriority",e,n._path,!1),Ar("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new xe;return xr(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function Dg(n,e){Bl("update",e,n._path,!1);const t=new xe;return pg(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Og(n){n=We(n);const e=new Rr(()=>{}),t=new Yn(e);return fg(n._repo,n,t).then(s=>new Gs(s,new Ge(n._repo,n._path),n._queryParams.getIndex()))}class Yn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Gl("value",this,new Gs(e.snapshotNode,new Ge(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kl(this,e,t):null}matches(e){return e instanceof Yn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ks{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kl(this,e,t):null}createEvent(e,t){v(e.childName!=null,"Child events should have a childName.");const s=Ht(new Ge(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Gl(e.type,this,new Gs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ks?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Jn(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const d=t,h=(_,p)=>{Ui(n._repo,n,u),d(_,p)};h.userCallback=t.userCallback,h.context=t.context,t=h}const l=new Rr(t,r||void 0),u=e==="value"?new Yn(l):new Ks(e,l);return vg(n._repo,n,u),()=>Ui(n._repo,n,u)}function zi(n,e,t,s){return Jn(n,"value",e,t,s)}function la(n,e,t,s){return Jn(n,"child_added",e,t,s)}function ca(n,e,t,s){return Jn(n,"child_changed",e,t,s)}function ua(n,e,t,s){return Jn(n,"child_moved",e,t,s)}function da(n,e,t,s){return Jn(n,"child_removed",e,t,s)}function ha(n,e,t){let s=null;const i=t?new Rr(t):null;e==="value"?s=new Yn(i):e&&(s=new Ks(e,i)),Ui(n._repo,n,s)}class Xe{}class Yl extends Xe{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){it("endAt",this._value,e._path,!0);const t=Ri(e._queryParams,this._value,this._key);if(qs(t),Pt(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Re(e._repo,e._path,t,e._orderByCalled)}}function Lg(n,e){return Kn("endAt","key",e,!0),new Yl(n,e)}class Mg extends Xe{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){it("endBefore",this._value,e._path,!1);const t=jp(e._queryParams,this._value,this._key);if(qs(t),Pt(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Re(e._repo,e._path,t,e._orderByCalled)}}function Bg(n,e){return Kn("endBefore","key",e,!0),new Mg(n,e)}class Jl extends Xe{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){it("startAt",this._value,e._path,!0);const t=Ni(e._queryParams,this._value,this._key);if(qs(t),Pt(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Re(e._repo,e._path,t,e._orderByCalled)}}function Fg(n=null,e){return Kn("startAt","key",e,!0),new Jl(n,e)}class $g extends Xe{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){it("startAfter",this._value,e._path,!1);const t=Vp(e._queryParams,this._value,this._key);if(qs(t),Pt(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Re(e._repo,e._path,t,e._orderByCalled)}}function Wg(n,e){return Kn("startAfter","key",e,!0),new $g(n,e)}class Hg extends Xe{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Re(e._repo,e._path,Hp(e._queryParams,this._limit),e._orderByCalled)}}function Ug(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Hg(n)}class Vg extends Xe{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Re(e._repo,e._path,Up(e._queryParams,this._limit),e._orderByCalled)}}function jg(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Vg(n)}class zg extends Xe{constructor(e){super(),this._path=e}_apply(e){zs(e,"orderByChild");const t=new B(this._path);if(x(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new ar(t),i=Rs(e._queryParams,s);return Pt(i),new Re(e._repo,e._path,i,!0)}}function qg(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Wn("orderByChild","path",n,!1),new zg(n)}class Gg extends Xe{_apply(e){zs(e,"orderByKey");const t=Rs(e._queryParams,nt);return Pt(t),new Re(e._repo,e._path,t,!0)}}function Kg(){return new Gg}class Qg extends Xe{_apply(e){zs(e,"orderByPriority");const t=Rs(e._queryParams,K);return Pt(t),new Re(e._repo,e._path,t,!0)}}function Yg(){return new Qg}class Jg extends Xe{_apply(e){zs(e,"orderByValue");const t=Rs(e._queryParams,lr);return Pt(t),new Re(e._repo,e._path,t,!0)}}function Xg(){return new Jg}class Zg extends Xe{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(it("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Yl(this._value,this._key)._apply(new Jl(this._value,this._key)._apply(e))}}function em(n,e){return Kn("equalTo","key",e,!0),new Zg(n,e)}function Qe(n,...e){let t=We(n);for(const s of e)t=s._apply(t);return t}R_(Ge);B_(Ge);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="FIREBASE_DATABASE_EMULATOR_HOST",qi={};let nm=!1;function sm(n,e,t,s){n.repoInfo_=new Xa(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Xl(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||st("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),le("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=Vi(r,i),u=l.repoInfo,d,h;typeof process<"u"&&process.env&&(h=process.env[tm]),h?(d=!0,r=`http://${h}?ns=${u.namespace}`,l=Vi(r,i),u=l.repoInfo):d=!l.repoInfo.secure;const _=i&&d?new tn(tn.OWNER):new qf(n.name,n.options,e);Fl("Invalid Firebase Database URL",l),x(l.path)||st("Database URL must point to the root of a Firebase Database (not including a child path).");const p=rm(u,n,_,new zf(n.name,t));return new om(p,n)}function im(n,e){const t=qi[e];(!t||t[n.key]!==n)&&st(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Vl(n),delete t[n.key]}function rm(n,e,t,s){let i=qi[e.name];i||(i={},qi[e.name]=i);let r=i[n.toURLString()];return r&&st("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ug(n,nm,t,s),i[n.toURLString()]=r,r}let om=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ge(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(im(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&st("Cannot call "+e+" on a deleted database.")}};function Zl(){sn.IS_TRANSPORT_INITIALIZED&&ve("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function am(){Zl(),ft.forceDisallow()}function lm(){Zl(),je.forceDisallow(),ft.forceAllow()}function cm(n,e,t,s={}){n=We(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&st("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&st('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new tn(tn.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Xd(s.mockUserToken,n.app.options.projectId);r=new tn(l)}sm(i,e,t,r)}function um(n){n=We(n),n._checkNotDeleted("goOffline"),Vl(n._repo)}function dm(n){n=We(n),n._checkNotDeleted("goOnline"),wg(n._repo)}function hm(n,e){Wa(n,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n){Ma(Ji),nn(new wt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Xl(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),gt(Po,xo,n),gt(Po,xo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm={".sv":"timestamp"};function _m(){return pm}function gm(n){return{".sv":{increment:n}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mm=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function ym(n,e,t){var s;if(n=We(n),qe("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,r=new xe,l=(d,h,_)=>{let p=null;d?r.reject(d):(p=new Gs(_,new Ge(n._repo,n._path),K),r.resolve(new mm(h,p)))},u=zi(n,()=>{});return bg(n._repo,n._path,e,l,u,i),r.promise}lt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};lt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};fm();const vm="@firebase/database-compat",wm="0.3.4";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new As("@firebase/database-compat"),ec=function(n){const e="FIREBASE WARNING: "+n;bm.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(Ne(n,e)+"must be a boolean.")},Em=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Ne(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this._delegate=e}cancel(e){I("OnDisconnect.cancel",0,1,arguments.length),oe("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){I("OnDisconnect.remove",0,1,arguments.length),oe("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){I("OnDisconnect.set",1,2,arguments.length),oe("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){I("OnDisconnect.setWithPriority",2,3,arguments.length),oe("OnDisconnect.setWithPriority","onComplete",s,!0);const i=this._delegate.setWithPriority(e,t);return s&&i.then(()=>s(null),r=>s(r)),i}update(e,t){if(I("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,ec("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}oe("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),i=>t(i)),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return I("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this._database=e,this._delegate=t}val(){return I("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return I("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return I("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return I("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return I("DataSnapshot.child",0,1,arguments.length),e=String(e),Wn("DataSnapshot.child","path",e,!1),new vt(this._database,this._delegate.child(e))}hasChild(e){return I("DataSnapshot.hasChild",1,1,arguments.length),Wn("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return I("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return I("DataSnapshot.forEach",1,1,arguments.length),oe("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new vt(this._database,t)))}hasChildren(){return I("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return I("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return I("DataSnapshot.ref",0,0,arguments.length),new Be(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class pe{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,i){var r;I("Query.on",2,4,arguments.length),oe("Query.on","callback",t,!1);const l=pe.getCancelAndContextArgs_("Query.on",s,i),u=(h,_)=>{t.call(l.context,new vt(this.database,h),_)};u.userCallback=t,u.context=l.context;const d=(r=l.cancel)===null||r===void 0?void 0:r.bind(l.context);switch(e){case"value":return zi(this._delegate,u,d),t;case"child_added":return la(this._delegate,u,d),t;case"child_removed":return da(this._delegate,u,d),t;case"child_changed":return ca(this._delegate,u,d),t;case"child_moved":return ua(this._delegate,u,d),t;default:throw new Error(Ne("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(I("Query.off",0,3,arguments.length),Em("Query.off",e,!0),oe("Query.off","callback",t,!0),yo("Query.off","context",s,!0),t){const i=()=>{};i.userCallback=t,i.context=s,ha(this._delegate,e,i)}else ha(this._delegate,e)}get(){return Og(this._delegate).then(e=>new vt(this.database,e))}once(e,t,s,i){I("Query.once",1,4,arguments.length),oe("Query.once","callback",t,!0);const r=pe.getCancelAndContextArgs_("Query.once",s,i),l=new xe,u=(h,_)=>{const p=new vt(this.database,h);t&&t.call(r.context,p,_),l.resolve(p)};u.userCallback=t,u.context=r.context;const d=h=>{r.cancel&&r.cancel.call(r.context,h),l.reject(h)};switch(e){case"value":zi(this._delegate,u,d,{onlyOnce:!0});break;case"child_added":la(this._delegate,u,d,{onlyOnce:!0});break;case"child_removed":da(this._delegate,u,d,{onlyOnce:!0});break;case"child_changed":ca(this._delegate,u,d,{onlyOnce:!0});break;case"child_moved":ua(this._delegate,u,d,{onlyOnce:!0});break;default:throw new Error(Ne("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return l.promise}limitToFirst(e){return I("Query.limitToFirst",1,1,arguments.length),new pe(this.database,Qe(this._delegate,Ug(e)))}limitToLast(e){return I("Query.limitToLast",1,1,arguments.length),new pe(this.database,Qe(this._delegate,jg(e)))}orderByChild(e){return I("Query.orderByChild",1,1,arguments.length),new pe(this.database,Qe(this._delegate,qg(e)))}orderByKey(){return I("Query.orderByKey",0,0,arguments.length),new pe(this.database,Qe(this._delegate,Kg()))}orderByPriority(){return I("Query.orderByPriority",0,0,arguments.length),new pe(this.database,Qe(this._delegate,Yg()))}orderByValue(){return I("Query.orderByValue",0,0,arguments.length),new pe(this.database,Qe(this._delegate,Xg()))}startAt(e=null,t){return I("Query.startAt",0,2,arguments.length),new pe(this.database,Qe(this._delegate,Fg(e,t)))}startAfter(e=null,t){return I("Query.startAfter",0,2,arguments.length),new pe(this.database,Qe(this._delegate,Wg(e,t)))}endAt(e=null,t){return I("Query.endAt",0,2,arguments.length),new pe(this.database,Qe(this._delegate,Lg(e,t)))}endBefore(e=null,t){return I("Query.endBefore",0,2,arguments.length),new pe(this.database,Qe(this._delegate,Bg(e,t)))}equalTo(e,t){return I("Query.equalTo",1,2,arguments.length),new pe(this.database,Qe(this._delegate,em(e,t)))}toString(){return I("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return I("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(I("Query.isEqual",1,1,arguments.length),!(e instanceof pe)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const i={cancel:void 0,context:void 0};if(t&&s)i.cancel=t,oe(e,"cancel",i.cancel,!0),i.context=s,yo(e,"context",i.context,!0);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(Ne(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Be(this.database,new Ge(this._delegate._repo,this._delegate._path))}}class Be extends pe{constructor(e,t){super(e,new Re(t._repo,t._path,new Ns,!1)),this.database=e,this._delegate=t}getKey(){return I("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return I("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Be(this.database,Ht(this._delegate,e))}getParent(){I("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Be(this.database,e):null}getRoot(){return I("Reference.root",0,0,arguments.length),new Be(this.database,this._delegate.root)}set(e,t){I("Reference.set",1,2,arguments.length),oe("Reference.set","onComplete",t,!0);const s=Dr(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}update(e,t){if(I("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,ec("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}qe("Reference.update",this._delegate._path),oe("Reference.update","onComplete",t,!0);const s=Dg(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){I("Reference.setWithPriority",2,3,arguments.length),oe("Reference.setWithPriority","onComplete",s,!0);const i=Rg(this._delegate,e,t);return s&&i.then(()=>s(null),r=>s(r)),i}remove(e){I("Reference.remove",0,1,arguments.length),oe("Reference.remove","onComplete",e,!0);const t=kg(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){I("Reference.transaction",1,3,arguments.length),oe("Reference.transaction","transactionUpdate",e,!1),oe("Reference.transaction","onComplete",t,!0),Cm("Reference.transaction","applyLocally",s,!0);const i=ym(this._delegate,e,{applyLocally:s}).then(r=>new Im(r.committed,new vt(this.database,r.snapshot)));return t&&i.then(r=>t(null,r.committed,r.snapshot),r=>t(r,!1,null)),i}setPriority(e,t){I("Reference.setPriority",1,2,arguments.length),oe("Reference.setPriority","onComplete",t,!0);const s=Ng(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}push(e,t){I("Reference.push",0,2,arguments.length),oe("Reference.push","onComplete",t,!0);const s=xg(this._delegate,e),i=s.then(l=>new Be(this.database,l));t&&i.then(()=>t(null),l=>t(l));const r=new Be(this.database,s);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return qe("Reference.onDisconnect",this._delegate._path),new Sm(new Pg(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:am,forceLongPolling:lm}}useEmulator(e,t,s={}){cm(this._delegate,e,t,s)}ref(e){if(I("database.ref",0,1,arguments.length),e instanceof Be){const t=aa(this._delegate,e.toString());return new Be(this,t)}else{const t=Ql(this._delegate,e);return new Be(this,t)}}refFromURL(e){I("database.refFromURL",1,1,arguments.length);const s=aa(this._delegate,e);return new Be(this,s)}goOffline(){return I("database.goOffline",0,0,arguments.length),um(this._delegate)}goOnline(){return I("database.goOnline",0,0,arguments.length),dm(this._delegate)}}Hn.ServerValue={TIMESTAMP:_m(),increment:n=>gm(n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm({app:n,url:e,version:t,customAuthImpl:s,namespace:i,nodeAdmin:r=!1}){Ma(t);const l=new Ca("auth-internal",new Ea("database-standalone"));return l.setComponent(new wt("auth-internal",()=>s,"PRIVATE")),{instance:new Hn(Xl(n,l,void 0,e,r),n),namespace:i}}var Am=Object.freeze({__proto__:null,initStandalone:Tm});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=Hn.ServerValue;function xm(n){n.INTERNAL.registerComponent(new wt("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new Hn(i,s)},"PUBLIC").setServiceProps({Reference:Be,Query:pe,Database:Hn,DataSnapshot:vt,enableLogging:hm,INTERNAL:Am,ServerValue:Pm}).setMultipleInstances(!0)),n.registerVersion(vm,wm)}xm(Ps);const km={apiKey:"AIzaSyA6nAQ1xgsCY6w1jgS_TpbcRAvRiPV0d4A",authDomain:"carwashcentercr-c70c7.firebaseapp.com",databaseURL:"https://carwashcentercr-c70c7-default-rtdb.firebaseio.com",projectId:"carwashcentercr-c70c7",storageBucket:"carwashcentercr-c70c7.appspot.com",messagingSenderId:"311324575522",appId:"1:311324575522:web:840bf6e4d3944ffc0f477b",measurementId:"G-CENRR12RF4"};Ps.initializeApp(km);const vi=Ps.database();var ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gi={},Nm={get exports(){return Gi},set exports(n){Gi=n}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(n,e){(function(t,s){n.exports=s()})(ht,function(){var t={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const s="swal2-",i=o=>{const a={};for(const c in o)a[o[c]]=s+o[c];return a},r=i(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),l=i(["success","warning","info","question","error"]),u="SweetAlert2:",d=o=>{const a=[];for(let c=0;c<o.length;c++)a.indexOf(o[c])===-1&&a.push(o[c]);return a},h=o=>o.charAt(0).toUpperCase()+o.slice(1),_=o=>{console.warn(`${u} ${typeof o=="object"?o.join(" "):o}`)},p=o=>{console.error(`${u} ${o}`)},g=[],y=o=>{g.includes(o)||(g.push(o),_(o))},w=(o,a)=>{y(`"${o}" is deprecated and will be removed in the next major release. Please use "${a}" instead.`)},C=o=>typeof o=="function"?o():o,L=o=>o&&typeof o.toPromise=="function",ee=o=>L(o)?o.toPromise():Promise.resolve(o),ne=o=>o&&Promise.resolve(o)===o,F=()=>document.body.querySelector(`.${r.container}`),we=o=>{const a=F();return a?a.querySelector(o):null},U=o=>we(`.${o}`),T=()=>U(r.popup),se=()=>U(r.icon),be=()=>U(r["icon-content"]),Ce=()=>U(r.title),Q=()=>U(r["html-container"]),V=()=>U(r.image),ue=()=>U(r["progress-steps"]),$=()=>U(r["validation-message"]),te=()=>we(`.${r.actions} .${r.confirm}`),de=()=>we(`.${r.actions} .${r.cancel}`),_e=()=>we(`.${r.actions} .${r.deny}`),he=()=>U(r["input-label"]),Te=()=>we(`.${r.loader}`),He=()=>U(r.actions),ut=()=>U(r.footer),Ze=()=>U(r["timer-progress-bar"]),Ke=()=>U(r.close),ge=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,W=()=>{const o=Array.from(T().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((c,f)=>{const m=parseInt(c.getAttribute("tabindex")),b=parseInt(f.getAttribute("tabindex"));return m>b?1:m<b?-1:0}),a=Array.from(T().querySelectorAll(ge)).filter(c=>c.getAttribute("tabindex")!=="-1");return d(o.concat(a)).filter(c=>De(c))},M=()=>Ae(document.body,r.shown)&&!Ae(document.body,r["toast-shown"])&&!Ae(document.body,r["no-backdrop"]),xt=()=>T()&&Ae(T(),r.toast),Xn=()=>T().hasAttribute("data-loading"),rt={previousBodyPadding:null},me=(o,a)=>{if(o.textContent="",a){const f=new DOMParser().parseFromString(a,"text/html");Array.from(f.querySelector("head").childNodes).forEach(m=>{o.appendChild(m)}),Array.from(f.querySelector("body").childNodes).forEach(m=>{m instanceof HTMLVideoElement||m instanceof HTMLAudioElement?o.appendChild(m.cloneNode(!0)):o.appendChild(m)})}},Ae=(o,a)=>{if(!a)return!1;const c=a.split(/\s+/);for(let f=0;f<c.length;f++)if(!o.classList.contains(c[f]))return!1;return!0},Zn=(o,a)=>{Array.from(o.classList).forEach(c=>{!Object.values(r).includes(c)&&!Object.values(l).includes(c)&&!Object.values(a.showClass).includes(c)&&o.classList.remove(c)})},Ee=(o,a,c)=>{if(Zn(o,a),a.customClass&&a.customClass[c]){if(typeof a.customClass[c]!="string"&&!a.customClass[c].forEach){_(`Invalid type of customClass.${c}! Expected string or iterable object, got "${typeof a.customClass[c]}"`);return}N(o,a.customClass[c])}},zt=(o,a)=>{if(!a)return null;switch(a){case"select":case"textarea":case"file":return o.querySelector(`.${r.popup} > .${r[a]}`);case"checkbox":return o.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return o.querySelector(`.${r.popup} > .${r.radio} input:checked`)||o.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return o.querySelector(`.${r.popup} > .${r.range} input`);default:return o.querySelector(`.${r.popup} > .${r.input}`)}},kt=o=>{if(o.focus(),o.type!=="file"){const a=o.value;o.value="",o.value=a}},qt=(o,a,c)=>{!o||!a||(typeof a=="string"&&(a=a.split(/\s+/).filter(Boolean)),a.forEach(f=>{Array.isArray(o)?o.forEach(m=>{c?m.classList.add(f):m.classList.remove(f)}):c?o.classList.add(f):o.classList.remove(f)}))},N=(o,a)=>{qt(o,a,!0)},et=(o,a)=>{qt(o,a,!1)},dt=(o,a)=>{const c=Array.from(o.children);for(let f=0;f<c.length;f++){const m=c[f];if(m instanceof HTMLElement&&Ae(m,a))return m}},Gt=(o,a,c)=>{c===`${parseInt(c)}`&&(c=parseInt(c)),c||parseInt(c)===0?o.style[a]=typeof c=="number"?`${c}px`:c:o.style.removeProperty(a)},fe=function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";o.style.display=a},ye=o=>{o.style.display="none"},Or=(o,a,c,f)=>{const m=o.querySelector(a);m&&(m.style[c]=f)},es=function(o,a){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";a?fe(o,c):ye(o)},De=o=>!!(o&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length)),tc=()=>!De(te())&&!De(_e())&&!De(de()),Lr=o=>o.scrollHeight>o.clientHeight,Mr=o=>{const a=window.getComputedStyle(o),c=parseFloat(a.getPropertyValue("animation-duration")||"0"),f=parseFloat(a.getPropertyValue("transition-duration")||"0");return c>0||f>0},Qs=function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const c=Ze();De(c)&&(a&&(c.style.transition="none",c.style.width="100%"),setTimeout(()=>{c.style.transition=`width ${o/1e3}s linear`,c.style.width="0%"},10))},nc=()=>{const o=Ze(),a=parseInt(window.getComputedStyle(o).width);o.style.removeProperty("transition"),o.style.width="100%";const c=parseInt(window.getComputedStyle(o).width),f=a/c*100;o.style.width=`${f}%`},sc=100,R={},ic=()=>{R.previousActiveElement instanceof HTMLElement?(R.previousActiveElement.focus(),R.previousActiveElement=null):document.body&&document.body.focus()},rc=o=>new Promise(a=>{if(!o)return a();const c=window.scrollX,f=window.scrollY;R.restoreFocusTimeout=setTimeout(()=>{ic(),a()},sc),window.scrollTo(c,f)}),Br=()=>typeof window>"u"||typeof document>"u",oc=`
 <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">
   <button type="button" class="${r.close}"></button>
   <ul class="${r["progress-steps"]}"></ul>
   <div class="${r.icon}"></div>
   <img class="${r.image}" />
   <h2 class="${r.title}" id="${r.title}"></h2>
   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>
   <input class="${r.input}" />
   <input type="file" class="${r.file}" />
   <div class="${r.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${r.select}"></select>
   <div class="${r.radio}"></div>
   <label for="${r.checkbox}" class="${r.checkbox}">
     <input type="checkbox" />
     <span class="${r.label}"></span>
   </label>
   <textarea class="${r.textarea}"></textarea>
   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>
   <div class="${r.actions}">
     <div class="${r.loader}"></div>
     <button type="button" class="${r.confirm}"></button>
     <button type="button" class="${r.deny}"></button>
     <button type="button" class="${r.cancel}"></button>
   </div>
   <div class="${r.footer}"></div>
   <div class="${r["timer-progress-bar-container"]}">
     <div class="${r["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),ac=()=>{const o=F();return o?(o.remove(),et([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0):!1},Nt=()=>{R.currentInstance.resetValidationMessage()},lc=()=>{const o=T(),a=dt(o,r.input),c=dt(o,r.file),f=o.querySelector(`.${r.range} input`),m=o.querySelector(`.${r.range} output`),b=dt(o,r.select),q=o.querySelector(`.${r.checkbox} input`),Oe=dt(o,r.textarea);a.oninput=Nt,c.onchange=Nt,b.onchange=Nt,q.onchange=Nt,Oe.oninput=Nt,f.oninput=()=>{Nt(),m.value=f.value},f.onchange=()=>{Nt(),m.value=f.value}},cc=o=>typeof o=="string"?document.querySelector(o):o,uc=o=>{const a=T();a.setAttribute("role",o.toast?"alert":"dialog"),a.setAttribute("aria-live",o.toast?"polite":"assertive"),o.toast||a.setAttribute("aria-modal","true")},dc=o=>{window.getComputedStyle(o).direction==="rtl"&&N(F(),r.rtl)},hc=o=>{const a=ac();if(Br()){p("SweetAlert2 requires document to initialize");return}const c=document.createElement("div");c.className=r.container,a&&N(c,r["no-transition"]),me(c,oc);const f=cc(o.target);f.appendChild(c),uc(o),dc(f),lc()},Ys=(o,a)=>{o instanceof HTMLElement?a.appendChild(o):typeof o=="object"?fc(o,a):o&&me(a,o)},fc=(o,a)=>{o.jquery?pc(a,o):me(a,o.toString())},pc=(o,a)=>{if(o.textContent="",0 in a)for(let c=0;c in a;c++)o.appendChild(a[c].cloneNode(!0));else o.appendChild(a.cloneNode(!0))},_n=(()=>{if(Br())return!1;const o=document.createElement("div"),a={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c)&&typeof o.style[c]<"u")return a[c];return!1})(),_c=()=>{const o=document.createElement("div");o.className=r["scrollbar-measure"],document.body.appendChild(o);const a=o.getBoundingClientRect().width-o.clientWidth;return document.body.removeChild(o),a},gc=(o,a)=>{const c=He(),f=Te();!a.showConfirmButton&&!a.showDenyButton&&!a.showCancelButton?ye(c):fe(c),Ee(c,a,"actions"),mc(c,f,a),me(f,a.loaderHtml),Ee(f,a,"loader")};function mc(o,a,c){const f=te(),m=_e(),b=de();Js(f,"confirm",c),Js(m,"deny",c),Js(b,"cancel",c),yc(f,m,b,c),c.reverseButtons&&(c.toast?(o.insertBefore(b,f),o.insertBefore(m,f)):(o.insertBefore(b,a),o.insertBefore(m,a),o.insertBefore(f,a)))}function yc(o,a,c,f){if(!f.buttonsStyling){et([o,a,c],r.styled);return}N([o,a,c],r.styled),f.confirmButtonColor&&(o.style.backgroundColor=f.confirmButtonColor,N(o,r["default-outline"])),f.denyButtonColor&&(a.style.backgroundColor=f.denyButtonColor,N(a,r["default-outline"])),f.cancelButtonColor&&(c.style.backgroundColor=f.cancelButtonColor,N(c,r["default-outline"]))}function Js(o,a,c){es(o,c[`show${h(a)}Button`],"inline-block"),me(o,c[`${a}ButtonText`]),o.setAttribute("aria-label",c[`${a}ButtonAriaLabel`]),o.className=r[a],Ee(o,c,`${a}Button`),N(o,c[`${a}ButtonClass`])}const vc=(o,a)=>{const c=Ke();me(c,a.closeButtonHtml),Ee(c,a,"closeButton"),es(c,a.showCloseButton),c.setAttribute("aria-label",a.closeButtonAriaLabel)},wc=(o,a)=>{const c=F();c&&(bc(c,a.backdrop),Cc(c,a.position),Ec(c,a.grow),Ee(c,a,"container"))};function bc(o,a){typeof a=="string"?o.style.background=a:a||N([document.documentElement,document.body],r["no-backdrop"])}function Cc(o,a){a in r?N(o,r[a]):(_('The "position" parameter is not valid, defaulting to "center"'),N(o,r.center))}function Ec(o,a){if(a&&typeof a=="string"){const c=`grow-${a}`;c in r&&N(o,r[c])}}const Sc=["input","file","range","select","radio","checkbox","textarea"],Ic=(o,a)=>{const c=T(),f=t.innerParams.get(o),m=!f||a.input!==f.input;Sc.forEach(b=>{const q=dt(c,r[b]);Pc(b,a.inputAttributes),q.className=r[b],m&&ye(q)}),a.input&&(m&&Tc(a),xc(a))},Tc=o=>{if(!Pe[o.input]){p(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${o.input}"`);return}const a=Fr(o.input),c=Pe[o.input](a,o);fe(a),o.inputAutoFocus&&setTimeout(()=>{kt(c)})},Ac=o=>{for(let a=0;a<o.attributes.length;a++){const c=o.attributes[a].name;["type","value","style"].includes(c)||o.removeAttribute(c)}},Pc=(o,a)=>{const c=zt(T(),o);if(c){Ac(c);for(const f in a)c.setAttribute(f,a[f])}},xc=o=>{const a=Fr(o.input);typeof o.customClass=="object"&&N(a,o.customClass.input)},Xs=(o,a)=>{(!o.placeholder||a.inputPlaceholder)&&(o.placeholder=a.inputPlaceholder)},gn=(o,a,c)=>{if(c.inputLabel){o.id=r.input;const f=document.createElement("label"),m=r["input-label"];f.setAttribute("for",o.id),f.className=m,typeof c.customClass=="object"&&N(f,c.customClass.inputLabel),f.innerText=c.inputLabel,a.insertAdjacentElement("beforebegin",f)}},Fr=o=>dt(T(),r[o]||r.input),ts=(o,a)=>{["string","number"].includes(typeof a)?o.value=`${a}`:ne(a)||_(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof a}"`)},Pe={};Pe.text=Pe.email=Pe.password=Pe.number=Pe.tel=Pe.url=(o,a)=>(ts(o,a.inputValue),gn(o,o,a),Xs(o,a),o.type=a.input,o),Pe.file=(o,a)=>(gn(o,o,a),Xs(o,a),o),Pe.range=(o,a)=>{const c=o.querySelector("input"),f=o.querySelector("output");return ts(c,a.inputValue),c.type=a.input,ts(f,a.inputValue),gn(c,o,a),o},Pe.select=(o,a)=>{if(o.textContent="",a.inputPlaceholder){const c=document.createElement("option");me(c,a.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,o.appendChild(c)}return gn(o,o,a),o},Pe.radio=o=>(o.textContent="",o),Pe.checkbox=(o,a)=>{const c=zt(T(),"checkbox");c.value="1",c.id=r.checkbox,c.checked=Boolean(a.inputValue);const f=o.querySelector("span");return me(f,a.inputPlaceholder),c},Pe.textarea=(o,a)=>{ts(o,a.inputValue),Xs(o,a),gn(o,o,a);const c=f=>parseInt(window.getComputedStyle(f).marginLeft)+parseInt(window.getComputedStyle(f).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const f=parseInt(window.getComputedStyle(T()).width),m=()=>{const b=o.offsetWidth+c(o);b>f?T().style.width=`${b}px`:T().style.width=null};new MutationObserver(m).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const kc=(o,a)=>{const c=Q();Ee(c,a,"htmlContainer"),a.html?(Ys(a.html,c),fe(c,"block")):a.text?(c.textContent=a.text,fe(c,"block")):ye(c),Ic(o,a)},Nc=(o,a)=>{const c=ut();es(c,a.footer),a.footer&&Ys(a.footer,c),Ee(c,a,"footer")},Rc=(o,a)=>{const c=t.innerParams.get(o),f=se();if(c&&a.icon===c.icon){Wr(f,a),$r(f,a);return}if(!a.icon&&!a.iconHtml){ye(f);return}if(a.icon&&Object.keys(l).indexOf(a.icon)===-1){p(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`),ye(f);return}fe(f),Wr(f,a),$r(f,a),N(f,a.showClass.icon)},$r=(o,a)=>{for(const c in l)a.icon!==c&&et(o,l[c]);N(o,l[a.icon]),Mc(o,a),Dc(),Ee(o,a,"icon")},Dc=()=>{const o=T(),a=window.getComputedStyle(o).getPropertyValue("background-color"),c=o.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let f=0;f<c.length;f++)c[f].style.backgroundColor=a},Oc=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Lc=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Wr=(o,a)=>{let c=o.innerHTML,f;a.iconHtml?f=Hr(a.iconHtml):a.icon==="success"?(f=Oc,c=c.replace(/ style=".*?"/g,"")):a.icon==="error"?f=Lc:f=Hr({question:"?",warning:"!",info:"i"}[a.icon]),c.trim()!==f.trim()&&me(o,f)},Mc=(o,a)=>{if(a.iconColor){o.style.color=a.iconColor,o.style.borderColor=a.iconColor;for(const c of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Or(o,c,"backgroundColor",a.iconColor);Or(o,".swal2-success-ring","borderColor",a.iconColor)}},Hr=o=>`<div class="${r["icon-content"]}">${o}</div>`,Bc=(o,a)=>{const c=V();if(!a.imageUrl){ye(c);return}fe(c,""),c.setAttribute("src",a.imageUrl),c.setAttribute("alt",a.imageAlt),Gt(c,"width",a.imageWidth),Gt(c,"height",a.imageHeight),c.className=r.image,Ee(c,a,"image")},Fc=(o,a)=>{const c=F(),f=T();a.toast?(Gt(c,"width",a.width),f.style.width="100%",f.insertBefore(Te(),se())):Gt(f,"width",a.width),Gt(f,"padding",a.padding),a.color&&(f.style.color=a.color),a.background&&(f.style.background=a.background),ye($()),$c(f,a)},$c=(o,a)=>{o.className=`${r.popup} ${De(o)?a.showClass.popup:""}`,a.toast?(N([document.documentElement,document.body],r["toast-shown"]),N(o,r.toast)):N(o,r.modal),Ee(o,a,"popup"),typeof a.customClass=="string"&&N(o,a.customClass),a.icon&&N(o,r[`icon-${a.icon}`])},Wc=(o,a)=>{const c=ue();if(!a.progressSteps||a.progressSteps.length===0){ye(c);return}fe(c),c.textContent="",a.currentProgressStep>=a.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),a.progressSteps.forEach((f,m)=>{const b=Hc(f);if(c.appendChild(b),m===a.currentProgressStep&&N(b,r["active-progress-step"]),m!==a.progressSteps.length-1){const q=Uc(a);c.appendChild(q)}})},Hc=o=>{const a=document.createElement("li");return N(a,r["progress-step"]),me(a,o),a},Uc=o=>{const a=document.createElement("li");return N(a,r["progress-step-line"]),o.progressStepsDistance&&Gt(a,"width",o.progressStepsDistance),a},Vc=(o,a)=>{const c=Ce();es(c,a.title||a.titleText,"block"),a.title&&Ys(a.title,c),a.titleText&&(c.innerText=a.titleText),Ee(c,a,"title")},Ur=(o,a)=>{Fc(o,a),wc(o,a),Wc(o,a),Rc(o,a),Bc(o,a),Vc(o,a),vc(o,a),kc(o,a),gc(o,a),Nc(o,a),typeof a.didRender=="function"&&a.didRender(T())};function Vr(){const o=t.innerParams.get(this);if(!o)return;const a=t.domCache.get(this);ye(a.loader),xt()?o.icon&&fe(se()):jc(a),et([a.popup,a.actions],r.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}const jc=o=>{const a=o.popup.getElementsByClassName(o.loader.getAttribute("data-button-to-replace"));a.length?fe(a[0],"inline-block"):tc()&&ye(o.actions)};function zc(o){const a=t.innerParams.get(o||this),c=t.domCache.get(o||this);return c?zt(c.popup,a.input):null}const qc=()=>De(T()),jr=()=>te()&&te().click(),Gc=()=>_e()&&_e().click(),Kc=()=>de()&&de().click(),Kt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),zr=o=>{o.keydownTarget&&o.keydownHandlerAdded&&(o.keydownTarget.removeEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!1)},Qc=(o,a,c,f)=>{zr(a),c.toast||(a.keydownHandler=m=>Jc(o,m,f),a.keydownTarget=c.keydownListenerCapture?window:T(),a.keydownListenerCapture=c.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},Zs=(o,a)=>{const c=W();if(c.length){o=o+a,o===c.length?o=0:o===-1&&(o=c.length-1),c[o].focus();return}T().focus()},qr=["ArrowRight","ArrowDown"],Yc=["ArrowLeft","ArrowUp"],Jc=(o,a,c)=>{const f=t.innerParams.get(o);f&&(a.isComposing||a.keyCode===229||(f.stopKeydownPropagation&&a.stopPropagation(),a.key==="Enter"?Xc(o,a,f):a.key==="Tab"?Zc(a):[...qr,...Yc].includes(a.key)?eu(a.key):a.key==="Escape"&&tu(a,f,c)))},Xc=(o,a,c)=>{if(C(c.allowEnterKey)&&a.target&&o.getInput()&&a.target instanceof HTMLElement&&a.target.outerHTML===o.getInput().outerHTML){if(["textarea","file"].includes(c.input))return;jr(),a.preventDefault()}},Zc=o=>{const a=o.target,c=W();let f=-1;for(let m=0;m<c.length;m++)if(a===c[m]){f=m;break}o.shiftKey?Zs(f,-1):Zs(f,1),o.stopPropagation(),o.preventDefault()},eu=o=>{const a=te(),c=_e(),f=de(),m=[a,c,f];if(document.activeElement instanceof HTMLElement&&!m.includes(document.activeElement))return;const b=qr.includes(o)?"nextElementSibling":"previousElementSibling";let q=document.activeElement;for(let Oe=0;Oe<He().children.length;Oe++){if(q=q[b],!q)return;if(q instanceof HTMLButtonElement&&De(q))break}q instanceof HTMLButtonElement&&q.focus()},tu=(o,a,c)=>{C(a.allowEscapeKey)&&(o.preventDefault(),c(Kt.esc))};var mn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const nu=()=>{Array.from(document.body.children).forEach(a=>{a===F()||a.contains(F())||(a.hasAttribute("aria-hidden")&&a.setAttribute("data-previous-aria-hidden",a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))})},Gr=()=>{Array.from(document.body.children).forEach(a=>{a.hasAttribute("data-previous-aria-hidden")?(a.setAttribute("aria-hidden",a.getAttribute("data-previous-aria-hidden")),a.removeAttribute("data-previous-aria-hidden")):a.removeAttribute("aria-hidden")})},su=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Ae(document.body,r.iosfix)){const a=document.body.scrollTop;document.body.style.top=`${a*-1}px`,N(document.body,r.iosfix),ru(),iu()}},iu=()=>{const o=navigator.userAgent,a=!!o.match(/iPad/i)||!!o.match(/iPhone/i),c=!!o.match(/WebKit/i);a&&c&&!o.match(/CriOS/i)&&T().scrollHeight>window.innerHeight-44&&(F().style.paddingBottom=`${44}px`)},ru=()=>{const o=F();let a;o.ontouchstart=c=>{a=ou(c)},o.ontouchmove=c=>{a&&(c.preventDefault(),c.stopPropagation())}},ou=o=>{const a=o.target,c=F();return au(o)||lu(o)?!1:a===c||!Lr(c)&&a instanceof HTMLElement&&a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"&&!(Lr(Q())&&Q().contains(a))},au=o=>o.touches&&o.touches.length&&o.touches[0].touchType==="stylus",lu=o=>o.touches&&o.touches.length>1,cu=()=>{if(Ae(document.body,r.iosfix)){const o=parseInt(document.body.style.top,10);et(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=o*-1}},uu=()=>{rt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(rt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${rt.previousBodyPadding+_c()}px`)},du=()=>{rt.previousBodyPadding!==null&&(document.body.style.paddingRight=`${rt.previousBodyPadding}px`,rt.previousBodyPadding=null)};function Kr(o,a,c,f){xt()?Qr(o,f):(rc(c).then(()=>Qr(o,f)),zr(R)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),M()&&(du(),cu(),Gr()),hu()}function hu(){et([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function ns(o){o=gu(o);const a=mn.swalPromiseResolve.get(this),c=pu(this);this.isAwaitingPromise()?o.isDismissed||(yn(this),a(o)):c&&a(o)}function fu(){return!!t.awaitingPromise.get(this)}const pu=o=>{const a=T();if(!a)return!1;const c=t.innerParams.get(o);if(!c||Ae(a,c.hideClass.popup))return!1;et(a,c.showClass.popup),N(a,c.hideClass.popup);const f=F();return et(f,c.showClass.backdrop),N(f,c.hideClass.backdrop),mu(o,a,c),!0};function _u(o){const a=mn.swalPromiseReject.get(this);yn(this),a&&a(o)}const yn=o=>{o.isAwaitingPromise()&&(t.awaitingPromise.delete(o),t.innerParams.get(o)||o._destroy())},gu=o=>typeof o>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},o),mu=(o,a,c)=>{const f=F(),m=_n&&Mr(a);typeof c.willClose=="function"&&c.willClose(a),m?yu(o,a,f,c.returnFocus,c.didClose):Kr(o,f,c.returnFocus,c.didClose)},yu=(o,a,c,f,m)=>{R.swalCloseEventFinishedCallback=Kr.bind(null,o,c,f,m),a.addEventListener(_n,function(b){b.target===a&&(R.swalCloseEventFinishedCallback(),delete R.swalCloseEventFinishedCallback)})},Qr=(o,a)=>{setTimeout(()=>{typeof a=="function"&&a.bind(o.params)(),o._destroy()})};function Yr(o,a,c){const f=t.domCache.get(o);a.forEach(m=>{f[m].disabled=c})}function Jr(o,a){if(o)if(o.type==="radio"){const f=o.parentNode.parentNode.querySelectorAll("input");for(let m=0;m<f.length;m++)f[m].disabled=a}else o.disabled=a}function vu(){Yr(this,["confirmButton","denyButton","cancelButton"],!1)}function wu(){Yr(this,["confirmButton","denyButton","cancelButton"],!0)}function bu(){Jr(this.getInput(),!1)}function Cu(){Jr(this.getInput(),!0)}function Eu(o){const a=t.domCache.get(this),c=t.innerParams.get(this);me(a.validationMessage,o),a.validationMessage.className=r["validation-message"],c.customClass&&c.customClass.validationMessage&&N(a.validationMessage,c.customClass.validationMessage),fe(a.validationMessage);const f=this.getInput();f&&(f.setAttribute("aria-invalid",!0),f.setAttribute("aria-describedby",r["validation-message"]),kt(f),N(f,r.inputerror))}function Su(){const o=t.domCache.get(this);o.validationMessage&&ye(o.validationMessage);const a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),et(a,r.inputerror))}const Qt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Iu=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Tu={},Au=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Xr=o=>Object.prototype.hasOwnProperty.call(Qt,o),Zr=o=>Iu.indexOf(o)!==-1,ei=o=>Tu[o],Pu=o=>{Xr(o)||_(`Unknown parameter "${o}"`)},xu=o=>{Au.includes(o)&&_(`The parameter "${o}" is incompatible with toasts`)},ku=o=>{ei(o)&&w(o,ei(o))},Nu=o=>{o.backdrop===!1&&o.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const a in o)Pu(a),o.toast&&xu(a),ku(a)};function Ru(o){const a=T(),c=t.innerParams.get(this);if(!a||Ae(a,c.hideClass.popup)){_("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const f=Du(o),m=Object.assign({},c,f);Ur(this,m),t.innerParams.set(this,m),Object.defineProperties(this,{params:{value:Object.assign({},this.params,o),writable:!1,enumerable:!0}})}const Du=o=>{const a={};return Object.keys(o).forEach(c=>{Zr(c)?a[c]=o[c]:_(`Invalid parameter to update: ${c}`)}),a};function Ou(){const o=t.domCache.get(this),a=t.innerParams.get(this);if(!a){eo(this);return}o.popup&&R.swalCloseEventFinishedCallback&&(R.swalCloseEventFinishedCallback(),delete R.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),Lu(this)}const Lu=o=>{eo(o),delete o.params,delete R.keydownHandler,delete R.keydownTarget,delete R.currentInstance},eo=o=>{o.isAwaitingPromise()?(ti(t,o),t.awaitingPromise.set(o,!0)):(ti(mn,o),ti(t,o))},ti=(o,a)=>{for(const c in o)o[c].delete(a)};var to=Object.freeze({__proto__:null,_destroy:Ou,close:ns,closeModal:ns,closePopup:ns,closeToast:ns,disableButtons:wu,disableInput:Cu,disableLoading:Vr,enableButtons:vu,enableInput:bu,getInput:zc,handleAwaitingPromise:yn,hideLoading:Vr,isAwaitingPromise:fu,rejectPromise:_u,resetValidationMessage:Su,showValidationMessage:Eu,update:Ru});const Yt=o=>{let a=T();a||new is,a=T();const c=Te();xt()?ye(se()):Mu(a,o),fe(c),a.setAttribute("data-loading","true"),a.setAttribute("aria-busy","true"),a.focus()},Mu=(o,a)=>{const c=He(),f=Te();!a&&De(te())&&(a=te()),fe(c),a&&(ye(a),f.setAttribute("data-button-to-replace",a.className)),f.parentNode.insertBefore(f,a),N([o,c],r.loading)},Bu=(o,a)=>{a.input==="select"||a.input==="radio"?Uu(o,a):["text","email","number","tel","textarea"].includes(a.input)&&(L(a.inputValue)||ne(a.inputValue))&&(Yt(te()),Vu(o,a))},Fu=(o,a)=>{const c=o.getInput();if(!c)return null;switch(a.input){case"checkbox":return $u(c);case"radio":return Wu(c);case"file":return Hu(c);default:return a.inputAutoTrim?c.value.trim():c.value}},$u=o=>o.checked?1:0,Wu=o=>o.checked?o.value:null,Hu=o=>o.files.length?o.getAttribute("multiple")!==null?o.files:o.files[0]:null,Uu=(o,a)=>{const c=T(),f=m=>{ju[a.input](c,ni(m),a)};L(a.inputOptions)||ne(a.inputOptions)?(Yt(te()),ee(a.inputOptions).then(m=>{o.hideLoading(),f(m)})):typeof a.inputOptions=="object"?f(a.inputOptions):p(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof a.inputOptions}`)},Vu=(o,a)=>{const c=o.getInput();ye(c),ee(a.inputValue).then(f=>{c.value=a.input==="number"?`${parseFloat(f)||0}`:`${f}`,fe(c),c.focus(),o.hideLoading()}).catch(f=>{p(`Error in inputValue promise: ${f}`),c.value="",fe(c),c.focus(),o.hideLoading()})},ju={select:(o,a,c)=>{const f=dt(o,r.select),m=(b,q,Oe)=>{const Se=document.createElement("option");Se.value=Oe,me(Se,q),Se.selected=no(Oe,c.inputValue),b.appendChild(Se)};a.forEach(b=>{const q=b[0],Oe=b[1];if(Array.isArray(Oe)){const Se=document.createElement("optgroup");Se.label=q,Se.disabled=!1,f.appendChild(Se),Oe.forEach(Xt=>m(Se,Xt[1],Xt[0]))}else m(f,Oe,q)}),f.focus()},radio:(o,a,c)=>{const f=dt(o,r.radio);a.forEach(b=>{const q=b[0],Oe=b[1],Se=document.createElement("input"),Xt=document.createElement("label");Se.type="radio",Se.name=r.radio,Se.value=q,no(q,c.inputValue)&&(Se.checked=!0);const oi=document.createElement("span");me(oi,Oe),oi.className=r.label,Xt.appendChild(Se),Xt.appendChild(oi),f.appendChild(Xt)});const m=f.querySelectorAll("input");m.length&&m[0].focus()}},ni=o=>{const a=[];return typeof Map<"u"&&o instanceof Map?o.forEach((c,f)=>{let m=c;typeof m=="object"&&(m=ni(m)),a.push([f,m])}):Object.keys(o).forEach(c=>{let f=o[c];typeof f=="object"&&(f=ni(f)),a.push([c,f])}),a},no=(o,a)=>a&&a.toString()===o.toString(),zu=o=>{const a=t.innerParams.get(o);o.disableButtons(),a.input?so(o,"confirm"):ii(o,!0)},qu=o=>{const a=t.innerParams.get(o);o.disableButtons(),a.returnInputValueOnDeny?so(o,"deny"):si(o,!1)},Gu=(o,a)=>{o.disableButtons(),a(Kt.cancel)},so=(o,a)=>{const c=t.innerParams.get(o);if(!c.input){p(`The "input" parameter is needed to be set when using returnInputValueOn${h(a)}`);return}const f=Fu(o,c);c.inputValidator?Ku(o,f,a):o.getInput().checkValidity()?a==="deny"?si(o,f):ii(o,f):(o.enableButtons(),o.showValidationMessage(c.validationMessage))},Ku=(o,a,c)=>{const f=t.innerParams.get(o);o.disableInput(),Promise.resolve().then(()=>ee(f.inputValidator(a,f.validationMessage))).then(b=>{o.enableButtons(),o.enableInput(),b?o.showValidationMessage(b):c==="deny"?si(o,a):ii(o,a)})},si=(o,a)=>{const c=t.innerParams.get(o||void 0);c.showLoaderOnDeny&&Yt(_e()),c.preDeny?(t.awaitingPromise.set(o||void 0,!0),Promise.resolve().then(()=>ee(c.preDeny(a,c.validationMessage))).then(m=>{m===!1?(o.hideLoading(),yn(o)):o.close({isDenied:!0,value:typeof m>"u"?a:m})}).catch(m=>ro(o||void 0,m))):o.close({isDenied:!0,value:a})},io=(o,a)=>{o.close({isConfirmed:!0,value:a})},ro=(o,a)=>{o.rejectPromise(a)},ii=(o,a)=>{const c=t.innerParams.get(o||void 0);c.showLoaderOnConfirm&&Yt(),c.preConfirm?(o.resetValidationMessage(),t.awaitingPromise.set(o||void 0,!0),Promise.resolve().then(()=>ee(c.preConfirm(a,c.validationMessage))).then(m=>{De($())||m===!1?(o.hideLoading(),yn(o)):io(o,typeof m>"u"?a:m)}).catch(m=>ro(o||void 0,m))):io(o,a)},Qu=(o,a,c)=>{t.innerParams.get(o).toast?Yu(o,a,c):(Xu(a),Zu(a),ed(o,a,c))},Yu=(o,a,c)=>{a.popup.onclick=()=>{const f=t.innerParams.get(o);f&&(Ju(f)||f.timer||f.input)||c(Kt.close)}},Ju=o=>o.showConfirmButton||o.showDenyButton||o.showCancelButton||o.showCloseButton;let ss=!1;const Xu=o=>{o.popup.onmousedown=()=>{o.container.onmouseup=function(a){o.container.onmouseup=void 0,a.target===o.container&&(ss=!0)}}},Zu=o=>{o.container.onmousedown=()=>{o.popup.onmouseup=function(a){o.popup.onmouseup=void 0,(a.target===o.popup||o.popup.contains(a.target))&&(ss=!0)}}},ed=(o,a,c)=>{a.container.onclick=f=>{const m=t.innerParams.get(o);if(ss){ss=!1;return}f.target===a.container&&C(m.allowOutsideClick)&&c(Kt.backdrop)}},td=o=>typeof o=="object"&&o.jquery,oo=o=>o instanceof Element||td(o),nd=o=>{const a={};return typeof o[0]=="object"&&!oo(o[0])?Object.assign(a,o[0]):["title","html","icon"].forEach((c,f)=>{const m=o[f];typeof m=="string"||oo(m)?a[c]=m:m!==void 0&&p(`Unexpected type of ${c}! Expected "string" or "Element", got ${typeof m}`)}),a};function sd(){const o=this;for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return new o(...c)}function id(o){class a extends this{_main(f,m){return super._main(f,Object.assign({},o,m))}}return a}const rd=()=>R.timeout&&R.timeout.getTimerLeft(),ao=()=>{if(R.timeout)return nc(),R.timeout.stop()},lo=()=>{if(R.timeout){const o=R.timeout.start();return Qs(o),o}},od=()=>{const o=R.timeout;return o&&(o.running?ao():lo())},ad=o=>{if(R.timeout){const a=R.timeout.increase(o);return Qs(a,!0),a}},ld=()=>R.timeout&&R.timeout.isRunning();let co=!1;const ri={};function cd(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ri[o]=this,co||(document.body.addEventListener("click",ud),co=!0)}const ud=o=>{for(let a=o.target;a&&a!==document;a=a.parentNode)for(const c in ri){const f=a.getAttribute(c);if(f){ri[c].fire({template:f});return}}};var dd=Object.freeze({__proto__:null,argsToParams:nd,bindClickHandler:cd,clickCancel:Kc,clickConfirm:jr,clickDeny:Gc,enableLoading:Yt,fire:sd,getActions:He,getCancelButton:de,getCloseButton:Ke,getConfirmButton:te,getContainer:F,getDenyButton:_e,getFocusableElements:W,getFooter:ut,getHtmlContainer:Q,getIcon:se,getIconContent:be,getImage:V,getInputLabel:he,getLoader:Te,getPopup:T,getProgressSteps:ue,getTimerLeft:rd,getTimerProgressBar:Ze,getTitle:Ce,getValidationMessage:$,increaseTimer:ad,isDeprecatedParameter:ei,isLoading:Xn,isTimerRunning:ld,isUpdatableParameter:Zr,isValidParameter:Xr,isVisible:qc,mixin:id,resumeTimer:lo,showLoading:Yt,stopTimer:ao,toggleTimer:od});class hd{constructor(a,c){this.callback=a,this.remaining=c,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(a){const c=this.running;return c&&this.stop(),this.remaining+=a,c&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const uo=["swal-title","swal-html","swal-footer"],fd=o=>{const a=typeof o.template=="string"?document.querySelector(o.template):o.template;if(!a)return{};const c=a.content;return bd(c),Object.assign(pd(c),_d(c),gd(c),md(c),yd(c),vd(c),wd(c,uo))},pd=o=>{const a={};return Array.from(o.querySelectorAll("swal-param")).forEach(f=>{Rt(f,["name","value"]);const m=f.getAttribute("name"),b=f.getAttribute("value");typeof Qt[m]=="boolean"?a[m]=b!=="false":typeof Qt[m]=="object"?a[m]=JSON.parse(b):a[m]=b}),a},_d=o=>{const a={};return Array.from(o.querySelectorAll("swal-function-param")).forEach(f=>{const m=f.getAttribute("name"),b=f.getAttribute("value");a[m]=new Function(`return ${b}`)()}),a},gd=o=>{const a={};return Array.from(o.querySelectorAll("swal-button")).forEach(f=>{Rt(f,["type","color","aria-label"]);const m=f.getAttribute("type");a[`${m}ButtonText`]=f.innerHTML,a[`show${h(m)}Button`]=!0,f.hasAttribute("color")&&(a[`${m}ButtonColor`]=f.getAttribute("color")),f.hasAttribute("aria-label")&&(a[`${m}ButtonAriaLabel`]=f.getAttribute("aria-label"))}),a},md=o=>{const a={},c=o.querySelector("swal-image");return c&&(Rt(c,["src","width","height","alt"]),c.hasAttribute("src")&&(a.imageUrl=c.getAttribute("src")),c.hasAttribute("width")&&(a.imageWidth=c.getAttribute("width")),c.hasAttribute("height")&&(a.imageHeight=c.getAttribute("height")),c.hasAttribute("alt")&&(a.imageAlt=c.getAttribute("alt"))),a},yd=o=>{const a={},c=o.querySelector("swal-icon");return c&&(Rt(c,["type","color"]),c.hasAttribute("type")&&(a.icon=c.getAttribute("type")),c.hasAttribute("color")&&(a.iconColor=c.getAttribute("color")),a.iconHtml=c.innerHTML),a},vd=o=>{const a={},c=o.querySelector("swal-input");c&&(Rt(c,["type","label","placeholder","value"]),a.input=c.getAttribute("type")||"text",c.hasAttribute("label")&&(a.inputLabel=c.getAttribute("label")),c.hasAttribute("placeholder")&&(a.inputPlaceholder=c.getAttribute("placeholder")),c.hasAttribute("value")&&(a.inputValue=c.getAttribute("value")));const f=Array.from(o.querySelectorAll("swal-input-option"));return f.length&&(a.inputOptions={},f.forEach(m=>{Rt(m,["value"]);const b=m.getAttribute("value"),q=m.innerHTML;a.inputOptions[b]=q})),a},wd=(o,a)=>{const c={};for(const f in a){const m=a[f],b=o.querySelector(m);b&&(Rt(b,[]),c[m.replace(/^swal-/,"")]=b.innerHTML.trim())}return c},bd=o=>{const a=uo.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(o.children).forEach(c=>{const f=c.tagName.toLowerCase();a.includes(f)||_(`Unrecognized element <${f}>`)})},Rt=(o,a)=>{Array.from(o.attributes).forEach(c=>{a.indexOf(c.name)===-1&&_([`Unrecognized attribute "${c.name}" on <${o.tagName.toLowerCase()}>.`,`${a.length?`Allowed attributes are: ${a.join(", ")}`:"To set the value, use HTML within the element."}`])})},ho=10,Cd=o=>{const a=F(),c=T();typeof o.willOpen=="function"&&o.willOpen(c);const m=window.getComputedStyle(document.body).overflowY;Id(a,c,o),setTimeout(()=>{Ed(a,c)},ho),M()&&(Sd(a,o.scrollbarPadding,m),nu()),!xt()&&!R.previousActiveElement&&(R.previousActiveElement=document.activeElement),typeof o.didOpen=="function"&&setTimeout(()=>o.didOpen(c)),et(a,r["no-transition"])},fo=o=>{const a=T();if(o.target!==a)return;const c=F();a.removeEventListener(_n,fo),c.style.overflowY="auto"},Ed=(o,a)=>{_n&&Mr(a)?(o.style.overflowY="hidden",a.addEventListener(_n,fo)):o.style.overflowY="auto"},Sd=(o,a,c)=>{su(),a&&c!=="hidden"&&uu(),setTimeout(()=>{o.scrollTop=0})},Id=(o,a,c)=>{N(o,c.showClass.backdrop),a.style.setProperty("opacity","0","important"),fe(a,"grid"),setTimeout(()=>{N(a,c.showClass.popup),a.style.removeProperty("opacity")},ho),N([document.documentElement,document.body],r.shown),c.heightAuto&&c.backdrop&&!c.toast&&N([document.documentElement,document.body],r["height-auto"])};var po={email:(o,a)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(o)?Promise.resolve():Promise.resolve(a||"Invalid email address"),url:(o,a)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(o)?Promise.resolve():Promise.resolve(a||"Invalid URL")};function Td(o){o.inputValidator||Object.keys(po).forEach(a=>{o.input===a&&(o.inputValidator=po[a])})}function Ad(o){(!o.target||typeof o.target=="string"&&!document.querySelector(o.target)||typeof o.target!="string"&&!o.target.appendChild)&&(_('Target parameter is not valid, defaulting to "body"'),o.target="body")}function Pd(o){Td(o),o.showLoaderOnConfirm&&!o.preConfirm&&_(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ad(o),typeof o.title=="string"&&(o.title=o.title.split(`
`).join("<br />")),hc(o)}let tt;class Jt{constructor(){if(typeof window>"u")return;tt=this;for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];const m=Object.freeze(this.constructor.argsToParams(c));Object.defineProperties(this,{params:{value:m,writable:!1,enumerable:!0,configurable:!0}});const b=tt._main(tt.params);t.promise.set(this,b)}_main(a){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Nu(Object.assign({},c,a)),R.currentInstance&&(R.currentInstance._destroy(),M()&&Gr()),R.currentInstance=tt;const f=kd(a,c);Pd(f),Object.freeze(f),R.timeout&&(R.timeout.stop(),delete R.timeout),clearTimeout(R.restoreFocusTimeout);const m=Nd(tt);return Ur(tt,f),t.innerParams.set(tt,f),xd(tt,m,f)}then(a){return t.promise.get(this).then(a)}finally(a){return t.promise.get(this).finally(a)}}const xd=(o,a,c)=>new Promise((f,m)=>{const b=q=>{o.close({isDismissed:!0,dismiss:q})};mn.swalPromiseResolve.set(o,f),mn.swalPromiseReject.set(o,m),a.confirmButton.onclick=()=>{zu(o)},a.denyButton.onclick=()=>{qu(o)},a.cancelButton.onclick=()=>{Gu(o,b)},a.closeButton.onclick=()=>{b(Kt.close)},Qu(o,a,b),Qc(o,R,c,b),Bu(o,c),Cd(c),Rd(R,c,b),Dd(a,c),setTimeout(()=>{a.container.scrollTop=0})}),kd=(o,a)=>{const c=fd(o),f=Object.assign({},Qt,a,c,o);return f.showClass=Object.assign({},Qt.showClass,f.showClass),f.hideClass=Object.assign({},Qt.hideClass,f.hideClass),f},Nd=o=>{const a={popup:T(),container:F(),actions:He(),confirmButton:te(),denyButton:_e(),cancelButton:de(),loader:Te(),closeButton:Ke(),validationMessage:$(),progressSteps:ue()};return t.domCache.set(o,a),a},Rd=(o,a,c)=>{const f=Ze();ye(f),a.timer&&(o.timeout=new hd(()=>{c("timer"),delete o.timeout},a.timer),a.timerProgressBar&&(fe(f),Ee(f,a,"timerProgressBar"),setTimeout(()=>{o.timeout&&o.timeout.running&&Qs(a.timer)})))},Dd=(o,a)=>{if(!a.toast){if(!C(a.allowEnterKey)){Ld();return}Od(o,a)||Zs(-1,1)}},Od=(o,a)=>a.focusDeny&&De(o.denyButton)?(o.denyButton.focus(),!0):a.focusCancel&&De(o.cancelButton)?(o.cancelButton.focus(),!0):a.focusConfirm&&De(o.confirmButton)?(o.confirmButton.focus(),!0):!1,Ld=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const o=new Date,a=localStorage.getItem("swal-initiation");a?(o.getTime()-Date.parse(a))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const c=document.createElement("audio");c.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",c.loop=!0,document.body.appendChild(c),setTimeout(()=>{c.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${o}`)}Object.assign(Jt.prototype,to),Object.assign(Jt,dd),Object.keys(to).forEach(o=>{Jt[o]=function(){if(tt)return tt[o](...arguments)}}),Jt.DismissReason=Kt,Jt.version="11.7.3";const is=Jt;return is.default=is,is}),typeof ht<"u"&&ht.Sweetalert2&&(ht.swal=ht.sweetAlert=ht.Swal=ht.SweetAlert=ht.Sweetalert2)})(Nm);const wi=Gi;function fa(n,e,t){const s=n.slice();return s[5]=e[t],s}function Rm(n){let e,t=n[5].description+"",s;return{c(){e=Y("span"),s=Ue(t),this.h()},l(i){e=J(i,"SPAN",{class:!0});var r=H(e);s=Ve(r,t),r.forEach(D),this.h()},h(){A(e,"class","bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300")},m(i,r){Ss(i,e,r),E(e,s)},p(i,r){r&2&&t!==(t=i[5].description+"")&&as(s,t)},d(i){i&&D(e)}}}function Dm(n){let e,t=n[5].description+"",s;return{c(){e=Y("span"),s=Ue(t),this.h()},l(i){e=J(i,"SPAN",{class:!0});var r=H(e);s=Ve(r,t),r.forEach(D),this.h()},h(){A(e,"class","bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300")},m(i,r){Ss(i,e,r),E(e,s)},p(i,r){r&2&&t!==(t=i[5].description+"")&&as(s,t)},d(i){i&&D(e)}}}function pa(n){let e,t,s=n[5].email+"",i,r,l,u,d,h=n[5].placa+"",_,p,g,y,w,C,L,ee,ne,F,we,U,T,se,be,Ce,Q,V,ue,$,te,de,_e,he,Te,He,ut;function Ze(W,M){return W[5].description==="Puntos"?Dm:Rm}let Ke=Ze(n),ge=Ke(n);return{c(){e=Y("tr"),t=Y("td"),i=Ue(s),r=Le(),l=Y("td"),ge.c(),u=Le(),d=Y("td"),_=Ue(h),p=Le(),g=Y("td"),y=Y("button"),w=vn("svg"),C=vn("path"),L=Le(),ee=Y("span"),ne=Ue("Aprobar"),we=Le(),U=Y("td"),T=Y("button"),se=vn("svg"),be=vn("path"),Ce=vn("path"),Q=Le(),V=Y("span"),ue=Ue("Rechazar"),te=Le(),this.h()},l(W){e=J(W,"TR",{"data-id":!0,"data-email":!0,"data-desc":!0,"data-placa":!0});var M=H(e);t=J(M,"TD",{class:!0});var xt=H(t);i=Ve(xt,s),xt.forEach(D),r=Me(M),l=J(M,"TD",{class:!0});var Xn=H(l);ge.l(Xn),Xn.forEach(D),u=Me(M),d=J(M,"TD",{class:!0});var rt=H(d);_=Ve(rt,h),rt.forEach(D),p=Me(M),g=J(M,"TD",{class:!0});var me=H(g);y=J(me,"BUTTON",{class:!0});var Ae=H(y);w=wn(Ae,"svg",{class:!0,xmlns:!0,viewBox:!0});var Zn=H(w);C=wn(Zn,"path",{d:!0}),H(C).forEach(D),Zn.forEach(D),L=Me(Ae),ee=J(Ae,"SPAN",{});var Ee=H(ee);ne=Ve(Ee,"Aprobar"),Ee.forEach(D),Ae.forEach(D),me.forEach(D),we=Me(M),U=J(M,"TD",{class:!0});var zt=H(U);T=J(zt,"BUTTON",{class:!0});var kt=H(T);se=wn(kt,"svg",{class:!0,xmlns:!0,viewBox:!0});var qt=H(se);be=wn(qt,"path",{d:!0}),H(be).forEach(D),Ce=wn(qt,"path",{d:!0}),H(Ce).forEach(D),qt.forEach(D),Q=Me(kt),V=J(kt,"SPAN",{});var N=H(V);ue=Ve(N,"Rechazar"),N.forEach(D),kt.forEach(D),zt.forEach(D),te=Me(M),M.forEach(D),this.h()},h(){A(t,"class","px-6 py-4 whitespace-nowrap"),A(l,"class","px-6 py-4 whitespace-nowrap"),A(d,"class","px-6 py-4 whitespace-nowrap"),A(C,"d","M17.293 4.293a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 8-8z"),A(w,"class","fill-current w-4 h-4 mr-2 check-icon"),A(w,"xmlns","http://www.w3.org/2000/svg"),A(w,"viewBox","0 0 20 20"),y.disabled=n[0],A(y,"class",F=(n[0]?"bg-[#f3f4f6]":"bg-[#1e3a8a]")+" text-white font-bold py-2 px-4 rounded inline-flex"),A(g,"class","px-6 py-4 whitespace-nowrap"),A(be,"d","M17.707 2.293a1 1 0 0 1 0 1.414L3.414 18.707a1 1 0 1 1-1.414-1.414L16.293 1.293a1 1 0 0 1 1.414 0z"),A(Ce,"d","M2.293 2.293a1 1 0 0 1 0-1.414L18.707 17.293a1 1 0 0 1-1.414 1.414L.879 1.879a1 1 0 0 1 0-1.414z"),A(se,"class","fill-current w-4 h-4 mr-2 reject-icon"),A(se,"xmlns","http://www.w3.org/2000/svg"),A(se,"viewBox","0 0 20 20"),T.disabled=n[0],A(T,"class",$=(n[0]?"bg-[#f3f4f6]":"bg-[#f43f5e]")+" text-white font-bold py-2 px-4 rounded inline-flex"),A(U,"class","px-6 py-4 whitespace-nowrap"),A(e,"data-id",de=n[5].id),A(e,"data-email",_e=n[5].email),A(e,"data-desc",he=n[5].description),A(e,"data-placa",Te=n[5].placa)},m(W,M){Ss(W,e,M),E(e,t),E(t,i),E(e,r),E(e,l),ge.m(l,null),E(e,u),E(e,d),E(d,_),E(e,p),E(e,g),E(g,y),E(y,w),E(w,C),E(y,L),E(y,ee),E(ee,ne),E(e,we),E(e,U),E(U,T),E(T,se),E(se,be),E(se,Ce),E(T,Q),E(T,V),E(V,ue),E(e,te),He||(ut=[go(y,"click",n[2]),go(T,"click",n[3])],He=!0)},p(W,M){M&2&&s!==(s=W[5].email+"")&&as(i,s),Ke===(Ke=Ze(W))&&ge?ge.p(W,M):(ge.d(1),ge=Ke(W),ge&&(ge.c(),ge.m(l,null))),M&2&&h!==(h=W[5].placa+"")&&as(_,h),M&1&&(y.disabled=W[0]),M&1&&F!==(F=(W[0]?"bg-[#f3f4f6]":"bg-[#1e3a8a]")+" text-white font-bold py-2 px-4 rounded inline-flex")&&A(y,"class",F),M&1&&(T.disabled=W[0]),M&1&&$!==($=(W[0]?"bg-[#f3f4f6]":"bg-[#f43f5e]")+" text-white font-bold py-2 px-4 rounded inline-flex")&&A(T,"class",$),M&2&&de!==(de=W[5].id)&&A(e,"data-id",de),M&2&&_e!==(_e=W[5].email)&&A(e,"data-email",_e),M&2&&he!==(he=W[5].description)&&A(e,"data-desc",he),M&2&&Te!==(Te=W[5].placa)&&A(e,"data-placa",Te)},d(W){W&&D(e),ge.d(),He=!1,Hd(ut)}}}function Om(n){let e,t,s,i,r,l,u,d,h,_,p,g,y,w,C,L,ee,ne,F,we,U,T,se,be,Ce=n[1],Q=[];for(let V=0;V<Ce.length;V+=1)Q[V]=pa(fa(n,Ce,V));return{c(){e=Y("div"),t=Y("div"),s=Y("h1"),i=Ue("Lista de Solicitudes"),r=Le(),l=Y("table"),u=Y("thead"),d=Y("tr"),h=Y("th"),_=Ue("Correo electrónico"),p=Le(),g=Y("th"),y=Ue("Descripción"),w=Le(),C=Y("th"),L=Ue("# Placa"),ee=Le(),ne=Y("th"),F=Ue("Aprobar"),we=Le(),U=Y("th"),T=Ue("Rechazar"),se=Le(),be=Y("tbody");for(let V=0;V<Q.length;V+=1)Q[V].c();this.h()},l(V){e=J(V,"DIV",{class:!0});var ue=H(e);t=J(ue,"DIV",{class:!0});var $=H(t);s=J($,"H1",{class:!0});var te=H(s);i=Ve(te,"Lista de Solicitudes"),te.forEach(D),$.forEach(D),r=Me(ue),l=J(ue,"TABLE",{class:!0});var de=H(l);u=J(de,"THEAD",{class:!0});var _e=H(u);d=J(_e,"TR",{});var he=H(d);h=J(he,"TH",{class:!0});var Te=H(h);_=Ve(Te,"Correo electrónico"),Te.forEach(D),p=Me(he),g=J(he,"TH",{class:!0});var He=H(g);y=Ve(He,"Descripción"),He.forEach(D),w=Me(he),C=J(he,"TH",{class:!0});var ut=H(C);L=Ve(ut,"# Placa"),ut.forEach(D),ee=Me(he),ne=J(he,"TH",{class:!0});var Ze=H(ne);F=Ve(Ze,"Aprobar"),Ze.forEach(D),we=Me(he),U=J(he,"TH",{class:!0});var Ke=H(U);T=Ve(Ke,"Rechazar"),Ke.forEach(D),he.forEach(D),_e.forEach(D),se=Me(de),be=J(de,"TBODY",{class:!0});var ge=H(be);for(let W=0;W<Q.length;W+=1)Q[W].l(ge);ge.forEach(D),de.forEach(D),ue.forEach(D),this.h()},h(){A(s,"class","text-3xl font-bold"),A(t,"class","text-center"),A(h,"class","px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"),A(g,"class","px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"),A(C,"class","px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"),A(ne,"class","px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"),A(U,"class","px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"),A(u,"class","bg-gray-200"),A(be,"class","divide-y divide-gray-200"),A(l,"class","mx-auto min-w-full divide-y divide-gray-200"),A(e,"class","app mt-4 px-4")},m(V,ue){Ss(V,e,ue),E(e,t),E(t,s),E(s,i),E(e,r),E(e,l),E(l,u),E(u,d),E(d,h),E(h,_),E(d,p),E(d,g),E(g,y),E(d,w),E(d,C),E(C,L),E(d,ee),E(d,ne),E(ne,F),E(d,we),E(d,U),E(U,T),E(l,se),E(l,be);for(let $=0;$<Q.length;$+=1)Q[$].m(be,null)},p(V,[ue]){if(ue&15){Ce=V[1];let $;for($=0;$<Ce.length;$+=1){const te=fa(V,Ce,$);Q[$]?Q[$].p(te,ue):(Q[$]=pa(te),Q[$].c(),Q[$].m(be,null))}for(;$<Q.length;$+=1)Q[$].d(1);Q.length=Ce.length}},i:_o,o:_o,d(V){V&&D(e),$d(Q,V)}}}async function _a(n,e,t){try{const s="http://201.237.248.191:45054/user/transaction",i="F4E4D4F2A2AB7F06AB2C30A006DFCE9A23E7246F1C6E33D7F8A3BCF5F5FC2CBF";let l=JSON.stringify({email:n,description:e,placa:t});return await(await fetch(s,{method:"PATCH",body:l,headers:{"Content-Type":"application/json","X-Api-Key":i}})).text()}catch{return"error"}}function Lm(n,e,t){let s=!1,i=[];Wd(()=>{vi.ref("requests").on("value",d=>{t(1,i=Object.keys(d.val()||{}).map(h=>({id:h,...d.val()[h]})))})});async function r(d,h,_){await wi.fire({title:d,text:h,icon:_})}async function l(d){t(0,s=!0);try{const h=d.target.closest("tr").dataset.id,_=d.target.closest("tr").dataset.email,p=d.target.closest("tr").dataset.desc,g=d.target.closest("tr").dataset.placa;await wi.fire({title:"¿Estás seguro que desea aprobar esta solicitud?",text:"Esta acción no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, aprobar",cancelButtonText:"Cancelar"}).then(async y=>{if(y.isConfirmed){let w=await _a(_,p,g),C=w.includes("aceptada");await r("Proceso",C?"La solicitud fue procesada correctamente":w,"success"),C?vi.ref(`requests/${h}`).remove():await r("Error","Un error desconocido se produjo al intentar realizar el proceso, por favor revise su conexión a internet","error")}})}catch(h){await r("Error",h,"error")}t(0,s=!1)}async function u(d){t(0,s=!0);try{const h=d.target.closest("tr").dataset.id,_=d.target.closest("tr").dataset.email,p=d.target.closest("tr").dataset.placa;await wi.fire({title:"¿Estás seguro que desea rechazar la solicitud?",text:"Esta acción no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, rechazar",cancelButtonText:"Cancelar"}).then(async g=>{if(g.isConfirmed){vi.ref(`requests/${h}`).remove();let w=await _a(_,"rechazar",p),C=w.includes("rechazada");await r("Proceso",C?"La solicitud fue rechazada correctamente":w,"success"),C||await r("Error","Un error desconocido se produjo al intentar realizar el proceso, por favor revise su conexión a internet","error")}})}catch(h){await r("Error",h,"error")}t(0,s=!1)}return[s,i,l,u]}class Hm extends Md{constructor(e){super(),Bd(this,e,Lm,Om,Fd,{})}}export{Hm as default};
