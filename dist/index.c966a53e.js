!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],u=0,l=[];u<a.length;u++)o=a[u],C[o]&&l.push(C[o][0]),C[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(I&&I(t);l.length;)l.shift()();return N.push.apply(N,c||[]),n()}function n(){for(var e,t=0;t<N.length;t++){for(var n=N[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==C[a]&&(r=!1)}r&&(N.splice(t--,1),e=x(x.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!g[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--b&&0===w&&j()}(e,t),r&&r(e,t)};var o,a=!0,i="c966a53e8324b4bc1634",c=1e4,u={},l=[],s=[];var f=[],d="idle";function p(e){d=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var h,y,v,b=0,w=0,m={},_={},g={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return a=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=x.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return p("idle"),null;_={},m={},g=e.c,v=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},C)S(n);return"prepare"===d&&0===w&&0===b&&j(),t})}function S(e){g[e]?(_[e]=!0,b++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=x.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):m[e]=!0}function j(){p("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(O(n));e.resolve(t)}}function P(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function s(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=k[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var l=a.parents[u],s=k[l];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(s.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),f(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},b=[],w={},m=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var _ in y)if(Object.prototype.hasOwnProperty.call(y,_)){var E;c=O(_);var S=!1,j=!1,P=!1,N="";switch((E=y[_]?s(c):{type:"disposed",moduleId:_}).chain&&(N="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+E.moduleId+N));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+N));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(S=new Error("Aborted because "+c+" is not accepted"+N));break;case"accepted":t.onAccepted&&t.onAccepted(E),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),P=!0;break;default:throw new Error("Unexception type "+E.type)}if(S)return p("abort"),Promise.reject(S);if(j)for(c in w[c]=y[c],f(b,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,c)&&(h[c]||(h[c]=[]),f(h[c],E.outdatedDependencies[c]));P&&(f(b,[E.moduleId]),w[c]=m)}var T,M=[];for(r=0;r<b.length;r++)c=b[r],k[c]&&k[c].hot._selfAccepted&&M.push({module:c,errorHandler:k[c].hot._selfAccepted});p("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete C[e]}(e)});for(var D,I,H=b.slice();H.length>0;)if(c=H.pop(),a=k[c]){var L={},A=a.hot._disposeHandlers;for(o=0;o<A.length;o++)(n=A[o])(L);for(u[c]=L,a.hot.active=!1,delete k[c],delete h[c],o=0;o<a.children.length;o++){var R=k[a.children[o]];R&&((T=R.parents.indexOf(c))>=0&&R.parents.splice(T,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=k[c]))for(I=h[c],o=0;o<I.length;o++)D=I[o],(T=a.children.indexOf(D))>=0&&a.children.splice(T,1);for(c in p("apply"),i=v,w)Object.prototype.hasOwnProperty.call(w,c)&&(e[c]=w[c]);var U=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=k[c])){I=h[c];var J=[];for(r=0;r<I.length;r++)if(D=I[r],n=a.hot._acceptedDependencies[D]){if(-1!==J.indexOf(n))continue;J.push(n)}for(r=0;r<J.length;r++){n=J[r];try{n(I)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:I[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<M.length;r++){var V=M[r];c=V.module,l=[c];try{x(c)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||U||(U=e)}}return U?(p("fail"),Promise.reject(U)):(p("idle"),new Promise(function(e){e(b)}))}var k={},C={1:0},N=[];function x(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:P,status:function(e){if(!e)return d;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:u[e]};return o=void 0,t}(t),parents:(s=l,l=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=k[e];if(!t)return x;var n=function(n){return t.hot.active?(k[n]?-1===k[n].parents.indexOf(e)&&k[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),x(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}};for(var a in x)Object.prototype.hasOwnProperty.call(x,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===d&&p("prepare"),w++,x.e(e).then(t,function(e){throw t(),e});function t(){w--,"prepare"===d&&(m[e]||S(e),0===w&&0===b&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),x.t(e,-2&t)},n}(t)),n.l=!0,n.exports}x.m=e,x.c=k,x.d=function(e,t,n){x.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,t){if(1&t&&(e=x(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(x.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)x.d(n,r,function(t){return e[t]}.bind(null,r));return n},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="./../dist/",x.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],M=T.push.bind(T);T.push=t,T=T.slice();for(var D=0;D<T.length;D++)t(T[D]);var I=M;N.push([69,0]),n()}({18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"clickVisitArticleList",value:function(){var e=this.props,t=e.setShowNav,n=e.setShowList,r=e.setShowCont;t(),n(),r()}},{key:"render",value:function(){var e=this,t=this.props,n=(t.mode,t.data),r=t.articleIndex,a=t.ifShowCont,i=n[r],c="https://github.com/WebUnion-core/doc-repositort/blob/master/WJT20/"+encodeURI(i.name);return o.default.createElement("section",{className:"article-content-container",style:{display:a?"block":"none"}},o.default.createElement("h1",{className:"head-bar"},o.default.createElement("i",{className:"icon-arrow-left back-icon",onClick:function(){return e.clickVisitArticleList()}}),o.default.createElement("span",null,i.name.replace(".md",""))),o.default.createElement("article",{className:"article-content",dangerouslySetInnerHTML:{__html:decodeURI(i.cont)}}),o.default.createElement("a",{className:"original-link",href:c},"原文链接: "+c))}}]),t}();t.default=a},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"clickVisitArticleCont",value:function(e){var t=this.props,n=t.setShowNav,r=t.setShowList,o=t.setShowCont;n(),r(),o(!0,e)}},{key:"render",value:function(){var e=this,t=this.props.ifShowList;return o.default.createElement("ul",{className:"article-list-container",style:{display:t?"block":"none"}},this.props.data.map(function(t,n){return o.default.createElement("li",{className:"article-list-item",onClick:function(){return e.clickVisitArticleCont(n)}},t.name.replace(".md",""))}))}}]),t}();t.default=a},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(32));var a=(0,r.combineReducers)({contentStore:o.default});t.default=a},20:function(e,t,n){e.exports=n.p+"c83d1953b4b01cc80e476f5944f63a38.png"},21:function(e,t,n){e.exports=n.p+"d5f699d55c08627b76d32f97027eff19.jpg"},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this.props.ifShowNav;return o.default.createElement("nav",{className:"nav-container",style:{display:e?"block":"none"}},o.default.createElement("figure",{className:"bg-container"},o.default.createElement("img",{className:"bg-img",src:"DEV"===this.props.mode?n(21):"https://raw.githubusercontent.com/WeiJietao/wjt20/master/dist/d5f699d55c08627b76d32f97027eff19.jpg"})),o.default.createElement("figure",{className:"avator-container"},o.default.createElement("img",{className:"avator",src:"DEV"===this.props.mode?n(20):"https://raw.githubusercontent.com/WeiJietao/wjt20/master/dist/c83d1953b4b01cc80e476f5944f63a38.png"}),o.default.createElement("strong",{className:"user-name"},"WJT20")))}}]),t}();t.default=a},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={setContentType:function(){return{type:"SET_CONTENT_TYPE",contentType:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}}},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(29));var o={};Object.assign(o,r.default),t.default=o},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(85);var o=d(n(0)),a=n(1),i=n(12),c=d(n(30)),u=d(n(28)),l=d(n(22)),s=d(n(19)),f=d(n(18));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setShowNav=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!n.state.ifShowNav;n.setState({ifShowNav:e})},n.setShowList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!n.state.ifShowList;n.setState({ifShowList:e})},n.setShowCont=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!n.state.ifShowCont,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.articleIndex;n.setState({ifShowCont:e,articleIndex:t})},n.state={mode:null,data:[],ifShowNav:!0,ifShowList:!0,ifShowCont:!1,articleIndex:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){var e=this,t="weijietao.github.io"===window.location.hostname?"PROD":"DEV";window.localStorage._ARTICLE_?this.setState({data:JSON.parse(window.localStorage._ARTICLE_),mode:t}):u.default.get("/database/markdown-data.json").end(function(n,r){window.localStorage._ARTICLE_=r.text,e.setState({data:JSON.parse(r.text),mode:t})})}},{key:"render",value:function(){var e=this.props,t=(e.contentStore,e.setContentType,this.state),n=t.mode,r=t.data,a=t.ifShowNav,i=t.ifShowList,c=t.ifShowCont,u=t.articleIndex,d=this.setShowNav,p=this.setShowList,h=this.setShowCont;return o.default.createElement("div",{class:"main-container"},o.default.createElement(l.default,{mode:n,ifShowNav:a}),o.default.createElement(s.default,{mode:n,data:r,ifShowList:i,ifShowCont:c,setShowNav:d,setShowList:p,setShowCont:h}),o.default.createElement(f.default,{mode:n,data:r,articleIndex:u,ifShowCont:c,setShowNav:d,setShowList:p,setShowCont:h}))}}]),t}();t.default=(0,i.connect)(function(e){return{contentStore:e.contentStore}},function(e){return(0,a.bindActionCreators)(c.default,e)})(p)},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments[1];switch(e.type){case"SET_CONTENT_TYPE":return{contentType:e.contentType};default:return{contentType:""}}}},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var r=c(a.default,t);e.hot.accept(2,function(){var e=n(2);r.replaceReducer(e)});return r};var r=n(1),o=i(n(33)),a=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.applyMiddleware)(o.default)(r.createStore)},68:function(e,t,n){"use strict";var r=u(n(0)),o=u(n(13)),a=n(12),i=u(n(34)),c=u(n(31));function u(e){return e&&e.__esModule?e:{default:e}}var l=(0,i.default)();o.default.render(r.default.createElement(a.Provider,{store:l},r.default.createElement(c.default,null)),document.getElementById("app"))},69:function(e,t,n){e.exports=n(68)},85:function(e,t){}});