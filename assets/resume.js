!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/assets/",e(0)}([function(t,e,n){"use strict";n(7),n(25),n(6),n(4),document.addEventListener("DOMContentLoaded",function(){var t=document.getElementsByClassName("js-email")[0];t.href="mailto:mail@jos.tw",t.title="mail@jos.tw",t.innerHTML="mail@jos.tw"})},,function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=h[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(s(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(s(i.parts[o],e));h[i.id]={id:i.id,refs:1,parts:a}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],a=r[1],s=r[2],u=r[3],c={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(c):e.push(n[o]={id:o,parts:[c]})}return e}function o(){var t=document.createElement("style"),e=p();return t.type="text/css",e.appendChild(t),t}function a(){var t=document.createElement("link"),e=p();return t.rel="stylesheet",e.appendChild(t),t}function s(t,e){var n,i,r;if(e.singleton){var s=b++;n=g||(g=o()),i=u.bind(null,n,s,!1),r=u.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(),i=l.bind(null,n),r=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),i=c.bind(null,n),r=function(){n.parentNode.removeChild(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function u(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function c(t,e){var n=e.css,i=e.media;e.sourceMap;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function l(t,e){var n=e.css,i=(e.media,e.sourceMap);i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var h={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0;t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d());var n=r(t);return i(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=h[s.id];u.refs--,o.push(u)}if(t){var c=r(t);i(c,e)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete h[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){!function(){for(var t,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=n.length,r=window.console=window.console||{};i--;)t=n[i],r[t]||(r[t]=e)}()},function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}",""])},function(t,e){(function(){/*!
	 * Modernizr v2.8.3
	 * www.modernizr.com
	 *
	 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
	 * Available under the BSD and MIT licenses: www.modernizr.com/license/
	 */
window.Modernizr=function(t,e,n){function i(t){y.cssText=t}function r(t,e){return i(E.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var i in t){var r=t[i];if(!a(r,"-")&&y[r]!==n)return"pfx"==e?r:!0}return!1}function u(t,e,i){for(var r in t){var a=e[t[r]];if(a!==n)return i===!1?t[r]:o(a,"function")?a.bind(i||e):a}return!1}function c(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+C.join(i+" ")+i).split(" ");return o(e,"string")||o(e,"undefined")?s(r,e):(r=(t+" "+A.join(i+" ")+i).split(" "),u(r,e,n))}function l(){p.input=function(n){for(var i=0,r=n.length;r>i;i++)U[n[i]]=!!(n[i]in w);return U.list&&(U.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),U}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(t){for(var i,r,o,a=0,s=t.length;s>a;a++)w.setAttribute("type",r=t[a]),i="text"!==w.type,i&&(w.value=k,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&w.style.WebkitAppearance!==n?(b.appendChild(w),o=e.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,b.removeChild(w)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?w.checkValidity&&w.checkValidity()===!1:w.value!=k)),j[t[a]]=!!i;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var h,f,d="2.8.3",p={},g=!0,b=e.documentElement,m="modernizr",v=e.createElement(m),y=v.style,w=e.createElement("input"),k=":)",x={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",C=S.split(" "),A=S.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},F={},j={},U={},N=[],R=N.slice,M=function(t,n,i,r){var o,a,s,u,c=e.createElement("div"),l=e.body,h=l||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:m+(i+1),c.appendChild(s);return o=["&#173;",'<style id="s',m,'">',t,"</style>"].join(""),c.id=m,(l?c:h).innerHTML+=o,h.appendChild(c),l||(h.style.background="",h.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(h)),a=n(c,t),l?c.parentNode.removeChild(c):(h.parentNode.removeChild(h),b.style.overflow=u),!!a},O=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var i;return M("@media "+e+" { #"+m+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},L=function(){function t(t,r){r=r||e.createElement(i[t]||"div"),t="on"+t;var a=t in r;return a||(r.setAttribute||(r=e.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(t,""),a=o(r[t],"function"),o(r[t],"undefined")||(r[t]=n),r.removeAttribute(t))),r=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),P={}.hasOwnProperty;f=o(P,"undefined")||o(P.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return P.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=R.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var o=new r,a=e.apply(o,n.concat(R.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(R.call(arguments)))};return i}),F.flexbox=function(){return c("flexWrap")},F.flexboxlegacy=function(){return c("boxDirection")},F.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},F.canvastext=function(){return!(!p.canvas||!o(e.createElement("canvas").getContext("2d").fillText,"function"))},F.webgl=function(){return!!t.WebGLRenderingContext},F.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:M(["@media (",E.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},F.geolocation=function(){return"geolocation"in navigator},F.postmessage=function(){return!!t.postMessage},F.websqldatabase=function(){return!!t.openDatabase},F.indexedDB=function(){return!!c("indexedDB",t)},F.hashchange=function(){return L("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},F.history=function(){return!(!t.history||!history.pushState)},F.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},F.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},F.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),a(y.backgroundColor,"rgba")},F.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),a(y.backgroundColor,"rgba")||a(y.backgroundColor,"hsla")},F.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},F.backgroundsize=function(){return c("backgroundSize")},F.borderimage=function(){return c("borderImage")},F.borderradius=function(){return c("borderRadius")},F.boxshadow=function(){return c("boxShadow")},F.textshadow=function(){return""===e.createElement("div").style.textShadow},F.opacity=function(){return r("opacity:.55"),/^0.55$/.test(y.opacity)},F.cssanimations=function(){return c("animationName")},F.csscolumns=function(){return c("columnCount")},F.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+E.join(n+t)).slice(0,-t.length)),a(y.backgroundImage,"gradient")},F.cssreflections=function(){return c("boxReflect")},F.csstransforms=function(){return!!c("transform")},F.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in b.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,n){t=9===e.offsetLeft&&3===e.offsetHeight}),t},F.csstransitions=function(){return c("transition")},F.fontface=function(){var t;return M('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=e.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(a)&&0===a.indexOf(i.split(" ")[0])}),t},F.generatedcontent=function(){var t;return M(["#",m,"{font:0/0 a}#",m,':after{content:"',k,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},F.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},F.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},F.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(t){return!1}},F.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(t){return!1}},F.webworkers=function(){return!!t.Worker},F.applicationcache=function(){return!!t.applicationCache},F.svg=function(){return!!e.createElementNS&&!!e.createElementNS(T.svg,"svg").createSVGRect},F.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==T.svg},F.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(x.call(e.createElementNS(T.svg,"animate")))},F.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(x.call(e.createElementNS(T.svg,"clipPath")))};for(var I in F)f(F,I)&&(h=I.toLowerCase(),p[h]=F[I](),N.push((p[h]?"":"no-")+h));return p.input||l(),p.addTest=function(t,e){if("object"==typeof t)for(var i in t)f(t,i)&&p.addTest(i,t[i]);else{if(t=t.toLowerCase(),p[t]!==n)return p;e="function"==typeof e?e():e,"undefined"!=typeof g&&g&&(b.className+=" "+(e?"":"no-")+t),p[t]=e}return p},i(""),v=w=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=m[t[g]];return e||(e={},b++,t[g]=b,m[b]=e),e}function o(t,n,i){if(n||(n=e),l)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():p.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!o.canHaveChildren||d.test(t)||o.tagUrn?o:i.frag.appendChild(o)}function a(t,n){if(t||(t=e),l)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),a=0,s=i(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function u(t){t||(t=e);var i=r(t);return!v.shivCSS||c||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(t,i),t}var c,l,h="3.7.0",f=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",b=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,l=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,l=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:h,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};t.html5=v,u(e)}(this,e),p._version=d,p._prefixes=E,p._domPrefixes=A,p._cssomPrefixes=C,p.mq=O,p.hasEvent=L,p.testProp=function(t){return s([t])},p.testAllProps=c,p.testStyles=M,p.prefixed=function(t,e,n){return e?c(t,e,n):c(t,"pfx")},b.className=b.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+N.join(" "):""),p}(this,this.document)}).call(window)},function(t,e,n){var i=n(5);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},,,function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'/*! HTML5 Boilerplate v5.0 | MIT License | http://h5bp.com/ */html{color:#222;font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}.hidden{display:none!important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.clearfix{*zoom:1}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}*{box-sizing:border-box}body{font-family:Lato,sans-serif}ul{margin:0;padding:0}li{list-style:none}img{width:100%;height:auto}.container{position:relative;max-width:50pc;margin:0 auto;padding:0 1em 0 200px}.header{position:relative;padding:2.5em 0}.header .subtitle,.header .title{margin:0;font-family:Raleway;font-weight:400}.header .title{font-size:3pc;line-height:1.5em;margin-left:-.125em}.header .contact{font-size:14px;line-height:1.5em;position:absolute;right:1.25em;bottom:.25em;text-align:right;color:#a2a2a2}.header .email,.header .website{text-decoration:none;color:#a2a2a2}.header .email:hover,.header .website:hover{text-decoration:underline}.section{position:relative;margin-bottom:2em}.section .label{font-size:24px;line-height:24px;position:absolute;top:0;left:-200px;width:200px;margin:0;padding-right:1em;font-family:Raleway;font-weight:400;text-align:right;color:#a2a2a2}.section .label-publication{top:.125em}.section .article{text-align:justify}.section .name{font-size:22px;line-height:22px;display:block;margin:0 0 .25em;font-weight:700;letter-spacing:.0625em}.section .title{display:block;margin-bottom:1em}.section .period{font-size:14px;line-height:1.5em;position:absolute;top:0;right:0;color:#a2a2a2}.section .list{margin-top:1em;padding-left:1.25em}.section .item{position:relative;margin-bottom:.125em}.section .item:before{content:"";position:absolute;top:.625em;left:-1em;width:4px;height:4px;border-radius:100%;background-color:#222}.footer{padding:1em 0}.footer .copyright{font-size:14px;line-height:1.5em;color:#a2a2a2}.project{position:relative;margin-bottom:1.5em}.project .ps{font-size:14px;line-height:22px;font-weight:400;color:#a2a2a2}.project .list{margin-top:.5em}.project .link{color:#222}.award .name{margin:1.25em 0 0;text-decoration:none;color:#222}.award .list{margin-top:.5em}.school{position:relative}.school .lab{margin:1em 0 2em}.school .lab .name{font-size:18px;line-height:1.5em;font-weight:400}.school .lab .list{margin-top:.25em}.publication{margin-top:-.125em}.publication .name{line-height:30px}',""])},,,,,,,,,,,,,,,function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)}]);