//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
wap_tms.eloqua.wdl = {};
wap_tms.eloqua.wdl.eloquaSiteId = (wa_env) ? '334284386' : '1743629666'; //wa_env=true is production
wap_tms.eloqua.wdl.eloquaVistorLookupScriptId = (wa_env) ? '6f50884b0b6c47e3a98f2b6cccda8861' : '6f50884b0b6c47e3a98f2b6cccda8861';
wap_tms.eloqua.wdl.eloquaContactLookupScriptId = (wa_env) ? 'b5e7f587-fa3e-4646-8339-e2ea362f34ad' : 'b5e7f587-fa3e-4646-8339-e2ea362f34ad';
wap_tms.eloqua.wdl.baseUrl = ('https:' == window.location.protocol ? 'https' : 'http') + '://s'+wap_tms.eloqua.eloquaSiteId+'.t.eloqua.com/visitor/v200/svrGP.aspx?pps=';

wap_tms.eloqua.wdl.cachbuster = function () {
var returnVal = new Date().getMilliseconds();
return returnVal
};

wap_tms.eloqua.wdl.init = function () {

  var cb = wap_tms.eloqua.wdl.cachbuster();
  var url = wap_tms.eloqua.wdl.baseUrl+'70&siteid='+wap_tms.eloqua.wdl.eloquaSiteId+'&ref='+location.href+'&ms='+cb;
  if(wap_tms.jquery.ver_1_7_plus){(function($){
  $.ajax({
                  type:"get", url:url,dataType:"script",cache:true,async:true,
                  success: function () {                      
                                if (typeof GetElqCustomerGUID == "function") {
                                                elqGUID = GetElqCustomerGUID();
                                                //set session cookie to store Eloqua ID
                                                //var domain=location.hostname;domain=domain.replace(/(.*)\.intel/, ".intel"); //remove everything before .intel
                                                //document.cookie = 'wa_elqid='+elqGUID+';path=/;domain='+domain;
                                                //getID1(elqGUID);
                                                wap_tms.eloqua.wdl.visitor(elqGUID);
                                } 
                  }
  });
  }($wap));}  
};
wap_tms.eloqua.wdl.visitor = function (elqGUID) {
  var cb = wap_tms.eloqua.wdl.cachbuster();
  var url = wap_tms.eloqua.wdl.baseUrl+'50&siteid='+wap_tms.eloqua.wdl.eloquaSiteId+'&DLKey='+wap_tms.eloqua.wdl.eloquaVistorLookupScriptId+'&DLLookup='+elqGUID+'&ms='+cb;
  //wap_tms.eloqua.wdl.url = wap_tms.eloqua.wdl.baseUrl+'50&siteid='+wap_tms.eloqua.wdl.eloquaSiteId+'&DLKey='+wap_tms.eloqua.wdl.eloquaVistorLookupScriptId+'&DLLookup='+elqGUID+'&ms='+cb;
  if(wap_tms.jquery.ver_1_7_plus){(function($){
  $.ajax({
                  type:"get", url:url,dataType:"script",cache:true,async:true,
                  success: function () {                      
                                if (typeof GetElqContentPersonalizationValue == "function") {
                                                var elqID1 = GetElqContentPersonalizationValue('V_ElqEmailAddress');
                                                wap_tms.eloqua.wdl.contact(elqID1);
                                } 
                  }
 });
  }($wap));}  
};

wap_tms.eloqua.wdl.contact = function (elqID1) {
var DLLookup = encodeURIComponent(elqID1);
var cb = wap_tms.eloqua.wdl.cachbuster();
var url = wap_tms.eloqua.wdl.baseUrl+'50&siteid='+wap_tms.eloqua.wdl.eloquaSiteId+'&DLKey='+wap_tms.eloqua.wdl.eloquaContactLookupScriptId+'&DLLookup=%3CC_EmailAddress%3E'+DLLookup+'%3C/C_EmailAddress%3E&ms='+cb;
if(wap_tms.jquery.ver_1_7_plus){(function($){
  $.ajax({
                  type:"get", url:url,dataType:"script",cache:true,async:true,
                success: function () {                        
                  if (typeof GetElqContentPersonalizationValue == "function") {
                                                  wap_tms.eloqua.wdl.contactId = GetElqContentPersonalizationValue('ContactIDExt');
/*                                             utag_data.elg_optin_channel = GetElqContentPersonalizationValue('C_Intel_Sector31');
                                                  utag_data.elg_optin_embedded = GetElqContentPersonalizationValue('C_Intel_Sector11');
                                                  utag_data.elg_optin_itdm = GetElqContentPersonalizationValue('C_Intel_Sector21');
                                                  utag_data.elg_optin_education = GetElqContentPersonalizationValue('C_Intel_Sector41');
                                                  //utag_data.elq_industry = GetElqContentPersonalizationValue('C_Industry1');*/                                           
                                                  wap_tms.eloqua.wdl.configContactId(wap_tms.eloqua.wdl.contactId); 
                  }   
                }
});
}($wap));}
};

wap_tms.eloqua.wdl.configContactId = function (extId) {
                utag_data.wa_elq_id = extId;
                utag_data.wa_elq_id_short = genContactIdShort(extId);

                //set Eloqua Contact ID
                ga_payload.dimension['105,hit']=utag_data.wa_elq_id;
                ga_payload.dimension['115,hit']=utag_data.wa_elq_id_short;
                if(wap_tms.eloqua.id==''){wap_tms.eloqua.setcookie(extId);} //only reset cookie if value not present
				utag.loader.SC("utag_main", {
					"elqwdl": "true"
				});
				

};

//Initiate

if (wap_tms.cookie.RC("utag_main").elqid == undefined && wap_tms.cookie.RC("utag_main").elqwdl == undefined && utag_data.wa_elq_id == undefined){
	wap_tms.eloqua.wdl.init();
}
/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.201802132030, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */


        /* Start Tag Sending Code */

          // Insert your tag sending code here.

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_284' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_284' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("284", "intel.profile-ssg.intel");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag