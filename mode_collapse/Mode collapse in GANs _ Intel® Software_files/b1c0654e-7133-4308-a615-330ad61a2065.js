window.ClickTaleGlobal=window.ClickTaleGlobal||{},ClickTaleGlobal.init=window.ClickTaleGlobal.init||{},function(){function t(){this.started=!1,this.stopCallbacks=[],this.readyCallbacks=[],this.startCallbacks=[],this.xhrCreatedCallback=function(){},this.shouldStartMonitorCallback=function(){}}function n(t){return"function"==typeof t}function o(t){return!!t&&t.constructor.prototype===Object.prototype}function i(t,n){n=n||{};for(var a in t){var e=t[a];e instanceof Array?n[a]=e.slice():o(e)?n[a]=i(e,n[a]):n[a]=e}return n}function a(o,i,a){var e=t.instance;return e&&e.monitor&&n(e.monitor[o])?e.monitor[o].apply(e.monitor,i):!!n(a)&&a()}function e(){return t.get().started}t.onReady=function(n,i){var a,e=t.get(),c=e.shouldStartMonitorCallback();if("undefined"!=typeof c&&c===!1)return void(t.instance=void 0);var r=e.readyCallbacks,l=r.length;e.diagnose("onready");for(var s=0;s<l;s++)r[s]();if(!e.started){var d,u=e.config,f=o(n)&&!n.protocol&&!n.host,g=function(t){e.started=!0,e.addApplication(t),e.startCallbacks.forEach(function(t){t()})};f&&(n.onStartCallback=g,d=o(i),d?u=i:d=!!u),a=new ClickTaleMonitor.App(192,f?n:g,d?u:n,d?void 0:i),a.onStop(function(n){e&&(e.stopCallbacks.forEach(function(t){t()}),t.instance=void 0)})}};var c=t.prototype;if(c.addApplication=function(t){this.monitor=t},c.configure=function(t){this.config=i(t,this.config)},c.onStart=function(t){this.monitor&&this.monitor.isMonitoring()?t():this.startCallbacks.push(t)},c.onStop=function(t){this.stopCallbacks.push(t)},c.onReady=function(t){this.readyCallbacks.push(t)},c.onXhrCreated=function(t){this.xhrCreatedCallback=t},c.shouldStartMonitor=function(t){this.shouldStartMonitorCallback=t},c.diagnose=function(t){var o=ClickTaleGlobal.diagnostics,i=o&&o.invoke;if(n(i))i(o.monitor,t);else{var a=o&&o.monitor,e=a&&a[t];n(e)&&e()}},t.get=function(){return t.instance||(t.instance=new t)},Object.defineProperty)try{Object.defineProperty(t,"config",{get:function(){return t.instance?t.instance.config:null},enumerable:!0,configurable:!0})}catch(t){}var r={stop:function(){a("dispose")},restart:function(n,o){a("restart",[n,o],function(){return ClickTaleMonitor.stop(),t.onReady(n,o),!0})},shutdown:function(){a("shutdown")},addEvent:function(t){a("addEvent",[t])},addPageTag:function(t,n,o){a("addPageTag",[t,3,o||n])},ctData:function(t){a("ctData",[t])},addDynamicAction:function(t,n){a("addPageTag",[t,4,n])},isMonitoring:function(){return!!a("isMonitoring")},getPid:function(){return 192},getState:function(){return e()?a("getState"):"pending"},endVisit:function(){a("endVisit")},Settings:t},l=window.ClickTaleMonitor||{};for(var s in r)l[s]=r[s];window.ClickTaleMonitor=l}(),ClickTaleGlobal.init.pmc=function(t){function n(t){if(document.documentElement.namespaceURI)try{return document.createElementNS("http://www.w3.org/1999/xhtml",t)}catch(t){}return document.createElement(t)}function o(t){var o,i,a=ClickTaleMonitor.Settings.get();onloaded=function(){o.onreadystatechange=o.onload=null,a.diagnose("onloaded")},(i=document.body||document.head)&&(o=n("script"),o.onreadystatechange=function(){"loaded"===o.readyState&&onloaded()},o.onload=onloaded,o.src=t,o.async=!0,o.type="text/javascript",o.crossOrigin="anonymous",a.diagnose("onloading"),i.appendChild(o))}ClickTaleMonitor.Settings.get().configure(t),o("https://cdnssl.clicktale.net/www/tc/monitor-latest.js")};;
// Copyright 2006-2018 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};

	
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["HTHgVuHDZhJVT","HyRhPuaLshJVT","isVNZhPuaLshJVT","iBPskLyZhPuaLshJVT","JoHuuLsayHPuPuNhPuaLshJVT","JsVBkiBPskLyZhPuaLshJVT","JVTTBuPaPLZhPuaLshJVT","JVuuLJahPuaLshJVT","kVDusVHkJLuaLyhPuaLshJVT","LTiLkkLkhJVTTBuPaPLZhPuaLshJVT","LTLHAwVPuaZhPuaLsaLJouVsVNFwyVcPkLyhJVT","LuNHNLhPuaLshJVT","NHTLhPuaLshJVT","NHTLwsHFhPuaLshJVT","PuaLshJVT","PuaLsPuZPkLhPuaLshJVT","PVaLcLuaZhPuaLshJVT","PXhPuaLshJVhqw","PXhPuaLshJVhBR","PXhPuaLshJVT","PXhPuaLshJVThHB","PXhPuaLshJVThiy","PXhPuaLshJVThay","PXhPuaLshkL","PXhPuaLshLZ","PXhPuaLshmy","PXhPuaLshPu","PXhPuaLshPa","PXhPuaLshsH","PXhPuaLshus","PXhPuaLshws","PXhPuaLshyB","PawLLyuLaDVyRhPuaLshJVT","qViZhPuaLshJVT","THPHAkLchkLsHPyAHuHsFaPJZhJVT","TFZBwwVyahHsaLyHhJVT","uLDZyVVThPuaLshJVT","VuZPaLIhyLZLHyJoPuaLshJVT","wsHuhZLLRhPuaLshJVT","wsHFLyZhiyPNoaJVcLhuLa","wyVJLZZVyTHaJohPuaLshJVT","yLHsZLuZLHwwhPuaLshJVT","yLNPZayHaPVuJLuaLyhPuaLshJVT","yPNJoHssLuNLhPuaLshJVT","ZoVwPVaTHyRLawsHJLhJVT","ZuHwZoVahPuaLshJVT","ZVmaDHyLhPuaLshJVT","ZVmaDHyLhZLLRhPuaLshJVT","ZVsBaPVuZkPyLJaVyFhPuaLshJVT","ZaHNPuNhLewsVyLPuaLshJVT","ZBwwVyaaPJRLaZhPuaLshJVT","ZFZaLTkLZPNuhHsaLyHhJVT","aLJowyVcPkLyhPuaLshJVT","aoBukLyiVsaaLJouVsVNFhuLa","DLiPuHyhPuaLshJVT","HsaLyHhJVhqw","HsaLyHhJVT","HsaLyHhJVThJu","HTLyPJHZNyLHaLZaTHRLyZhJVT","iBFHsaLyHhJVT","PuZPNoahaLJo","PuaLshJH","PuaLshJu","PuaLshJuhJJNZsihJVT","PuaLshJVhPk","PuaLshJVhPs","PuaLshJVhqw","PuaLshJVhRy","PuaLshJVhBR","PuaLshJVhgH","PuaLshJVT","PuaLshJVThHB","PuaLshJVThiy","PuaLshJVThay","PuaLshJVThaD","PuaLshkL","PuaLshLZ","PuaLshLB","PuaLshmy","PuaLshPL","PuaLshPu","PuaLshPa","PuaLshsH","PuaLshTL","PuaLshTF","PuaLshus","PuaLshwo","PuaLshws","PuaLshyB","PuaLshZL","PuaLshZN","PuaLshBH","PuaLshcu","PuaLsmyLLwyLZZhJVT","ZaBkFhPuaLshJVT","aoHPsHukhPuaLshJVT","DDDAZZshPuaLshJVT"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

	var autoMonitorConfig;
	ClickTaleGlobal.diagnostics=function(){function n(n,t,o){if(n&&t)for(var r in T){var e=T[r];e.collect(t)&&e.errors.push({message:n,url:t,lineno:o})}return!!S&&S(n,t,o)}function t(n){return"function"==typeof n}function o(){return performance?performance.now():Date.now()}function r(n){++n.sampled>n.repeats?g(n.name):e(n)}function e(n){var t=n.reporter()||{},o=n.errors.splice(0),r=n.level,e=n.url,l={loaded:n.loaded,ready:n.ready,started:n.started,level:o.length?"error":r,errors:encodeURIComponent(JSON.stringify(o))};e&&r!==k&&(n.timeToLoad>0&&(l.timeToLoad=n.timeToLoad),a(n,i(i(e+"?t=log&p="+n.pid,l),t),o))}function i(n,t){for(var o in t)n+="&"+I[o]+"="+t[o];return n}function a(n,o,r){var e=L.sendBeacon,i=function(n){n.errors=r.concat(n.errors)};if(t(e))e.call(L,o)||i(n);else{var a=new Image;a.onerror=a.ontimeout=function(){i(n)},a.timeout=3e4,a.src=o}}function l(n){T[n]&&(T[n].ready=!0)}function c(n){var t=T[n];t&&(t.loaded=!0,t.timeToLoad=t.loadStart?o()-t.loadStart:0),T[n]=t}function d(n){T[n]&&(T[n].loading=!0,T[n].loadStart=o())}function u(n){T[n]&&(T[n].started=!0)}function f(n){T[n]&&(T[n].starting=!0)}function s(n,o,r){var e=window.ClickTaleMonitor;e&&(I.monitorState=40,I.isMonitoring=42,t(e.getPid)&&v(M,e.getPid(),n||"https://conductor.clicktale.net/monitor",/\/monitor-(latest|[\d\.]+).*\.js$/i,function(){var n=t(e.getState)&&e.getState();return!this.errors.length&&n.match(/^(chunk|end)$/i)&&(this.level=k),{monitorState:n,isMonitoring:t(e.isMonitoring)&&e.isMonitoring()}},o||5e3,r||1))}function m(){g(M)}function v(t,o,r,e,i,a,l){T[t]=T[t]||new p(t,o,r,e,i,a,l),y||(S=window.onerror,window.onerror=n,y=!0)}function g(n){var t=T[n];t&&(clearInterval(t.sampler),delete T[n]);for(var o in T)return;y=!1}function p(n,t,o,e,i,a,l){var c=this;c.url=o,c.pid=t,c.errors=[],c.name=n,c.level="alert",c.repeats=l,c.loadStart=c.sampled=c.timeToLoad=0,c.loading=c.loaded=c.starting=c.started=c.ready=!1,c.reporter=function(){return i.call(c)},c.collect=function(n){return!!n.match(e)},c.sampler=setInterval(function(){r(c)},a)}function h(n,t,o){var r=n&&n.name,e=T[r];if(e){var i=e[t];"function"==typeof i&&i.apply(this,o)}}function w(n,t,o){return{on:t,off:o,onready:function(){l(n)},onloaded:function(){c(n)},onloading:function(){d(n)},onstarted:function(){u(n)},onstarting:function(){f(n)}}}var y,S,T={},L=navigator,k="info",M="monitor",I={level:0,loaded:2,ready:4,started:6,errors:8,timeToLoad:12};return{monitor:w(M,s,m),invoke:h}}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2018 ClickTale Ltd., US Patent Pending
// PID: 78
// WR destination: www41
// WR version: latest
// Recording ratio: 1

(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var ct2Callback, isRecorderReady;
    var dependencies = scriptSyncTokens.slice(0);
    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);
    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i<length;i++){if(array[i]===value){return i}}return -1}})();
    function isValidToken(token) {
        if (indexOf(scriptSyncTokens, token) > -1) {
            var index = indexOf(dependencies, token);

            if (index > -1) {
                dependencies.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    clickTaleOnReadyList.push(function () {
        if (ct2Callback) {
            ct2Callback();
        }

        isRecorderReady = true;
    });

    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };

    ClickTaleGlobal.scripts.integration = {
        onReady: function (callback) {
            if (isRecorderReady) {
                callback();
            }
            else {
                ct2Callback = callback;
            }
        }
    };
})();
(function(){}());

window.ClickTaleGlobal.VisualEditorDesignerExists = !!17;

window.ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	



// Start of user-defined pre WR code (PreLoad)
//PTC Code Version 8

window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.PTC.Integrations = window.ClickTaleSettings.PTC.Integrations || [];
window.ClickTaleSettings.Compression = window.ClickTaleSettings.Compression || {};
if (document.readyState === 'complete') {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UseTransport = true;
window.ClickTaleUIDCookieName = 'WRUIDAWS';

window.ClickTaleSettings.CheckAgentSupport = function(f, v) {
    if (v.t == v.ED) {
        window.ClickTaleSettings.Compression.Async = false;
    }
    if (v.t == v.IE && v.v <= 8) {
        window.ClickTaleSettings.PTC.okToRunPCC = false;
        return false;
    } else {
        if (!(v.t == v.IE && v.v <= 10)) {
            window.ClickTaleSettings.PTC.EnableChangeMonitor = true;
            window.ClickTaleSettings.PTC.ConfigChangeMonitor();
        }
        var fv = f(v);
        window.ClickTaleSettings.PTC.okToRunPCC = fv;
        return fv;
    }
};

//INTEL-40
if (location.href.indexOf('https://www.intel.com/buy/us/en/') != -1) {
    var innerScrollElem = document.querySelector('.mrm-outer-container');
    if (innerScrollElem) {
        var sHeight = innerScrollElem.scrollHeight;
        var sWidth = innerScrollElem.scrollWidth;
        if (sHeight && sWidth) {
            window.ClickTaleSettings.ScrollDimensions = {
                Width: sWidth,
                Height: sHeight
            };
        }
    }
}

window.ClickTaleSettings.PTC.startsWith = function(strToTest, str) {
    return strToTest.lastIndexOf(str, 0) === 0;
};

window.ClickTaleSettings.Protocol = {
    Method: "ImpactRecorder"
};

window.ClickTaleSettings.Proxy = {
    WR: "ing-district.clicktale.net/ctn_v2/",
    ImageFlag: "ing-district.clicktale.net/ctn_v2/"
};

window.ClickTaleSettings.PTC.RulesObj = [{
    selector: "input[type=\"text\"], input[type=\"tel\"], input[type=\"email\"]",
    changeMon: {
        Attributes: ['value'],
        Text: false
    },
    rewriteApi: {
        Attributes: ['value'],
        Text: false
    }
}, {
    selector: ".ctHidden",
    changeMon: {
        Attributes: ['value'],
        Text: true
    },
    rewriteApi: {
        Attributes: ['value'],
        Text: true
    }
}];

window.ClickTaleSettings.PTC.RulesObjRemoveEls = [];

;
(function() {
    if (typeof window.ClickTalePIISelector === 'string' && window.ClickTalePIISelector != '') {
        try {
            var domNodes = document.querySelectorAll(window.ClickTalePIISelector);
            if (domNodes) {
                window.ClickTaleSettings.PTC.RulesObj.push({
                    selector: window.ClickTalePIISelector,
                    changeMon: {
                        Attributes: ['value'],
                        Text: true
                    },
                    rewriteApi: {
                        Attributes: ['value'],
                        Text: true
                    }
                });
            }
        } catch (err) {}
    }
})();

window.ClickTaleSettings.PTC.cloneNodeIE9 = function(node) {
    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);
    var child = node.firstChild;
    while (child) {
        var nodeName = child.nodeName.toLowerCase();
        if (nodeName == 'script') {
            var script = document.createElement('script');
            clone.appendChild(script);
        } else if (window.ClickTaleSettings.PTC.cloneNodeIE9.badEls[nodeName]) {
            var newN = document.createElement(nodeName);
            var attributes = child.attributes;
            var attrLength = attributes.length;
            for (var i = 0; i < attrLength; i++) {
                var attr = attributes[i];
                if (!/[,'"{};\.]/.test(attr.nodeName)) {
                    newN.setAttribute('ctdep-' + attr.nodeName, attr.nodeValue);
                }
            }
            clone.appendChild(newN);
        } else {
            clone.appendChild(window.ClickTaleSettings.PTC.cloneNodeIE9(child));
        }
        child = child.nextSibling;
    }
    return clone;
}

window.ClickTaleSettings.PTC.cloneNodeIE9.badEls = {
    'iframe': true,
    'img': true,
    'source': true
};

window.ClickTaleSettings.PTC.ConfigChangeMonitor = function() {

    if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {

        window.ClickTaleSettings.XHRWrapper = {
            Enable: false
        };

        var script = document.createElement("SCRIPT");
        script.src = (document.location.protocol === "https:" ? "https://cdnssl." : "http://cdn.") + "clicktale.net/www/ChangeMonitor-latest.js";
        document.body.appendChild(script);

        window.ClickTaleSettings.ChangeMonitor = {
            Enable: true,
            LiveExclude: true,
            AddressingMode: "id",
            OnReadyHandler: function(changeMonitor) {
                changeMonitor.observe();

                var CMRemrule = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
                if (CMRemrule) {
                    for (var i = 0; i < CMRemrule.length; i++) {
                        var rule = CMRemrule[i];
                        var CMlocation = rule['location'];
                        if ((!CMlocation || (CMlocation && document.location[CMlocation['prop']].toLowerCase().search(CMlocation.search) != -1))) {
                            if (rule.changeMon) {
                                changeMonitor.exclude(rule.changeMon);
                            }
                            if (rule.changeMonLive) {
                                changeMonitor.exclude({
                                    selector: rule.changeMonLive,
                                    multiple: true
                                });
                            }
                        }
                    }
                }
            },
            OnBeforeReadyHandler: function(settings) {
                settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;
                return settings;
            },
            Filters: {
                MaxBufferSize: 1000000,
                MaxElementCount: 10000
            },
            PII: {
                Text: [],
                Attributes: []
            }
        }

        window.ClickTaleSettings.ChangeMonitor.AutoExclude = {
            Enable: true,
            Repeats: 10,
            Interval: 200
        };

        var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
        if (RulesObj) {
            window.ClickTaleSettings.ChangeMonitor.PII.Text = window.ClickTaleSettings.ChangeMonitor.PII.Text || [];
            window.ClickTaleSettings.ChangeMonitor.PII.Attributes = window.ClickTaleSettings.ChangeMonitor.PII.Attributes || [];
            for (var i = 0; i < RulesObj.length; i++) {
                var CMrule = RulesObj[i]['changeMon'];
                var CMlocation = RulesObj[i]['location'];
                if (!CMrule || (CMlocation && document.location[CMlocation['prop']].toLowerCase().search(CMlocation.search) === -1)) {
                    continue;
                }
                var selector = RulesObj[i]['selector'];
                var attributesArr = CMrule.Attributes;
                if (attributesArr instanceof Array) {
                    window.ClickTaleSettings.ChangeMonitor.PII.Attributes.push({
                        selector: selector,
                        transform: (function(attributesArr) {
                            return function(el) {
                                var attrs = el.attributes;
                                var attrsToReturn = {}
                                for (var i = 0; i < attrs.length; i++) {
                                    var name = attrs[i].nodeName;
                                    attrsToReturn[name] = attrs[i].nodeValue;
                                }
                                for (var u = 0; u < attributesArr.length; u++) {
                                    var attr = attributesArr[u];
                                    var attrib = el.getAttribute(attr);
                                    if (typeof attrib === 'string') {
                                        attrsToReturn[attr] = attrib.replace(/\w/g, '-');
                                    }
                                }

                                return attrsToReturn;
                            }
                        })(attributesArr)
                    });
                }
                if (CMrule.Text) {
                    window.ClickTaleSettings.ChangeMonitor.PII.Text.push({
                        selector: selector,
                        transform: function(el) {
                            return el.textContent.replace(/\w/g, '-');
                        }
                    });
                }
            }
        }
    }
};

window.ClickTaleSettings.Compression = {
    Method: function() {
        return "deflate";
    }
};

window.ClickTaleSettings.Transport = {
    Legacy: false,
    MaxConcurrentRequests: 5
};

window.ClickTaleSettings.RewriteRules = {
    OnBeforeRewrite: function(rewriteApi) {
        var bodyClone = ClickTaleSettings.PTC.cloneNodeIE9(document.documentElement);

        if (window.ClickTaleSettings.PTC.RulesObj) {
            rewriteApi.add(function(buffer) {

                var RulesObj = window.ClickTaleSettings.PTC.RulesObj;
                for (var i = 0; i < RulesObj.length; i++) {
                    var rewriteApirule = RulesObj[i]['rewriteApi'];
                    var rewriteApilocation = RulesObj[i]['location'];
                    if (!rewriteApirule || (rewriteApilocation && document.location[rewriteApilocation['prop']].toLowerCase().search(rewriteApilocation.search) === -1)) {
                        continue;
                    }
                    var selector = RulesObj[i]['selector'];
                    var elements = bodyClone.querySelectorAll(selector);

                    Array.prototype.forEach.call(elements, function(el, ind) {
                        var attributesArr = rewriteApirule.Attributes;
                        if (attributesArr instanceof Array) {

                            for (var u = 0; u < attributesArr.length; u++) {
                                var attr = attributesArr[u];
                                var attrib = el.getAttribute(attr);
                                if (typeof attrib === 'string') {
                                    el.setAttribute(attr, attrib.replace(/\w/g, '-'));
                                }
                            }

                        }
                        if (rewriteApirule.Text) {
                            var children = el.childNodes;
                            Array.prototype.forEach.call(children, function(child) {
                                if (child && child.nodeType === 3) {
                                    child.textContent = child.textContent.replace(/\w/g, '-');
                                }
                            });
                        }
                    });
                }

                var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;
                if (RulesObjRemoveEls) {
                    for (var i = 0; i < RulesObjRemoveEls.length; i++) {
                        if (RulesObjRemoveEls[i].rewriteApi) {
                            var elementsToRemove = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApi);
                            Array.prototype.forEach.call(elementsToRemove, function(el, ind) {
                                if (el.parentNode) {
                                    el.parentNode.removeChild(el);
                                }
                            });
                        }
                        if (RulesObjRemoveEls[i].rewriteApiReplace) {
                            var elementsToReplace = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApiReplace);
                            Array.prototype.forEach.call(elementsToReplace, function(el, ind) {
                                if (el.parentNode) {
                                    var comment = document.createComment(el.outerHTML);
                                    el.parentNode.replaceChild(comment, el);
                                }
                            });
                        }
                    }
                }

                return bodyClone.innerHTML.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, '<script><\/script>').replace(/(<div id="?ClickTaleDiv"?[^>]+>)\s*<script[^>]+><\/script>\s*(<\/div>)/i, '$1$2');
            });
        }
        rewriteApi.add({
            pattern: /ctdep-/gi,
            replace: ''
        });
        rewriteApi.add({
            pattern: /(<head[^>]*>)/i,
            replace: '$1<script type="text\/javascript" class="cm-ignore" src="http:\/\/dummytest.clicktale-samples.com\/GlobalResources\/jquery.js"><\/script>'
        });
    }
};

window.ClickTaleSettings.PTC.doOnlyWhen = function(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 1000;
    if (typeof times == "undefined") times = 20;
    if (--times < 0) {
        if (typeof failHandler === 'function') {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }
    setTimeout(function() {
        window.ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
};

//Adobe Target Integration Start
function clickTaleATIntegration() {
    //For CEC
    if (window.ClickTaleMonitor && !window.ClickTaleSettings.PTC.ATCECtriggered) {
        window.ClickTaleSettings.PTC.ATCECtriggered = true;

        var settings = ClickTaleMonitor.Settings.get();
        settings.onStart(function() {
            for (var i = 0; i < ttMETA.length; i++) {
                if ((typeof ttMETA[i].campaign != 'undefined' && ttMETA[i].campaign != '' && typeof ttMETA[i].experience != 'undefined' && ttMETA[i].experience != '') ||
                    (typeof ttMETA[i].CampaignName != 'undefined' && ttMETA[i].CampaignName != '' && typeof ttMETA[i].RecipeName != 'undefined' && ttMETA[i].RecipeName != '')) {
                    var campaign;
                    var experience;
                    if (typeof ttMETA[i].campaign != 'undefined') {
                        campaign = ttMETA[i].campaign;
                        experience = ttMETA[i].experience;
                    } else if (typeof ttMETA[i].CampaignName != 'undefined') {
                        campaign = ttMETA[i].CampaignName;
                        experience = ttMETA[i].RecipeName;
                    }
                    var eventString = 'Cmp: ' + campaign + ' | Exp: ' + experience;
                    if (eventString.length > 50) {
                        eventString = eventString.substr(eventString.length - 50);
                    }
                    ClickTaleMonitor.addPageTag(13354, eventString);
                    break;
                }
            }
        });
    }

    //For Core
    for (var i = 0; i < ttMETA.length; i++) {
        if ((typeof ttMETA[i].campaign != 'undefined' && ttMETA[i].campaign != '' && typeof ttMETA[i].experience != 'undefined' && ttMETA[i].experience != '') ||
            (typeof ttMETA[i].CampaignName != 'undefined' && ttMETA[i].CampaignName != '' && typeof ttMETA[i].RecipeName != 'undefined' && ttMETA[i].RecipeName != '')) {
            var campaign;
            var experience;
            if (typeof ttMETA[i].campaign != 'undefined') {
                campaign = ttMETA[i].campaign;
                experience = ttMETA[i].experience;
            } else if (typeof ttMETA[i].CampaignName != 'undefined') {
                campaign = ttMETA[i].CampaignName;
                experience = ttMETA[i].RecipeName;
            }
            if (window.ClickTaleIsRecording && ClickTaleIsRecording()) {
                ClickTaleEvent('Campaign: ' + campaign + ' | Experience: ' + experience);
            }
        }
    }
};

function clickTaleCheckIfATExists() {
    if (typeof ttMETA != 'undefined' && ttMETA.length > 0) {
        for (var i = 0; i < ttMETA.length; i++) {
            if ((typeof ttMETA[i].CampaignName === 'string' && ttMETA[i].CampaignName != '' && typeof ttMETA[i].RecipeName === 'string' && ttMETA[i].RecipeName != '') ||
                (typeof ttMETA[i].campaign === 'string' && ttMETA[i].campaign != '' && typeof ttMETA[i].experience === 'string' && ttMETA[i].experience != '')) {
                window.ClickTaleSettings.PTC.ATready = true;
                return true;
            }
        }
    }
    return false;
};

window.ClickTaleSettings.PTC.doOnlyWhen(clickTaleATIntegration, clickTaleCheckIfATExists, 100, 100);
//Adobe Target Integration End

function ClickTaleOnRecording() {

    //Adobe Target Integration For Core Start
    if (window.ClickTaleSettings.PTC.ATready) {
        clickTaleATIntegration();
    }
    //Adobe Target Integration For Core End

    //Adobe Analytics Integration Start
    function clickTaleAdobeIntegration() {
        var mcvid = s_c_il[2].getMarketingCloudVisitorID();
        s_c_il[2].setCustomerIDs({
            "mcvid": mcvid
        });
        ClickTaleEvent("MCVID:" + mcvid)
    };

    function clickTaleCheckIfAdobeExists() {
        if (window.s_c_il && window.s_c_il[2] && typeof s_c_il[2].getMarketingCloudVisitorID === "function" && typeof s_c_il[2].getMarketingCloudVisitorID() === "string" && typeof s_c_il[2].setCustomerIDs === "function") {
            return true;
        }
        return false;
    };

    window.ClickTaleSettings.PTC.doOnlyWhen(clickTaleAdobeIntegration, clickTaleCheckIfAdobeExists, 100, 100);
    //Adobe Analytics Integration End

    //Google Analytics Integration Start
    function clickTaleReadCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    function clickTaleGASendBeacon() {
        document.cookie = "CTGAIntegration=" + ClickTaleGetUID() + "|" + clickTaleGAgetTrackerName[0].get('clientId') + "; expires=Thu, 18 Dec 2099 12:00:00 UTC; path=/";
        for (var i = 0; i < clickTaleGAgetTrackerName.length; i++) {
            if (typeof clickTaleGAgetTrackerName[i].get('name') === 'string' && clickTaleGAgetTrackerName[i].get('name') != '') {
                ga(clickTaleGAgetTrackerName[i].get('name') + '.send', 'event', 'Clicktale', 'UID', '', {
                    'dimension99': ClickTaleGetUID().toString(),
                    'nonInteraction': 1
                });
            }
        }
    };

    function clickTaleGAIntegration() {
        clickTaleGAgetTrackerName = ga.getAll();
        if (typeof clickTaleGAgetTrackerName != 'undefined' && typeof clickTaleGAgetTrackerName != null && typeof clickTaleGAgetTrackerName === 'object' &&
            clickTaleGAgetTrackerName.length > 0 && clickTaleGAgetTrackerName[0].get('name') != "" && clickTaleGAgetTrackerName[0].get('clientId') != "" &&
            typeof clickTaleReadCookie === 'function') {
            var checkCTGAcookie = clickTaleReadCookie('CTGAIntegration')
            if (checkCTGAcookie != null) {
                var getCTID = checkCTGAcookie.split("|")[0]
                var getGAID = checkCTGAcookie.split("|")[1]
                if (getCTID != ClickTaleGetUID() || getGAID != clickTaleGAgetTrackerName[0].get('clientId')) {
                    clickTaleGASendBeacon();
                }
            } else {
                clickTaleGASendBeacon();
            }
        }
    };

    function clickTaleCheckIfGAExists() {
        if (window.ga && typeof ga === 'function' && typeof ga.getAll === 'function') {
            return true;
        }
        return false;
    };

    window.ClickTaleSettings.PTC.doOnlyWhen(clickTaleGAIntegration, clickTaleCheckIfGAExists, 100, 100);
    //Google Analytics Integration End
};

//Integrations
if (window.ClickTaleSettings.PTC.Integrations) {
    window.ClickTaleSettings.PTC.Integrations.push("Adobe Analytics 2.0 | Core");
    window.ClickTaleSettings.PTC.Integrations.push("Adobe Target | Core");
    window.ClickTaleSettings.PTC.Integrations.push("Adobe Target | CEC");
    window.ClickTaleSettings.PTC.Integrations.push("Google Analytics | Core");
}

// End of user-defined pre WR code


ClickTaleGlobal.init.isAllowed && typeof ClickTaleGlobal.init.pmc === "function" && ClickTaleGlobal.init.pmc(autoMonitorConfig);

var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource;

if(!ClickTaleGlobal.init.pccRequested) {
	var pccSrc = scriptSource ? scriptSource + 'b1c0654e-7133-4308-a615-330ad61a2065.js?DeploymentConfigName=Release_20180221&Version=105' : (isHttps ? 'https://cdnssl.clicktale.net/www41/pcc/b1c0654e-7133-4308-a615-330ad61a2065.js?DeploymentConfigName=Release_20180221&Version=105' : 'http://cdn.clicktale.net/www41/pcc/b1c0654e-7133-4308-a615-330ad61a2065.js?DeploymentConfigName=Release_20180221&Version=105');
		var pccScriptElement = ClickTaleCreateDOMElement('script');
	pccScriptElement.type = "text/javascript";
	pccScriptElement.crossOrigin = "anonymous";
	pccScriptElement.src = pccSrc;
	ClickTaleGlobal.init.isAllowed && document.body.appendChild(pccScriptElement);
		ClickTaleGlobal.init.pccRequested = true;
}
	window.ClickTaleGlobal.PCCExists = true;
	
if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}

window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=78, 
		Ratio=1, 
		PartitionPrefix="www41",
		SubsId=233289;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
};

window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(function() {
    var pcc = document.querySelector('script[src*="clicktale"][src*="pcc"]');
    if (pcc) {
        var versionmatch = pcc.src.match(/DeploymentConfigName=(.+)/i);
        if (versionmatch && typeof ClickTaleExec === 'function') {
            ClickTaleExec("console.info('" + versionmatch[0] + "');");
            ClickTaleEvent("Config: " + versionmatch[1].replace(/\&.+/, ''));
        }
    }
});

function doUpload() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        var uploadInnerScrollElem = document.querySelector('.mrm-outer-container');
        if (uploadInnerScrollElem) {
            ClickTaleField('uploadSH', uploadInnerScrollElem.scrollHeight)
        }
        ClickTaleUploadPageNow();
    };
};

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        if (document.location.href.indexOf("/buy/us/en/") > -1) {
            return document.querySelectorAll('li.featured-product.loaded').length >= 4;
        } else if (document.location.pathname.toLowerCase().indexOf('/search.html') > -1) {
            return !!(document.querySelector('.result-listings'));
        } else if (document.location.href.indexOf('app/browse/projects') > -1) {
            return !!(document.querySelector('.btn.btn-primary'));
        } else {
            return true;
        }
    }
    return false;
};

if (typeof ClickTaleDelayUploadPage === 'function' && window.ClickTaleSettings.PTC.UseTransport) {

    ClickTaleDelayUploadPage();

    //Adobe Target Integration Timeout
    setTimeout(function() {
        window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 280, 45, doUpload);
    }, 1000);

    var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
    for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
        if (typeof initFuncs[i] === 'function') {
            initFuncs[i]();
        }
    }
}

	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
}; 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	
	
	var wrScript = ClickTaleCreateDOMElement("script");
	wrScript.crossOrigin = "anonymous";	
	wrScript.src = window.ClickTaleScriptSource + 'WR-latest.js';
	wrScript.type = 'text/javascript';
		wrScript.async = true;
		ClickTaleGlobal.init.isAllowed && document.body.appendChild(wrScript);
})();





!function(){function e(){window.addEventListener&&addEventListener("message",t,!1)}function t(e){var t,o=new RegExp("(clicktale.com|qa-core.app.clicktale.com)($|:)"),i=new RegExp("qa-core.app.clicktale.com"),c=!1,a=e.origin;try{t=JSON.parse(e.data)}catch(l){return}o.test(e.origin)!==!1&&(window.ct_ve_parent_window=e.source,i.test(e.origin)===!0&&(c=!0),"CT_testRules"==t.name&&(sessionStorage.setItem("CT_testRules",JSON.stringify(t.params.testRules)),console.log((new Date).toJSON(),"PostPTC: testRules ",sessionStorage.getItem("CT_testRules")),window.ct_ve_parent_window.postMessage({name:"testRulesRecieved",params:{}},"*")),"CTload_ve"===t["function"]&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&n(a,c))}function o(e){return document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",e):document.createElement(e)}function n(e,t){var n=o("script");n.setAttribute("type","text/javascript"),n.setAttribute("id","ctVisualEditorClientModule");var i;i=t?document.location.protocol+"//qa-core.app.clicktale.com/VisualEditor/Client/dist/veClientModule.js":document.location.protocol+"//"+e.match(/subs\d*/)[0]+".app.clicktale.com/VisualEditor/Client/dist/veClientModule.js",n.src=i,document.getElementById("ctVisualEditorClientModule")||document.body.appendChild(n)}try{var i=window.chrome,c=window.navigator&&window.navigator.vendor;null!==i&&void 0!==i&&"Google Inc."===c&&e()}catch(a){}}();

//Signature:U9mIeafVIPDVvwrwIinCAu4aF7CdtsPSn66nVBk2icVT1WdPQaGxUJgEVPRfRe/ExMZZhMeX0IvzXQka4tQnANK52MwEsOaxbh0q7w4ksIovwYSijmcD8e5GJAOLUCvfi45MmQ/pXztOcotE2QAA55rKBX/NhY50O5AZk7LYEKA=