(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{199:function(t,e,r){"use strict";var n=r(37);function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),c=new G(n||[]);return o(i,"_invoke",{value:_(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",d="suspendedYield",y="executing",m="completed",v={};function g(){}function w(){}function E(){}var b={};s(b,c,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(T([])));L&&L!==r&&n.call(L,c)&&(b=L);var O=E.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function N(t,e){function r(a,o,i,c){var u=h(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(s).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,a){r(t,n,e,a)})}return a=a?a.then(o,o):o()}})}function _(e,r,n){var a=p;return function(o,i){if(a===y)throw new Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=y;var l=h(e,r,n);if("normal"===l.type){if(a=n.done?m:d,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=m,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=E,o(O,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=s(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},j(N.prototype),s(N.prototype,u,function(){return this}),e.AsyncIterator=N,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new N(f(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(O),s(O,l,"Generator"),s(O,c,function(){return this}),s(O,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}r.d(e,"a",function(){return o});var o=function(){return function(){var t=Object(n.a)(a().mark(function t(e){var r,n;return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:"GET_ORDERS_PENDING"}),t.next=4,fetch("http://localhost:3000/api/orders");case 4:r=t.sent,n=r.data,e({type:"GET_ORDERS_SUCCESS",payload:JSON.parse(n)}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:"GET_ORDERS_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}},221:function(t,e,r){"use strict";var n=r(37),a=r(13),o=r(1),i=r.n(o),c=r(202),u=r(94),l=(r(30),r(66),r(222)),s=r.n(l),f=r(223),h=r.n(f),p=r(65),d=r(45),y=(r(93),r(12));function m(){m=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:_(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function g(){}function w(){}function E(){}var b={};l(b,i,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(T([])));L&&L!==r&&n.call(L,i)&&(b=L);var O=E.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function N(t,e){function r(a,o,i,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(s).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e(function(e,a){r(t,n,e,a)})}return o=o?o.then(a,a):a()}})}function _(e,r,n){var a=h;return function(o,i){if(a===d)throw new Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=d;var l=f(e,r,n);if("normal"===l.type){if(a=n.done?y:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=y,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=f(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=E,a(O,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:w,configurable:!0}),w.displayName=l(E,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},j(N.prototype),l(N.prototype,c,function(){return this}),e.AsyncIterator=N,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new N(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(O),l(O,u,"Generator"),l(O,i,function(){return this}),l(O,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}e.a=function(t){var e=t.headers,r=t.usersData,o=Object(a.a)(t,["headers","usersData"]),l=Object(y.g)(),f=function(){var t=Object(n.a)(m().mark(function t(e){return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("http://localhost:5000/api/orders/approveOrder/".concat(e));case 2:t.sent,Object(d.b)("Order Approved Successfully");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),v=localStorage.getItem("role"),g=function(){var t=Object(n.a)(m().mark(function t(e){return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("http://localhost:5000/api/orders/disapproveOrder/".concat(e));case 2:t.sent,Object(d.b)("Order Rejected Successfully");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(n.a)(m().mark(function t(e){return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("purchaseId",e),l.push("/purchase/".concat(e));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return i.a.createElement(c.a,Object.assign({responsive:!0,hover:!0},o),i.a.createElement("thead",null,i.a.createElement("tr",{className:"text-capitalize align-middle text-center"},e.map(function(t,e){return i.a.createElement("th",{key:e},t)}))),i.a.createElement("tbody",null,r.length>0&&r.map(function(t,e){return i.a.createElement("tr",{key:e},i.a.createElement("td",null,e+1),i.a.createElement("td",{className:"align-middle text-center"},t.date),i.a.createElement("td",{className:"align-middle text-center"},t.productName),i.a.createElement("td",{className:"align-middle text-center"},t.quantity),i.a.createElement("td",{className:"align-middle text-center"},t.rate),i.a.createElement("td",{className:"align-middle text-center"},t.bardanas),i.a.createElement("td",{className:"align-middle text-center"},t.brokerage),i.a.createElement("td",{className:"align-middle text-center"},t.deliveryTime),i.a.createElement("td",{className:"align-middle text-center"},t.firmName),i.a.createElement("td",{className:"align-middle text-center"},t.approvalStatus?i.a.createElement("span",{style:{color:"green",fontWeight:"600"}},"Approved"):i.a.createElement("span",{style:{color:"red",fontWeight:"600"}},"Rejected")),i.a.createElement("td",{className:"align-middle text-center"},"Super Admin"==v?i.a.createElement("div",null,t.approvalStatus?i.a.createElement(u.a,{style:{marginLeft:"10px"},onClick:function(){return g(t.id)},color:"secondary",size:"sm"},"Reject"):i.a.createElement(u.a,{color:"primary",size:"sm",onClick:function(){return f(t.id)}},"Approve")):i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{style:{marginRight:"10px"}}),i.a.createElement(h.a,null))),i.a.createElement("td",null,"Super Admin"==v?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{style:{marginBottom:"10px"},color:"primary",size:"sm",onClick:function(){return w(t.id)}},"Accept"),i.a.createElement(u.a,{style:{marginLeft:"10px"},onClick:function(){return g(t.id)},color:"secondary",size:"sm"},"Reject")):null))})),i.a.createElement(d.a,null))}},593:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return d});var n=r(27),a=r(1),o=r.n(a),i=r(146),c=r(151),u=r(94),l=r(147),s=r(221),f=r(199),h=r(22),p=r(12);function d(){var t=Object(a.useState)([]),e=Object(n.a)(t,2),r=e[0],d=e[1],y=localStorage.getItem("role"),m=Object(p.g)();Object(a.useEffect)(function(){fetch("http://localhost:5000/api/orders").then(function(t){return t.json()}).then(function(t){return d(t.data)})},[]);var v=Object(h.b)();console.log(r,"orders data"),Object(a.useEffect)(function(){v(Object(f.a)())},[r]);return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(c.a,null,"Orders"),o.a.createElement(u.a,{onClick:function(){m.push("/placeOrder")},color:"primary",style:{width:"150px",marginLeft:"40px",marginTop:"30px"}},"Place Order"),o.a.createElement(l.a,null,"Super Admin"==y?o.a.createElement(s.a,{headers:["S No.","Date","Product Name","Quantity","Rate","Packing Bardana","Brokerage","Delivery Time","Firm Name","Status","Actions","Purchase Actions"],usersData:r}):o.a.createElement(s.a,{headers:["S No.","Date","Product Name","Quantity","Rate","Packing Bardana","Brokerage","Delivery Time","Firm Name","Status","Actions"],usersData:r}))))}}}]);
//# sourceMappingURL=25.4e4db5f1.chunk.js.map