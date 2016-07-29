(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.aspects":true,"qx.debug":false,"qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.version":"5.0.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"ae.chart":{"resourceUri":"resource","sourceUri":"script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null};
qx.$$locales = {"C":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:qxchart.ee1856f7c06b.js.gz"]}},
  urisBefore : ["https://cdn.plot.ly/plotly-1.15.0.min.js"],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,

  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function ()
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{},"resources":{},"translations":{}};
(function(){var a="moveTrace",b="layout",c="outTrace",d='plotly_relayout',f="_applyModel",g='plotly_hover',h='plotly_selected',i="changeLayout",j="ae.chart.model.Chart",k="changeSelection",l="xaxes",m="clickTrace",n="resize",o="i",p="]",q="ae.chart.controller.Plotly",r="traces",s="overTrace",t="[",u='plotly_unhover',v="removeTrace",w="click",x="e",y="yaxes",z="addTrace",A="changeBubble",B=".",C='plotly_click';qx.Class.define(q,{extend:qx.core.Object,properties:{model:{check:j,apply:f,nullable:true,init:null},target:{nullable:true,init:null}},construct:function(D,E){E.addListener(n,function(e){if(E.getPlotlyDiv()){Plotly.Plots.resize(E.getPlotlyDiv());};},E);this.setTarget(E);this.setModel(D);this._initModel(D);},members:{_applyModel:function(F){},_initModel:function(I){if(!I){return;};var H=I.toJson();Plotly.newPlot(this.getTarget().getPlotlyDiv(),H.data,H.layout,I.getConfig());window.plotdiv=this.getTarget().getPlotlyDiv();I.addListener(A,function(e){var name=e.getData().name;var K=e.getData().value;var M={};if(name.startsWith(b)){var N=name.substr(name.indexOf(B)+1);if(N.startsWith(l)||N.startsWith(y)){var J=parseInt(N.substring(N.indexOf(t)+1,N.indexOf(p)));if(J==0){N=(N.substring(0,N.indexOf(t))+N.substr(N.indexOf(p)+1)).replace(x,o);}else {N=(N.substring(0,N.indexOf(t))+(J+1)+N.substr(N.indexOf(p)+1)).replace(x,o);};if(Array.isArray(K)){K=K[0];};};M[N]=ae.chart.util.Serializer.toNativeObject(K);if(M[N]!=null){Plotly.relayout(this.getTarget().getPlotlyDiv(),M);};};if(name.startsWith(r)&&name.indexOf(B)!=-1){var N=name.substr(name.indexOf(B)+1);var J=parseInt(name.substring(name.indexOf(t)+1,name.indexOf(p)));M[N]=ae.chart.util.Serializer.toNativeObject(K);for(var L in M){M[L]=[M[L]];};Plotly.restyle(this.getTarget().getPlotlyDiv(),M,[J]);};},this);I.addListener(z,function(e){Plotly.addTraces(this.getTarget().getPlotlyDiv(),ae.chart.util.Serializer.toNativeObject(e.getData()));},this);I.addListener(v,function(e){Plotly.deleteTraces(this.getTarget().getPlotlyDiv(),e.getData());},this);I.addListener(a,function(e){Plotly.moveTraces(this.getTarget().getPlotlyDiv(),e.getData().currentIndex,e.getData().newIndex);},this);var G=this.getTarget();G.getPlotlyDiv().on(C,function(O){G.fireEvent(w,qx.event.type.Mouse,[{},G,G,false,true]);G.fireDataEvent(m,O);});G.getPlotlyDiv().on(g,function(P){G.fireDataEvent(s,P);});G.getPlotlyDiv().on(u,function(Q){G.fireDataEvent(c,Q);});G.getPlotlyDiv().on(h,function(R){G.fireDataEvent(k,R);});G.getPlotlyDiv().on(d,function(S){G.fireDataEvent(i,S);});}}});})();(function(){var a="changeModel",b="jpeg",c="browser.name",d='error',f='success',g="ae.chart.ui.Chart",h="png",i="appear",j="svg",k="json",l='.',m='a',n="ae.chart.model.Chart",o="text/plain;charset=utf-8",p="_applyModel",q="ie",r="qx.event.type.Data";qx.Class.define(g,{extend:qx.ui.core.Widget,properties:{model:{check:n,nullable:true,event:a,init:null,apply:p}},events:{"clickTrace":r,"overTrace":r,"outTrace":r,"changeSelection":r,"changeLayout":r},construct:function(s){qx.ui.core.Widget.call(this);this.setModel(s);},members:{getPlotlyDiv:function(){return this.getContentElement().getDomElement();},_applyModel:function(t){if(this.getPlotlyDiv()){new ae.chart.controller.Plotly(t,this);}else {this.addListenerOnce(i,function(e){var u=new ae.chart.controller.Plotly(t,this);},this);};},redraw:function(){Plotly.redraw(this.getPlotlyDiv());},saveAs:function(v,y){switch(v){case j:var A=this.getPlotlyDiv();var w=Plotly.Snapshot.toSVG(A);console.log(w);var B=new Blob([w],{type:o});y+=l+v;if(qx.core.Environment.get(c)==q){window.navigator.msSaveBlob(B,y);}else {var x=document.createElement(m);x.href=window.URL.createObjectURL(B);;x.download=y;document.body.appendChild(x);x.click();document.body.removeChild(x);};break;case k:var z=JSON.stringify(this.getModel().toJson());var B=new Blob([z],{type:o});y+=l+v;if(qx.core.Environment.get(c)==q){window.navigator.msSaveBlob(B,y);}else {var x=document.createElement(m);x.href=window.URL.createObjectURL(B);;x.download=y;document.body.appendChild(x);x.click();document.body.removeChild(x);};break;case h:case b:var A=this.getPlotlyDiv();var C=Plotly.Snapshot.toImage(A,{format:v});y+=l+v;C.once(f,function(E){var D=document.createElement(m);D.href=E;D.download=y;document.body.appendChild(D);D.click();document.body.removeChild(D);C.clean();});C.once(d,function(F){A._snapshotInProgress=false;console.error(F);C.clean();});break;};}}});})();(function(){var a="ae.chart.model.trace.Trace",b="abstract",c="Boolean",d="changeTextfont",e="changeName",f="changeTextposition",g="Number",h="changeText",i="ae.chart.model.trace.auxiliary.Marker",j="changeVisible",k="all",l="changeLegendgroup",m="ae.chart.model.Font",n="changeShowlegend",o="_apply",p="changeHoverinfo",q="String",r="changeOpacity",s="legendonly";qx.Class.define(a,{type:b,extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{type:{check:q,nullable:true,init:null},hoverinfo:{check:q,init:k,event:p,apply:o},legendgroup:{check:q,init:null,event:l,apply:o},marker:{check:i,apply:o},name:{check:q,init:null,event:e,apply:o},opacity:{check:g,init:1,event:r,apply:o},showlegend:{check:c,init:true,event:n,apply:o},text:{init:null,event:h,apply:o},textfont:{check:m,nullable:true,event:d,apply:o,init:null},textposition:{check:q,init:null,event:f,apply:o},visible:{check:[true,false,s],init:true,event:j,apply:o}},members:{_apply:function(u,t,name){this._applyEventPropagation(u,t,name);}}});})();(function(){var a="Boolean",b="ae.chart.model.trace.Scatter",c="tozeroy",d="changeX0",e="changeConnectgaps",f="tonextx",g="scatter",h="changeX",i="changeT",j="Array",k="tonext",l="Dy",m="y",n="String",o="toself",p="changeFill",q="tozerox",r="changeY0",s="changeFillcolor",t="changeDx",u="_apply",v="changeR",w="changeXaxis",x="changeMode",y="none",z="Number",A="ae.chart.model.trace.auxiliary.Line",B="Yaxis",C="changeY",D="x",E="tonexty";qx.Class.define(b,{extend:ae.chart.model.trace.Trace,properties:{connectgaps:{check:a,init:false,event:e,apply:u},dx:{check:z,init:1,event:t,apply:u},dy:{check:z,init:1,event:l,apply:u},fill:{check:[y,c,q,E,f,o,k],init:y,event:p,apply:u},fillcolor:{check:n,init:null,event:s,apply:u},line:{check:A,apply:u},mode:{check:n,init:null,event:x,apply:u},r:{check:j,init:null,event:v,apply:u},t:{check:j,init:null,event:i,apply:u},x0:{init:0,event:d,apply:u},x:{check:j,nullable:true,init:null,event:h,apply:u},xaxis:{check:n,init:D,event:w,apply:u},y0:{init:0,event:r,apply:u},y:{check:j,nullable:true,init:null,event:C,apply:u},yaxis:{check:n,init:m,event:B,apply:u}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(g);},members:{}});})();(function(){var a="v",b="h",c="ae.chart.model.trace.Bar",d="changeOrientation",e="_apply",f="bar";qx.Class.define(c,{extend:ae.chart.model.trace.Scatter,properties:{orientation:{check:[a,b],init:null,event:d,apply:e}},construct:function(){ae.chart.model.trace.Scatter.call(this);this.setType(f);},members:{}});})();(function(){var a="ae.chart.theme.Appearance";qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});})();(function(){var a="-",b="changeExponentformat",c="changeAutorange",d="array",e="changeTickprefix",f="changeCategoryorder",g="category descending",h="changeType",i="changeTicktext",j="changeTickfont",k="changeNticks",l="changeTickwidth",m="changeShowexponent",n="ae.chart.model.axis.Axis",o="changeZerolinewidth",p="ae.chart.model.Font",q="changeShowticklabels",r="changeTitle",s="normal",t="ticks",u="Number",v="changeRangemode",w="linear",x="changeShowticksuffix",y="changeShowgrid",z="trace",A="first",B="changeZeroline",C="changeZerolinecolor",D="auto",E="changeShowtickprefix",F="changeLinecolor",G="changeMirror",H="category ascending",I="reversed",J="changeFixedrange",K="changeTickmode",L="changeTickangle",M="category",N="changeDtick",O="changeTitlefont",P="changeHoverformat",Q="none",R="changeTickformat",S="Boolean",T="changeTick",U="changeColor",V="allticks",W="power",X="top",Y="changeShowline",bN="changeTick0",bO="tozero",bP="inside",bJ="nonnegative",bK="changeCategoryarray",bL="date",bM="_apply",bU="right",bV="e",bW="changeAnchor",bX="all",bQ="left",bR="E",bS="changeTicksuffix",bT="bottom",cc="Integer",co="changeLinewidth",cp="changeGridwidth",cd="Array",bY="changePosition",ca="String",cr="changeTickcolor",cb="",ce="changeTicklen",cf="B",cg="changeGridcolor",ck="changeOverlaying",cs="changeTickval",cl="SI",ch="changeRange",ci="outside",cq="log",cj="changeDomain",cm="last",cn="changeSide";qx.Class.define(n,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{anchor:{check:ca,event:bW,apply:bM,nullable:true,init:null},autorange:{check:[true,false,I],event:c,apply:bM,nullable:true,init:null},categoryarray:{apply:bM,event:bK,nullable:true,init:true},categoryorder:{check:[z,H,g,d],event:f,apply:bM,nullable:true,init:z},color:{check:ca,event:U,apply:bM,nullable:true,init:null},domain:{check:cd,event:cj,apply:bM,nullable:true,init:null},dtick:{apply:bM,event:N,nullable:true,init:null},exponentformat:{check:[Q,bV,bR,W,cl,cf],event:b,apply:bM,nullable:true,init:null},fixedrange:{check:S,event:J,apply:bM,nullable:true,init:null},gridcolor:{check:ca,event:cg,apply:bM,nullable:true,init:null},gridwidth:{check:u,event:cp,apply:bM,nullable:true,init:null},hoverformat:{apply:bM,event:P,nullable:true,init:null},linecolor:{check:ca,event:F,apply:bM,nullable:true,init:null},linewidth:{check:u,event:co,apply:bM,nullable:true,init:null},mirror:{check:[true,false,t,bX,V],event:G,apply:bM,nullable:true,init:null},nticks:{check:cc,event:k,apply:bM,nullable:true,init:null},overlaying:{check:ca,event:ck,apply:bM,nullable:true,init:null},position:{check:cc,event:bY,apply:bM,nullable:true,init:null},range:{check:cd,event:ch,apply:bM,nullable:true,init:null},rangemode:{check:[s,bO,bJ],event:v,apply:bM,nullable:true,init:null},showexponent:{check:[bX,A,cm,Q],event:m,apply:bM,nullable:true,init:null},showgrid:{check:S,event:y,apply:bM,nullable:true,init:null},showline:{check:S,event:Y,apply:bM,nullable:true,init:null},showticklabels:{check:S,event:q,apply:bM,nullable:true,init:null},showtickprefix:{check:[bX,A,cm,Q],event:E,apply:bM,nullable:true,init:null},showticksuffix:{check:[bX,A,cm,Q],event:x,apply:bM,nullable:true,init:null},side:{check:[X,bT,bQ,bU],event:cn,apply:bM,nullable:true,init:null},tick0:{check:u,event:bN,apply:bM,nullable:true,init:null},tickangle:{check:u,event:L,apply:bM,nullable:true,init:null},tickcolor:{check:ca,event:cr,apply:bM,nullable:true,init:null},tickfont:{check:p,event:j,apply:bM,nullable:true,init:null},tickformat:{check:ca,event:R,apply:bM,nullable:true,init:null},ticklen:{check:u,event:ce,apply:bM,nullable:true,init:null},tickmode:{check:[D,w,d],event:K,apply:bM,nullable:true,init:null},tickprefix:{check:ca,event:e,apply:bM,nullable:true,init:null},tick:{check:[bP,ci,cb],event:T,apply:bM,nullable:true,init:null},ticksuffix:{check:ca,event:bS,apply:bM,nullable:true,init:null},ticktext:{check:cd,event:i,apply:bM,nullable:true,init:null},tickval:{check:cd,event:cs,apply:bM,nullable:true,init:null},tickwidth:{check:u,event:l,apply:bM,nullable:true,init:null},title:{check:ca,event:r,apply:bM,nullable:true,init:null},titlefont:{check:p,event:O,apply:bM,nullable:true,init:null},type:{check:[a,w,cq,bL,M],event:h,apply:bM,nullable:true,init:null},zeroline:{check:S,event:B,apply:bM,nullable:true,init:null},zerolinecolor:{check:ca,event:C,apply:bM,nullable:true,init:null},zerolinewidth:{check:u,event:o,apply:bM,nullable:true,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(cu,ct,name){this._applyEventPropagation(cu,ct,name);}}});})();(function(){var a="ae.chart.util.Serializer",b='\\\\',c='\\f',d='"',e="null",f='\\"',g="}",h="get",j="{",k='\\r',l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t='\\b',u="$$user_",v='\\n',w=",";qx.Class.define(a,{statics:{toNativeObject:function(z,B,y){var C;if(z==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(z.constructor,qx.data.IListData)){C=[];for(var i=0;i<z.getLength();i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z.getItem(i),B,y));};return C;};if(qx.lang.Type.isArray(z)){C=[];for(var i=0;i<z.length;i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z[i],B,y));};return C;};if(z.$$type==o){return z.classname;};if(z.$$type==p||z.$$type==r){return z.name;};if(z instanceof qx.core.Object){if(B!=null){var x=B(z);if(x!=undefined){return x;};};C={};var E=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in E){if(E[name].group!=undefined){continue;};if(!z.hasOwnProperty(u+name)){continue;};var A=z[h+qx.lang.String.firstUp(name)]();C[name]=ae.chart.util.Serializer.toNativeObject(A,B,y);};return C;};if(qx.lang.Type.isDate(z)&&y!=null){return y.format(z);};if(qx.locale&&qx.locale.LocalizedString&&z instanceof qx.locale.LocalizedString){return z.toString();};if(qx.lang.Type.isObject(z)){C={};for(var D in z){C[D]=ae.chart.util.Serializer.toNativeObject(z[D],B,y);};return C;};return z;},toJson:function(H,J,G){var K=l;if(H==null){return e;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(H.constructor,qx.data.IListData)){K+=q;for(var i=0;i<H.getLength();i++ ){K+=ae.chart.util.Serializer.toJson(H.getItem(i),J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(qx.lang.Type.isArray(H)){K+=q;for(var i=0;i<H.length;i++ ){K+=ae.chart.util.Serializer.toJson(H[i],J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(H.$$type==o){return d+H.classname+d;};if(H.$$type==p||H.$$type==r){return d+H.name+d;};if(H instanceof qx.core.Object){if(J!=null){var F=J(H);if(F!=undefined){return d+F+d;};};K+=j;var M=qx.util.PropertyUtil.getAllProperties(H.constructor);for(var name in M){if(M[name].group!=undefined){continue;};var I=H[h+qx.lang.String.firstUp(name)]();K+=d+name+s+ae.chart.util.Serializer.toJson(I,J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.locale&&qx.locale.LocalizedString&&H instanceof qx.locale.LocalizedString){H=H.toString();};if(qx.lang.Type.isDate(H)&&G!=null){return d+G.format(H)+d;};if(qx.lang.Type.isObject(H)){K+=j;for(var L in H){K+=d+L+s+ae.chart.util.Serializer.toJson(H[L],J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.lang.Type.isString(H)){H=H.replace(/([\\])/g,b);H=H.replace(/(["])/g,f);H=H.replace(/([\r])/g,k);H=H.replace(/([\f])/g,c);H=H.replace(/([\n])/g,v);H=H.replace(/([\t])/g,m);H=H.replace(/([\b])/g,t);return d+H+d;};if(qx.lang.Type.isDate(H)||qx.lang.Type.isRegExp(H)){return d+H+d;};return H+l;}}});})();(function(){var a="Boolean",b="Number",c="area",d="circle",e="diameter",f="_apply",g="ae.chart.model.trace.auxiliary.Marker";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{autocolorscale:{check:a,apply:f,init:true},cauto:{check:a,apply:f,init:true},cmax:{check:b,apply:f,init:null},cmin:{check:b,apply:f,init:null},color:{apply:f,init:null},colorscale:{apply:f,init:null},maxdisplayed:{check:b,apply:f,init:0},opacity:{apply:f,init:null},reversescale:{check:a,apply:f,init:false},showscale:{check:a,apply:f,init:false},size:{apply:f,init:6},sizemin:{check:b,apply:f,init:0},sizemode:{check:[e,c],apply:f,init:e},sizeref:{check:b,apply:f,init:1},symbol:{apply:f,init:d}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(i,h,name){this._applyEventPropagation(i,h,name);}}});})();(function(){var a="changeSize",b="Number",c="changeFamily",d="changeColor",e="ae.chart.model.Font",f="_apply",g="String";qx.Class.define(e,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{family:{check:g,event:c,apply:f,nullable:true,init:null},size:{check:b,event:a,apply:f,nullable:true,init:null},color:{check:g,event:d,apply:f,nullable:true,init:null}},construct:function(j,i,h){qx.core.Object.call(this);if(j){this.setSize(j);};if(i){this.setFamily(i);};if(h){this.setColor(h);};},members:{_apply:function(l,k,name){this._applyEventPropagation(l,k,name);}}});})();(function(){var a="ae.chart.theme.Color";qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});})();(function(){var a="text",b="changeInsidetextfont",c="Boolean",d="changeLabels",e="clockwise",f="Object",g="changeTextinfo",h="changeDirection",i="changePull",j="changeDomain",k="value",l="changeRotation",m="changeLabel0",n="String",o="counterclockwise",p="pie",q="ae.chart.model.Font",r="_apply",s="changeDlabel",t="Array",u="percent",v="changeHole",w="none",x="Number",y="changeValues",z="label",A="changeScalegroup",B="changeSort",C="changeOutsidetextfont",D="ae.chart.model.trace.Pie";qx.Class.define(D,{extend:ae.chart.model.trace.Trace,properties:{direction:{check:[e,o],init:null,event:h,apply:r},dlabel:{check:x,init:null,event:s,apply:r},domain:{check:f,init:null,event:j,apply:r},hole:{check:x,init:null,event:v,apply:r},insidetextfont:{check:q,init:null,event:b,apply:r},label0:{check:x,init:null,event:m,apply:r},labels:{check:t,init:null,event:d,apply:r},outsidetextfont:{check:q,init:null,event:C,apply:r},pull:{init:null,event:i,apply:r},rotation:{check:x,init:null,event:l,apply:r},scalegroup:{check:n,init:null,event:A,apply:r},sort:{check:c,init:null,event:B,apply:r},textinfo:{check:[w,z,a,k,u],init:null,event:g,apply:r},values:{check:t,init:null,event:y,apply:r}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(p);},members:{}});})();(function(){var a="ae.chart.theme.Font";qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});})();(function(){var a="changeImages",b="changeWidth",c="Boolean",d="qx.data.Array",e="clockwise",f="orbit",g="changeOrientation",h="changeShowlegend",i="changeHiddenlabels",j="stack",k="changeDirection",l="changeBargroupgap",m="group",n="changeAnnotations",o="Array",p="pan",q="select",r="overlay",s="changeAutosize",t="lasso",u="changeXaxes",v="changeHovermode",w="changePaper_bgcolor",x="y",y="changeDragmode",z="turntable",A="zoom",B="changeSeparators",C="changeYaxes",D="changeBarnorm",E="relative",F="",G="counterclockwise",H="initial",I="changeFont",J="changeBarmode",K="ae.chart.model.Font",L="fraction",M="_apply",N="changeShapes",O="changeBargap",P="changeTitle",Q="changePlot_bgcolor",R="changeTitlefont",S="percent",T="Number",U="closest",V="String",W="ae.chart.model.layout.Layout",X="x",Y="changeHeight";qx.Class.define(W,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{annotations:{check:d,apply:M,event:n,init:new qx.data.Array()},autosize:{check:[true,false,H],event:s,apply:M,nullable:true,init:null},direction:{check:[e,G],event:k,apply:M,init:null},dragmode:{check:[A,p,q,t,f,z],event:y,apply:M,init:A},font:{check:K,event:I,nullable:true,apply:M,init:null},height:{check:T,event:Y,apply:M,nullable:true,init:null},hovermode:{check:[X,x,U,false],event:v,apply:M,init:null},images:{check:d,event:a,apply:M,init:new qx.data.Array()},orientation:{check:T,event:g,apply:M,init:null},paper_bgcolor:{check:V,event:w,nullable:true,apply:M,init:null},plot_bgcolor:{check:V,event:Q,nullable:true,apply:M,init:null},separators:{check:V,event:B,apply:M,init:null},shapes:{check:d,event:N,apply:M,init:new qx.data.Array()},showlegend:{check:c,event:h,apply:M,nullable:true,init:null},title:{check:V,event:P,nullable:true,apply:M,init:null},titlefont:{check:K,event:R,nullable:true,apply:M,init:null},width:{check:T,event:b,nullable:true,apply:M,init:null},xaxes:{check:d,event:u,apply:M,deferredInit:true},yaxes:{check:d,event:C,apply:M,deferredInit:true},barmode:{check:[j,m,r,E],event:J,apply:M,init:null},barnorm:{check:[F,S,L],event:D,apply:M,init:null},bargap:{check:T,event:O,apply:M,init:null},bargroupgap:{check:T,event:l,apply:M,init:null},hiddenlabels:{check:o,event:i,apply:M,init:null}},construct:function(){qx.core.Object.call(this);this.initXaxes(new qx.data.Array());this.initYaxes(new qx.data.Array());},members:{_apply:function(bb,ba,name){this._applyEventPropagation(bb,ba,name);}}});})();(function(){var a="ae.chart.theme.Decoration";qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});})();(function(){var a="ae.chart.theme.Theme";qx.Theme.define(a,{meta:{color:ae.chart.theme.Color,decoration:ae.chart.theme.Decoration,font:ae.chart.theme.Font,icon:qx.theme.icon.Tango,appearance:ae.chart.theme.Appearance}});})();(function(){var a="longdash",b="Number",c="dot",d="ae.chart.model.trace.auxiliary.Line",e="longdashdot",f="vh",g="vhv",h="dash",i="hv",j="hvh",k="linear",l="_apply",m="solid",n="String",o="dashdot",p="spline";qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{color:{check:n,init:null,apply:l},smoothing:{check:b,init:0,apply:l},dash:{check:[m,c,h,a,o,e],init:m,apply:l},width:{check:b,init:1,apply:l},shape:{check:[k,p,i,f,j,g],init:k,apply:l}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(r,q,name){this._applyEventPropagation(r,q,name);}}});})();(function(){var a="qx.event.type.Data",b="removeTrace",c="title",d="scatter",f="moveTrace",g="changeTraces",h="qx.data.Array",j="xaxis",l="pie",m="titlefont",n="changeLayout",o="ae.chart.model.layout.Layout",p="font",q="textfont",r="addTrace",s="_apply",t="yaxis",u="ae.chart.model.Chart",v="trace",w="Object";qx.Class.define(u,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{layout:{check:o,event:n,nullable:false,apply:s,deferredInit:true},traces:{check:h,nullable:false,event:g,apply:s,deferredInit:true},config:{check:w,init:{displayModeBar:false}}},construct:function(){qx.core.Object.call(this);this.initTraces(new qx.data.Array());this.initLayout(new ae.chart.model.layout.Layout());},events:{"addTrace":a,"removeTrace":a,"moveTrace":a},members:{addTrace:function(x){this.getTraces().push(x);this.fireDataEvent(r,x);},removeTrace:function(z){var y=this.getTraces().indexOf(z);this.getTraces().remove(z);this.fireDataEvent(b,y);},removeAllTraces:function(){var k=this.getTraces().length;for(var i=0;i<k;i++ ){this.removeTrace(this.getTraces().getItem(k-1-i));};},moveTrace:function(C,A){var B=this.getTraces().indexOf(C);this.getTraces().removeAt(B);this.getTraces().insertAt(A,C);var e=new Object();e.trace=C;e.currentIndex=B;e.newIndex=A;this.fireDataEvent(f,e);},toJson:function(){var D={};D.layout=ae.chart.util.Serializer.toNativeObject(this.getLayout());D.data=ae.chart.util.Serializer.toNativeObject(this.getTraces());if(D.layout.yaxes){for(var i=0;i<D.layout.yaxes.length;i++ ){D.layout[t+(i+1)]=ae.chart.util.Serializer.toNativeObject(D.layout.yaxes[i]);};};if(D.layout.xaxes){for(var i=0;i<D.layout.xaxes.length;i++ ){D.layout[j+(i+1)]=ae.chart.util.Serializer.toNativeObject(D.layout.xaxes[i]);};};return D;},fromJson:function(F){var H={getModelClass:function(M,K,L,J){console.log(M);console.log(K);console.log(L);console.log(J);switch(M){case c:return ae.chart.model.layout.Layout;break;};if(J==0){if(K.data.length>0){K.traces=K.data;};return ae.chart.model.Chart;};if(L.startsWith(v)){switch(K.type){case d:return ae.chart.model.trace.Scatter;case l:return ae.chart.model.trace.Pie;default:return ae.chart.model.trace.Scatter;};};var I=[q,p,m];if(I.indexOf(L)>-1){return ae.chart.model.Font;};}};var E=new qx.data.marshal.Json(H);var G=E.toModel(F);return G;},_apply:function(O,N,name){this._applyEventPropagation(O,N,name);}}});})();

qx.$$loader.init();

