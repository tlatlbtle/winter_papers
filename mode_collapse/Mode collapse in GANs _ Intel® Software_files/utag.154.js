//~~tv:3117.20150413
//~~tc: Fix queue logic so that order of events is preserved

//tealium universal tag - utag.sender.3117 ut4.0.201703290422, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.35
    if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    u.ev = {"view" : 1};
    u.queue = [];

      u.map={};
  u.extend=[];


    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f;

        u.data = {
          "base_url" : "",
          "partition" : "www41",
          "project_guid" : "b1c0654e-7133-4308-a615-330ad61a2065",
          "ptc" : "/ptc/",
          "events" : []
        };

        // Start tag-scoped extensions
        
        // End tag-scoped extensions

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (e[f].indexOf("event") === 0) {
                u.data.events.push(b[d]);
              } else {
                u.data[e[f]] = b[d];
              }
            }
          }
        }
        // End Mapping

        // Start Loader Callback
        u.loader_cb = function () {
          if (u.data.events.length > 0 && typeof ClickTaleEvent === "function") {
            for (i = 0; i < u.data.events.length; i++) {
              ClickTaleEvent(u.data.events[i]);
            }
          }
        };
        // End Loader Callback

        u.callBack = function () {
          var data = {};
          while (data = u.queue.shift()) {
            u.data = data.data;
            u.loader_cb();
          }
        };

        if (u.initialized) {
          u.loader_cb();
        } else {
          u.queue.push({"data" : u.data});
          if (!u.scriptrequested) {
            u.scriptrequested = true;
            u.data.base_url = u.data.base_url || (((document.location.protocol === "https:") ? "https://cdnssl.clicktale.net/" : "http://cdn.clicktale.net/") + u.data.partition + u.data.ptc + u.data.project_guid + ".js");
            u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.callBack, "loc" : "script", "id" : "utag_154"});
          }
        }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("154", "intel.profile-ssg.intel"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

