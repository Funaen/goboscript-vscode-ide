/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/smol-toml@1.6.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
class e extends Error{line;column;codeblock;constructor(e,t){const[n,r]=function(e,t){let n=e.slice(0,t).split(/\r\n|\n|\r/g);return[n.length,n.pop().length+1]}(t.toml,t.ptr),i=function(e,t,n){let r=e.split(/\r\n|\n|\r/g),i="",l=1+(0|Math.log10(t+1));for(let e=t-1;e<=t+1;e++){let o=r[e-1];o&&(i+=e.toString().padEnd(l," "),i+=":  ",i+=o,i+="\n",e===t&&(i+=" ".repeat(l+n+2),i+="^\n"))}return i}(t.toml,n,r);super(`Invalid TOML document: ${e}\n\n${i}`,t),this.line=n,this.column=r,this.codeblock=i}}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function t(e,t){let n=0;for(;"\\"===e[t-++n];);return--n&&n%2}function n(e,t=0,n=e.length){let r=e.indexOf("\n",t);return"\r"===e[r-1]&&r--,r<=n?r:-1}function r(t,n){for(let r=n;r<t.length;r++){let i=t[r];if("\n"===i)return r;if("\r"===i&&"\n"===t[r+1])return r+1;if(i<" "&&"\t"!==i||""===i)throw new e("control characters are not allowed in comments",{toml:t,ptr:n})}return t.length}function i(e,t,n,l){let o;for(;" "===(o=e[t])||"\t"===o||!n&&("\n"===o||"\r"===o&&"\n"===e[t+1]);)t++;return l||"#"!==o?t:i(e,r(e,t),n)}function l(e,n){let r=e[n],i=r===e[n+1]&&e[n+1]===e[n+2]?e.slice(n,n+3):r;n+=i.length-1;do{n=e.indexOf(i,++n)}while(n>-1&&"'"!==r&&t(e,n));return n>-1&&(n+=i.length,i.length>1&&(e[n]===r&&n++,e[n]===r&&n++)),n}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let o=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;class f extends Date{#e=!1;#t=!1;#n=null;constructor(e){let t=!0,n=!0,r="Z";if("string"==typeof e){let i=e.match(o);i?(i[1]||(t=!1,e=`0000-01-01T${e}`),n=!!i[2],n&&" "===e[10]&&(e=e.replace(" ","T")),i[2]&&+i[2]>23?e="":(r=i[3]||null,e=e.toUpperCase(),!r&&n&&(e+="Z"))):e=""}super(e),isNaN(this.getTime())||(this.#e=t,this.#t=n,this.#n=r)}isDateTime(){return this.#e&&this.#t}isLocal(){return!this.#e||!this.#t||!this.#n}isDate(){return this.#e&&!this.#t}isTime(){return this.#t&&!this.#e}isValid(){return this.#e||this.#t}toISOString(){let e=super.toISOString();if(this.isDate())return e.slice(0,10);if(this.isTime())return e.slice(11,23);if(null===this.#n)return e.slice(0,-1);if("Z"===this.#n)return e;let t=60*+this.#n.slice(1,3)+ +this.#n.slice(4,6);return t="-"===this.#n[0]?t:-t,new Date(this.getTime()-6e4*t).toISOString().slice(0,-1)+this.#n}static wrapAsOffsetDateTime(e,t="Z"){let n=new f(e);return n.#n=t,n}static wrapAsLocalDateTime(e){let t=new f(e);return t.#n=null,t}static wrapAsLocalDate(e){let t=new f(e);return t.#t=!1,t.#n=null,t}static wrapAsLocalTime(e){let t=new f(e);return t.#e=!1,t.#n=null,t}}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let a=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,s=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,u=/^[+-]?0[0-9_]/,c=/^[0-9a-f]{2,8}$/i,d={b:"\b",t:"\t",n:"\n",f:"\f",r:"\r",e:"",'"':'"',"\\":"\\"};function h(t,n=0,r=t.length){let l="'"===t[n],o=t[n++]===t[n]&&t[n]===t[n+1];o&&(r-=2,"\r"===t[n+=2]&&n++,"\n"===t[n]&&n++);let f,a=0,s="",u=n;for(;n<r-1;){let r=t[n++];if("\n"===r||"\r"===r&&"\n"===t[n]){if(!o)throw new e("newlines are not allowed in strings",{toml:t,ptr:n-1})}else if(r<" "&&"\t"!==r||""===r)throw new e("control characters are not allowed in strings",{toml:t,ptr:n-1});if(f){if(f=!1,"x"===r||"u"===r||"U"===r){let i=t.slice(n,n+="x"===r?2:"u"===r?4:8);if(!c.test(i))throw new e("invalid unicode escape",{toml:t,ptr:a});try{s+=String.fromCodePoint(parseInt(i,16))}catch{throw new e("invalid unicode escape",{toml:t,ptr:a})}}else if(!o||"\n"!==r&&" "!==r&&"\t"!==r&&"\r"!==r){if(!(r in d))throw new e("unrecognized escape sequence",{toml:t,ptr:a});s+=d[r]}else{if("\n"!==t[n=i(t,n-1,!0)]&&"\r"!==t[n])throw new e("invalid escape: only line-ending whitespace may be escaped",{toml:t,ptr:a});n=i(t,n)}u=n}else l||"\\"!==r||(a=n-1,f=!0,s+=t.slice(u,a))}return s+t.slice(u,r-1)}function w(t,n,r,i){if("true"===t)return!0;if("false"===t)return!1;if("-inf"===t)return-1/0;if("inf"===t||"+inf"===t)return 1/0;if("nan"===t||"+nan"===t||"-nan"===t)return NaN;if("-0"===t)return i?0n:0;let l=a.test(t);if(l||s.test(t)){if(u.test(t))throw new e("leading zeroes are not allowed",{toml:n,ptr:r});let o=+(t=t.replace(/_/g,""));if(isNaN(o))throw new e("invalid number",{toml:n,ptr:r});if(l){if((l=!Number.isSafeInteger(o))&&!i)throw new e("integer value cannot be represented losslessly",{toml:n,ptr:r});(l||!0===i)&&(o=BigInt(t))}return o}const o=new f(t);if(!o.isValid())throw new e("invalid value",{toml:n,ptr:r});return o}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function m(t,o,f,a,s){if(0===a)throw new e("document contains excessively nested structures. aborting.",{toml:t,ptr:o});let u,c=t[o];if("["===c||"{"===c){let[n,l]="["===c?function(t,n,i,l){let o,f=[];n++;for(;"]"!==(o=t[n++])&&o;){if(","===o)throw new e("expected value, found comma",{toml:t,ptr:n-1});if("#"===o)n=r(t,n);else if(" "!==o&&"\t"!==o&&"\n"!==o&&"\r"!==o){let e=m(t,n-1,"]",i-1,l);f.push(e[0]),n=e[1]}}if(!o)throw new e("unfinished array encountered",{toml:t,ptr:n});return[f,n]}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */(t,o,a,s):function(t,n,i,l){let o,f={},a=new Set;n++;for(;"}"!==(o=t[n++])&&o;){if(","===o)throw new e("expected value, found comma",{toml:t,ptr:n-1});if("#"===o)n=r(t,n);else if(" "!==o&&"\t"!==o&&"\n"!==o&&"\r"!==o){let r,o=f,s=!1,[u,c]=g(t,n-1);for(let i=0;i<u.length;i++){if(i&&(o=s?o[r]:o[r]={}),r=u[i],(s=Object.hasOwn(o,r))&&("object"!=typeof o[r]||a.has(o[r])))throw new e("trying to redefine an already defined value",{toml:t,ptr:n});s||"__proto__"!==r||Object.defineProperty(o,r,{enumerable:!0,configurable:!0,writable:!0})}if(s)throw new e("trying to redefine an already defined value",{toml:t,ptr:n});let[d,h]=m(t,c,"}",i-1,l);a.add(d),o[r]=d,n=h}}if(!o)throw new e("unfinished table encountered",{toml:t,ptr:n});return[f,n]}(t,o,a,s);if(f)if(l=i(t,l),","===t[l])l++;else if(t[l]!==f)throw new e("expected comma or end of structure",{toml:t,ptr:l});return[n,l]}if('"'===c||"'"===c){u=l(t,o);let n=h(t,o,u);if(f){if(u=i(t,u),t[u]&&","!==t[u]&&t[u]!==f&&"\n"!==t[u]&&"\r"!==t[u])throw new e("unexpected character encountered",{toml:t,ptr:u});u+=+(","===t[u])}return[n,u]}u=function(t,r,i,l,o=!1){if(!l)return(r=n(t,r))<0?t.length:r;for(let e=r;e<t.length;e++){let r=t[e];if("#"===r)e=n(t,e);else{if(r===i)return e+1;if(r===l||o&&("\n"===r||"\r"===r&&"\n"===t[e+1]))return e}}throw new e("cannot find end of structure",{toml:t,ptr:r})}(t,o,",",f);let d=function(e,t,n){let i=e.slice(t,n),l=i.indexOf("#");return l>-1&&(r(e,l),i=i.slice(0,l)),[i.trimEnd(),l]}(t,o,u-+(","===t[u-1]));if(!d[0])throw new e("incomplete key-value declaration: no value specified",{toml:t,ptr:o});return f&&d[1]>-1&&(u=i(t,o+d[1]),u+=+(","===t[u])),[w(d[0],t,o,s),u]}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let p=/^[a-zA-Z0-9-_]+[ \t]*$/;function g(t,r,o="="){let f=r-1,a=[],s=t.indexOf(o,r);if(s<0)throw new e("incomplete key-value: cannot find end of key",{toml:t,ptr:r});do{let i=t[r=++f];if(" "!==i&&"\t"!==i)if('"'===i||"'"===i){if(i===t[r+1]&&i===t[r+2])throw new e("multiline strings are not allowed in keys",{toml:t,ptr:r});let u=l(t,r);if(u<0)throw new e("unfinished string encountered",{toml:t,ptr:r});f=t.indexOf(".",u);let c=t.slice(u,f<0||f>s?s:f),d=n(c);if(d>-1)throw new e("newlines are not allowed in keys",{toml:t,ptr:r+f+d});if(c.trimStart())throw new e("found extra tokens after the string part",{toml:t,ptr:u});if(s<u&&(s=t.indexOf(o,u),s<0))throw new e("incomplete key-value: cannot find end of key",{toml:t,ptr:r});a.push(h(t,r,u))}else{f=t.indexOf(".",r);let n=t.slice(r,f<0||f>s?s:f);if(!p.test(n))throw new e("only letter, numbers, dashes and underscores are allowed in keys",{toml:t,ptr:r});a.push(n.trimEnd())}}while(f+1&&f<s);return[a,i(t,s+1,!0,!0)]}function b(e,t,n,r){let i,l,o=t,f=n,a=!1;for(let t=0;t<e.length;t++){if(t){if(o=a?o[i]:o[i]={},f=(l=f[i]).c,0===r&&(1===l.t||2===l.t))return null;if(2===l.t){let e=o.length-1;o=o[e],f=f[e].c}}if(i=e[t],(a=Object.hasOwn(o,i))&&0===f[i]?.t&&f[i]?.d)return null;a||("__proto__"===i&&(Object.defineProperty(o,i,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(f,i,{enumerable:!0,configurable:!0,writable:!0})),f[i]={t:t<e.length-1&&2===r?3:r,d:!1,i:0,c:{}})}if(l=f[i],l.t!==r&&(1!==r||3!==l.t))return null;if(2===r&&(l.d||(l.d=!0,o[i]=[]),o[i].push(o={}),l.c[l.i++]=l={t:1,d:!1,i:0,c:{}}),l.d)return null;if(l.d=!0,1===r)o=a?o[i]:o[i]={};else if(0===r&&a)return null;return[i,o,l.c]}function y(t,{maxDepth:n=1e3,integersAsBigInt:r}={}){let l={},o={},f=l,a=o;for(let s=i(t,0);s<t.length;){if("["===t[s]){let n="["===t[++s],r=g(t,s+=+n,"]");if(n){if("]"!==t[r[1]-1])throw new e("expected end of table declaration",{toml:t,ptr:r[1]-1});r[1]++}let i=b(r[0],l,o,n?2:1);if(!i)throw new e("trying to redefine an already defined table or value",{toml:t,ptr:s});a=i[2],f=i[1],s=r[1]}else{let i=g(t,s),l=b(i[0],f,a,0);if(!l)throw new e("trying to redefine an already defined table or value",{toml:t,ptr:s});let o=m(t,i[1],void 0,n,r);l[1][l[0]]=o[0],s=o[1]}if(s=i(t,s,!0),t[s]&&"\n"!==t[s]&&"\r"!==t[s])throw new e("each key-value declaration must be followed by an end-of-line",{toml:t,ptr:s});s=i(t,s)}return l}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let x=/^[a-z0-9-_]+$/i;function v(e){let t=typeof e;if("object"===t){if(Array.isArray(e))return"array";if(e instanceof Date)return"date"}return t}function T(e){for(let t=0;t<e.length;t++)if("object"!==v(e[t]))return!1;return 0!=e.length}function O(e){return JSON.stringify(e).replace(/\x7f/g,"\\u007f")}function $(e,t,n,r){if(0===n)throw new Error("Could not stringify the object: maximum object depth exceeded");if("number"===t)return isNaN(e)?"nan":e===1/0?"inf":e===-1/0?"-inf":r&&Number.isInteger(e)?e.toFixed(1):e.toString();if("bigint"===t||"boolean"===t)return e.toString();if("string"===t)return O(e);if("date"===t){if(isNaN(e.getTime()))throw new TypeError("cannot serialize invalid date");return e.toISOString()}return"object"===t?function(e,t,n){let r=Object.keys(e);if(0===r.length)return"{}";let i="{ ";for(let l=0;l<r.length;l++){let o=r[l];l&&(i+=", "),i+=x.test(o)?o:O(o),i+=" = ",i+=$(e[o],v(e[o]),t-1,n)}return i+" }"}(e,n,r):"array"===t?function(e,t,n){if(0===e.length)return"[]";let r="[ ";for(let i=0;i<e.length;i++){if(i&&(r+=", "),null===e[i]||void 0===e[i])throw new TypeError("arrays cannot contain null or undefined values");r+=$(e[i],v(e[i]),t-1,n)}return r+" ]"}(e,n,r):void 0}function j(e,t,n,r){if(0===n)throw new Error("Could not stringify the object: maximum object depth exceeded");let i="";for(let l=0;l<e.length;l++)i+=`${i&&"\n"}[[${t}]]\n`,i+=D(0,e[l],t,n,r);return i}function D(e,t,n,r,i){if(0===r)throw new Error("Could not stringify the object: maximum object depth exceeded");let l="",o="",f=Object.keys(t);for(let e=0;e<f.length;e++){let a=f[e];if(null!==t[a]&&void 0!==t[a]){let e=v(t[a]);if("symbol"===e||"function"===e)throw new TypeError(`cannot serialize values of type '${e}'`);let f=x.test(a)?a:O(a);if("array"===e&&T(t[a]))o+=(o&&"\n")+j(t[a],n?`${n}.${f}`:f,r-1,i);else if("object"===e){let e=n?`${n}.${f}`:f;o+=(o&&"\n")+D(e,t[a],e,r-1,i)}else l+=f,l+=" = ",l+=$(t[a],e,r,i),l+="\n"}}return!e||!l&&o||(l=l?`[${e}]\n${l}`:`[${e}]`),l&&o?`${l}\n${o}`:l||o}function _(e,{maxDepth:t=1e3,numbersAsFloat:n=!1}={}){if("object"!==v(e))throw new TypeError("stringify can only be called with an object");let r=D(0,e,"",t,n);return"\n"!==r[r.length-1]?r+"\n":r}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */var S={parse:y,stringify:_,TomlDate:f,TomlError:e};export{f as TomlDate,e as TomlError,S as default,y as parse,_ as stringify};
//# sourceMappingURL=/sm/6d09d62de2f866b8749871deb4e7ff2e3db7340c7c5b73b2bbfe1a8740071a3a.map