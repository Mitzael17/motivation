!function(){var t=[,function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new T(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var a=s(t,e,n);if("normal"===a.type){if(r=n.done?d:p,a.arg===h)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=d,n.method="throw",n.arg=a.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",v="executing",d="completed",h={};function y(){}function m(){}function g(){}var x={};x[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==n&&r.call(b,i)&&(x=b);var E=g.prototype=y.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,c,u){var a=s(t[o],t,i);if("throw"!==a.type){var f=a.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(a.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=E.constructor=g,g.constructor=m,m.displayName=a(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,a(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},j(S.prototype),S.prototype[c]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new S(f(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(E),a(E,u,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var a=r.call(c,"catchLoc"),f=r.call(c,"finallyLoc");if(a&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},function(t,e,n){"use strict";var r=n(3),o=n(47);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){var r=n(4),o=n(5).f,i=n(20),c=n(23),u=n(24),a=n(34),f=n(46);t.exports=function(t,e){var n,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},function(t,e,n){var r=n(6),o=n(8),i=n(9),c=n(10),u=n(14),a=n(16),f=n(18),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(7);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(11),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(7),o=n(12),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(15);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(17),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(6),o=n(7),i=n(19);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(4),o=n(15),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(6),o=n(21),i=n(9);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),o=n(18),i=n(22),c=n(14),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(15);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(4),o=n(20),i=n(16),c=n(24),u=n(25),a=n(27),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(a=s(n)).source||(a.source=l.join("string"==typeof e?e:""))),t!==r?(f?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,e,n){var r=n(4),o=n(20);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(26),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(4),o=n(24),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},function(t,e,n){var r,o,i,c=n(28),u=n(4),a=n(15),f=n(20),s=n(16),l=n(26),p=n(29),v=n(33),d="Object already initialized",h=u.WeakMap;if(c||l.state){var y=l.state||(l.state=new h),m=y.get,g=y.has,x=y.set;r=function(t,e){if(g.call(y,t))throw new TypeError(d);return e.facade=t,x.call(y,t,e),e},o=function(t){return m.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var w=p("state");v[w]=!0,r=function(t,e){if(s(t,w))throw new TypeError(d);return e.facade=t,f(t,w,e),e},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(4),o=n(25),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(30),o=n(32),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(31),o=n(26);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t){t.exports=!1},function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},function(t){t.exports={}},function(t,e,n){var r=n(16),o=n(35),i=n(5),c=n(21);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},function(t,e,n){var r=n(36),o=n(38),i=n(45),c=n(22);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(37),o=n(4),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(4);t.exports=r},function(t,e,n){var r=n(39),o=n(44).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(16),o=n(10),i=n(40).indexOf,c=n(33);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(10),o=n(41),i=n(43),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(42),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,e,n){var r=n(42),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(7),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r,o,i=n(48),c=n(49),u=n(30),a=n(50),f=n(27).get,s=n(54),l=n(55),p=RegExp.prototype.exec,v=u("native-string-replace",String.prototype.replace),d=p,h=(r=/a/,o=/b*/g,p.call(r,"a"),p.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),y=c.UNSUPPORTED_Y||c.BROKEN_CARET,m=void 0!==/()??/.exec("")[1];(h||m||y||s||l)&&(d=function(t){var e,n,r,o,c,u,s,l=this,g=f(l),x=g.raw;if(x)return x.lastIndex=l.lastIndex,e=d.call(x,t),l.lastIndex=x.lastIndex,e;var w=g.groups,b=y&&l.sticky,E=i.call(l),j=l.source,S=0,O=t;if(b&&(-1===(E=E.replace("y","")).indexOf("g")&&(E+="g"),O=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(j="(?: "+j+")",O=" "+O,S++),n=new RegExp("^(?:"+j+")",E)),m&&(n=new RegExp("^"+j+"$(?!\\s)",E)),h&&(r=l.lastIndex),o=p.call(b?n:l,O),b?o?(o.input=o.input.slice(S),o[0]=o[0].slice(S),o.index=l.lastIndex,l.lastIndex+=o[0].length):l.lastIndex=0:h&&o&&(l.lastIndex=l.global?o.index+o[0].length:r),m&&o&&o.length>1&&v.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&w)for(o.groups=u=a(null),c=0;c<w.length;c++)u[(s=w[c])[0]]=o[s[1]];return o}),t.exports=d},function(t,e,n){"use strict";var r=n(22);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(7),o=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var r,o=n(22),i=n(51),c=n(44),u=n(33),a=n(53),f=n(19),s=n(29),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=f("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete d.prototype[c[n]];return d()};u[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=d(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(6),o=n(21),i=n(22),c=n(52);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(39),o=n(44);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(36);t.exports=r("document","documentElement")},function(t,e,n){var r=n(7);t.exports=r((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},function(t,e,n){var r=n(7);t.exports=r((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},function(t,e,n){"use strict";var r=n(57),o=n(22),i=n(41),c=n(13),u=n(63),a=n(65);r("match",(function(t,e,n){return[function(e){var n=c(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,this,t);if(r.done)return r.value;var c=o(this),f=String(t);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(c,f));){var d=String(l[0]);p[v]=d,""===d&&(c.lastIndex=u(f,i(c.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,e,n){"use strict";n(2);var r=n(23),o=n(47),i=n(7),c=n(58),u=n(20),a=c("species"),f=RegExp.prototype;t.exports=function(t,e,n,s){var l=c(t),p=!i((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})),v=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[l]=/./[l]),n.exec=function(){return e=!0,null},n[l](""),!e}));if(!p||!v||n){var d=/./[l],h=e(l,""[t],(function(t,e,n,r,i){var c=e.exec;return c===o||c===f.exec?p&&!i?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,h[0]),r(f,l,h[1])}s&&u(f[l],"sham",!0)}},function(t,e,n){var r=n(4),o=n(30),i=n(16),c=n(32),u=n(59),a=n(62),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e,n){var r=n(60),o=n(7);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,e,n){var r,o,i=n(4),c=n(61),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(36);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(59);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(64).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(42),o=n(13),i=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(12),o=n(47);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(67),o=n(23),i=n(68);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r={};r[n(58)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){"use strict";var r=n(67),o=n(69);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(67),o=n(12),i=n(58)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){"use strict";var r,o,i,c,u=n(3),a=n(31),f=n(4),s=n(36),l=n(71),p=n(23),v=n(72),d=n(73),h=n(75),y=n(76),m=n(15),g=n(77),x=n(78),w=n(25),b=n(79),E=n(85),j=n(86),S=n(87).set,O=n(90),_=n(92),L=n(94),T=n(93),P=n(95),I=n(27),k=n(46),R=n(58),A=n(96),M=n(89),N=n(60),C=R("species"),q="Promise",F=I.get,W=I.set,D=I.getterFor(q),z=l&&l.prototype,B=l,G=z,Y=f.TypeError,U=f.document,H=f.process,K=T.f,V=K,$=!!(U&&U.createEvent&&f.dispatchEvent),Z="function"==typeof PromiseRejectionEvent,X="unhandledrejection",J=!1,Q=k(q,(function(){var t=w(B),e=t!==String(B);if(!e&&66===N)return!0;if(a&&!G.finally)return!0;if(N>=51&&/native code/.test(t))return!1;var n=new B((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(n.constructor={})[C]=r,!(J=n.then((function(){}))instanceof r)||!e&&A&&!Z})),tt=Q||!E((function(t){B.all(t).catch((function(){}))})),et=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},nt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;O((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var c,u,a,f=n[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,v=f.domain;try{s?(o||(2===t.rejection&&ct(t),t.rejection=1),!0===s?c=r:(v&&v.enter(),c=s(r),v&&(v.exit(),a=!0)),c===f.promise?p(Y("Promise-chain cycle")):(u=et(c))?u.call(c,l,p):l(c)):p(r)}catch(t){v&&!a&&v.exit(),p(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ot(t)}))}},rt=function(t,e,n){var r,o;$?((r=U.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:e,reason:n},!Z&&(o=f["on"+t])?o(r):t===X&&L("Unhandled promise rejection",n)},ot=function(t){S.call(f,(function(){var e,n=t.facade,r=t.value;if(it(t)&&(e=P((function(){M?H.emit("unhandledRejection",r,n):rt(X,n,r)})),t.rejection=M||it(t)?2:1,e.error))throw e.value}))},it=function(t){return 1!==t.rejection&&!t.parent},ct=function(t){S.call(f,(function(){var e=t.facade;M?H.emit("rejectionHandled",e):rt("rejectionhandled",e,t.value)}))},ut=function(t,e,n){return function(r){t(e,r,n)}},at=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,nt(t,!0))},ft=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw Y("Promise can't be resolved itself");var r=et(e);r?O((function(){var n={done:!1};try{r.call(e,ut(ft,n,t),ut(at,n,t))}catch(e){at(n,e,t)}})):(t.value=e,t.state=1,nt(t,!1))}catch(e){at({done:!1},e,t)}}};if(Q&&(G=(B=function(t){x(this,B,q),g(t),r.call(this);var e=F(this);try{t(ut(ft,e),ut(at,e))}catch(t){at(e,t)}}).prototype,(r=function(t){W(this,{type:q,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(G,{then:function(t,e){var n=D(this),r=K(j(this,B));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=M?H.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&nt(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=F(t);this.promise=t,this.resolve=ut(ft,e),this.reject=ut(at,e)},T.f=K=function(t){return t===B||t===i?new o(t):V(t)},!a&&"function"==typeof l&&z!==Object.prototype)){c=z.then,J||(p(z,"then",(function(t,e){var n=this;return new B((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),p(z,"catch",G.catch,{unsafe:!0}));try{delete z.constructor}catch(t){}d&&d(z,G)}u({global:!0,wrap:!0,forced:Q},{Promise:B}),h(B,q,!1,!0),y(q),i=s(q),u({target:q,stat:!0,forced:Q},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),u({target:q,stat:!0,forced:a||Q},{resolve:function(t){return _(a&&this===i?B:this,t)}}),u({target:q,stat:!0,forced:tt},{all:function(t){var e=this,n=K(e),r=n.resolve,o=n.reject,i=P((function(){var n=g(e.resolve),i=[],c=0,u=1;b(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,o=P((function(){var o=g(e.resolve);b(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(4);t.exports=r.Promise},function(t,e,n){var r=n(23);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(22),o=n(74);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(15);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var r=n(21).f,o=n(16),i=n(58)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(36),o=n(21),i=n(58),c=n(6),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(22),o=n(80),i=n(41),c=n(82),u=n(83),a=n(84),f=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var s,l,p,v,d,h,y,m=n&&n.that,g=!(!n||!n.AS_ENTRIES),x=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),b=c(e,m,1+g+w),E=function(t){return s&&a(s),new f(!0,t)},j=function(t){return g?(r(t),w?b(t[0],t[1],E):b(t[0],t[1])):w?b(t,E):b(t)};if(x)s=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,v=i(t.length);v>p;p++)if((d=j(t[p]))&&d instanceof f)return d;return new f(!1)}s=l.call(t)}for(h=s.next;!(y=h.call(s)).done;){try{d=j(y.value)}catch(t){throw a(s),t}if("object"==typeof d&&d&&d instanceof f)return d}return new f(!1)}},function(t,e,n){var r=n(58),o=n(81),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t){t.exports={}},function(t,e,n){var r=n(77);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(69),o=n(81),i=n(58)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(22);t.exports=function(t){var e=t.return;if(void 0!==e)return r(e.call(t)).value}},function(t,e,n){var r=n(58)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(22),o=n(77),i=n(58)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c=n(4),u=n(7),a=n(82),f=n(53),s=n(19),l=n(88),p=n(89),v=c.location,d=c.setImmediate,h=c.clearImmediate,y=c.process,m=c.MessageChannel,g=c.Dispatch,x=0,w={},b="onreadystatechange",E=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},j=function(t){return function(){E(t)}},S=function(t){E(t.data)},O=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return w[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(x),x},h=function(t){delete w[t]},p?r=function(t){y.nextTick(j(t))}:g&&g.now?r=function(t){g.now(j(t))}:m&&!l?(i=(o=new m).port2,o.port1.onmessage=S,r=a(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&v&&"file:"!==v.protocol&&!u(O)?(r=O,c.addEventListener("message",S,!1)):r=b in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),E(t)}}:function(t){setTimeout(j(t),0)}),t.exports={set:d,clear:h}},function(t,e,n){var r=n(61);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(12),o=n(4);t.exports="process"==r(o.process)},function(t,e,n){var r,o,i,c,u,a,f,s,l=n(4),p=n(5).f,v=n(87).set,d=n(88),h=n(91),y=n(89),m=l.MutationObserver||l.WebKitMutationObserver,g=l.document,x=l.process,w=l.Promise,b=p(l,"queueMicrotask"),E=b&&b.value;E||(r=function(){var t,e;for(y&&(t=x.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},d||y||h||!m||!g?w&&w.resolve?((f=w.resolve(void 0)).constructor=w,s=f.then,c=function(){s.call(f,r)}):c=y?function(){x.nextTick(r)}:function(){v.call(l,r)}:(u=!0,a=g.createTextNode(""),new m(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=E||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(61);t.exports=/web0s(?!.*chrome)/i.test(r)},function(t,e,n){var r=n(22),o=n(15),i=n(93);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var r=n(77),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){var r=n(4);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t){t.exports="object"==typeof window}],e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};!function(){"use strict";n.r(r);n(1),n(2),n(56),n(66),n(70);function t(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var c=e.apply(n,r);function u(e){t(c,o,i,u,a,"next",e)}function a(e){t(c,o,i,u,a,"throw",e)}u(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".reasons__video"),n=document.querySelector(".reasons__popup"),r=document.createElement("div");r.classList.add("popup"),r.appendChild(n),document.body.appendChild(r),n.style.display="block",r.style.display="none",r.style.opacity="0";var o=0;t.onclick=function(t){function e(t){if("Escape"==t.code||null==t.code){document.documentElement.style.overflowY="",document.removeEventListener("keydown",e);var n=document.querySelector(".popup");document.getElementById("player").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),setTimeout((function(){return n.style.opacity="0"}),0),setTimeout((function(){return n.style.display="none"}),500)}}0==o&&(document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/wnHW6o8WMas?enablejsapi=1"),document.getElementById("player").onload=function(t){document.getElementById("player").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},o++),r.style.display="",document.documentElement.style.overflowY="hidden",setTimeout((function(){return r.style.opacity="1"}),0),document.getElementById("player").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),r.onclick=e,document.addEventListener("keydown",e)};var i=document.querySelector(".header__burger");i.onclick=function(t){document.querySelector(".header__wrapper").classList.toggle("active"),i.classList.toggle("active"),document.documentElement.classList.toggle("active"),document.body.classList.toggle("active")};var c,u=window.innerWidth;function a(){if(window.innerWidth<=570){var t=document.querySelector(".wrapper__logos"),e=document.querySelector(".choice__logos");e.id="choice1";var n=(e=document.getElementById("choice1")).cloneNode(!0);n.id="choice2",t.appendChild(n),(n=document.getElementById("choice2")).style.left="788px",e.style.left="0px",function r(){e.offsetWidth+e.offsetLeft<0&&(t.appendChild(e),e.style.transition="none",e.style.left="788px",e.style.transition="left 1s linear"),n.offsetWidth+n.offsetLeft<0&&(t.appendChild(n),n.style.transition="none",n.style.left="788px",n.style.transition="left 1s linear"),e.style.left=parseInt(e.style.left)-50+"px",n.style.left=parseInt(n.style.left)-50+"px",c=setTimeout((function(){return r()}),1e3),window.onresize=function(){f()}}()}}function f(){u!=window.innerWidth&&(u=window.innerWidth,document.querySelector("#choice2")&&(document.querySelector("#choice2").remove(),clearTimeout(c),choice1.style.left=0),window.innerWidth<=570&&a())}a(),window.onresize=function(){f()};var s=document.querySelector(".choice__description"),l=document.querySelector(".choice__arrow");l.onclick=function(t){s.classList.toggle("active"),l.classList.toggle("active")};var p=document.querySelector("#form");function v(t){return d.apply(this,arguments)}function d(){return(d=e(regeneratorRuntime.mark((function t(e){var n,r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(n)return e.style.border="1px solid red",document.querySelector(".form__ps").innerHTML=t,document.querySelector(".form__ps").style.color="red","done";e.style.border="none",document.querySelector(".form__ps").innerHTML=t,document.querySelector(".form__ps").style.color="green"},r=function(t){return""===t.value?t=o("Please, write your email",t):t.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(t=o("Invalid address",t)),t},e.preventDefault(),p.removeEventListener("submit",v),p.addEventListener("submit",h),"done"!==(n=r(p.elements.email))){t.next=10;break}return p.addEventListener("submit",v),p.removeEventListener("submit",h),t.abrupt("return",!1);case 10:return t.next=12,fetch("http://motivation/mailer.php",{method:"POST",body:new FormData(p)});case 12:return i=t.sent,t.next=15,i.json();case 15:return t.sent,n.value="",i.ok?o("You successfully subscribed",p.elements.email,!1):o("Error",p.elements.email,!1),p.addEventListener("submit",v),p.removeEventListener("submit",h),t.abrupt("return",!1);case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return t.preventDefault(),!1}p.addEventListener("submit",v);var y=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(y,"px")),window.addEventListener("resize",(function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}))}))}()}();
