!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/assets/",e(0)}({0:function(t,e,n){"use strict";n(53),n(211),n(52),n(41),n(80)},30:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},31:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=f[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(s(r.parts[o],e));f[r.id]={id:r.id,refs:1,parts:a}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],a=i[1],s=i[2],c=i[3],u={css:a,media:s,sourceMap:c};n[o]?n[o].parts.push(u):e.push(n[o]={id:o,parts:[u]})}return e}function o(){var t=document.createElement("style"),e=d();return t.type="text/css",e.appendChild(t),t}function a(){var t=document.createElement("link"),e=d();return t.rel="stylesheet",e.appendChild(t),t}function s(t,e){var n,r,i;if(e.singleton){var s=m++;n=g||(g=o()),r=c.bind(null,n,s,!1),i=c.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(),r=l.bind(null,n),i=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),r=u.bind(null,n),i=function(){n.parentNode.removeChild(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function c(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function u(t,e){var n=e.css,r=e.media;e.sourceMap;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function l(t,e){var n=e.css,r=(e.media,e.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var f={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),d=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0;t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p());var n=i(t);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],c=f[s.id];c.refs--,o.push(c)}if(t){var u=i(t);r(u,e)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},41:function(t,e){!function(){for(var t,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};r--;)t=n[r],i[t]||(i[t]=e)}()},51:function(t,e,n){e=t.exports=n(30)(),e.push([t.id,"/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}",""])},52:function(t,e){(function(){/*!
	 * Modernizr v2.8.3
	 * www.modernizr.com
	 *
	 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
	 * Available under the BSD and MIT licenses: www.modernizr.com/license/
	 */
window.Modernizr=function(t,e,n){function r(t){y.cssText=t}function i(t,e){return r(S.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var r in t){var i=t[r];if(!a(i,"-")&&y[i]!==n)return"pfx"==e?i:!0}return!1}function c(t,e,r){for(var i in t){var a=e[t[i]];if(a!==n)return r===!1?t[i]:o(a,"function")?a.bind(r||e):a}return!1}function u(t,e,n){var r=t.charAt(0).toUpperCase()+t.slice(1),i=(t+" "+T.join(r+" ")+r).split(" ");return o(e,"string")||o(e,"undefined")?s(i,e):(i=(t+" "+A.join(r+" ")+r).split(" "),c(i,e,n))}function l(){d.input=function(n){for(var r=0,i=n.length;i>r;r++)O[n[r]]=!!(n[r]in w);return O.list&&(O.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),O}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(t){for(var r,i,o,a=0,s=t.length;s>a;a++)w.setAttribute("type",i=t[a]),r="text"!==w.type,r&&(w.value=x,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&w.style.WebkitAppearance!==n?(m.appendChild(w),o=e.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,m.removeChild(w)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?w.checkValidity&&w.checkValidity()===!1:w.value!=x)),C[t[a]]=!!r;return C}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,h,p="2.8.3",d={},g=!0,m=e.documentElement,b="modernizr",v=e.createElement(b),y=v.style,w=e.createElement("input"),x=":)",k={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",T=E.split(" "),A=E.toLowerCase().split(" "),F={svg:"http://www.w3.org/2000/svg"},j={},C={},O={},M=[],N=M.slice,P=function(t,n,r,i){var o,a,s,c,u=e.createElement("div"),l=e.body,f=l||e.createElement("body");if(parseInt(r,10))for(;r--;)s=e.createElement("div"),s.id=i?i[r]:b+(r+1),u.appendChild(s);return o=["&#173;",'<style id="s',b,'">',t,"</style>"].join(""),u.id=b,(l?u:f).innerHTML+=o,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=n(u,t),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),m.style.overflow=c),!!a},_=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var r;return P("@media "+e+" { #"+b+" { position: absolute; } }",function(e){r="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),r},R=function(){function t(t,i){i=i||e.createElement(r[t]||"div"),t="on"+t;var a=t in i;return a||(i.setAttribute||(i=e.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(t,""),a=o(i[t],"function"),o(i[t],"undefined")||(i[t]=n),i.removeAttribute(t))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),U={}.hasOwnProperty;h=o(U,"undefined")||o(U.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return U.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=N.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=e.prototype;var o=new i,a=e.apply(o,n.concat(N.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(N.call(arguments)))};return r}),j.flexbox=function(){return u("flexWrap")},j.flexboxlegacy=function(){return u("boxDirection")},j.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},j.canvastext=function(){return!(!d.canvas||!o(e.createElement("canvas").getContext("2d").fillText,"function"))},j.webgl=function(){return!!t.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:P(["@media (",S.join("touch-enabled),("),b,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!t.postMessage},j.websqldatabase=function(){return!!t.openDatabase},j.indexedDB=function(){return!!u("indexedDB",t)},j.hashchange=function(){return R("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},j.history=function(){return!(!t.history||!history.pushState)},j.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},j.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(y.backgroundColor,"rgba")},j.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(y.backgroundColor,"rgba")||a(y.backgroundColor,"hsla")},j.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},j.backgroundsize=function(){return u("backgroundSize")},j.borderimage=function(){return u("borderImage")},j.borderradius=function(){return u("borderRadius")},j.boxshadow=function(){return u("boxShadow")},j.textshadow=function(){return""===e.createElement("div").style.textShadow},j.opacity=function(){return i("opacity:.55"),/^0.55$/.test(y.opacity)},j.cssanimations=function(){return u("animationName")},j.csscolumns=function(){return u("columnCount")},j.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((t+"-webkit- ".split(" ").join(e+t)+S.join(n+t)).slice(0,-t.length)),a(y.backgroundImage,"gradient")},j.cssreflections=function(){return u("boxReflect")},j.csstransforms=function(){return!!u("transform")},j.csstransforms3d=function(){var t=!!u("perspective");return t&&"webkitPerspective"in m.style&&P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,n){t=9===e.offsetLeft&&3===e.offsetHeight}),t},j.csstransitions=function(){return u("transition")},j.fontface=function(){var t;return P('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=e.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),t},j.generatedcontent=function(){var t;return P(["#",b,"{font:0/0 a}#",b,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},j.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},j.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},j.localstorage=function(){try{return localStorage.setItem(b,b),localStorage.removeItem(b),!0}catch(t){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(b,b),sessionStorage.removeItem(b),!0}catch(t){return!1}},j.webworkers=function(){return!!t.Worker},j.applicationcache=function(){return!!t.applicationCache},j.svg=function(){return!!e.createElementNS&&!!e.createElementNS(F.svg,"svg").createSVGRect},j.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==F.svg},j.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(k.call(e.createElementNS(F.svg,"animate")))},j.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(k.call(e.createElementNS(F.svg,"clipPath")))};for(var L in j)h(j,L)&&(f=L.toLowerCase(),d[f]=j[L](),M.push((d[f]?"":"no-")+f));return d.input||l(),d.addTest=function(t,e){if("object"==typeof t)for(var r in t)h(t,r)&&d.addTest(r,t[r]);else{if(t=t.toLowerCase(),d[t]!==n)return d;e="function"==typeof e?e():e,"undefined"!=typeof g&&g&&(m.className+=" "+(e?"":"no-")+t),d[t]=e}return d},r(""),v=w=null,function(t,e){function n(t,e){var n=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=b[t[g]];return e||(e={},m++,t[g]=m,b[m]=e),e}function o(t,n,r){if(n||(n=e),l)return n.createElement(t);r||(r=i(n));var o;return o=r.cache[t]?r.cache[t].cloneNode():d.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),!o.canHaveChildren||p.test(t)||o.tagUrn?o:r.frag.appendChild(o)}function a(t,n){if(t||(t=e),l)return t.createDocumentFragment();n=n||i(t);for(var o=n.frag.cloneNode(),a=0,s=r(),c=s.length;c>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function c(t){t||(t=e);var r=i(t);return!v.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(t,r),t}var u,l,f="3.7.0",h=t.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,b={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,l=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){u=!0,l=!0}}();var v={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:h.shivCSS!==!1,supportsUnknownElements:l,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};t.html5=v,c(e)}(this,e),d._version=p,d._prefixes=S,d._domPrefixes=A,d._cssomPrefixes=T,d.mq=_,d.hasEvent=R,d.testProp=function(t){return s([t])},d.testAllProps=u,d.testStyles=P,d.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+M.join(" "):""),d}(this,this.document)}).call(window)},53:function(t,e,n){var r=n(51);"string"==typeof r&&(r=[[t.id,r,""]]);n(31)(r,{});r.locals&&(t.exports=r.locals)},80:function(t,e){"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.getElementsByClassName("js-email")[0];t.href="mailto:mail@jos.tw",t.title="mail@jos.tw",t.innerHTML="mail@jos.tw"})},194:function(t,e,n){e=t.exports=n(30)(),e.push([t.id,'/*! HTML5 Boilerplate v5.0 | MIT License | http://h5bp.com/ */html{color:#222;font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}.hidden{display:none!important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.clearfix{*zoom:1}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}*{box-sizing:border-box}body{min-width:20pc;font-family:Lato,sans-serif}ul{margin:0;padding:0}li{list-style:none}img{width:100%;height:auto}.container{position:relative;max-width:50pc;margin:0 auto;padding:0 1em 0 200px}.header{position:relative;padding:2.5em 0}.header .subtitle,.header .title{margin:0;font-family:Raleway;font-weight:400}.header .title{font-size:3pc;line-height:1.5em;margin-left:-.125em}.header .contact{font-size:14px;line-height:1.5em;position:absolute;right:1.25em;bottom:.25em;text-align:right;color:#a2a2a2}.header .email,.header .website{text-decoration:none;color:#a2a2a2}.header .email:hover,.header .website:hover{text-decoration:underline}.section{position:relative;margin-bottom:2em}.section .label{font-size:24px;line-height:24px;position:absolute;top:0;left:-200px;width:200px;margin:0;padding-right:1em;font-family:Raleway;font-weight:400;text-align:right;color:#a2a2a2}.section .label-publication{top:.125em}.section .label-skill{line-height:28px}.section .article{text-align:justify}.section .name{font-size:22px;line-height:22px;display:block;margin:0 0 .25em;font-weight:700;text-align:left;text-decoration:none;letter-spacing:.0625em;color:#222}.section .name[href]:hover{text-decoration:underline}.section .title{display:block;margin-bottom:1em}.section .period{font-size:14px;line-height:1.5em;position:absolute;top:0;right:0;color:#a2a2a2}.section .list{margin-top:1em;padding-left:1.25em}.section .item{position:relative;margin-bottom:.125em;text-align:left}.section .item:before{content:"";position:absolute;top:.625em;left:-1em;width:4px;height:4px;border-radius:100%;background-color:#222}.footer{padding:1em 0 2em;text-align:center}.footer .copyright{font-size:14px;line-height:1.5em;color:#a2a2a2}.project{position:relative;margin-bottom:1.5em}.project .ps,.project strong{font-weight:400}.project .ps{font-size:14px;line-height:22px;color:#a2a2a2}.project .list{margin-top:.5em}.project .link{color:#222}.award .name{margin:1.25em 0 0;text-decoration:none;color:#222}.award .list{margin-top:.5em}.school{position:relative;margin-bottom:2em}.school .title{margin-bottom:.5em}.school .lab{margin-top:1em}.school .lab .name{font-size:18px;line-height:1.5em;font-weight:400}.school .lab .list{margin-top:.25em}.publication{margin-top:-.125em}.publication .name{line-height:30px}.skill{margin-bottom:.25em}.skill .name{font-size:1pc;line-height:1.5em;display:inline-block;margin-bottom:0;letter-spacing:.03125em}@media print{a[href]:after{content:none}.hide-from-print{display:none}.container{padding-left:155px}.header{padding-top:1.25em}.section .item{list-style:disc}.project .link{text-decoration:none}}',""])},211:function(t,e,n){var r=n(194);"string"==typeof r&&(r=[[t.id,r,""]]);n(31)(r,{});r.locals&&(t.exports=r.locals)}});