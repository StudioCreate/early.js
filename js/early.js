/*!
 * pastebin.com/EzG63Yj0
 * github.com/englishextra/early.js/blob/master/js/early.js
 */
/*!
 * Modernizr 2.6.2 (Custom Build) | MIT & BSD  * Build:
 * modernizr.com/download/#-cssanimations-generatedcontent-cssgradients-csstransforms-csstransforms3d-csstransitions-hashchange-audio-video-svg-touch-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 * shiv-mq-load have been removed as we have conditional comments for IE in HTML markup and yepnope goes on separatly
 * if you include add classes feature when building modernizr you actually dont need to set no-js class to html element
 * added window.Modernizr check wrapper
 */
"undefined"!==typeof window.Modernizr || (function () {window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.cssanimations=function(){return I("animationName")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect};for(var J in s)B(s,J)&&(x=J.toLowerCase(),e[x]=s[J](),v.push((e[x]?"":"no-")+x));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document)}());
/*!
 * Detectizr v1.4.4
 * barisaydinoglu.github.com/Detectizr/
 * github.com/barisaydinoglu/Detectizr
 * Written by Baris Aydinoglu (baris.aydinoglu.info) - Copyright © 2012
 * Contributor: Adrian Maurer (github.com/adrianmaurer)
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
window.Modernizr && (function(e,t){function i(i){var s=function(e,t){var n,r,i;if(arguments.length>2){for(n=1,r=arguments.length;n<r;n+=1){s(e,arguments[n])}}else{for(i in t){if(t.hasOwnProperty(i)){e[i]=t[i]}}}return e},o=this,u=n.Detectizr.device,a=document.documentElement,f=["tv","tablet","mobile","desktop"],l={java:{substrs:["Java"],progIds:["JavaWebStart.isInstalled"]},acrobat:{substrs:["Adobe","Acrobat"],progIds:["AcroPDF.PDF","PDF.PDFCtrl.5"]},flash:{substrs:["Shockwave","Flash"],progIds:["ShockwaveFlash.ShockwaveFlash"]},mediaplayer:{substrs:["Windows Media"],progIds:["MediaPlayer.MediaPlayer"]},silverlight:{substrs:["Silverlight"],progIds:["AgControl.AgControl"]}},c,h,p,d,v,m,g,y,b;r=s({},r,i||{});o.is=function(e){return u.userAgent.indexOf(e)>-1};o.test=function(e){return e.test(u.userAgent)};o.exec=function(e){return e.exec(u.userAgent)};o.toCamel=function(e){if(e===null||e===undefined){return""}return String(e).replace(/((\s|\-|\.)+[a-z0-9])/g,function(e){return e.toUpperCase().replace(/(\s|\-|\.)/g,"")})};o.addVersionTest=function(e,t,n){if(t!==null&&t!==undefined&&t!==""){t=o.toCamel(t);if(t!==""){if(n!==undefined&&n>0){t=t.substr(0,n)}o.addConditionalTest(e+t,true)}}};o.checkOrientation=function(){e.clearTimeout(g);g=e.setTimeout(function(){b=u.orientation;if(e.innerHeight>e.innerWidth){u.orientation="portrait"}else{u.orientation="landscape"}o.addConditionalTest(u.orientation,true);if(b!==u.orientation){o.addConditionalTest(b,false)}},10)};o.addConditionalTest=function(e,t){if(e===null||e===undefined||e===""){return}if(r.addAllFeaturesAsClass){n.addTest(e,t)}else{t=typeof t==="function"?t():t;if(t){n.addTest(e,true)}else{delete n[e];y=new RegExp("\\b"+e+"\\b");a.className=a.className.replace(y,"")}}};if(r.detectDevice){if(o.test(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)){u.type=f[0];u.model="smartTv"}else if(o.test(/Xbox|PLAYSTATION.3|Wii/i)){u.type=f[0];u.model="gameConsole"}else if(o.test(/iP(a|ro)d/i)){u.type=f[1];u.model="ipad"}else if(o.test(/tablet/i)&&!o.test(/RX-34/i)||o.test(/FOLIO/i)){u.type=f[1];u.model=String(o.exec(/playbook/))}else if(o.test(/Linux/i)&&o.test(/Android/i)&&!o.test(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)){u.type=f[1];u.model="android"}else if(o.test(/Kindle/i)||o.test(/Mac.OS/i)&&o.test(/Silk/i)){u.type=f[1];u.model="kindle"}else if(o.test(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i)||o.test(/MB511/i)&&o.test(/RUTEM/i)){u.type=f[1];u.model="android"}else if(o.test(/BB10/i)){u.type=f[1];u.model="blackberry"}else{u.model=o.exec(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/i);if(u.model!==null){u.type=f[2];u.model=String(u.model)}else{u.model="";if(o.test(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)){u.type=f[2]}else if(o.test(/Opera/i)&&o.test(/Windows.NT.5/i)&&o.test(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)){u.type=f[2]}else if(o.test(/Windows.(NT|XP|ME|9)/i)&&!o.test(/Phone/i)||o.test(/Win(9|.9|NT)/i)||o.test(/\(Windows 8\)/i)){u.type=f[3]}else if(o.test(/Macintosh|PowerPC/i)&&!o.test(/Silk/i)){u.type=f[3]}else if(o.test(/Linux/i)&&o.test(/X11/i)){u.type=f[3]}else if(o.test(/Solaris|SunOS|BSD/i)){u.type=f[3]}else if(o.test(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i)&&!o.test(/Mobile/i)){u.type=f[3];u.model="crawler"}else{u.type=f[2]}}}for(c=0,h=f.length;c<h;c+=1){o.addConditionalTest(f[c],u.type===f[c])}if(r.detectDeviceModel){o.addConditionalTest(o.toCamel(u.model),true)}if(u.type===f[1]||u.type===f[2]){e.onresize=function(e){o.checkOrientation(e)};o.checkOrientation()}}if(r.detectScreen&&!!n.mq){o.addConditionalTest("smallScreen",n.mq("only screen and (max-width: 480px)"));o.addConditionalTest("verySmallScreen",n.mq("only screen and (max-width: 320px)"));o.addConditionalTest("veryVerySmallScreen",n.mq("only screen and (max-width: 240px)"))}if(r.detectOS){if(u.model!==""){if(u.model==="ipad"||u.model==="iphone"||u.model==="ipod"){u.osVersion=o.test(/os\s(\d+)_/)?RegExp.$1:"";u.os="ios";u.osVersionFull=o.test(/os ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""}else if(u.model==="android"){u.osVersion=(o.test(/os\s(\d+)_/)?RegExp.$1:"").substr(0,2);if(!u.osVersion){u.osVersion=o.test(/android\s(\d+)\./)?RegExp.$1:"";u.osVersionFull=o.test(/android ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""}u.os="android"}else if(u.model==="blackberry"){u.osVersion=o.test(/version\/([^\s]+)/)?RegExp.$1:"";u.os="blackberry"}else if(u.model==="playbook"){u.osVersion=o.test(/os ([^\s]+)/)?RegExp.$1.replace(";",""):"";u.os="blackberry"}}if(u.os===""){if(o.is("win")||o.is("16bit")){u.os="windows";if(o.is("windows nt 6.2")||o.test(/\(windows 8\)/)){u.osVersion="8"}else if(o.is("windows nt 6.1")){u.osVersion="7"}else if(o.is("windows nt 6.0")){u.osVersion="vista"}else if(o.is("windows nt 5.2")||o.is("windows nt 5.1")||o.is("windows xp")){u.osVersion="xp"}else if(o.is("windows nt 5.0")||o.is("windows 2000")){u.osVersion="2k"}else if(o.is("winnt")||o.is("windows nt")){u.osVersion="nt"}else if(o.is("win98")||o.is("windows 98")){u.osVersion="98"}else if(o.is("win95")||o.is("windows 95")){u.osVersion="95"}}else if(o.is("mac")||o.is("darwin")){u.os="mac";if(o.is("68k")||o.is("68000")){u.osVersion="68k"}else if(o.is("ppc")||o.is("powerpc")){u.osVersion="ppc"}else if(o.is("os x")){u.osVersion="os x"}}else if(o.is("webtv")){u.os="webtv"}else if(o.is("x11")||o.is("inux")){u.os="linux"}else if(o.is("sunos")){u.os="sun"}else if(o.is("irix")){u.os="irix"}else if(o.is("freebsd")){u.os="freebsd"}else if(o.is("bsd")){u.os="bsd"}}if(u.os!==""){if(u.os!=="ios"&&u.os!=="android"){u.osVersionFull=u.osVersion}o.addConditionalTest(u.os,true);o.addVersionTest(u.os,u.osVersionFull.replace(/\./g,"_"));o.addVersionTest(u.os,u.osVersion)}}if(r.detectBrowser){if(!o.test(/opera|webtv/i)&&o.test(/msie\s([0-9]{1,})/)){u.browser="ie";if(!e.addEventListener&&document.documentMode&&document.documentMode===7){u.browserVersion="8compat"}else{u.browserVersion=o.test(/trident\/4\.0/)?"8":RegExp.$1}}else if(o.is("firefox")){u.browserEngine="gecko";u.browser="firefox";u.browserVersion=(o.test(/firefox\/(\d+(\.?\d+)*)/)?RegExp.$1:"").substr(0,2)}else if(o.is("gecko/")){u.browserEngine="gecko"}else if(o.is("opera")){u.browser="opera";u.browserEngine="presto";u.browserVersion=o.test(/version\/(\d+)/)?RegExp.$1:o.test(/opera(\s|\/)(\d+)/)?RegExp.$2:""}else if(o.is("konqueror")){u.browser="konqueror"}else if(o.is("chrome")){u.browserEngine="webkit";u.browser="chrome";u.browserVersion=o.test(/chrome\/(\d+)/)?RegExp.$1:""}else if(o.is("iron")){u.browserEngine="webkit";u.browser="iron"}else if(o.is("applewebkit/")){u.browser="safari";u.browserEngine="webkit";u.browserVersion=o.test(/version\/(\d+)/)?RegExp.$1:""}else if(o.is("mozilla/")){u.browserEngine="gecko"}if(u.browser!==""){o.addConditionalTest(u.browser,true);if(u.browserVersion!==""){o.addVersionTest(u.browser,u.browserVersion)}}o.addConditionalTest(u.browserEngine,true)}if(r.detectPlugins){o.detectPlugin=function(e){if(t.plugins){for(c=0,h=t.plugins.length;c<h;c+=1){var n=t.plugins[c],r=n.name+n.description,i=0;for(p=0,d=e.length;p<d;p+=1){if(r.indexOf(e[p])!==-1){i+=1}}if(i===e.length){return true}}}return false};o.detectObject=function(t,n){if(e.ActiveXObject){for(c=0,h=t.length;c<h;c+=1){try{var r=new ActiveXObject(t[c]);if(r){return n&&n[c]?n[c].call(r):true}}catch(i){}}}return false};for(v in l){if(l.hasOwnProperty(v)){m=l[v];if(o.detectPlugin(m.substrs)||o.detectObject(m.progIds,m.fns)){u.browserPlugins.push(v);o.addConditionalTest(v,true)}}}}}function s(){if(n!==undefined){n.Detectizr=n.Detectizr||{};n.Detectizr.device={type:"",model:"",orientation:"",browser:"",browserEngine:"",browserPlugins:[],browserVersion:"",os:"",osVersion:"",osVersionFull:"",userAgent:(t.userAgent||t.vendor||e.opera).toLowerCase()};n.Detectizr.detect=function(e){return new i(e)}}}var n=e.Modernizr,r={addAllFeaturesAsClass:false,detectDevice:true,detectDeviceModel:true,detectScreen:true,detectOS:true,detectBrowser:true,detectPlugins:true};s()})(this,navigator);
/*!
 * init Detectizr
 */
typeof window.Detectizr && Modernizr.Detectizr.detect({detectScreen:false});
/*!
 * variables dependant on Modernizr and Detectizr
 * gist.github.com/isaacs/357981
 */
var earlyDeviceType=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.type:""}(window)
	,earlyDeviceModel=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.model:""}(window)
	,earlyDeviceOrientation=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.orientation:""}(window)
	,earlyBrowser=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.browser:""}(window)
	,earlyBrowserVersion=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.browserVersion:""}(window)
	,earlyBrowserEngine=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.browserEngine:""}(window)
	,earlyOs=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.os:""}(window)
	,earlyOsVersion=function(a,b){return a.Modernizr&&typeof a.Detectizr?Modernizr.Detectizr.device.osVersion:""}(window)
	;
/*!
 * yepnope1.5.x
 */
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
/*!
 * written by Dean Edwards, 2005 with input from Tino Zijdel, Matthias Miller, Diego Perini
 * dean.edwards.name/weblog/2005/10/add-event/
 */
function addEvent(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else{c.$$guid||(c.$$guid=addEvent.guid++);a.events||(a.events={});var d=a.events[b];d||(d=a.events[b]={},a["on"+b]&&(d[0]=a["on"+b]));d[c.$$guid]=c;a["on"+b]=handleEvent}}addEvent.guid=1;function removeEvent(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.events&&a.events[b]&&delete a.events[b][c.$$guid]} function handleEvent(a){var b=!0;a=a||fixEvent(((this.ownerDocument||this.document||this).parentWindow||window).event);var c=this.events[a.type],d;for(d in c)this.$$handleEvent=c[d],!1===this.$$handleEvent(a)&&(b=!1);return b}function fixEvent(a){a.preventDefault=fixEvent.preventDefault;a.stopPropagation=fixEvent.stopPropagation;return a}fixEvent.preventDefault=function(){this.returnValue=!1};fixEvent.stopPropagation=function(){this.cancelBubble=!0};
/*!
 * domready (c) Dustin Diaz 2012 - License MIT
 */
(function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("domready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}}));
/*!
 * jQuery.browser.mobile (detectmobilebrowser.com/)
 * Original function changed: it now returns 1:!1
 */
var earlyIsMobileBrowser=function(a){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))?1:!1}(navigator.userAgent||navigator.vendor||window.opera);
/*!
 * declare other early variables
 * gist.github.com/isaacs/357981
 */
var earlyDocumentReferrer=document.referrer||""
	,earlyWindowLocation=window.location.href||""
	,earlySelfLocationHost=self.location.host||""
	,earlyDevicePixelRatio=window.devicePixelRatio?window.devicePixelRatio:1
	,earlyDeviceWidth=window.innerWidth?0<window.innerWidth?window.innerWidth:screen.width:""
	,earlyDeviceHeight=window.innerHeight?0<window.innerHeight?window.innerHeight:screen.height:""
	,earlyIsRetina=function(dpr){if(dpr){return 2<=dpr?1:"";}}((window.devicePixelRatio||Math.round(window.screen.availWidth/document.documentElement.clientWidth))||"")
	,earlyHasCssgradients=("undefined"!==typeof window.Modernizr&&Modernizr.cssgradients&&(earlyHasCssgradients=1))||""
	,earlyHasTouch=("undefined"!==typeof window.Modernizr&&Modernizr.touch&&(earlyHasTouch=1))||""
	,earlyFnGetYyyymmdd=function(){"use strict";var a=new Date,b=a.getDate(),c=a.getMonth(),c=c+1,d=a.getFullYear();10>b&&(b="0"+b);10>c&&(c="0"+c);return d+"-"+c+"-"+b;}
	;
/*!
 * append details to title
 */
document.title && (document.title = document.title + " [" + (earlyDeviceType ? earlyDeviceType : "") + (earlyDeviceModel ? " " + earlyDeviceModel : "") + (earlyDeviceOrientation ? " " + earlyDeviceOrientation : "") + (earlyBrowser ? " " + earlyBrowser : "") + (earlyBrowserVersion ? " " + earlyBrowserVersion : "") + (earlyBrowserEngine ? " " + earlyBrowserEngine : "") + (earlyIsMobileBrowser ? " mobile browser" : "") + (earlyOs ? " " + earlyOs : "") + (earlyOsVersion ? " " + earlyOsVersion : "") + (earlyDeviceWidth ? " " + earlyDeviceWidth : "") + (earlyDeviceHeight ? "x" + earlyDeviceHeight : "") + (earlyDevicePixelRatio ? " " + earlyDevicePixelRatio + "x" : "") + (earlyHasTouch ? " touch" : "") + (earlyHasCssgradients ? " css gradients" : "") + (earlyIsRetina ? " retina" : "") + "]");
var earlyDocumentTitle=document.title||"";
/*!
 * set target blank to external links
 */
domready(function(){var c=document.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",e=self.location.host+"/"||"";if(c&&a&&e)for(var b,d,a=0;a<c.length;a+=1)if(b=c[a],(d=b.getAttribute("href")||"")&&(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(d)||/http:\/\/localhost/.test(d))&&!b.getAttribute("rel"))b.setAttribute("target","_blank")/* ,b.setAttribute("rel","tipsy") */,b.setAttribute("title","\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 "+ (d.match(/:\/\/(.[^/]+)/)[1]||"")+" \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0438\u043b\u0438 \u043e\u043a\u043d\u0435")});
/*!
 * hide address bar for mobile
 */
(function(a){a&&addEvent(window,"load",function(a){setTimeout(function(){window.scrollTo(0,1)},1)},!1)})(earlyIsMobileBrowser||"");(function(a){function c(){b.content="width=device-width,minimum-scale="+d[0]+",maximum-scale="+d[1];a.removeEventListener(e,c,!0)}var e="gesturestart",d=[1,1],b="querySelectorAll"in a?a.querySelectorAll("meta[name=viewport]"):[];(b=b[b.length-1])&&"addEventListener"in a&&(c(),d=[0.25,1.6],a.addEventListener(e,c,!0))})(document);
