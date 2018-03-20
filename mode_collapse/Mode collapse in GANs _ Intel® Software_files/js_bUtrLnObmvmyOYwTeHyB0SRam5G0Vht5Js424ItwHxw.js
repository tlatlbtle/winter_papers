(function($,Drupal,window,document,undefined){Drupal.behaviors.my_custom_behavior={attach:function(context,settings){$("#menu-navigation").once("slider",function(){$(".zonetitle").live("click",function(event){event.stopPropagation();$(".menu-icon").click()});$(".menu-icon").click(function(e){e.preventDefault();$(this).toggleClass("activeborder");$("#menu-navigation").toggleClass("opened");$(".menu-container").toggleClass("opened");if(Modernizr.mq("(max-width: 610px)")){$(".menu-container").animate({height:"toggle"},{duration:200,queue:false,complete:function(e){$(".menu-container").css("overflow","visible");$(".menu-icon").toggleClass("active");menuContainerPos(e)}})}if(Modernizr.mq("(min-width: 611px)")){$(".menu-container").animate({width:"toggle"},{duration:200,queue:false,complete:function(e){$(".menu-container").css("overflow","visible");$(".menu-icon").toggleClass("active");menuContainerPos(e)}})}});$("#menu-navigation li.active-trail").each(function(){if(!$(this).find("ul").length){$(this).removeClass("active-trail")}});$("#menu-navigation li.active-trail").addClass("active");$("#menu-navigation li.is-expanded > a").click(function(event){var checkElement=$(this).next();$("#menu-navigation li.is-expanded").removeClass("active");$(this).parents("li.is-expanded").addClass("active");if(checkElement.is("ul")&&checkElement.is(":visible")){$(this).closest("li.is-expanded").removeClass("active");checkElement.slideUp("normal",function(){complete:menuContainerPos(event)})}if(checkElement.is("ul")&&!checkElement.is(":visible")){$(this).parents("li").siblings().find("ul:visible").slideUp("normal",function(){complete:menuContainerPos(event)});checkElement.slideDown("normal",function(){complete:menuContainerPos(event)})}else{$(this).parents("li").children().find("ul:visible").slideUp("normal",function(){complete:menuContainerPos(event)})}if(checkElement.is("ul")){return false}else{return true}});var menuUL=$("#menu-navigation .navigation .menu-container .menu-containerInner ul");if(!$(menuUL).hasClass("js-processed")){$(menuUL).find("> li").append("<hr>").end().prepend("<hr>").addClass("js-processed")}$(window).bind("resize",function(event){menuContainerPos(event)}).resize();$(".menu-container").live("click",function(event){menuContainerPos(event)});var scrollAmount;$(".menu-container").scroll(function(){scrollAmount=$(".menu-container").scrollTop()});$(window).scroll(function(){if($(".menu-container").is(":visible")){setTimeout(function(event){menuContainerPos(event);$(".menu-container").scrollTop(scrollAmount)},500)}});function menuContainerPos(event){$(".menu-container").css({height:"auto"});var menuContainerHeight=$(".menu-container").outerHeight();menuContainerHeight=menuContainerHeight+$(".mobile-top-menu #block-idz-user-login-idz-user-login .language-switcher-locale-url.active>li>ul").outerHeight()+$(".mobile-top-menu #header-user-display .user-login-dropdown.active .user-login-dropdown-inside").outerHeight()+$(".mobile-top-menu #header-user-display .logged-in.active .user-dropdown-inside").outerHeight();var windowHeight=window.innerHeight?window.innerHeight:$(window).height();var menucontainerOffsetTop=$(".menu-container").offset().top-$(window).scrollTop();menuContainerHeightpadd=menuContainerHeight+menucontainerOffsetTop;var scrollreqHeight=windowHeight-menucontainerOffsetTop;var scrollreqHeightHalf=windowHeight-menucontainerOffsetTop/2;if(menuContainerHeightpadd>windowHeight){if(Modernizr.mq("(min-width: 610px)")){$(".menu-container").css({"overflow-x":"hidden"});$("body,html").css("overflow","visible");$(".menu-container").css({"overflow-x":"hidden","overflow-y":"scroll",height:scrollreqHeight+"px"})}else{$(".menu-container").css({"overflow-y":"scroll",height:scrollreqHeightHalf+"px"});if($(".mobile-top-menu #block-idz-user-login-idz-user-login .language-switcher-locale-url.active>li>ul").is(":visible")||$(".mobile-top-menu #header-user-display .user-login-dropdown.active .user-login-dropdown-inside").is(":visible")||$(".mobile-top-menu #header-user-display .logged-in.active .user-dropdown-inside").is(":visible")){$(".menu-container").css({"overflow-y":"scroll",height:scrollreqHeight+"px"});if($(event.target).closest("#menu-navigation li.is-expanded > a").length===0){$(".menu-container").animate({scrollTop:$(".menu-container")[0].scrollHeight},100)}}if($(".menu-container").is(":visible")){$("body,html").css("overflow","hidden")}else{$("body,html").css("overflow","visible")}$(".menu-container").css({"overflow-x":"visible"})}}else{$(".menu-container").css({"overflow-y":"visible",height:"auto"});$("body,html").css("overflow","visible");if(Modernizr.mq("(min-width: 610px)")){$(".menu-container").css({"overflow-x":"hidden"})}else{$(".menu-container").css({"overflow-x":"visible"})}}}$("html").live("touchstart click",function(event){if($(event.target).closest(".menu-icon, .menu-container").length===0){$("#menu-navigation").removeClass("opened");$(".menu-container").hide();$(".menu-container").removeClass("opened");$(".menu-icon").removeClass("active activeborder");menuContainerPos(event)}});$("html").live("click touchstart",function(e){if($(e.target).closest(".showsharewidget, .show_all_widget").length===0){$(".show_all_widget").removeClass("active");$(".showsharewidget").removeClass("social-open")}});$(".checklist, .expandablelist").show();$(".checklist dt, .expandablelist dt").append('<span class="icon-caret-down"></span>');$(".checklist dt").prepend('<span class="icon-correct"></span>');$(".checklist dt, .expandablelist dt").each(function(){var $dt=$(this);$dt.add($dt.next()).wrapAll('<div class="dt-container">')});$(".checklist dt, .expandablelist dt").click(function(){var toggle=$(this).nextUntil("dt");$(this).toggleClass("activetd");toggle.slideToggle()})});var footer_menu=$(".page-top-second-footer .page-top-second-footer-inner ul");$(".page-top-second-footer .is-expanded>a").click(function(e){e.preventDefault()});$(".page-top-second-footer .is-expanded>a").removeAttr("href");var $footer_menu_li=$(".page-top-second-footer .page-top-second-footer-inner>.menu>li");if($footer_menu_li.length){var dynamic_column_class="footer-columns-"+$footer_menu_li.length;$footer_menu_li.addClass(dynamic_column_class);if($footer_menu_li.parent().find(">.footer_logo").length){$footer_menu_li.addClass("has-logo")}}$(footer_menu).addClass("js-processed")}}})(jQuery,Drupal,this,this.document);;
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff ")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,
t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);;
(function($){var pluginName="selectric",_replaceDiacritics=function(s){var k,d="40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g,"\\3$&").split(" ");for(k in d){if(!d.hasOwnProperty(k))return;s=s.toLowerCase().replace(RegExp("["+d[k]+"]","g"),"aeiouncy".charAt(k))}return s},init=function(element,options){var options=$.extend({onOpen:$.noop,onClose:$.noop,onChange:$.noop,maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:true,openOnHover:false,expandToItemText:false,responsive:false,customClass:{prefix:"selectric",postfixes:"Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive",camelCase:true}},options),customClass=options.customClass,postfixes=customClass.postfixes.split(" "),arrClasses=[],currPostfix;if(options.disableOnMobile&&/android|ip(hone|od|ad)/i.test(navigator.userAgent))return;while(currPostfix=postfixes.shift())arrClasses.push(customClass.camelCase?customClass.prefix+currPostfix:(customClass.prefix+currPostfix).replace(/([A-Z])/g,"-$&").toLowerCase());var $original=$(element),_input=$('<input type="text" class="'+arrClasses[0]+'"/>'),$wrapper=$('<div class="'+customClass.prefix+'"><p class="label"/>'+options.arrowButtonMarkup+"</div>"),$items=$('<div class="'+arrClasses[1]+'" tabindex="-1"></div>'),$outerWrapper=$original.data(pluginName,true).wrap("<div>").parent().append($wrapper.add($items).add(_input)),selectItems=[],isOpen,$label=$(".label",$wrapper),$li,bindSufix=".sl",$doc=$(document),$win=$(window),clickBind="click"+bindSufix,resetStr,classOpen=arrClasses[2],classDisabled=arrClasses[3],tempClass=arrClasses[4],selectStr="selected",selected,currValue,itemsHeight,closeTimer,finalWidth,optionsLength,inputEvt="oninput"in _input[0]?"input":"keyup";$original.wrap('<div class="'+arrClasses[5]+'">');function _populate(){var $options=$original.children();_$li="<ul>",selectedIndex=$options.filter(":"+selectStr).index();currValue=selected=~selectedIndex?selectedIndex:0;if(optionsLength=$options.length){$options.each(function(i){var $elm=$(this),optionText=$elm.html(),selectDisabled=$elm.prop("disabled");selectItems[i]={value:$elm.val(),text:optionText,slug:_replaceDiacritics(optionText),disabled:selectDisabled};_$li+='<li class="'+(i==currValue?selectStr:"")+(i==optionsLength-1?" last":"")+(selectDisabled?" disabled":"")+'">'+optionText+"</li>"});$items.html(_$li+"</ul>");$label.html(selectItems[currValue].text)}$wrapper.add($original).off(bindSufix);$outerWrapper.data(pluginName,true).prop("class",[arrClasses[6],$original.prop("class"),classDisabled,options.responsive?arrClasses[8]:""].join(" "));if(!$original.prop("disabled")){$outerWrapper.removeClass(classDisabled).hover(function(){$(this).toggleClass(arrClasses[7])});options.openOnHover&&$wrapper.on("mouseenter"+bindSufix,_open);$wrapper.on(clickBind,function(e){isOpen?_close():_open(e)});function _handleSystemKeys(e){if(/^(9|13|27)$/.test(e.keyCode||e.which)){e.stopPropagation();_select(selected,true)}}_input.on({keypress:_handleSystemKeys,keydown:function(e){_handleSystemKeys(e);clearTimeout(resetStr);resetStr=setTimeout(function(){_input.val("")},options.keySearchTimeout);var key=e.keyCode||e.which;if(key>36&&key<41)_select(key<39?previousEnabledItem():nextEnabledItem())},focusin:function(e){_input.one("blur",function(){_input.blur()});isOpen||_open(e)}}).on(inputEvt,function(){if(_input.val().length){$.each(selectItems,function(i,elm){if(RegExp("^"+_input.val(),"i").test(elm.slug)&&!elm.disabled){_select(i);return false}})}});$li=$("li",$items.removeAttr("style")).click(function(){_select($(this).index(),true);return false})}else _input.prop("disabled",true)}_populate();function _calculateOptionsDimensions(){var visibleParent=$items.closest(":visible").children(":hidden"),maxHeight=options.maxHeight;visibleParent.addClass(tempClass);var itemsWidth=$items.outerWidth(),wrapperWidth=$wrapper.outerWidth()-(itemsWidth-$items.width());if(!options.expandToItemText||wrapperWidth>itemsWidth)finalWidth=wrapperWidth;else{$items.css("overflow","scroll");$outerWrapper.width(9e4);finalWidth=itemsWidth;$items.css("overflow","");$outerWrapper.width("")}$items.width(finalWidth).height()>maxHeight&&$items.height(maxHeight);visibleParent.removeClass(tempClass)}function _open(e){e.preventDefault();e.stopPropagation();_calculateOptionsDimensions();$("."+classOpen).removeClass(classOpen);isOpen=true;itemsHeight=$items.outerHeight();_isInViewport();_input.val("").is(":focus")||_input.focus();$doc.on(clickBind,_close);if(options.openOnHover){clearTimeout(closeTimer);$outerWrapper.one("mouseleave"+bindSufix,function(){closeTimer=setTimeout(_close,500)})}$outerWrapper.addClass(classOpen);_detectItemVisibility(selected);options.onOpen(element)}function _isInViewport(){if(isOpen){_calculateOptionsDimensions();$items.css("top",$outerWrapper.offset().top+$outerWrapper.outerHeight()+itemsHeight>$win.scrollTop()+$win.height()?-itemsHeight:"");setTimeout(_isInViewport,100)}}function _close(e){if(!e&&currValue!=selected){var text=selectItems[selected].text;$original.prop("selectedIndex",currValue=selected).data("value",text).trigger("change",[text,currValue]);options.onChange(element);$label.html(text)}$doc.off(bindSufix);$outerWrapper.removeClass(classOpen);isOpen=false;options.onClose(element)}function _select(index,close){if(!selectItems[selected=index].disabled){$li.removeClass(selectStr).eq(index).addClass(selectStr);_detectItemVisibility(index);close&&_close()}}function _detectItemVisibility(index){var liHeight=$li.eq(index).outerHeight(),liTop=$li[index].offsetTop,itemsScrollTop=$items.scrollTop(),scrollT=liTop+liHeight*2;$items.scrollTop(scrollT>itemsScrollTop+itemsHeight?scrollT-itemsHeight:liTop-liHeight<itemsScrollTop?liTop-liHeight:itemsScrollTop)}function nextEnabledItem(next){if(selectItems[next=(selected+1)%optionsLength].disabled)while(selectItems[next=(next+1)%optionsLength].disabled){}return next}function previousEnabledItem(previous){if(selectItems[previous=(selected>0?selected:optionsLength)-1].disabled)while(selectItems[previous=(previous>0?previous:optionsLength)-1].disabled){}return previous}$original.on({refresh:_populate,destroy:function(){$items.add($wrapper).remove();$original.removeData(pluginName).removeData("value").off(bindSufix+" refresh destroy open close").unwrap().unwrap()},open:_open,close:_close})};$.fn[pluginName]=function(args,options){return this.each(function(){if(!$(this).data(pluginName))init(this,args||options);else if(""+args===args)$(this).trigger(args)})}})(jQuery);;
(function($){function getViewportHeight(){var height=window.innerHeight;var mode=document.compatMode;if(mode||!$.support.boxModel){height=mode=="CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight}return height}$(window).scroll(function(){var vpH=getViewportHeight(),scrolltop=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,elems=[];$.each($.cache,function(){if(this.events&&this.events.inview){elems.push(this.handle.elem)}});if(elems.length){$(elems).each(function(){var $el=$(this),top=$el.offset().top,height=$el.height(),inview=$el.data("inview")||false;if(scrolltop>top+height||scrolltop+vpH<top){if(inview){$el.data("inview",false);$el.trigger("inview",[false])}}else if(scrolltop<top+height){if(!inview){$el.data("inview",true);$el.trigger("inview",[true])}}})}});$(function(){$(window).scroll()})})(jQuery);;
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date-d,n=arguments;function l(){d=+new Date;j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);(function($){var defaults={prefix:"js/",breakpoints:{"default":{min:1e3,max:9999,load:false}}};var opts;$.BreakPoint=function(options){opts=$.extend(defaults,options);$(window).resize($.debounce(250,false,function(e){$.fn.bpCallBack()}));$.fn.bpCallBack()};$.fn.bpCallBack=function(){var w=$(window).width();for(i in opts.breakpoints){var bp=opts.breakpoints[i];var min=bp.min;var max=bp.max;if(min==undefined)min=0;if(max==undefined)max=9999;if(w>=min&&w<=max){var evnt=jQuery.Event("breakpoint");evnt.breakpoint=i;$(window).trigger(evnt);var file=opts.prefix+i+".js";if(bp.load)$.getScript(file)}}}})(jQuery);;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));;
(function(){"use strict";var keyCounter=0;var allWaypoints={};function Waypoint(options){if(!options){throw new Error("No options passed to Waypoint constructor")}if(!options.element){throw new Error("No element option passed to Waypoint constructor")}if(!options.handler){throw new Error("No handler option passed to Waypoint constructor")}this.key="waypoint-"+keyCounter;this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options);this.element=this.options.element;this.adapter=new Waypoint.Adapter(this.element);this.callback=options.handler;this.axis=this.options.horizontal?"horizontal":"vertical";this.enabled=this.options.enabled;this.triggerPoint=null;this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis});this.context=Waypoint.Context.findOrCreateByElement(this.options.context);if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}this.group.add(this);this.context.add(this);allWaypoints[this.key]=this;keyCounter+=1}Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)};Waypoint.prototype.trigger=function(args){if(!this.enabled){return}if(this.callback){this.callback.apply(this,args)}};Waypoint.prototype.destroy=function(){this.context.remove(this);this.group.remove(this);delete allWaypoints[this.key]};Waypoint.prototype.disable=function(){this.enabled=false;return this};Waypoint.prototype.enable=function(){this.context.refresh();this.enabled=true;return this};Waypoint.prototype.next=function(){return this.group.next(this)};Waypoint.prototype.previous=function(){return this.group.previous(this)};Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}};Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")};Waypoint.disableAll=function(){Waypoint.invokeAll("disable")};Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints){allWaypoints[waypointKey].enabled=true}return this};Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()};Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight};Waypoint.viewportWidth=function(){return document.documentElement.clientWidth};Waypoint.adapters=[];Waypoint.defaults={context:window,continuous:true,enabled:true,group:"default",horizontal:false,offset:0};Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}};window.Waypoint=Waypoint})();(function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}var keyCounter=0;var contexts={};var Waypoint=window.Waypoint;var oldWindowLoad=window.onload;function Context(element){this.element=element;this.Adapter=Waypoint.Adapter;this.adapter=new this.Adapter(element);this.key="waypoint-context-"+keyCounter;this.didScroll=false;this.didResize=false;this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()};this.waypoints={vertical:{},horizontal:{}};element.waypointContextKey=this.key;contexts[element.waypointContextKey]=this;keyCounter+=1;if(!Waypoint.windowContext){Waypoint.windowContext=true;Waypoint.windowContext=new Context(window)}this.createThrottledScrollHandler();this.createThrottledResizeHandler()}Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint;this.refresh()};Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal);var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical);var isWindow=this.element==this.element.window;if(horizontalEmpty&&verticalEmpty&&!isWindow){this.adapter.off(".waypoints");delete contexts[this.key]}};Context.prototype.createThrottledResizeHandler=function(){var self=this;function resizeHandler(){self.handleResize();self.didResize=false}this.adapter.on("resize.waypoints",function(){if(!self.didResize){self.didResize=true;Waypoint.requestAnimationFrame(resizeHandler)}})};Context.prototype.createThrottledScrollHandler=function(){var self=this;function scrollHandler(){self.handleScroll();self.didScroll=false}this.adapter.on("scroll.waypoints",function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=true;Waypoint.requestAnimationFrame(scrollHandler)}})};Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()};Context.prototype.handleScroll=function(){var triggeredGroups={};var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey];var isForward=axis.newScroll>axis.oldScroll;var direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(waypoint.triggerPoint===null){continue}var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint;var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint;var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint;var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;if(crossedForward||crossedBackward){waypoint.queueTrigger(direction);triggeredGroups[waypoint.group.id]=waypoint.group}}}for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}};Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}return this.adapter.innerHeight()};Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key];this.checkEmpty()};Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}return this.adapter.innerWidth()};Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}};Context.prototype.refresh=function(){var isWindow=this.element==this.element.window;var contextOffset=isWindow?undefined:this.adapter.offset();var triggeredGroups={};var axes;this.handleScroll();axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];var adjustment=waypoint.options.offset;var oldTriggerPoint=waypoint.triggerPoint;var elementOffset=0;var freshWaypoint=oldTriggerPoint==null;var contextModifier,wasBeforeScroll,nowAfterScroll;var triggeredBackward,triggeredForward;if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}if(typeof adjustment==="function"){adjustment=adjustment.apply(waypoint)}else if(typeof adjustment==="string"){adjustment=parseFloat(adjustment);if(waypoint.options.offset.indexOf("%")>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}contextModifier=axis.contextScroll-axis.contextOffset;waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment);wasBeforeScroll=oldTriggerPoint<axis.oldScroll;nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll;triggeredBackward=wasBeforeScroll&&nowAfterScroll;triggeredForward=!wasBeforeScroll&&!nowAfterScroll;if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward);triggeredGroups[waypoint.group.id]=waypoint.group}else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward);triggeredGroups[waypoint.group.id]=waypoint.group}else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward);triggeredGroups[waypoint.group.id]=waypoint.group}}}Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}});return this};Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)};Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}};Context.findByElement=function(element){return contexts[element.waypointContextKey]};window.onload=function(){if(oldWindowLoad){oldWindowLoad()}Context.refreshAll()};Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)};Waypoint.Context=Context})();(function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}var groups={vertical:{},horizontal:{}};var Waypoint=window.Waypoint;function Group(options){this.name=options.name;this.axis=options.axis;this.id=this.name+"-"+this.axis;this.waypoints=[];this.clearTriggerQueues();groups[this.axis][this.name]=this}Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)};Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}};Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction];var reverse=direction==="up"||direction==="left";waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}this.clearTriggerQueues()};Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);var isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]};Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null};Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)};Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);if(index>-1){this.waypoints.splice(index,1)}};Group.prototype.first=function(){return this.waypoints[0]};Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]};Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)};Waypoint.Group=Group})();(function(){"use strict";var $=window.jQuery;var Waypoint=window.Waypoint;function JQueryAdapter(element){this.$element=$(element)}$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}});$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]});Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter});Waypoint.Adapter=JQueryAdapter})();(function(){"use strict";var Waypoint=window.Waypoint;function createExtension(framework){return function(){var waypoints=[];var overrides=arguments[0];if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1]);overrides.handler=arguments[0]}this.each(function(){var options=framework.extend({},overrides,{element:this});if(typeof options.context==="string"){options.context=framework(this).closest(options.context)[0]}waypoints.push(new Waypoint(options))});return waypoints}}if(window.jQuery){window.jQuery.fn.waypoint=createExtension(window.jQuery)}if(window.Zepto){window.Zepto.fn.waypoint=createExtension(window.Zepto)}})();;
var jQuery110=jQuery.noConflict(true);;
window.Modernizr=function(window,document,undefined){var version="2.7.1",Modernizr={},enableClasses=true,docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement("input"),smile=":)",toString={}.toString,prefixes=" -webkit- -moz- -o- -ms- ".split(" "),omPrefixes="Webkit Moz O ms",cssomPrefixes=omPrefixes.split(" "),domPrefixes=omPrefixes.toLowerCase().split(" "),ns={svg:"http://www.w3.org/2000/svg"},tests={},inputs={},attrs={},classes=[],slice=classes.slice,featureName,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10)){while(nodes--){node=document.createElement("div");node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node)}}style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join("");div.id=mod;(body?div:fakeBody).innerHTML+=style;fakeBody.appendChild(div);if(!body){fakeBody.style.background="";fakeBody.style.overflow="hidden";docOverflow=docElement.style.overflow;docElement.style.overflow="hidden";docElement.appendChild(fakeBody)}ret=callback(div,rule);if(!body){fakeBody.parentNode.removeChild(fakeBody);docElement.style.overflow=docOverflow}else{div.parentNode.removeChild(div)}return!!ret},testMediaQuery=function(mq){var matchMedia=window.matchMedia||window.msMatchMedia;if(matchMedia){return matchMedia(mq).matches}var bool;injectElementWithStyles("@media "+mq+" { #"+mod+" { position: absolute; } }",function(node){bool=(window.getComputedStyle?getComputedStyle(node,null):node.currentStyle)["position"]=="absolute"});return bool},isEventSupported=function(){var TAGNAMES={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};function isEventSupported(eventName,element){element=element||document.createElement(TAGNAMES[eventName]||"div");eventName="on"+eventName;var isSupported=eventName in element;if(!isSupported){if(!element.setAttribute){element=document.createElement("div")}if(element.setAttribute&&element.removeAttribute){element.setAttribute(eventName,"");isSupported=is(element[eventName],"function");if(!is(element[eventName],"undefined")){element[eventName]=undefined}element.removeAttribute(eventName)}}element=null;return isSupported}return isEventSupported}(),_hasOwnProperty={}.hasOwnProperty,hasOwnProp;if(!is(_hasOwnProperty,"undefined")&&!is(_hasOwnProperty.call,"undefined")){hasOwnProp=function(object,property){return _hasOwnProperty.call(object,property)}}else{hasOwnProp=function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}}if(!Function.prototype.bind){Function.prototype.bind=function bind(that){var target=this;if(typeof target!="function"){throw new TypeError}var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F;var result=target.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result){return result}return self}else{return target.apply(that,args.concat(slice.call(arguments)))}};return bound}}function setCss(str){mStyle.cssText=str}function setCssAll(str1,str2){return setCss(prefixes.join(str1+";")+(str2||""))}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined){return prefixed=="pfx"?prop:true}}return false}function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined){if(elem===false)return props[i];if(is(item,"function")){return item.bind(elem||obj)}return item}}return false}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");if(is(prefixed,"string")||is(prefixed,"undefined")){return testProps(props,prefixed)}else{props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" ");return testDOMProps(props,prefixed,elem)}}tests["flexbox"]=function(){return testPropsAll("flexWrap")};tests["flexboxlegacy"]=function(){return testPropsAll("boxDirection")};tests["canvas"]=function(){var elem=document.createElement("canvas");return!!(elem.getContext&&elem.getContext("2d"))};tests["canvastext"]=function(){return!!(Modernizr["canvas"]&&is(document.createElement("canvas").getContext("2d").fillText,"function"))};tests["webgl"]=function(){return!!window.WebGLRenderingContext};tests["touch"]=function(){var bool;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch){bool=true}else{injectElementWithStyles(["@media (",prefixes.join("touch-enabled),("),mod,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(node){bool=node.offsetTop===9})}return bool};tests["geolocation"]=function(){return"geolocation"in navigator};tests["postmessage"]=function(){return!!window.postMessage};tests["websqldatabase"]=function(){return!!window.openDatabase};tests["indexedDB"]=function(){return!!testPropsAll("indexedDB",window)};tests["hashchange"]=function(){return isEventSupported("hashchange",window)&&(document.documentMode===undefined||document.documentMode>7)};tests["history"]=function(){return!!(window.history&&history.pushState)};tests["draganddrop"]=function(){var div=document.createElement("div");return"draggable"in div||"ondragstart"in div&&"ondrop"in div};tests["websockets"]=function(){return"WebSocket"in window||"MozWebSocket"in window};tests["rgba"]=function(){setCss("background-color:rgba(150,255,150,.5)");return contains(mStyle.backgroundColor,"rgba")};tests["hsla"]=function(){setCss("background-color:hsla(120,40%,100%,.5)");return contains(mStyle.backgroundColor,"rgba")||contains(mStyle.backgroundColor,"hsla")};tests["multiplebgs"]=function(){setCss("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(mStyle.background)};tests["backgroundsize"]=function(){return testPropsAll("backgroundSize")};tests["borderimage"]=function(){return testPropsAll("borderImage")};tests["borderradius"]=function(){return testPropsAll("borderRadius")};tests["boxshadow"]=function(){return testPropsAll("boxShadow")};tests["textshadow"]=function(){return document.createElement("div").style.textShadow===""};tests["opacity"]=function(){setCssAll("opacity:.55");return/^0.55$/.test(mStyle.opacity)};tests["cssanimations"]=function(){return testPropsAll("animationName")};tests["csscolumns"]=function(){return testPropsAll("columnCount")};tests["cssgradients"]=function(){var str1="background-image:",str2="gradient(linear,left top,right bottom,from(#9f9),to(white));",str3="linear-gradient(left top,#9f9, white);";setCss((str1+"-webkit- ".split(" ").join(str2+str1)+prefixes.join(str3+str1)).slice(0,-str1.length));return contains(mStyle.backgroundImage,"gradient")};tests["cssreflections"]=function(){return testPropsAll("boxReflect")};tests["csstransforms"]=function(){return!!testPropsAll("transform")};tests["csstransforms3d"]=function(){var ret=!!testPropsAll("perspective");if(ret&&"webkitPerspective"in docElement.style){injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(node,rule){ret=node.offsetLeft===9&&node.offsetHeight===3})}return ret};tests["csstransitions"]=function(){return testPropsAll("transition")};tests["fontface"]=function(){var bool;injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){var style=document.getElementById("smodernizr"),sheet=style.sheet||style.styleSheet,cssText=sheet?sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||"":"";bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(" ")[0])===0});return bool};tests["generatedcontent"]=function(){var bool;injectElementWithStyles(["#",mod,"{font:0/0 a}#",mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(""),function(node){bool=node.offsetHeight>=3});return bool};tests["video"]=function(){var elem=document.createElement("video"),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(e){}return bool};tests["audio"]=function(){var elem=document.createElement("audio"),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");bool.mp3=elem.canPlayType("audio/mpeg;").replace(/^no$/,"");bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");bool.m4a=(elem.canPlayType("audio/x-m4a;")||elem.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(e){}return bool};tests["localstorage"]=function(){try{localStorage.setItem(mod,mod);localStorage.removeItem(mod);return true}catch(e){return false}};tests["sessionstorage"]=function(){try{sessionStorage.setItem(mod,mod);sessionStorage.removeItem(mod);return true}catch(e){return false}};tests["webworkers"]=function(){return!!window.Worker};tests["applicationcache"]=function(){return!!window.applicationCache};tests["svg"]=function(){return!!document.createElementNS&&!!document.createElementNS(ns.svg,"svg").createSVGRect};tests["inlinesvg"]=function(){var div=document.createElement("div");div.innerHTML="<svg/>";return(div.firstChild&&div.firstChild.namespaceURI)==ns.svg};tests["smil"]=function(){return!!document.createElementNS&&/SVGAnimate/.test(toString.call(document.createElementNS(ns.svg,"animate")))};tests["svgclippaths"]=function(){return!!document.createElementNS&&/SVGClipPath/.test(toString.call(document.createElementNS(ns.svg,"clipPath")))};function webforms(){Modernizr["input"]=function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i]in inputElem)}if(attrs.list){attrs.list=!!(document.createElement("datalist")&&window.HTMLDataListElement)}return attrs}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));Modernizr["inputtypes"]=function(props){for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){inputElem.setAttribute("type",inputElemType=props[i]);bool=inputElem.type!=="text";if(bool){inputElem.value=smile;inputElem.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=="textfield"&&inputElem.offsetHeight!==0;docElement.removeChild(inputElem)}else if(/^(search|tel)$/.test(inputElemType)){}else if(/^(url|email)$/.test(inputElemType)){bool=inputElem.checkValidity&&inputElem.checkValidity()===false}else{bool=inputElem.value!=smile}}inputs[props[i]]=!!bool}return inputs}("search tel url email datetime date month week time datetime-local number range color".split(" "))}for(var feature in tests){if(hasOwnProp(tests,feature)){featureName=feature.toLowerCase();Modernizr[featureName]=tests[feature]();classes.push((Modernizr[featureName]?"":"no-")+featureName)}}Modernizr.input||webforms();Modernizr.addTest=function(feature,test){if(typeof feature=="object"){for(var key in feature){if(hasOwnProp(feature,key)){Modernizr.addTest(key,feature[key])}}}else{feature=feature.toLowerCase();if(Modernizr[feature]!==undefined){return Modernizr}test=typeof test=="function"?test():test;if(typeof enableClasses!=="undefined"&&enableClasses){docElement.className+=" "+(test?"":"no-")+feature}Modernizr[feature]=test}return Modernizr};setCss("");modElem=inputElem=null;(function(window,document){var version="3.7.0";var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando="_html5shiv";var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>";supportsHtml5Styles="hidden"in a;supportsUnknownElements=a.childNodes.length==1||function(){document.createElement("a");var frag=document.createDocumentFragment();return typeof frag.cloneNode=="undefined"||typeof frag.createDocumentFragment=="undefined"||typeof frag.createElement=="undefined"}()}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true}})();function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement("p"),parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;p.innerHTML="x<style>"+cssText+"</style>";return parent.insertBefore(p.lastChild,parent.firstChild)}function getElements(){var elements=html5.elements;return typeof elements=="string"?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data}return data}function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document}if(supportsUnknownElements){return ownerDocument.createElement(nodeName)}if(!data){data=getExpandoData(ownerDocument)}var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode()}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode()}else{node=data.createElem(nodeName)}return node.canHaveChildren&&!reSkip.test(nodeName)&&!node.tagUrn?data.frag.appendChild(node):node}function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document}if(supportsUnknownElements){return ownerDocument.createDocumentFragment()}data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i])}return clone}function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag()}ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName)}return createElement(nodeName,ownerDocument,data)};ownerDocument.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+getElements().join().replace(/[\w\-]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document}var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}"+"mark{background:#FF0;color:#000}"+"template{display:none}")}if(!supportsUnknownElements){shivMethods(ownerDocument,data)}return ownerDocument}var html5={elements:options.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:version,shivCSS:options.shivCSS!==false,supportsUnknownElements:supportsUnknownElements,shivMethods:options.shivMethods!==false,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document)})(this,document);Modernizr._version=version;Modernizr._prefixes=prefixes;Modernizr._domPrefixes=domPrefixes;Modernizr._cssomPrefixes=cssomPrefixes;Modernizr.mq=testMediaQuery;Modernizr.hasEvent=isEventSupported;Modernizr.testProp=function(prop){return testProps([prop])};Modernizr.testAllProps=testPropsAll;Modernizr.testStyles=injectElementWithStyles;Modernizr.prefixed=function(prop,obj,elem){if(!obj){return testPropsAll(prop,"pfx")}else{return testPropsAll(prop,obj,elem)}};docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(enableClasses?" js "+classes.join(" "):"");return Modernizr}(this,this.document);;
if(window.jQuery110){!function($){var debug=window.location.hostname!=="software.intel.com";var result={};var hex=[];if(!window.Zero){Zero={}}Zero.behaviors={init:function(){Zero.polyfill.init();$(".load-links").on("change",Zero.handlers.selectric.loadLinks);$(".block-social-block .twitter > a, .social-share .twitter > a").click(Zero.handlers.twitter);$(".tweetable").each(function(){var tweet=$(this),tweetable=tweet.text(),result=tweetable,link=$(location).attr("href");var a=$("<a />");a.attr("href","https://twitter.com/intent/tweet?text="+result);a.text(tweetable);a.attr("class","tweet-link");a.attr("data-hashtags","IntelSoftware");a.attr("data-url",link);a.attr("data-text",'"'+result+'"');a.attr("target","_blank");$('<span class="twitter-box-arrow"></span>').insertAfter(a);$(this).html(a)});$(".tweet-link").click(Zero.handlers.twitter)}};Zero.utils={encoder:{_getHex:function(char){if(hex&&hex.length===0){for(var c=0;c<255;c++){if(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122){hex[c]=null}else{hex[c]=c.toString(16)}}}return hex[char]},getHexForNonAlphanumeric:function(c){if(c.charCodeAt(0)<256){return this._getHex(c.charCodeAt(0))}return c.charCodeAt(0).toString(16)},encodeForJavascript:function(unsafe){var encoded="";for(var i=0;i<unsafe.length;i++){var ch=unsafe.charAt(i);var hex=this.getHexForNonAlphanumeric(ch);if(hex===null){encoded+=ch}else{var _hex=ch.charCodeAt(0).toString(16);var _pad="";if(ch.charCodeAt(0)<256){_pad="00".substr(_hex.length);encoded+="\\x"+_pad+_hex.toUpperCase()}else{_pad="0000".substr(_hex.length);encoded+="\\u"+_pad+_hex.toUpperCase()}}}if(debug){console.log("unsafe value was encoded as: "+encoded)}return encoded}},bitly:function(url){return $.Deferred(function(deferred){if(result.data){this.resolve(result.data)}else{if(debug){this.resolve(url);return}$.ajax("https://api-ssl.bitly.com/v3/shorten",{type:"GET",data:{login:"tmanders",apiKey:"R_28e94ea6bbe041e6af55c2d4de8fcbae",uri:url},dataType:"json"}).done(function(response,textStatus,jqXHR){if(response&&response.status_txt==="OK"&&response.data.url){deferred.resolve(response.data.url);return}deferred.reject(url)}).fail(function(jqXHR,textStatus,error){deferred.reject(url)})}}).promise()}};Zero.actions={share:function(handle,text,hashtags){if(handle&&result.data){handle.location.href="https://twitter.com/intent/tweet?text="+encodeURIComponent(text)+"&url="+encodeURIComponent(result.data)+"&hashtags="+encodeURIComponent(hashtags)}}};Zero.handlers={selectric:{loadLinks:function(e){if(!e||!e.target||!$(e.target).is("select")){return true}var option=$("option:selected",e.target);if(typeof $(option).val()!=="string"){return true}var url=$.trim($(option).val());if(url===""){return true}if(url.indexOf("://")>-1&&2 in url.split("/")){if(!url.split("/")[2].endsWith("intel.com")){window.open(url,"_blank","");return false}}window.location.href=url;return false}},twitter:function(e){e.preventDefault();var self=this;var handle=window.open("about:blank","intent","width=550,height=420,scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=0,left=0");Zero.utils.bitly($(this).attr("data-url")).always(function(url){result.data=url;Zero.actions.share(handle,$(self).attr("data-text"),$(self).attr("data-hashtags"))})}};Zero.polyfill={init:function(){if(!String.prototype.endsWith){String.prototype.endsWith=function(searchString,position){var subjectString=this.toString();if(typeof position!=="number"||!isFinite(position)||Math.floor(position)!==position||position>subjectString.length){position=subjectString.length}position-=searchString.length;var lastIndex=subjectString.indexOf(searchString,position);return lastIndex!==-1&&lastIndex===position}}}};$(document).ready(function(){Zero.behaviors.init()})}(jQuery110)};
(function($){zero={};zero.behaviors={brightcove:{resize:function(){$('.playerbox video[id*="video_bc_"]').each(function(){var vjs_dock_self_span=$(this).siblings(".vjs-dock-shelf").find("span");$(this).width()<=330?vjs_dock_self_span.hide():vjs_dock_self_span.show()})},modal_active_play:function(){var active_video_bc=$('.owl-carousel .owl-item.active .brightcove-wrapper video[id*="video_bc"]');if(active_video_bc.length===1)videojs("#"+active_video_bc.attr("id")).play()},modal_active_pause:function(){var active_video_bc=$('.owl-carousel .owl-item.active .brightcove-wrapper video[id*="video_bc"]');if(active_video_bc.length===1)videojs("#"+active_video_bc.attr("id")).pause()}}};var nid=0;var current_time=0;var send_current_time=15;var isInt=function(n){return Number(n)===n&&n%1===0};var save_current_time=function(nid,current_time){var urlDinamic="/bds/track/"+nid+"/"+current_time;if(current_time>0){var request=$.ajax({type:"POST",cache:false,url:urlDinamic})}};var listen_time_update=function(){var video=document.getElementById($(".playerbox").find("video").attr("id"));current_time=Math.round(video.currentTime);if(current_time==Math.round(video.duration)||current_time>0&&isInt(current_time/send_current_time)){save_current_time(nid,current_time)}};$(window).on("beforeunload",function(){if($("body").hasClass("logged-in")&&$("body").hasClass("node-type-video-series")||$("body").hasClass("logged-in")&&$("body").hasClass("node-type-bds-video")){save_current_time(nid,current_time)}});$(window).load(function(){if($("body").hasClass("logged-in")&&$("body").hasClass("node-type-video-series")||$("body").hasClass("logged-in")&&$("body").hasClass("node-type-bds-video")){nid=$("#brightcove-container").attr("data-nid");if(nid!=null||nid!="undefined"){var PlayerID=$(".playerbox").find("video").attr("id");var videoPlayer=document.getElementById(PlayerID);videoPlayer.ontimeupdate=function(){listen_time_update()};videoPlayer.addEventListener("play",function(){save_current_time(nid,current_time)});videoPlayer.addEventListener("pause",function(){save_current_time(nid,current_time)})}}var headerH=$("#header").outerHeight();var adminmneuH=$("#admin-menu").outerHeight();var total_headerH=headerH+adminmneuH;var windowH=document.documentElement.clientHeight;$(window).scroll(function(){var current_scroll_header=$(window).scrollTop();if(total_headerH>=current_scroll_header){$("#menu-navigation").removeClass("fixed-header");$("body").removeClass("fixed-body-header");$("#navigation-right .shareWrapper").hide()}else{$("#menu-navigation").addClass("fixed-header");$("body").addClass("fixed-body-header");$("#navigation-right .shareWrapper").show()}$("#inpage-navigation").trigger("adjust-position")});var scroll_on_load=$(window).scrollTop();if(scroll_on_load>0){if(total_headerH>=scroll_on_load){$("#menu-navigation").removeClass("fixed-header");$("body").removeClass("fixed-body-header");$("#navigation-right .shareWrapper").hide()}else{$("#menu-navigation").addClass("fixed-header");$("body").addClass("fixed-body-header");$("#navigation-right .shareWrapper").show();$("#inpage-navigation").trigger("adjust-position")}}var borderheight=function(){var current_scroll_page=$(window).scrollTop();if(current_scroll_page==0){$(".menu-container").css("border-top-width",total_headerH+"px")}else{if(total_headerH>=current_scroll_page){$(".menu-container").css("border-top-width",total_headerH-current_scroll_page+"px")}else{$(".menu-container").css("border-top-width",0)}}};var header_titleH=$("span.zonetitle").outerHeight();var header_subTitleH=$("h4.page__title").outerHeight();var total_links_paaddingTop=header_titleH+header_subTitleH+30;var $hamburger_menu=$(".hamburger-menu");if($hamburger_menu.length>0&&$(".menu-containerInner").length>0){$(".menu-containerInner").append($hamburger_menu)}var $sticky_share_items=$(".shareWrapper");if($sticky_share_items.length>0){$sticky_share_items.clone(true).appendTo("#navigation-right")}var $sticky_items=$(".nav-sticky");if($sticky_items.length>0){$sticky_items.map(function(key,sticky_item){var sticky_id="sticky-button-"+makeid();$(sticky_item).clone().removeClass("nav-sticky").addClass(sticky_id).appendTo("#navigation-right").hide();$(sticky_item).attr("data-sticky-id","."+sticky_id)})}function sticky_relocate(){if($sticky_items&&parseInt($sticky_items.length,10)>0){var window_top=$(window).scrollTop()+$("#menu-navigation").outerHeight()-$(".nav-sticky").outerHeight();var div_top=$sticky_items.offset().top;if(window_top>div_top){$sticky_items.each(function(){$($(this).data("sticky-id"),"#menu-navigation").show()})}}}sticky_relocate();$(window).scroll(function(){sticky_relocate()});$("#block-idz-zero-idz-zero-share-widget-block").clone(true).attr("id","block-idz-zero-idz-zero-share-widget-block-clone").addClass("cloned-share-widget").prependTo("#navfooter");$("#block-idz-zero-idz-zero-sticky-button-widget-block").clone(true).attr("id","block-idz-zero-idz-zero-sticky-button-widget-block-clone").addClass("cloned-sticky-button-widget").prependTo("#navfooter");$("#block-idz-zero-idz-zero-cta-button-widget-block").clone(true).attr("id","block-idz-zero-idz-zero-cta-button-widget-block-clone").addClass("cloned-cta-button-widget").prependTo("#navfooter");$(".showsharewidget").click(function(){$(".show_all_widget").toggleClass("active");$(".showsharewidget").toggleClass("social-open");var header_show_all_widget="#block-idz-zero-idz-zero-share-widget-block .show_all_widget";if($(header_show_all_widget).css("position")=="absolute"){var width_show_all_widget=(parseInt($(header_show_all_widget).css("width"))+2)*-1;$(header_show_all_widget).css("left",width_show_all_widget+"px")}});jQuery("#navigation-right .shareWrapper").hide();jQuery(".intel-container .pane-content").matchHeight();jQuery(".page-top-second-footer .page-top-second-footer-inner >ul >li").matchHeight();$(".image-on-right").each(function(){if($(this).hasClass("inside-fifty-fifty")||$(this).hasClass("inside-fourty-sixty")||$(this).hasClass("inside-thirty-seventy")||$(this).hasClass("inside-twenty-eighty")||$(this).hasClass("inside-ten-ninety")||$(this).hasClass("inside-sixty-fourty")||$(this).hasClass("inside-seventy-thirty")||$(this).hasClass("inside-eighty-twenty")||$(this).hasClass("inside-ninety-ten")){if($(this).parent().hasClass("pane-block")){var cloneTextBean=$(this).find(".field-name-field-text-bean").clone(true).addClass("field-name-field-text-bean-clone");$(this).find(".content").append(cloneTextBean)}if($(this).parent().hasClass("pane-node")){var cloneTextNode=$(this).find(".field-name-field-text").clone(true).addClass("field-name-field-text-clone");$(this).find(".content article").append(cloneTextNode)}}});if($(".episode-list").length){jQuery(".episode-list ul li").matchHeight("remove")}if($(".episode-thumb-title").length){jQuery(".episode-thumb-title ul li").matchHeight("remove")}if($(".node-type-video-series").length){videoseriesHeight()}if($(".gallerylite-rows-wrapper").length){$(".gallerylite-rows-wrapper .gallerlite-slide").show();jQuery(".gallerylite-rows-wrapper").find(".gallerylite-slide-img").matchHeight();jQuery(".gallerylite-rows-wrapper").find(".field-item").matchHeight()}$(".video-series-scroll").show();var owl=$(".video-series-scroll"),owlOptions={itemsCustom:[[0,2],[610,2],[768,3],[900,4],[1200,5],[1500,6],[1750,7],[2050,8],[2250,9],[2600,10],[2800,11]],pagination:false,responsiveRefreshRate:100,rewindNav:false,scrollPerPage:true,afterAction:function(){$(".video-series-next-btn").removeClass("disabled");$(".video-series-prev-btn").removeClass("disabled");if(this.currentItem==0){$(".video-series-prev-btn").addClass("disabled")}if(this.currentItem==this.maximumItem){$(".video-series-next-btn").addClass("disabled")}},afterInit:function(){var itemCount=jQuery(".video-series-scroll li").length;getnextprevButton(itemCount);centerItems(this)},afterUpdate:function(){var itemCount=jQuery(".video-series-scroll .owl-item").length;getnextprevButton(itemCount);centerItems(this)}};function centerItems(that){setTimeout(function(){var parent=that.$elem.parent(),parentWidth=parent.outerWidth(),children=that.$owlWrapper.children(),itemsWidth=0,paddingLeft=0;if(children.css("float")==="left"){children.each(function(){itemsWidth+=$(this).width()});if(itemsWidth<parentWidth){paddingLeft=(parentWidth-itemsWidth)/2}}parent.css("padding-left",paddingLeft)})}function getnextprevButton(itemCount){var width_count=[[2,610,767],[3,768,899],[4,900,1199],[5,1200,1499],[6,1500,1749],[7,1750,2049],[8,2050,2249],[9,2250,2599],[10,2600,2799]];if(Modernizr.mq("(min-width: 2800px)")&&itemCount>11||get_modernizr_value(width_count,itemCount)){$(".video-series-prev-btn, .video-series-next-btn").show()}else{$(".video-series-prev-btn, .video-series-next-btn").hide()}}function get_modernizr_value(width_count,itemCount){var checkval=0;$.each(width_count,function(key,value){if($(window).width()>=value[1]&&$(window).width()<=value[2]&&itemCount>value[0]){checkval=1}});if(checkval){return true}}if(Modernizr.mq("(min-width: 611px)")){if($(".video-series-scroll li").length>1){var owlActive=owl.owlCarousel(owlOptions)}}else{owl.addClass("off")}$(window).resize(function(){if(Modernizr.mq("(min-width: 611px)")){if($(".video-series-scroll").hasClass("off")){owl.removeClass("off")}if($(".video-series-scroll li").length>1){owl.owlCarousel(owlOptions);var owlActive=owl.data("owlCarousel").reinit()}}else{if(!$(".video-series-scroll").hasClass("off")){owl.addClass("off");if($(".owl-carousel").length){if(owl.data("owlCarousel")!==null){owl.data("owlCarousel").destroy()}owl.removeClass("owl-carousel")}owl.find(".owl-wrapper").children(":eq(0)").unwrap()}}if($(".node-type-video-series").length){videoseriesHeight()}$("#inpage-navigation").trigger("adjust-position");$(".show_all_widget").removeClass("active");$(".showsharewidget").removeClass("social-open");if($(".mini-image-slide").length>0){$(".mini-image-slide").each(function(){$(this).width($(this).parents(".slides").width())})}zero.behaviors.brightcove.resize()});$(".video-series-next-btn").click(function(){owl.trigger("owl.next")});$(".video-series-prev-btn").click(function(){owl.trigger("owl.prev")});if($(".owl-carousel").length>0){var owl_loaded=$(".owl-carousel").data("owlCarousel");owl_loaded.$owlItems.each(function(index){if($(this).find(".current-playing").length>0){owl_loaded.goTo(index)}})}function videoseriesHeight(){$(".node-type-video-series #main").show();setTimeout(function(){$(".push").remove();var headerH=$("header").outerHeight(),bodyMargin=parseInt($("body.admin-menu").css("margin-top")),firstFooter=$(".page-footer").outerHeight(),secondFooter=$(".page-top-second-footer").outerHeight(),pagewrapperHeight=$("#page-wrapper").outerHeight(),totalFooterH=firstFooter+secondFooter,pageWrapperHeight=$(window).height()-totalFooterH-headerH;if($(window).width()>=800){$("#page-wrapper").append('<div class="push"></div>');$(".node-type-video-series").find("#main").css({"min-height":pageWrapperHeight+"px"});$(".node-type-video-series").find("#page-wrapper").css({"margin-bottom":-totalFooterH+"px"});$(".push").css("height",secondFooter+"px")}else{$(".node-type-video-series").find("#main").css({"min-height":"initial"});$(".node-type-video-series").find("#page-wrapper").css({"margin-bottom":0})}},500)}var offset_top=0;if($(":target").length==0){var target=document.location["hash"];if(target.length>0){if($(target).length>0){offset_top=$(target).offset().top-87;$(target).css("padding-top","87px")}}}else{offset_top=$(":target").offset().top}if(offset_top>0){if($(window).scrollTop()!=offset_top)$(window).scrollTop(offset_top)}inpage_nav_loading_hash=1});var inpage_nav_loading_hash=0;$(document).ready(function(){if($(".messages--status").length){if($(".node-type-book").length){if($("#menu-navigation").length&&$(".book-page-content").length){$(".book-page-content").prepend($(".messages--status"))}else{$(".header").after($(".messages--status"))}}else{$(".header").after($(".messages--status"))}}if($("body").hasClass("has-inpage-navigation")){var $header_elms=$(".field-type-text-with-summary").find("h2,h3,h4");var h2tags={length:0};var h3tags={length:0};var h4tags={length:0};var cur_h2_parent="";var cur_h3_parent="";var cur_h4_parent="";var str_id=[];var new_id="";$header_elms.each(function(index){if($(this).text().trim().length>0){if($(this).prop("tagName")=="H2"){str_id["main"]="main"in str_id?str_id["main"]+1:1;new_id="inpage-nav-"+str_id["main"];$(this).append('<a class="inpage-nav-anchor" id="'+new_id+'"></a>');cur_h2_parent=new_id}else if($(this).prop("tagName")=="H3"){str_id[cur_h2_parent]=cur_h2_parent in str_id?str_id[cur_h2_parent]+1:1;new_id=cur_h2_parent+"-"+str_id[cur_h2_parent];$(this).append('<a class="inpage-nav-anchor" id="'+new_id+'"></a>');cur_h3_parent=new_id}else if($(this).prop("tagName")=="H4"){str_id[cur_h3_parent]=cur_h3_parent in str_id?str_id[cur_h3_parent]+1:1;new_id=cur_h3_parent+"-"+str_id[cur_h3_parent];$(this).append('<a class="inpage-nav-anchor" id="'+new_id+'"></a>');cur_h4_parent=new_id}var temp={elm_actual:$(this),elm_class:$(this).prop("tagName")+"tag",elm_id:new_id,has_children:false};if($(this).prop("tagName")=="H2"){temp.parent_id=cur_h2_parent;h2tags[index]=temp;h2tags.length=h2tags.length+1}else if($(this).prop("tagName")=="H3"){temp.parent_id=cur_h2_parent;h3tags[index]=temp;h3tags.length=h3tags.length+1}else if($(this).prop("tagName")=="H4"){temp.parent_id=cur_h3_parent;temp.grandparent_id=cur_h2_parent;h4tags[index]=temp;h4tags.length=h4tags.length+1}}});var nav_markup="";function generate_jumlinks_markup(elm){var text=elm.elm_actual.text().trim();var atext=text.split(" ");atext[0]='<span class="word_arrow">'+atext[0]+"</span>";text=atext.join(" ");return'<a class="jumplink" href="#'+elm.elm_id+'">'+text+"</a>"}var hxtags=[];if(h2tags.length){for(var h2key in h2tags){if(h2key!=="length"){var elm_id=h2tags[h2key].elm_id;hxtags.push(h2tags[h2key]);var last_h2tags=hxtags.length-1;var children_markup="";var children_markup2="";if(h3tags.length){for(var h3key in h3tags){if(h3key!=="length"&&h3tags[h3key].parent_id==elm_id){hxtags.push(h3tags[h3key]);var last_h3tags=hxtags.length-1;var elm_id2=h3tags[h3key].elm_id;children_markup2="";if(h4tags.length){for(var h4key in h4tags){if(h4key!=="length"&&h4tags[h4key].parent_id==elm_id2){hxtags.push(h4tags[h4key]);children_markup2=children_markup2+'<li class="parent nochildren">'+generate_jumlinks_markup(h4tags[h4key])+"</li>";delete h4tags[h4key]}}}if(children_markup2){children_markup=children_markup+'<li class="parent haschildren">'+generate_jumlinks_markup(h3tags[h3key])+'<ul class="inpage-nav list-h4">'+children_markup2+"</ul></li>";hxtags[last_h3tags].has_children=true}else{children_markup=children_markup+'<li class="parent nochildren">'+generate_jumlinks_markup(h3tags[h3key])+"</li>"}}}}if(children_markup){nav_markup=nav_markup+'<li class="parent haschildren">'+generate_jumlinks_markup(h2tags[h2key])+'<ul class="inpage-nav list-h3">'+children_markup+"</ul></li>";hxtags[last_h2tags].has_children=true}else{nav_markup=nav_markup+'<li class="parent nochildren">'+generate_jumlinks_markup(h2tags[h2key])+"</li>"}}}}if(nav_markup){var add_published_status_visible=$("#published-status").is(":visible")?'class="published-status-visible"':"";nav_markup='<div id="inpage-navigation" '+add_published_status_visible+'><h4 id="inpage-nav-contents">'+Drupal.t("CONTENTS")+'</h4><ul class="inpage-nav">'+nav_markup+"</ul></div>";$(nav_markup).insertBefore(".field-name-body");$header_elms.waypoint(function(direction){var element_id=$(this.element).children("a.inpage-nav-anchor").attr("id");var element_id_before=-1;var found=false;var i;for(i=0;i<=hxtags.length-1;i++){if(hxtags[i].elm_id==element_id){found=true;break}element_id_before=hxtags[i].elm_id}if(!found)return;$("#inpage-navigation a.jumplink").removeClass("active");$("#inpage-navigation a.jumplink").removeClass("opened");$("#inpage-navigation .haschildren ul").slideUp(0);if(direction=="up"){if(element_id_before==-1){$("#inpage-navigation").scrollTop(0);return}else{element_id=element_id_before;i=i-1}}var element_to_open=0;var element_to_open_children=0;var element_to_open_grandparent=0;if(hxtags[i].parent_id!=element_id){element_to_open='a[href="#'+hxtags[i].parent_id+'"]';element_to_open_children=hxtags[i].has_children?'a[href="#'+element_id+'"]':0;element_to_open_grandparent=typeof hxtags[i].grandparent_id!=="undefined"?'a[href="#'+hxtags[i].grandparent_id+'"]':0}else if(hxtags[i].has_children){element_to_open='a[href="#'+element_id+'"]'}if(element_to_open!=0){if(!$(element_to_open).hasClass("opened")){$(element_to_open).addClass("opened");$(element_to_open).next("ul").slideDown(0)}}if(element_to_open_children!=0){if(!$(element_to_open_children).hasClass("opened")){$(element_to_open_children).addClass("opened");$(element_to_open_children).next("ul").slideDown(0)}}if(element_to_open_grandparent!=0){if(!$(element_to_open_grandparent).hasClass("opened")){$(element_to_open_grandparent).addClass("opened");$(element_to_open_grandparent).next("ul").slideDown(0)}}$('a[href="#'+element_id+'"]').addClass("active")},{offset:100});var target=document.location["hash"];if(target.length>0)Waypoint.disableAll();$("#inpage-navigation").on("adjust-position",function(){var height_inpage_navigation=$(window).height();var current_scroll_header=$(window).scrollTop();var add_height=parseInt($(".intel-blue-bar").height());add_height+=$("#published-status").is(":visible")?parseInt($("#published-status").outerHeight()):0;add_height+=$("#admin-menu").is(":visible")?parseInt($("#admin-menu").height()):0;var current_article_node_height=$("article.node").outerHeight()+add_height;add_height+=parseInt($("#page-title").parent().outerHeight());add_height-=current_scroll_header;$("#inpage-navigation").css("margin-top",add_height+"px");if($("#menu-navigation").hasClass("fixed-header")&&add_height<=$("#menu-navigation").outerHeight()){$("#inpage-navigation").css("margin-top","");add_height=$("#menu-navigation").outerHeight()}var dif_scroll=current_article_node_height-(current_scroll_header+$(window).height());if(dif_scroll<0){height_inpage_navigation=current_article_node_height-current_scroll_header-add_height}else{height_inpage_navigation-=add_height}$("#inpage-navigation a.jumplink").blur();$("#inpage-navigation").css("height",height_inpage_navigation+"px");if(target.length>0&&inpage_nav_loading_hash==1){$(".inpage-nav li a").removeClass("active");$('.inpage-nav li a.jumplink[href="'+target+'"]').addClass("active");var item;for(item=0;item<=hxtags.length-1;item++)if("#"+hxtags[item].elm_id==target)break;if(hxtags[item].grandparent_id!=0)$('.inpage-nav a.jumplink[href="#'+hxtags[item].grandparent_id+'"]').next("ul").slideDown(0);if(hxtags[item].parent_id!=0)$('.inpage-nav a.jumplink[href="#'+hxtags[item].parent_id+'"]').next("ul").slideDown(0);inpage_nav_loading_hash=0;Waypoint.enableAll()}if($("#inpage-navigation a.jumplink.active").length>0){var scroll_actual=$("#inpage-navigation").scrollTop();var inpage_nav_height=$("#inpage-navigation").height();var scroll_inpage_top=$("#inpage-navigation a.jumplink.active").position().top;var scroll_inpage_offset=$("#inpage-navigation a.jumplink.active").offset().top;scroll_inpage_offset-=$("#inpage-navigation").offset().top;if(scroll_inpage_offset<0){$("#inpage-navigation").scrollTop(scroll_actual+scroll_inpage_top)}else if(scroll_inpage_offset+10>inpage_nav_height){$("#inpage-navigation").scrollTop(scroll_actual+inpage_nav_height/2)}}Waypoint.refreshAll();if(current_scroll_header==0){$("#inpage-navigation a.jumplink").removeClass("active");$("#inpage-navigation a.jumplink").removeClass("opened");$("#inpage-navigation .haschildren ul").slideUp(0);if($("#inpage-navigation a.jumplink.active").length==0)$("#inpage-navigation").scrollTop(0)}});$(".field-type-text-with-summary").prepend($(".messages--status"));$(".field-type-text-with-summary").prepend($(".messages--warning"));$(".field-type-text-with-summary").prepend($(".messages--error"));$("#inpage-navigation").trigger("adjust-position");$("#inpage-nav-contents").click(function(e){if($(this).parent().hasClass("is-mobile")){e.stopPropagation();$(this).toggleClass("navOpened");$(this).next("ul.inpage-nav").slideToggle()}})}else{$("body").removeClass("has-inpage-navigation")}$(".inpage-nav li.haschildren a").on("click",function(e){e.preventDefault();$(this).toggleClass("opened");$(this).parent("li.haschildren").siblings().find("a").removeClass("opened");$(this).next("ul").slideToggle();$(this).parent("li").siblings().find("ul").slideUp()});$(".inpage-nav li a").on("click",function(e){$(this).parent().siblings().find("a").removeClass("active");$(this).parent().siblings().find("a").removeClass("opened");$(this).parent().children().find("a").removeClass("active");$(this).parent().children().find("a.opened").next("ul").slideUp();$(this).parent().children().find("a").removeClass("opened");$(".inpage-nav li a").removeClass("active");$(this).addClass("active")});$(".field-type-text-with-summary").append($(".field-name-field-protected-attachments"));$(".field-type-text-with-summary").append($(".optimization-notice"));$("a.jumplink").click(function(e){var href=$(this).attr("href");if(href.indexOf("#")!==-1){e.preventDefault();Waypoint.disableAll();var header_height=$("#header").outerHeight();var anchor_pos=$(href).parent().offset();window.scrollTo(0,anchor_pos.top-header_height-15);$(this).addClass("js-processed");$(href).parent().fadeTo({duration:50},0).delay(100).fadeTo({duration:50},1,Waypoint.enableAll())}})}var clickAction=0;var carousel=$(".owl-carousel-banner");if(carousel.length){$(carousel).each(function(index){$.each(Drupal.settings.zero_carousel_banner,function(key1,carouselsetttingsvalue){var owlWrap=$(".owl-carousel-banner"+"."+key1);if(carouselsetttingsvalue[0]==null||carouselsetttingsvalue[1]==null||carouselsetttingsvalue[2]==null||carouselsetttingsvalue[3]==null){carouselsetttingsvalue[0]=1e4;carouselsetttingsvalue[1]=300;carouselsetttingsvalue[2]=1e3;carouselsetttingsvalue[3]=1200}var fadetrue="";var dragable="";if(owlWrap.hasClass("zoneCrossFade")){fadetrue="fade";dragable=false}else{fadetrue=false;dragable=true}owlWrap.owlCarousel({navigation:false,slideSpeed:carouselsetttingsvalue[1],paginationSpeed:carouselsetttingsvalue[2],rewindSpeed:carouselsetttingsvalue[3],singleItem:true,autoPlay:carouselsetttingsvalue[0],addClassActive:true,stopOnHover:false,transitionStyle:fadetrue,mouseDrag:dragable,touchDrag:dragable,afterAction:function(elem){var zero_banner_block_id=owlWrap.find(".owl-item.active .zero-full-page-banner").attr("class").split(" ")[2];$.each(Drupal.settings.idz_beans,function(key,value){if(zero_banner_block_id==key&&value.length!==0){owlWrap.find(".owl-page span").removeAttr("style").css({"border-color":value});owlWrap.find(".owl-page.active span").removeAttr("style").css({background:value,"border-color":value})}})}})})});$(".owl-page, .owl-item").click(function(){clickAction=1;carousel.trigger("owl.stop")})}$(".comments-wrapper .to-top").click(function(){$("html, body").animate({scrollTop:0},800);return false});var comment_text_format=$("#comment-body-add-more-wrapper").find(".filter-list");if(comment_text_format.length){$(".comment-form-wrapper").find(".form-submit").wrapAll("<div class='comment-post-button-wrapper' />")}$("ul.bds-tab-keys li").click(function(){var tab_id=$(this).attr("data-tab");$("ul.bds-tab-keys li").removeClass("active");$(".tab-content").removeClass("active");$(this).addClass("active");$("#"+tab_id).addClass("active")});$(".modaloverlay .close").click(function(e){e.preventDefault();$(this).parents(".modaloverlay.target").removeClass("target");$(".owl-carousel-banner .overlay-text-wrapper").css("z-index",1);$(".youtubeFrame").each(function(){this.contentWindow.postMessage('{"event":"command", "func":"pauseVideo", "args":""}',"*")});if(window.videojs){var brightcove_players=window.videojs.getPlayers();if(brightcove_players){for(var p in brightcove_players){if(brightcove_players[p]){var player=brightcove_players[p];if(player.pause){player.pause()}}}}}});$(".imagelink, .videolink").click(function(e){e.preventDefault();var classes=$(this).attr("class").split(/\s+/);for(i=0;i<classes.length;i++){var id="#"+classes[i];if($(id).length===1){if(!$(id).attr("data-processed")){$("body").append($(id));$(id).attr("data-processed","1")}$(id).addClass("target");break}}});Zero.behaviors.navMenu={namespace:"navMenu"};var behaviors=Zero.behaviors.navMenu;var namespace=Zero.behaviors.navMenu.namespace;var expandableMenuItems=$("nav.menu .menu-item").filter(function(idx){return $(this).children("ul").length>0});behaviors.clickHandler=function(e){var $this=$(this);if($(e.target).closest("li").children("ul").length>0){e.preventDefault();$this.siblings().removeClass("js-active");$this.toggleClass("js-active")}};behaviors.clickOutsideHandler=function(e){if($(e.target).closest(".menu-item").length==0){expandableMenuItems.removeClass("js-active");expandableMenuItems.find(".js-active").removeClass("js-active")}};expandableMenuItems.on("click."+namespace,behaviors.clickHandler);$(document).on("click."+namespace,behaviors.clickOutsideHandler);if($(".node-gallerylite .collapse_list_button").length>0){$(".node-gallerylite .collapse_list_button").each(function(){var bg_color_pane=$(this).parents(".pane-content").css("background-color");var bg_color_region=$(this).parents(".intel-container").css("background-color");if(typeof bg_color_pane!=="undefined"&&bg_color_pane!="rgba(0, 0, 0, 0)"){$(this).find("p").css("background-color",bg_color_pane)}else{if(typeof bg_color_region!=="undefined"&&bg_color_region!="rgba(0, 0, 0, 0)"&&bg_color_region!="transparent"){$(this).find("p").css("background-color",bg_color_region)}else{$(this).find("p").css("background-color","rgba(255, 255, 255, 255)")}}})}$('#content a[name!=""]:not([id])').each(function(){var name=this.name.trim();if(name.length>0)this.id=name});$('pre[class*="brush"]').css("visibility","visible");$("a.bigphoto").magnificPopup({type:"image",tLoading:""});if(typeof Drupal.ajax!=="undefined"){Drupal.ajax.prototype.commands.viewsScrollTop=function(ajax,response,status){var offset=$(response.selector).offset().top,view=$(ajax.selector);if(view.hasClass("view-id-zero_htmlhub_feed")&&view.hasClass("view-display-id-default")){offset=$("#custom-search-box").length?$("#custom-search-box").offset().top:$(".custom-search-button").offset().top-20}else if($(".l-content-top-wrapper")){offset=$(".l-content-top-wrapper").offset().top}var scrollTarget=response.selector;while($(scrollTarget).scrollTop()==0&&$(scrollTarget).parent()){scrollTarget=$(scrollTarget).parent()}if(offset-65<$(scrollTarget).scrollTop()){$(scrollTarget).animate({scrollTop:offset-65},500)}}}if($(".mini-image-slide").length>0){var sheet=function(){var style=document.createElement("style");style.appendChild(document.createTextNode(""));document.head.appendChild(style);return style.sheet}();var fieldItemSection=1;$(".mini-image-slide").parent().each(function(){if($(this).find(".mini-image-slide").length>0){$(".mini-image-slide",this).wrapAll('<div class="mini-image-gallery-slider"><div class="slides"><div class="inner"></div></div></div>');var slides=$(".mini-image-slide",this).length;$(".inner",this).css("width",slides*100+1+"%");var slideNumber=1;var percent=0;$(".mini-image-slide",this).each(function(){var idSlide="section"+fieldItemSection+"_slide"+slideNumber;var nameInput="slider"+fieldItemSection;$(this).parents(".mini-image-gallery-slider").prepend('<input type="radio" name="'+nameInput+'" id="'+idSlide+'" selected="false"/>');$(this).parents(".mini-image-gallery-slider").append('<label for="'+idSlide+'"></label>');$(this).width($(this).parents(".mini-image-gallery-slider").width());sheet.insertRule("#main .mini-image-gallery-slider #"+idSlide+":checked ~ .slides .inner { margin-left: -"+percent+"00% }",0);sheet.insertRule("#main .mini-image-gallery-slider #"+idSlide+':checked ~ label[for="'+idSlide+'"] { background: #999; opacity: 1; }',0);percent++;slideNumber++});fieldItemSection++}});$('input[id*="_slide1"]').prop("checked",true)}zero.behaviors.brightcove.resize();jQuery(".owl-item").each(function(){var background_color=jQuery(this).find(".pane-node").css("background-color");if(background_color=="transparent"||background_color=="rgba(0, 0, 0, 0)"){background_color=jQuery(this).find(".zero-full-page-banner").css("background-color")}jQuery(this).css("background-color",background_color);jQuery(this).css("height",jQuery(this).parent(".owl-wrapper").css("height"))})})})(jQuery110);function makeid(){var text="";var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<5;i++){text+=possible.charAt(Math.floor(Math.random()*possible.length))}return text};
(function($){Zero.breakpoints={medium:800,small:600,tiny:400};var bp=Zero.breakpoints;$(document).ready(function(){$.BreakPoint({breakpoints:{medium:{max:bp.medium,load:false},medium_plus:{min:bp.medium+1,load:false},medium_only:{min:bp.small+1,max:bp.medium,load:false},small_only:{min:bp.tiny+1,max:bp.small,load:false},tiny_only:{min:0,max:bp.tiny,load:false},small_medium:{min:bp.small+11,max:bp.medium,load:false}}})})})(jQuery110);;
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!"".replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return"\\w+"};c=1}while(c--){if(k[c]){p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c])}}return p}('c(!1k.2G){h 2G=l(){h p={6b:{"1o-U":"","84-2d":1,"83-2d-82":I,"1M":v,"8z-8H":I,"1H-2L":4,"3j":I,"1y":I,"67":N,"8B-8o":I,"7X":N,"5h-1n":I,"1F-1m":N},M:{4Q:I,6f:v,5o:16,5k:16,8s:N,8G:N,89:"58",1g:{5p:"54 1j",5b:"9O 1j",5j:"9P 6k 6q",76:"9N C 9M 26 9J 6q 9K",3o:"3o",6F:"?",1x:"2G\\n\\n",6M:"9L\'t 9Q 2V D: ",86:"9R 9W\'t 9X D 1F-1m 9V: ",78:"<!9U 1F 9S \\"-//9T//6j 9I 1.0 9H//9w\\" \\"2o://5x.6J.6u/9x/6H/6j/6H-9v.9u\\"><1F 9r=\\"2o://5x.6J.6u/9y/9z\\"><6y><9F 2o-9G=\\"9E-9D\\" 60=\\"1X/1F; 9A=9B-8\\" /><39>9C 2G</39></6y><2Z 1t=\\"3H-9Z:an,ao,am,al-ai;aj-43:#ak;43:#ap;3H-2L:aq;1X-6z:6A;\\"><B 1t=\\"1X-6z:6A;6x-4G:au;\\"><B 1t=\\"3H-2L:at-ar;\\">2G</B><B 1t=\\"3H-2L:.ah;6x-9q:ag;\\"><B>6O 2.1.a5 (a6 24 a4)</B><B><a 1Q=\\"2o://6G.3x\\" a3=\\"44\\" 1t=\\"43:#6E;1X-6t:6r;\\">2o://6G.3x</a></B><B>a1 a2 a7 f 1m, a8 <a 1Q=\\"ae://5x.af.3x/ad-ac/a9?aa=ab-ax&8Z=8Q\\" 1t=\\"43:#6E;1X-6t:6r;\\">8P</a> 6k 8N 8R 8S!</B></B><B>8W C 8V 8U.</B><B>8X 8J-8K 8O 9h.</B></B></2Z></1F>"},8C:N},1q:{4U:v,9g:v,3D:v,6g:{}},2n:{},8l:{9f:/\\/\\*[\\s\\S]*?\\*\\//3v,9d:/\\/\\/.*$/3v,9e:/#.*$/3v,9j:/"([^\\\\"\\n]|\\\\.)*"/g,9o:/\'([^\\\\\'\\n]|\\\\.)*\'/g,8Y:/"([^\\\\"]|\\\\.)*"/g,9m:/\'([^\\\\\']|\\\\.)*\'/g,9k:/(&X;|<)!--[\\s\\S]*?--(&Y;|>)/3v,3Q:/&X;\\w+:\\/\\/[\\w-.\\/?%&=@:;]*&Y;|\\w+:\\/\\/[\\w-.\\/?%&=@:;]*/g,9c:{F:/(&X;|<)\\?=?/g,19:/\\?(&Y;|>)/g},92:{F:/(&X;|<)%=?/g,19:/%(&Y;|>)/g},91:{F:/(&X;|<)\\s*1m.*?(&Y;|>)/4v,19:/(&X;|<)\\/\\s*1m\\s*(&Y;|>)/4v}},1y:{18:l(3f){h 3C=Q.1N("3c"),5s=p.1y.7d;3C.L="1y";D(h 35 26 5s){h 6h=5s[35],5r=W 6h(3f),1U=5r.18();3f.6a[35]=5r;c(1U==v){1J}c(7I(1U)=="90"){1U=p.1y.6l(1U,3f.1h,35)}1U.L+="5v "+35;3C.2u(1U)}q 3C},6l:l(5K,6m,5D){h a=Q.1N("a"),5M=a.1t,5u=p.M,5L=5u.5o,5N=5u.5k;a.1Q="#"+5D;a.39=5K;a.5g=6m;a.75=5D;a.27=5K;c(38(5L)==N){5M.1W=5L+"73"}c(38(5N)==N){5M.2s=5N+"73"}a.96=l(e){9n{p.1y.7a(f,e||1k.6V,f.5g,f.75)}97(e){p.A.1x(e.77)}q N};q a},7a:l(7f,7e,7b,7h,7c){h 5G=p.1q.6g[7b],5H;c(5G==v||(5H=5G.6a[7h])==v){q v}q 5H.2B(7f,7e,7c)},7d:{5p:l(59){f.18=l(){c(59.T("67")!=I){q}q p.M.1g.5p};f.2B=l(5a,8T,8M){h B=59.B;5a.8v.4u(5a);B.L=B.L.E("5O","")}},5b:l(71){f.18=l(){q p.M.1g.5b};f.2B=l(aV,bV,bW){h 3Y=p.A.3E(71.5f).E(/</g,"&X;"),2t=p.A.4M("","44",bU,bT,"bR=0, bS=1, bX=0, 6s=1");3Y=p.A.2I(3Y);2t.Q.3I("<58>"+3Y+"</58>");2t.Q.4c()}},5j:l(65){h 3k,bY,5i=65.1h;f.18=l(){h 2Q=p.M;c(2Q.6f==v){q v}l 1I(52){h 5e="";D(h 56 26 52){5e+="<c3 U=\'"+56+"\' 23=\'"+52[56]+"\'/>"}q 5e};l 2q(5l){h 5n="";D(h 5m 26 5l){5n+=" "+5m+"=\'"+5l[5m]+"\'"}q 5n};h 68={1W:2Q.5o,2s:2Q.5k,1h:5i+"c0",4j:"bQ/x-6Z-6U",39:p.M.1g.5j},5V={bP:"ay",bG:"bH",bF:"5g="+5i,bD:"N"},5W=2Q.6f,3O;c(/bI/i.1R(7j.6B)){3O="<4d"+2q({bJ:"bO:bN-bM-bK-bL-c4",cl:"2o://cj.c7.3x/ce/6Z/ck/6U/c9.ci#6O=9,0,0,0"})+2q(68)+">"+1I(5V)+1I({c8:5W})+"</4d>"}G{3O="<c6"+2q(68)+2q(5V)+2q({cf:5W})+"/>"}3k=Q.1N("B");3k.27=3O;q 3k};f.2B=l(co,cn,63){h 72=63.bA;6S(72){2O"7l":h 64=p.A.2I(p.A.3E(65.5f).E(/&X;/g,"<").E(/&Y;/g,">").E(/&aT;/g,"&"));c(1k.74){1k.74.aU("1X",64)}G{q p.A.2I(64)}2O"aS":p.A.1x(p.M.1g.76);2y;2O"aP":p.A.1x(63.77);2y}}},bB:l(61){f.18=l(){q p.M.1g.3o};f.2B=l(aW,b1,b2){h 29=Q.1N("b0"),1G=v;c(p.1q.3D!=v){Q.2Z.4u(p.1q.3D)}p.1q.3D=29;29.1t.aX="aY:aO;1W:6w;2s:6w;F:-6o;4G:-6o;";Q.2Z.2u(29);1G=29.5Z.Q;6D(1G,1k.Q);1G.3I("<B 1o=\\""+61.B.L.E("5O","")+" aD\\">"+61.B.27+"</B>");1G.4c();29.5Z.4Y();29.5Z.3o();l 6D(6I,6C){h 2E=6C.4D("4e");D(h i=0;i<2E.u;i++){c(2E[i].6i.70()=="6P"&&/aC\\.1a$/.1R(2E[i].1Q)){6I.3I("<4e 4j=\\"1X/1a\\" 6i=\\"6P\\" 1Q=\\""+2E[i].1Q+"\\"></4e>")}}}}},az:l(aA){f.18=l(){q p.M.1g.6F};f.2B=l(aG,aL){h 2t=p.A.4M("","44",aK,aJ,"6s=0"),1G=2t.Q;1G.3I(p.M.1g.78);1G.4c();2t.4Y()}}}},A:{Z:l(4a,6L,3U){3U=3w.aH(3U||0,0);D(h i=3U;i<4a.u;i++){c(4a[i]==6L){q i}}q-1},6d:l(7g){q 7g+3w.aI(3w.b3()*b4).2h()},6c:l(47,46){h 3m={},28;D(28 26 47){3m[28]=47[28]}D(28 26 46){3m[28]=46[28]}q 3m},7t:l(4L){6S(4L){2O"I":q I;2O"N":q N}q 4L},4M:l(3Q,6W,4H,4O,2R){h x=(6T.1W-4H)/2,y=(6T.2s-4O)/2;2R+=", F="+x+", 4G="+y+", 1W="+4H+", 2s="+4O;2R=2R.E(/^,/,"");h 4V=1k.bn(3Q,6W,2R);4V.4Y();q 4V},7y:l(1E,1Y,1Z){c(1E.6X){1E["e"+1Y+1Z]=1Z;1E[1Y+1Z]=l(){1E["e"+1Y+1Z](1k.6V)};1E.6X("bt"+1Y,1E[1Y+1Z])}G{1E.by(1Y,1Z,N)}},1x:l(z){1x(p.M.1g.1x+z)},4P:l(4h,6N){h 2w=p.1q.4U,3W=v;c(2w==v){2w={};D(h 2W 26 p.2n){h 3g=p.2n[2W].bx;c(3g==v){1J}p.2n[2W].U=2W.70();D(h i=0;i<3g.u;i++){2w[3g[i]]=2W}}p.1q.4U=2w}3W=p.2n[2w[4h]];c(3W==v&&6N!=N){p.A.1x(p.M.1g.6M+4h)}q 3W},4x:l(z,6Q){h 2C=z.1O("\\n");D(h i=0;i<2C.u;i++){2C[i]=6Q(2C[i])}q 2C.5A("\\n")},7A:l(z){q z.E(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"")},8b:l(z){h 42,4E={},4S=W V("^\\\\[(?<4T>(.*?))\\\\]$"),6R=W V("(?<U>[\\\\w-]+)"+"\\\\s*:\\\\s*"+"(?<23>"+"[\\\\w-%#]+|"+"\\\\[.*?\\\\]|"+"\\".*?\\"|"+"\'.*?\'"+")\\\\s*;?","g");2r((42=6R.R(z))!=v){h 2f=42.23.E(/^[\'"]|[\'"]$/g,"");c(2f!=v&&4S.1R(2f)){h m=4S.R(2f);2f=m.4T.u>0?m.4T.1O(/\\s*,\\s*/):[]}4E[42.U]=2f}q 4E},7Q:l(z,1a){c(z==v||z.u==0||z=="\\n"){q z}z=z.E(/</g,"&X;");z=z.E(/ {2,}/g,l(m){h 4o="";D(h i=0;i<m.u-1;i++){4o+="&2m;"}q 4o+" "});c(1a!=v){z=p.A.4x(z,l(2j){c(2j.u==0){q""}h 3F="";2j=2j.E(/^(&2m;| )+/,l(s){3F=s;q""});c(2j.u==0){q 3F}q 3F+"<C 1o=\\""+1a+"\\">"+2j+"</C>"})}q z},81:l(79,7i){h 34=79.2h();2r(34.u<7i){34="0"+34}q 34},6p:l(){h 40=Q.1N("B"),3J,3i=0,4y=Q.2Z,1h=p.A.6d("6p"),36="<B 1o=\\"",33="</B>",4A="</4t>";40.27=36+"6e\\">"+36+"1n\\">"+36+"2d\\">"+36+"60"+"\\"><4t 1o=\\"b7\\"><4t 1h=\\""+1h+"\\">&2m;"+4A+4A+33+33+33+33;4y.2u(40);3J=Q.b6(1h);c(/bb/i.1R(7j.6B)){h 6v=1k.bh(3J,v);3i=80(6v.bg("1W"))}G{3i=3J.bd}4y.4u(40);q 3i},8c:l(6n,6K){h 1H="";D(h i=0;i<6K;i++){1H+=" "}q 6n.E(/\\t/g,1H)},8D:l(2F,4w){h be=2F.1O("\\n"),1H="\\t",62="";D(h i=0;i<50;i++){62+="                    "}l 8u(3n,17,8y){q 3n.22(0,17)+62.22(0,8y)+3n.22(17+1,3n.u)};2F=p.A.4x(2F,l(21){c(21.Z(1H)==-1){q 21}h 17=0;2r((17=21.Z(1H))!=-1){h 8r=4w-17%4w;21=8u(21,17,8r)}q 21});q 2F},3E:l(z){h br=/<br\\s*\\/?>|&X;br\\s*\\/?&Y;/4v;c(p.M.8s==I){z=z.E(br,"\\n")}c(p.M.8G==I){z=z.E(br,"")}q z},2J:l(z){q z.E(/^\\s+|\\s+$/g,"")},2I:l(z){h 2a=p.A.3E(z).1O("\\n"),bf=W bi(),8g=/^\\s*/,20=bc;D(h i=0;i<2a.u&&20>0;i++){h 4z=2a[i];c(p.A.2J(4z).u==0){1J}h 4C=8g.R(4z);c(4C==v){q z}20=3w.20(4C[0].u,20)}c(20>0){D(h i=0;i<2a.u;i++){2a[i]=2a[i].22(20)}}q 2a.5A("\\n")},7W:l(31,30){c(31.H<30.H){q-1}G{c(31.H>30.H){q 1}G{c(31.u<30.u){q-1}G{c(31.u>30.u){q 1}}}}q 0},2S:l(8i,2Y){l 8p(4B,87){q[W p.4W(4B[0],4B.H,87.1a)]};h b5=0,4s=v,3Z=[],8h=2Y.4K?2Y.4K:8p;2r((4s=2Y.3K.R(8i))!=v){3Z=3Z.2l(8h(4s,2Y))}q 3Z},8m:l(8k){h X="&X;",Y="&Y;";q 8k.E(p.8l.3Q,l(m){h 4k="",4l="";c(m.Z(X)==0){4l=X;m=m.3M(X.u)}c(m.Z(Y)==m.u-Y.u){m=m.3M(0,m.u-Y.u);4k=Y}q 4l+"<a 1Q=\\""+m+"\\">"+m+"</a>"+4k})},8a:l(){h 3G=Q.4D("1m"),4i=[];D(h i=0;i<3G.u;i++){c(3G[i].4j=="6e"){4i.K(3G[i])}}q 4i},8t:l(4n){h 4m="<![b8[",3P="]]>",1u=p.A.2J(4n),3L=N;c(1u.Z(4m)==0){1u=1u.3M(4m.u);3L=I}c(1u.Z(3P)==1u.u-3P.u){1u=1u.3M(0,1u.u-3P.u);3L=I}q 3L?1u:4n}},1M:l(8e,4p){l 8f(4r){h 4q=[];D(h i=0;i<4r.u;i++){4q.K(4r[i])}q 4q};h 2k=4p?[4p]:8f(Q.4D(p.M.89)),8q="27",2v=v,4R=p.M;c(4R.4Q){2k=2k.2l(p.A.8a())}c(2k.u===0){q}D(h i=0;i<2k.u;i++){h 2T=2k[i],1T=p.A.8b(2T.L),1L,2D,1P;1T=p.A.6c(8e,1T);1L=1T["2V"];c(1L==v){1J}c(1T["1F-1m"]=="I"||p.6b["1F-1m"]==I){2v=W p.4b(1L);1L="b9"}G{h 3S=p.A.4P(1L);c(3S){1L=3S.U;2v=W 3S()}G{1J}}2D=2T[8q];c(4R.4Q){2D=p.A.8t(2D)}1T["2V-U"]=1L;2v.1M(2D,1T);1P=2v.B;c(p.M.8C){1P=Q.1N("bk");1P.23=2v.B.27;1P.1t.1W="bu";1P.1t.2s="bw"}2T.8v.bz(1P,2T)}},bs:l(7x){p.A.7y(1k,"bm",l(){p.1M(7x)})}};p.4W=l(4X,7B,1a){f.23=4X;f.H=7B;f.u=4X.u;f.1a=1a;f.5S=v};p.4W.1c.2h=l(){q f.23};p.4b=l(4F){h 3t=p.A.4P(4F),2p,4J=W p.2n.bl(),bo=v;c(3t==v){q}2p=W 3t();f.49=4J;c(2p.3N==v){p.A.1x(p.M.1g.86+4F);q}4J.5c.K({3K:2p.3N.C,4K:7E});l 3l(4N,7F){D(h j=0;j<4N.u;j++){4N[j].H+=7F}};l 7E(15,bq){h 7w=15.C,1l=[],4Z=2p.5c,7v=15.H+15.F.u,2P=2p.3N,1p;D(h i=0;i<4Z.u;i++){1p=p.A.2S(7w,4Z[i]);3l(1p,7v);1l=1l.2l(1p)}c(2P.F!=v&&15.F!=v){1p=p.A.2S(15.F,2P.F);3l(1p,15.H);1l=1l.2l(1p)}c(2P.19!=v&&15.19!=v){1p=p.A.2S(15.19,2P.19);3l(1p,15.H+15[0].bp(15.19));1l=1l.2l(1p)}D(h j=0;j<1l.u;j++){1l[j].5S=3t.U}q 1l}};p.4b.1c.1M=l(7k,7p){f.49.1M(7k,7p);f.B=f.49.B};p.7q=l(){};p.7q.1c={T:l(7u,7s){h 48=f.1I[7u];q p.A.7t(48==v?7s:48)},18:l(7H){q Q.1N(7H)},8n:l(32,7Y){h 3A=[];c(32!=v){D(h i=0;i<32.u;i++){c(7I(32[i])=="4d"){3A=3A.2l(p.A.2S(7Y,32[i]))}}}q 3A.aM(p.A.7W)},8F:l(){h 1V=f.2X;D(h i=0;i<1V.u;i++){c(1V[i]===v){1J}h 2z=1V[i],45=2z.H+2z.u;D(h j=i+1;j<1V.u&&1V[i]!==v;j++){h 25=1V[j];c(25===v){1J}G{c(25.H>45){2y}G{c(25.H==2z.H&&25.u>2z.u){f.2X[i]=v}G{c(25.H>=2z.H&&25.H<45){f.2X[j]=v}}}}}}},7Z:l(2U){h 3h=2U.1O("\\n"),3X=80(f.T("84-2d")),2i=f.T("83-2d-82"),7U=f.T("1M",[]),7M=f.T("3j");2U="";c(2i==I){2i=(3X+3h.u-1).2h().u}G{c(38(2i)==I){2i=0}}D(h i=0;i<3h.u;i++){h 1A=3h[i],66=/^(&2m;|\\s)+/.R(1A),51="aE"+(i%2==0?1:2),7N=p.A.81(3X+i,2i),7T=p.A.Z(7U,(3X+i).2h())!=-1,2H=v;c(66!=v){2H=66[0].2h();1A=1A.22(2H.u)}1A=p.A.2J(1A);c(1A.u==0){1A="&2m;"}c(7T){51+=" aN"}2U+="<B 1o=\\"2d "+51+"\\">"+"<7P>"+"<7R>"+(7M?"<3T 1o=\\"aZ\\"><C>"+7N+"</C></3T>":"")+"<3T 1o=\\"60\\">"+(2H!=v?"<C 1o=\\"aQ\\">"+2H.E(" ","&2m;")+"</C>":"")+1A+"</3T>"+"</7R>"+"</7P>"+"</B>"}q 2U},88:l(69,5T){h 17=0,3p="",3r=p.A.7Q,5R=f.T("2V-U","");l 5X(5Y){h 5Q=5Y?(5Y.5S||5R):5R;q 5Q?5Q+" ":""};D(h i=0;i<5T.u;i++){h 1v=5T[i],3y;c(1v===v||1v.u===0){1J}3y=5X(1v);3p+=3r(69.22(17,1v.H-17),3y+"7K")+3r(1v.23,3y+1v.1a);17=1v.H+1v.u}3p+=3r(69.22(17),5X()+"7K");q 3p},1M:l(C,7V){h cg=p.M,1q=p.1q,B,ca,3e,cd="cm";f.1I={};f.B=v;f.1n=v;f.C=v;f.1e=v;f.6a={};f.1h=p.A.6d("ch");1q.6g[f.1h]=f;c(C===v){C=""}f.1I=p.A.6c(p.6b,7V||{});c(f.T("7X")==I){f.1I.1y=f.1I.3j=N}f.B=B=f.18("3c");f.1n=f.18("3c");f.1n.L="1n";L="6e";B.1h=f.1h;c(f.T("67")){L+=" 5O"}c(f.T("3j")==N){L+=" c5"}c(f.T("5h-1n")==N){f.1n.L+=" bC-5h"}L+=" "+f.T("1o-U");L+=" "+f.T("2V-U");B.L=L;f.5f=C;f.C=p.A.7A(C).E(/\\r/g," ");3e=f.T("1H-2L");f.C=f.T("8z-8H")==I?p.A.8D(f.C,3e):p.A.8c(f.C,3e);f.C=p.A.2I(f.C);c(f.T("1y")){f.1e=f.18("3c");f.1e.L="1e";f.1e.2u(p.1y.18(f));B.2u(f.1e);h 1e=f.1e;l 53(){1e.L=1e.L.E("54","")};B.c1=l(){53();1e.L+=" 54"};B.c2=l(){53()}}B.2u(f.1n);f.2X=f.8n(f.5c,f.C);f.8F();C=f.88(f.C,f.2X);C=f.7Z(p.A.2J(C));c(f.T("8B-8o")){C=p.A.8m(C)}f.1n.27=C},9i:l(z){z=z.E(/^\\s+|\\s+$/g,"").E(/\\s+/g,"|");q"\\\\b(?:"+z+")\\\\b"},9l:l(2K){f.3N={F:{3K:2K.F,1a:"1m"},19:{3K:2K.19,1a:"1m"},C:W V("(?<F>"+2K.F.1j+")"+"(?<C>.*?)"+"(?<19>"+2K.19.1j+")","99")}}};q p}()}c(!1k.V){(l(){h 2A={R:10.1c.R,8w:5I.1c.8w,E:5I.1c.E,1O:5I.1c.1O},1D={13:/(?:[^\\\\([#\\s.]+|\\\\(?!k<[\\w$]+>|[7z]{[^}]+})[\\S\\s]?|\\((?=\\?(?!#|<[\\w$]+>)))+|(\\()(?:\\?(?:(#)[^)]*\\)|<([$\\w]+)>))?|\\\\(?:k<([\\w$]+)>|[7z]{([^}]+)})|(\\[\\^?)|([\\S\\s])/g,98:/(?:[^$]+|\\$(?![1-9$&`\']|{[$\\w]+}))+|\\$(?:([1-9]\\d*|[$&`\'])|{([$\\w]+)})/g,3d:/^(?:\\s+|#.*)+/,5B:/^(?:[?*+]|{\\d+(?:,\\d*)?})/,7J:/&&\\[\\^?/g,7O:/]/g},7G=l(5C,5v,5t){D(h i=5t||0;i<5C.u;i++){c(5C[i]===5v){q i}}q-1},8I=/()??/.R("")[1]!==3a,3b={};V=l(1d,1S){c(1d 5U 10){c(1S!==3a){3q 7n("4g\'t 4I 9a 8A 95 7r 10 5t 94")}q 1d.3z()}h 1S=1S||"",7S=1S.Z("s")>-1,7L=1S.Z("x")>-1,5z=N,3R=[],14=[],13=1D.13,J,cc,3V,37,3u;13.O=0;2r(J=2A.R.2e(13,1d)){c(J[2]){c(!1D.5B.1R(1d.1b(13.O))){14.K("(?:)")}}G{c(J[1]){3R.K(J[3]||v);c(J[3]){5z=I}14.K("(")}G{c(J[4]){37=7G(3R,J[4]);14.K(37>-1?"\\\\"+(37+1)+(38(1d.5w(13.O))?"":"(?:)"):J[0])}G{c(J[5]){14.K(3b.7o?3b.7o.7l(J[5],J[0].5w(1)==="P"):J[0])}G{c(J[6]){c(1d.5w(13.O)==="]"){14.K(J[6]==="["?"(?!)":"[\\\\S\\\\s]");13.O++}G{cc=V.8d("&&"+1d.1b(J.H),1D.7J,1D.7O,"",{7D:"\\\\"})[0];14.K(J[6]+cc+"]");13.O+=cc.u+1}}G{c(J[7]){c(7S&&J[7]==="."){14.K("[\\\\S\\\\s]")}G{c(7L&&1D.3d.1R(J[7])){3V=2A.R.2e(1D.3d,1d.1b(13.O-1))[0].u;c(!1D.5B.1R(1d.1b(13.O-1+3V))){14.K("(?:)")}13.O+=3V-1}G{14.K(J[7])}}}G{14.K(J[0])}}}}}}}3u=10(14.5A(""),2A.E.2e(1S,/[9Y]+/g,""));3u.1B={1j:1d,2g:5z?3R:v};q 3u};V.9s=l(U,o){3b[U]=o};10.1c.R=l(z){h 1f=2A.R.2e(f,z),U,i,5y;c(1f){c(8I&&1f.u>1){5y=W 10("^"+f.1j+"$(?!\\\\s)",f.5J());2A.E.2e(1f[0],5y,l(){D(i=1;i<8j.u-2;i++){c(8j[i]===3a){1f[i]=3a}}})}c(f.1B&&f.1B.2g){D(i=1;i<1f.u;i++){U=f.1B.2g[i-1];c(U){1f[U]=1f[i]}}}c(f.3s&&f.O>(1f.H+1f[0].u)){f.O--}}q 1f}})()}10.1c.5J=l(){q(f.3s?"g":"")+(f.aw?"i":"")+(f.8E?"m":"")+(f.3d?"x":"")+(f.a0?"y":"")};10.1c.3z=l(7C){h 5E=W V(f.1j,(7C||"")+f.5J());c(f.1B){5E.1B={1j:f.1B.1j,2g:f.1B.2g?f.1B.2g.1b(0):v}}q 5E};10.1c.2e=l(93,z){q f.R(z)};10.1c.9b=l(9p,8x){q f.R(8x[0])};V.57=l(55,5d){h 5P="/"+55+"/"+(5d||"");q V.57[5P]||(V.57[5P]=W V(55,5d))};V.41=l(z){q z.E(/[-[\\]{}()*+?.\\\\^$|,#\\s]/g,"\\\\$&")};V.8d=l(z,F,11,1i,2N){h 2N=2N||{},2M=2N.7D,12=2N.cb,1i=1i||"",5F=1i.Z("g")>-1,6Y=1i.Z("i")>-1,7m=1i.Z("m")>-1,5q=1i.Z("y")>-1,1i=1i.E(/y/g,""),F=F 5U 10?(F.3s?F:F.3z("g")):W V(F,"g"+1i),11=11 5U 10?(11.3s?11:11.3z("g")):W V(11,"g"+1i),1K=[],2x=0,1s=0,1r=0,1w=0,2c,2b,1z,1C,3B,4f;c(2M){c(2M.u>1){3q aR("4g\'t 4I aB aF 7r 41 85")}c(7m){3q 7n("4g\'t 4I 41 85 8A bv bj 8E ba")}3B=V.41(2M);4f=W 10("^(?:"+3B+"[\\\\S\\\\s]|(?:(?!"+F.1j+"|"+11.1j+")[^"+3B+"])+)+",6Y?"i":"")}2r(I){F.O=11.O=1r+(2M?(4f.R(z.1b(1r))||[""])[0].u:0);1z=F.R(z);1C=11.R(z);c(1z&&1C){c(1z.H<=1C.H){1C=v}G{1z=v}}c(1z||1C){1s=(1z||1C).H;1r=(1z?F:11).O}G{c(!2x){2y}}c(5q&&!2x&&1s>1w){2y}c(1z){c(!2x++){2c=1s;2b=1r}}G{c(1C&&2x){c(!--2x){c(12){c(12[0]&&2c>1w){1K.K([12[0],z.1b(1w,2c),1w,2c])}c(12[1]){1K.K([12[1],z.1b(2c,2b),2c,2b])}c(12[2]){1K.K([12[2],z.1b(2b,1s),2b,1s])}c(12[3]){1K.K([12[3],z.1b(1s,1r),1s,1r])}}G{1K.K(z.1b(2b,1s))}1w=1r;c(!5F){2y}}}G{F.O=11.O=0;3q bE("bZ 8L av 9t as")}}c(1s===1r){1r++}}c(5F&&!5q&&12&&12[0]&&z.u>1w){1K.K([12[0],z.1b(1w),1w,z.u])}F.O=11.O=0;q 1K};',62,769,"||||||||||||if|||this||var||||function||||sh|return||||length|null||||str|utils|div|code|for|replace|left|else|index|true|_121|push|className|config|false|lastIndex||document|exec||getParam|name|XRegExp|new|lt|gt|indexOf|RegExp|_139|vN|part|_11f|_d3||pos|create|right|css|slice|prototype|_119|bar|_129|strings|id|_13a|source|window|_d6|script|lines|class|_da|vars|_145|_144|style|_b5|_103|_146|alert|toolbar|_149|_f4|_x|_14a|lib|obj|html|doc|tab|params|continue|_142|_c3|highlight|createElement|split|_c5|href|test|_11a|_c2|_8|_e7|width|text|_5a|_5b|min|_91|substr|value||_ec|in|innerHTML|_4f|_3c|_98|_148|_147|line|call|_6e|captureNames|toString|_f0|_75|_bc|concat|nbsp|brushes|http|_cd|attributes|while|height|wnd|appendChild|_be|_5f|_143|break|_e9|real|execute|_66|_c4|_40|_88|SyntaxHighlighter|_f9|unindent|trim|_10f|size|_13c|_13b|case|_d9|_28|_55|getMatches|_c1|_ed|brush|_61|matches|_a2|body|m2|m1|_e3|_81|_7a|_5|_80|_124|isNaN|title|undefined|_118|DIV|extended|_10b|_2|_62|_ee|_7d|gutter|_25|offsetMatches|_4e|_8e|print|_fd|throw|_fe|global|_cc|_125|gm|Math|com|_104|addFlags|_e5|_14b|_3|printFrame|fixInputString|_76|_af|font|write|_7c|regex|_b6|substring|htmlScript|_32|_b4|url|_11e|_c6|td|_49|len|_60|_ef|_22|_a7|_7b|escape|_6a|color|_blank|_ea|_4d|_4c|_e1|xmlBrush|_47|HtmlScript|close|object|link|esc|can|_5d|_b0|type|_ad|_ae|_b3|_b2|_73|_b8|_ba|_b9|_a6|span|removeChild|gi|_89|eachLine|_7e|_9d|_82|_a3|_9e|getElementsByTagName|_6b|_cb|top|_53|supply|_ce|func|_50|popup|_d0|_54|findBrush|useScriptTags|_bf|_6c|values|discoveredBrushes|win|Match|_c8|focus|_d7||_f6|_29|hide|show|_133|_2b|cache|pre|_19|_1a|viewSource|regexList|_134|_2a|originalCode|highlighterId|wrap|_27|copyToClipboard|toolbarItemHeight|_2c|_2e|_2d|toolbarItemWidth|expandSource|_141|_7|_4|from|_e|item|charAt|www|r2|_11d|join|quantifier|_113|_b|_12e|_13e|_17|_18|String|getNativeFlags|_9|_f|_d|_10|collapsed|key|_101|_ff|brushName|_fb|instanceof|_30|swf|getBrushNameCss|_100|contentWindow|content|_38|_8c|_35|_37|_24|_f5|collapse|_2f|_fa|toolbarCommands|defaults|merge|guid|syntaxhighlighter|clipboardSwf|highlighters|_6|rel|DTD|to|createButton|_a|_84|500px|measureSpace|clipboard|none|scrollbars|decoration|org|_83|0px|margin|head|align|center|userAgent|_3f|copyStyles|0099FF|help|alexgorbatchev|xhtml1|_3e|w3|_85|_48|noBrush|_5e|version|stylesheet|_65|_6d|switch|screen|flash|event|_52|attachEvent|_13f|shockwave|toLowerCase|_1e|_36|px|clipboardData|commandName|copyToClipboardConfirmation|message|aboutDialog|_78|executeCommand|_14|_16|items|_13|_12|_4b|_15|_79|navigator|_dd|get|_140|TypeError|unicode|_de|Highlighter|one|_e0|toBoolean|_df|_d8|_d5|_c7|addEvent|pP|trimFirstAndLastLines|_c9|_12d|escapeChar|process|_d1|_112|_e2|typeof|classLeft|plain|_11c|_f2|_f7|classRight|table|decorate|tr|_11b|_f8|_f1|_106|matchesSortCallback|light|_e4|createDisplayLines|parseInt|padNumber|numbers|pad|first|character|brushNotHtmlScript|_a4|processMatches|tagName|getSyntaxHighlighterScriptTags|parseParams|processTabs|matchRecursive|_b7|toArray|_9a|_a8|_a1|arguments|_a9|regexLib|processUrls|findMatches|links|defaultAdd|_bd|_93|bloggerMode|stripCData|insertSpaces|parentNode|match|args|_90|smart|when|auto|debug|processSmartTabs|multiline|removeNestedMatches|stripBrs|tabs|_117|2004|2009|data|_1c|keep|Alex|donate|2930402|development|active|_1b|highlighter|syntax|JavaScript|Copyright|multiLineDoubleQuotedString|hosted_button_id|string|scriptScriptTags|aspScriptTags|_12f|another|constructing|onclick|catch|replaceVar|sgi|flags|apply|phpScriptTags|singleLineCComments|singleLinePerlComments|multiLineCComments|spaceWidth|Gorbatchev|getKeywords|doubleQuotedString|xmlComments|forHtmlScript|multiLineSingleQuotedString|try|singleQuotedString|_131|bottom|xmlns|addPlugin|unbalanced|dtd|transitional|EN|TR|1999|xhtml|charset|utf|About|Type|Content|meta|equiv|Transitional|XHTML|your|now|Can|is|The|view|copy|find|Brush|PUBLIC|W3C|DOCTYPE|option|wasn|configured|sx|family|sticky|If|you|target|2010|382|June|like|please|webscr|cmd|_s|bin|cgi|https|paypal|4em|75em|serif|background|fff|sans|Helvetica|Geneva|Arial|000|1em|large|delimiters|xx|3em|contains|ignoreCase|xclick|always|about|_42|more|shCore|printing|alt|than|_43|max|round|250|500|_44|sort|highlighted|absolute|error|spaces|SyntaxError|ok|amp|setData|_1f|_39|cssText|position|number|IFRAME|_3a|_3b|random|1000000|_a5|getElementById|block|CDATA|htmlscript|flag|opera|1000|offsetWidth|_8a|_99|getPropertyValue|getComputedStyle|Array|the|textarea|Xml|load|open|_cf|lastIndexOf|_d4||all|on|70em|using|30em|aliases|addEventListener|replaceChild|command|printSource|no|menu|Error|flashVars|wmode|transparent|msie|classid|11cf|96b8|ae6d|d27cdb6e|clsid|allowScriptAccess|application|location|resizable|400|750|_20|_21|menubar|_26|subject|_clipboard|onmouseover|onmouseout|param|444553540000|nogutter|embed|macromedia|movie|swflash|_10a|valueNames||_10c|pub|src|conf|highlighter_|cab|download|cabs|codebase|important|_34|_33".split("|"),0,{}));;
SyntaxHighlighter.brushes.Bash=function(){var keywords="if fi then elif else for do done until while break continue case function return in eq ne gt lt ge le";var commands="alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot"+"cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df "+"diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval "+"exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format "+"free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig "+"import install join kill less let ln local locate logname logout look lpc lpr lprint "+"lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools "+"mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap "+"printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice "+"remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown "+"sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time "+"times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias "+"uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir "+"vi watch wc whereis which who whoami Wget xargs yes";this.findMatches=function(regexList,code){code=code.replace(/&gt;/g,">").replace(/&lt;/g,"<");this.code=code;return SyntaxHighlighter.Highlighter.prototype.findMatches.apply(this,[regexList,code])};this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(commands),"gm"),css:"functions"}]};SyntaxHighlighter.brushes.Bash.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Bash.aliases=["bash","shell"];;
SyntaxHighlighter.brushes.Cpp=function(){var datatypes="ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR "+"DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH "+"HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP "+"HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY "+"HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT "+"HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE "+"LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF "+"LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR "+"LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR "+"PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT "+"PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 "+"POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR "+"PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 "+"PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT "+"SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG "+"ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM "+"char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t "+"clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS "+"FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t "+"__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t "+"jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler "+"sig_atomic_t size_t _stat __stat64 _stati64 terminate_function "+"time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf "+"va_list wchar_t wctrans_t wctype_t wint_t signed";var keywords="break case catch class const __finally __exception __try "+"const_cast continue private public protected __declspec "+"default delete deprecated dllexport dllimport do dynamic_cast "+"else enum explicit extern if for friend goto inline "+"mutable naked namespace new noinline noreturn nothrow "+"register reinterpret_cast return selectany "+"sizeof static static_cast struct switch template this "+"thread throw true false try typedef typeid typename union "+"using uuid virtual void volatile whcar_t while";var functions="assert isalnum isalpha iscntrl isdigit isgraph islower isprint"+"ispunct isspace isupper isxdigit tolower toupper errno localeconv "+"setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod "+"frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf "+"longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start "+"clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen "+"fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell "+"fwrite getc getchar gets perror printf putc putchar puts remove "+"rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam "+"ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol "+"bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs "+"mbtowc qsort rand realloc srand strtod strtol strtoul system "+"wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr "+"strcmp strcoll strcpy strcspn strerror strlen strncat strncmp "+"strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime "+"clock ctime difftime gmtime localtime mktime strftime time";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^ *#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(datatypes),"gm"),css:"color1 bold"},{regex:new RegExp(this.getKeywords(functions),"gm"),css:"functions bold"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword bold"}]};SyntaxHighlighter.brushes.Cpp.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Cpp.aliases=["cpp","c"];;
SyntaxHighlighter.brushes.CSharp=function(){var keywords="abstract as base bool break byte case catch char checked class const "+"continue decimal default delegate do double else enum event explicit "+"extern false finally fixed float for foreach get goto if implicit in int "+"interface internal is lock long namespace new null object operator out "+"override params private protected public readonly ref return sbyte sealed set "+"short sizeof stackalloc static string struct switch this throw true try "+"typeof uint ulong unchecked unsafe ushort using virtual void while";function fixComments(match,regexInfo){var css=match[0].indexOf("///")==0?"color1":"comments";return[new SyntaxHighlighter.Match(match[0],match.index,css)]}this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,func:fixComments},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:/@"(?:[^"]|"")*"/g,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"},{regex:/\bpartial(?=\s+(?:class|interface|struct)\b)/g,css:"keyword"},{regex:/\byield(?=\s+(?:return|break)\b)/g,css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.CSharp.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.CSharp.aliases=["c#","c-sharp","csharp"];;
SyntaxHighlighter.brushes.CSS=function(){function getKeywordsCSS(str){return"\\b([a-z_]|)"+str.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b"}function getValuesCSS(str){return"\\b"+str.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b"}var keywords="ascent azimuth background-attachment background-color background-image background-position "+"background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top "+"border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color "+"border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width "+"border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color "+"content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display "+"elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font "+"height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top "+"margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans "+"outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page "+"page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position "+"quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress "+"table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em "+"vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index";var values="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder "+"both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed "+"continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double "+"embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia "+"gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic "+"justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha "+"lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower "+"navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset "+"outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side "+"rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow "+"small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize "+"table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal "+"text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin "+"upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow";var fonts="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";this.regexList=[{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\#[a-fA-F0-9]{3,6}/g,css:"value"},{regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,css:"value"},{regex:/!important/g,css:"color3"},{regex:new RegExp(getKeywordsCSS(keywords),"gm"),css:"keyword"},{regex:new RegExp(getValuesCSS(values),"g"),css:"value"},{regex:new RegExp(this.getKeywords(fonts),"g"),css:"color1"}];this.forHtmlScript({left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi})};SyntaxHighlighter.brushes.CSS.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.CSS.aliases=["css"];;
SyntaxHighlighter.brushes.Fortran=function(){var funcs="abs achar acos acosd adjustl adjustr aimag aimax0 aimin0 aint ajmax0 ajmin0 akmax0 akmin0 all allocated alog alog10 amax0 amax1 amin0 amin1 amod anint any asin asind associated atan atan2 atan2d atand bitest bitl bitlr bitrl bjtest bit_size bktest break btest cabs ccos cdabs cdcos cdexp cdlog cdsin cdsqrt ceiling cexp char clog cmplx conjg cos cosd cosh count cpu_time cshift csin csqrt dabs dacos dacosd dasin dasind datan datan2 datan2d datand date date_and_time dble dcmplx dconjg dcos dcosd dcosh dcotan ddim dexp dfloat dflotk dfloti dflotj digits dim dimag dint dlog dlog10 dmax1 dmin1 dmod dnint dot_product dprod dreal dsign dsin dsind dsinh dsqrt dtan dtand dtanh eoshift epsilon errsns exp exponent float floati floatj floatk floor fraction free huge iabs iachar iand ibclr ibits ibset ichar idate idim idint idnint ieor ifix iiabs iiand iibclr iibits iibset iidim iidint iidnnt iieor iifix iint iior iiqint iiqnnt iishft iishftc iisign ilen imax0 imax1 imin0 imin1 imod index inint inot int int1 int2 int4 int8 iqint iqnint ior ishft ishftc isign isnan izext jiand jibclr jibits jibset jidim jidint jidnnt jieor jifix jint jior jiqint jiqnnt jishft jishftc jisign jmax0 jmax1 jmin0 jmin1 jmod jnint jnot jzext kiabs kiand kibclr kibits kibset kidim kidint kidnnt kieor kifix kind kint kior kishft kishftc kisign kmax0 kmax1 kmin0 kmin1 kmod knint knot kzext lbound leadz len len_trim lenlge lge lgt lle llt log log10 logical lshift malloc matmul max max0 max1 maxexponent maxloc maxval merge min min0 min1 minexponent minloc minval mod modulo mvbits nearest nint not nworkers number_of_processors pack popcnt poppar precision present product radix random random_number random_seed range real repeat reshape rrspacing rshift scale scan secnds selected_int_kind selected_real_kind set_exponent shape sign sin sind sinh size sizeof sngl snglq spacing spread sqrt sum system_clock tan tand tanh tiny transfer transpose trim ubound unpack verify";var keywords="access action advance allocatable allocate apostrophe assign assignment associate asynchronous backspace bind blank blockdata call case character class close common complex contains continue cycle data deallocate decimal delim default dimension direct do dowhile double doubleprecision else elseif elsewhere encoding end endassociate endblockdata enddo endfile endforall endfunction endif endinterface endmodule endprogram endselect endsubroutine endtype endwhere entry eor equivalence err errmsg exist exit external file flush fmt forall form format formatted function go goto id if implicit in include inout integer inquire intent interface intrinsic iomsg iolength iostat kind len logical module name named namelist nextrec nml none nullify number only open opened operator optional out pad parameter pass pause pending pointer pos position precision print private program protected public quote read readwrite real rec recl recursive result return rewind save select selectcase selecttype sequential sign size stat status stop stream subroutine submodule target then to type unformatted unit use value volatile wait where while write";this.regexList=[{regex:new RegExp("C (.*)$","gmi"),css:"comment"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"color2"},{regex:new RegExp(this.getKeywords(keywords),"gmi"),css:"keyword"}];this.CssClass="dp-fortran"};SyntaxHighlighter.brushes.Fortran.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Fortran.aliases=["fortran"];;
SyntaxHighlighter.brushes.Java=function(){var keywords="abstract assert boolean break byte case catch char class const "+"continue default do double else enum extends "+"false final finally float for goto if implements import "+"instanceof int interface long native new null "+"package private protected public return "+"short static strictfp super switch synchronized this throw throws true "+"transient try void volatile while";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:/\/\*(?!\*\/)\*[\s\S]*?\*\//gm,css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:"color1"},{regex:/\@interface\b/g,css:"color2"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"}];this.forHtmlScript({left:/(&lt;|<)%[@!=]?/g,right:/%(&gt;|>)/g})};SyntaxHighlighter.brushes.Java.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Java.aliases=["java"];;
SyntaxHighlighter.brushes.JScript=function(){var keywords="break case catch continue "+"default delete do else false  "+"for function if in instanceof "+"new null return super switch "+"this throw true try typeof var while with";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags)};SyntaxHighlighter.brushes.JScript.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.JScript.aliases=["js","jscript","javascript"];;
SyntaxHighlighter.brushes.Perl=function(){var funcs="abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr "+"chroot close closedir connect cos crypt defined delete each endgrent "+"endhostent endnetent endprotoent endpwent endservent eof exec exists "+"exp fcntl fileno flock fork format formline getc getgrent getgrgid "+"getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr "+"getnetbyname getnetent getpeername getpgrp getppid getpriority "+"getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid "+"getservbyname getservbyport getservent getsockname getsockopt glob "+"gmtime grep hex index int ioctl join keys kill lc lcfirst length link "+"listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd "+"oct open opendir ord pack pipe pop pos print printf prototype push "+"quotemeta rand read readdir readline readlink readpipe recv rename "+"reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl "+"semget semop send setgrent sethostent setnetent setpgrp setpriority "+"setprotoent setpwent setservent setsockopt shift shmctl shmget shmread "+"shmwrite shutdown sin sleep socket socketpair sort splice split sprintf "+"sqrt srand stat study substr symlink syscall sysopen sysread sysseek "+"system syswrite tell telldir time times tr truncate uc ucfirst umask "+"undef unlink unpack unshift utime values vec wait waitpid warn write";var keywords="bless caller continue dbmclose dbmopen die do dump else elsif eval exit "+"for foreach goto if import last local my next no our package redo ref "+"require return sub tie tied unless untie until use wantarray while";this.regexList=[{regex:new RegExp("#[^!].*$","gm"),css:"comments"},{regex:new RegExp("^\\s*#!.*$","gm"),css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp("(\\$|@|%)\\w+","g"),css:"variable"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)};SyntaxHighlighter.brushes.Perl.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Perl.aliases=["perl","Perl","pl"];;
SyntaxHighlighter.brushes.Php=function(){var funcs="abs acos acosh addcslashes addslashes "+"array_change_key_case array_chunk array_combine array_count_values array_diff "+"array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill "+"array_filter array_flip array_intersect array_intersect_assoc array_intersect_key "+"array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map "+"array_merge array_merge_recursive array_multisort array_pad array_pop array_product "+"array_push array_rand array_reduce array_reverse array_search array_shift "+"array_slice array_splice array_sum array_udiff array_udiff_assoc "+"array_udiff_uassoc array_uintersect array_uintersect_assoc "+"array_uintersect_uassoc array_unique array_unshift array_values array_walk "+"array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert "+"basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress "+"bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir "+"checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists "+"closedir closelog copy cos cosh count count_chars date decbin dechex decoct "+"deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log "+"error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded "+"feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents "+"fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype "+"floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf "+"fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname "+"gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt "+"getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext "+"gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set "+"interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double "+"is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long "+"is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault "+"is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br "+"parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir "+"round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split "+"str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes "+"stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk "+"strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime "+"strtoupper strtr strval substr substr_compare";var keywords="and or xor array as break case "+"cfunction class const continue declare default die do else "+"elseif enddeclare endfor endforeach endif endswitch endwhile "+"extends for foreach function include include_once global if "+"new old_function return static switch use require require_once "+"var while abstract interface public implements extends private protected throw";var constants="__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\$\w+/g,css:"variable"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(constants),"gmi"),css:"constants"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)};SyntaxHighlighter.brushes.Php.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Php.aliases=["php"];;
SyntaxHighlighter.brushes.Plain=function(){};SyntaxHighlighter.brushes.Plain.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Plain.aliases=["text","plain"];;
SyntaxHighlighter.brushes.Python=function(){var keywords="and assert break class continue def del elif else "+"except exec finally for from global if import in is "+"lambda not or pass print raise return try yield while";var funcs="__import__ abs all any apply basestring bin bool buffer callable "+"chr classmethod cmp coerce compile complex delattr dict dir "+"divmod enumerate eval execfile file filter float format frozenset "+"getattr globals hasattr hash help hex id input int intern "+"isinstance issubclass iter len list locals long map max min next "+"object oct open ord pow print property range raw_input reduce "+"reload repr reversed round set setattr slice sorted staticmethod "+"str sum super tuple type type unichr unicode vars xrange zip";var special="None True False self cls class_";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:/^\s*@\w+/gm,css:"decorator"},{regex:/(['\"]{3})([^\1])*?\1/gm,css:"comments"},{regex:/"(?!")(?:\.|\\\"|[^\""\n])*"/gm,css:"string"},{regex:/'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,css:"string"},{regex:/\+|\-|\*|\/|\%|=|==/gm,css:"keyword"},{regex:/\b\d+\.?\w*/g,css:"value"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(special),"gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Python.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Python.aliases=["py","python"];;
SyntaxHighlighter.brushes.R=function(){var keywords="if else repeat while function for in next break TRUE FALSE NULL Inf NaN NA NA_integer_ NA_real_ NA_complex_ NA_character_";var constants="LETTERS letters month.abb month.name pi";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(constants),"gm"),css:"constants"},{regex:/[\w._]+[ \t]*(?=\()/gm,css:"functions"}]};SyntaxHighlighter.brushes.R.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.R.aliases=["r","s","splus"];;
SyntaxHighlighter.brushes.Ruby=function(){var keywords="alias and BEGIN begin break case class def define_method defined do each else elsif "+"END end ensure false for if in module new next nil not or raise redo rescue retry return "+"self super then throw true undef unless until when while yield";var builtins="Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload "+"Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol "+"ThreadGroup Thread Time TrueClass";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b[A-Z0-9_]+\b/g,css:"constants"},{regex:/:[a-z][A-Za-z0-9_]*/g,css:"color2"},{regex:/(\$|@@|@)\w+/g,css:"variable bold"},{regex:new RegExp(this.getKeywords(keywords),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(builtins),"gm"),css:"color1"}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)};SyntaxHighlighter.brushes.Ruby.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Ruby.aliases=["ruby","rails","ror","rb"];;
SyntaxHighlighter.brushes.Sql=function(){var funcs="abs avg case cast coalesce convert count current_timestamp "+"current_user day isnull left lower month nullif replace right "+"session_user space substring sum system_user upper user year";var keywords="absolute action add after alter as asc at authorization begin bigint "+"binary bit by cascade char character check checkpoint close collate "+"column commit committed connect connection constraint contains continue "+"create cube current current_date current_time cursor database date "+"deallocate dec decimal declare default delete desc distinct double drop "+"dynamic else end end-exec escape except exec execute false fetch first "+"float for force foreign forward free from full function global goto grant "+"group grouping having hour ignore index inner insensitive insert instead "+"int integer intersect into is isolation key last level load local max min "+"minute modify move name national nchar next no numeric of off on only "+"open option order out output partial password precision prepare primary "+"prior privileges procedure public read real references relative repeatable "+"restrict return returns revoke rollback rollup rows rule schema scroll "+"second section select sequence serializable set size smallint static "+"statistics table temp temporary then time timestamp to top transaction "+"translation trigger true truncate uncommitted union unique update values "+"varchar varying view when where with work";var operators="all and any between cross in join like not null or outer some";this.regexList=[{regex:/--(.*)$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"color2"},{regex:new RegExp(this.getKeywords(operators),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(keywords),"gmi"),css:"keyword"}]};SyntaxHighlighter.brushes.Sql.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Sql.aliases=["sql"];;
SyntaxHighlighter.brushes.Xml=function(){function process(match,regexInfo){var constructor=SyntaxHighlighter.Match,code=match[0],tag=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(code),result=[];if(match.attributes!=null){var attributes,regex=new XRegExp("(?<name> [\\w:\\-\\.]+)"+"\\s*=\\s*"+"(?<value> \".*?\"|'.*?'|\\w+)","xg");while((attributes=regex.exec(code))!=null){result.push(new constructor(attributes.name,match.index+attributes.index,"color1"));result.push(new constructor(attributes.value,match.index+attributes.index+attributes[0].indexOf(attributes.value),"string"))}}if(tag!=null)result.push(new constructor(tag.name,match.index+tag[0].indexOf(tag.name),"keyword"));return result}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:process}]};SyntaxHighlighter.brushes.Xml.prototype=new SyntaxHighlighter.Highlighter;SyntaxHighlighter.brushes.Xml.aliases=["xml","xhtml","xslt","html"];;
