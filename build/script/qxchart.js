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
  packages : {"0":{"uris":["__out__:qxchart.6ce372a2d3f1.js.gz"]}},
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
(function(){var b="moveTrace",c="qx.data.Array",d="layout",f="axis",g="axis\d*",h='plotly_relayout',j="_applyModel",k='plotly_hover',l='plotly_selected',m="changeLayout",n="ae.chart.model.Chart",p="changeSelection",q="xaxes",r="clickTrace",s="resize",t="i",u="]",v="ae.chart.controller.Plotly",w="traces",x="overTrace",y="[",z='plotly_unhover',A="outTrace",B="removeTrace",C="click",D="e",E="yaxes",F="addTrace",G="changeBubble",H=".",I='plotly_click';qx.Class.define(v,{extend:qx.core.Object,properties:{model:{check:n,apply:j,nullable:true,init:null},target:{nullable:true,init:null}},construct:function(J,K){K.addListener(s,function(e){if(K.getPlotlyDiv()){Plotly.Plots.resize(K.getPlotlyDiv());};},K);this.setTarget(K);this.setModel(J);this._initModel(J);},members:{_applyModel:function(L){},_initModel:function(O){if(!O){return;};var N=O.toJson();Plotly.newPlot(this.getTarget().getPlotlyDiv(),N.data,N.layout,O.getConfig());window.plotdiv=this.getTarget().getPlotlyDiv();O.addListener(G,function(e){var name=e.getData().name;var Y=e.getData().value;var V=e.getData().item;var W={};if(name.startsWith(d)){var S=name.substr(name.indexOf(H)+1);if(S.startsWith(q)||S.startsWith(E)){var T=(name.match(/\./g)||[]).length;if(Array.isArray(Y)&&T==1){var X=name[7];var R=this.getTarget().getPlotlyDiv().layout;for(var o in R){var P=new RegExp(X+g);if(o.match(P)){delete R[o];};};for(var i=0;i<V.length;i++ ){var a;if(i==0){a=X+f;}else {a=X+f+(i+1);};R[a]=ae.chart.util.Serializer.toNativeObject(V.getItem(i));};Plotly.redraw(this.getTarget().getPlotlyDiv());return;};var Q=parseInt(S.substring(S.indexOf(y)+1,S.indexOf(u)));if(Q==0){S=(S.substring(0,S.indexOf(y))+S.substr(S.indexOf(u)+1)).replace(D,t);}else {S=(S.substring(0,S.indexOf(y))+(Q+1)+S.substr(S.indexOf(u)+1)).replace(D,t);};};W[S]=ae.chart.util.Serializer.toNativeObject(Y);if(W[S]!=null){Plotly.relayout(this.getTarget().getPlotlyDiv(),W);};};if(name.startsWith(w)){if(name.indexOf(H)==-1){var ba=[];if(Y.classname==c){for(var i=0;i<V.getTraces().length;i++ ){ba.push(ae.chart.util.Serializer.toNativeObject(V.getTraces().getItem(i)));};this.getTarget().getPlotlyDiv().data=ba.slice();Plotly.redraw(this.getTarget().getPlotlyDiv());return;}else {};}else {var S=name.substr(name.indexOf(H)+1);var Q=parseInt(name.substring(name.indexOf(y)+1,name.indexOf(u)));W[S]=ae.chart.util.Serializer.toNativeObject(Y);for(var U in W){W[U]=[W[U]];};Plotly.restyle(this.getTarget().getPlotlyDiv(),W,[Q]);};};},this);O.addListener(F,function(e){Plotly.addTraces(this.getTarget().getPlotlyDiv(),ae.chart.util.Serializer.toNativeObject(e.getData()));},this);O.addListener(B,function(e){Plotly.deleteTraces(this.getTarget().getPlotlyDiv(),e.getData());},this);O.addListener(b,function(e){Plotly.moveTraces(this.getTarget().getPlotlyDiv(),e.getData().currentIndex,e.getData().newIndex);},this);var M=this.getTarget();M.getPlotlyDiv().on(I,function(bb){M.fireEvent(C,qx.event.type.Mouse,[{},M,M,false,true]);M.fireDataEvent(r,bb);});M.getPlotlyDiv().on(k,function(bc){M.fireDataEvent(x,bc);});M.getPlotlyDiv().on(z,function(bd){M.fireDataEvent(A,bd);});M.getPlotlyDiv().on(l,function(be){M.fireDataEvent(p,be);});M.getPlotlyDiv().on(h,function(bf){M.fireDataEvent(m,bf);});}}});})();(function(){var a="changeModel",b="jpeg",c="browser.name",d='error',f='success',g="ae.chart.ui.Chart",h="png",i="appear",j="svg",k="json",l='.',m='a',n="ae.chart.model.Chart",o="text/plain;charset=utf-8",p="_applyModel",q="ie",r="qx.event.type.Data";qx.Class.define(g,{extend:qx.ui.core.Widget,properties:{model:{check:n,nullable:true,event:a,init:null,apply:p}},events:{"clickTrace":r,"overTrace":r,"outTrace":r,"changeSelection":r,"changeLayout":r},construct:function(s){qx.ui.core.Widget.call(this);this.setModel(s);},members:{getPlotlyDiv:function(){return this.getContentElement().getDomElement();},_applyModel:function(t){if(this.getPlotlyDiv()){new ae.chart.controller.Plotly(t,this);}else {this.addListenerOnce(i,function(e){var u=new ae.chart.controller.Plotly(t,this);},this);};},redraw:function(){Plotly.redraw(this.getPlotlyDiv());},saveAs:function(v,y){switch(v){case j:var A=this.getPlotlyDiv();var w=Plotly.Snapshot.toSVG(A);console.log(w);var B=new Blob([w],{type:o});y+=l+v;if(qx.core.Environment.get(c)==q){window.navigator.msSaveBlob(B,y);}else {var x=document.createElement(m);x.href=window.URL.createObjectURL(B);;x.download=y;document.body.appendChild(x);x.click();document.body.removeChild(x);};break;case k:var z=JSON.stringify(this.getModel().toJson());var B=new Blob([z],{type:o});y+=l+v;if(qx.core.Environment.get(c)==q){window.navigator.msSaveBlob(B,y);}else {var x=document.createElement(m);x.href=window.URL.createObjectURL(B);;x.download=y;document.body.appendChild(x);x.click();document.body.removeChild(x);};break;case h:case b:var A=this.getPlotlyDiv();var C=Plotly.Snapshot.toImage(A,{format:v});y+=l+v;C.once(f,function(E){var D=document.createElement(m);D.href=E;D.download=y;document.body.appendChild(D);D.click();document.body.removeChild(D);C.clean();});C.once(d,function(F){A._snapshotInProgress=false;console.error(F);C.clean();});break;};}}});})();(function(){var a="ae.chart.model.trace.Trace",b="abstract",c="Boolean",d="changeTextfont",e="changeName",f="changeTextposition",g="Number",h="changeText",i="ae.chart.model.trace.auxiliary.Marker",j="changeVisible",k="all",l="changeLegendgroup",m="ae.chart.model.Font",n="changeShowlegend",o="_apply",p="changeHoverinfo",q="String",r="changeOpacity",s="legendonly";qx.Class.define(a,{type:b,extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{type:{check:q,nullable:true,init:null},hoverinfo:{check:q,init:k,event:p,apply:o},legendgroup:{check:q,init:null,event:l,apply:o},marker:{check:i,apply:o},name:{check:q,init:null,event:e,apply:o},opacity:{check:g,init:1,event:r,apply:o},showlegend:{check:c,init:true,event:n,apply:o},text:{init:null,event:h,apply:o},textfont:{check:m,nullable:true,event:d,apply:o,init:null},textposition:{check:q,init:null,event:f,apply:o},visible:{check:[true,false,s],init:true,event:j,apply:o}},members:{_apply:function(u,t,name){this._applyEventPropagation(u,t,name);}}});})();(function(){var a="Boolean",b="ae.chart.model.trace.Scatter",c="tozeroy",d="changeX0",e="changeConnectgaps",f="tonextx",g="scatter",h="changeX",i="changeT",j="Array",k="tonext",l="Dy",m="y",n="String",o="toself",p="changeFill",q="tozerox",r="changeY0",s="changeFillcolor",t="changeDx",u="_apply",v="changeR",w="changeXaxis",x="changeMode",y="none",z="Number",A="ae.chart.model.trace.auxiliary.Line",B="Yaxis",C="changeY",D="x",E="tonexty";qx.Class.define(b,{extend:ae.chart.model.trace.Trace,properties:{connectgaps:{check:a,init:false,event:e,apply:u},dx:{check:z,init:1,event:t,apply:u},dy:{check:z,init:1,event:l,apply:u},fill:{check:[y,c,q,E,f,o,k],init:y,event:p,apply:u},fillcolor:{check:n,init:null,event:s,apply:u},line:{check:A,apply:u},mode:{check:n,init:null,event:x,apply:u},r:{check:j,init:null,event:v,apply:u},t:{check:j,init:null,event:i,apply:u},x0:{init:0,event:d,apply:u},x:{check:j,nullable:true,init:null,event:h,apply:u},xaxis:{check:n,init:D,event:w,apply:u},y0:{init:0,event:r,apply:u},y:{check:j,nullable:true,init:null,event:C,apply:u},yaxis:{check:n,init:m,event:B,apply:u}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(g);},members:{}});})();(function(){var a="v",b="h",c="ae.chart.model.trace.Bar",d="changeOrientation",e="_apply",f="bar";qx.Class.define(c,{extend:ae.chart.model.trace.Scatter,properties:{orientation:{check:[a,b],init:null,event:d,apply:e}},construct:function(){ae.chart.model.trace.Scatter.call(this);this.setType(f);},members:{}});})();(function(){var a="ae.chart.theme.Appearance";qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});})();(function(){var a="changeL",b="changeAutoexpand",c="Boolean",d="changeT",e="changePad",f="changeB",g="ae.chart.model.layout.Margin",h="Intger",i="_apply",j="changeR";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{b:{check:h,apply:i,event:f,init:80},l:{check:h,apply:i,event:a,init:80},r:{check:h,apply:i,event:j,init:80},t:{check:h,apply:i,event:d,init:80},pad:{check:h,apply:i,event:e,init:0},autoexpand:{check:c,apply:i,event:b,init:true}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(l,k,name){this._applyEventPropagation(l,k,name);}}});})();(function(){var a="-",b="changeExponentformat",c="changeAutorange",d="array",e="changeTickprefix",f="changeCategoryorder",g="category descending",h="changeType",i="changeTicktext",j="changeTickfont",k="changeNticks",l="changeTickwidth",m="changeShowexponent",n="ae.chart.model.axis.Axis",o="changeZerolinewidth",p="ae.chart.model.Font",q="changeShowticklabels",r="changeTitle",s="normal",t="ticks",u="Number",v="changeRangemode",w="linear",x="changeShowticksuffix",y="changeShowgrid",z="trace",A="first",B="changeZeroline",C="changeZerolinecolor",D="auto",E="changeShowtickprefix",F="changeLinecolor",G="changeMirror",H="category ascending",I="reversed",J="changeFixedrange",K="changeTickmode",L="changeTickangle",M="category",N="changeDtick",O="changeTitlefont",P="changeHoverformat",Q="none",R="changeTickformat",S="Boolean",T="changeTick",U="changeColor",V="allticks",W="power",X="top",Y="changeShowline",bN="changeTick0",bO="tozero",bP="inside",bJ="nonnegative",bK="changeCategoryarray",bL="date",bM="_apply",bU="right",bV="e",bW="changeAnchor",bX="all",bQ="left",bR="E",bS="changeTicksuffix",bT="bottom",cc="Integer",co="changeLinewidth",cp="changeGridwidth",cd="Array",bY="changePosition",ca="String",cr="changeTickcolor",cb="",ce="changeTicklen",cf="B",cg="changeGridcolor",ck="changeOverlaying",cs="changeTickval",cl="SI",ch="changeRange",ci="outside",cq="log",cj="changeDomain",cm="last",cn="changeSide";qx.Class.define(n,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{anchor:{check:ca,event:bW,apply:bM,nullable:true,init:null},autorange:{check:[true,false,I],event:c,apply:bM,nullable:true,init:null},categoryarray:{apply:bM,event:bK,nullable:true,init:true},categoryorder:{check:[z,H,g,d],event:f,apply:bM,nullable:true,init:z},color:{check:ca,event:U,apply:bM,nullable:true,init:null},domain:{check:cd,event:cj,apply:bM,nullable:true,init:null},dtick:{apply:bM,event:N,nullable:true,init:null},exponentformat:{check:[Q,bV,bR,W,cl,cf],event:b,apply:bM,nullable:true,init:null},fixedrange:{check:S,event:J,apply:bM,nullable:true,init:null},gridcolor:{check:ca,event:cg,apply:bM,nullable:true,init:null},gridwidth:{check:u,event:cp,apply:bM,nullable:true,init:null},hoverformat:{apply:bM,event:P,nullable:true,init:null},linecolor:{check:ca,event:F,apply:bM,nullable:true,init:null},linewidth:{check:u,event:co,apply:bM,nullable:true,init:null},mirror:{check:[true,false,t,bX,V],event:G,apply:bM,nullable:true,init:null},nticks:{check:cc,event:k,apply:bM,nullable:true,init:null},overlaying:{check:ca,event:ck,apply:bM,nullable:true,init:null},position:{check:cc,event:bY,apply:bM,nullable:true,init:null},range:{check:cd,event:ch,apply:bM,nullable:true,init:null},rangemode:{check:[s,bO,bJ],event:v,apply:bM,nullable:true,init:null},showexponent:{check:[bX,A,cm,Q],event:m,apply:bM,nullable:true,init:null},showgrid:{check:S,event:y,apply:bM,nullable:true,init:null},showline:{check:S,event:Y,apply:bM,nullable:true,init:null},showticklabels:{check:S,event:q,apply:bM,nullable:true,init:null},showtickprefix:{check:[bX,A,cm,Q],event:E,apply:bM,nullable:true,init:null},showticksuffix:{check:[bX,A,cm,Q],event:x,apply:bM,nullable:true,init:null},side:{check:[X,bT,bQ,bU],event:cn,apply:bM,nullable:true,init:null},tick0:{check:u,event:bN,apply:bM,nullable:true,init:null},tickangle:{check:u,event:L,apply:bM,nullable:true,init:null},tickcolor:{check:ca,event:cr,apply:bM,nullable:true,init:null},tickfont:{check:p,event:j,apply:bM,nullable:true,init:null},tickformat:{check:ca,event:R,apply:bM,nullable:true,init:null},ticklen:{check:u,event:ce,apply:bM,nullable:true,init:null},tickmode:{check:[D,w,d],event:K,apply:bM,nullable:true,init:null},tickprefix:{check:ca,event:e,apply:bM,nullable:true,init:null},ticks:{check:[bP,ci,cb],event:T,apply:bM,nullable:true,init:null},ticksuffix:{check:ca,event:bS,apply:bM,nullable:true,init:null},ticktext:{check:cd,event:i,apply:bM,nullable:true,init:null},tickval:{check:cd,event:cs,apply:bM,nullable:true,init:null},tickwidth:{check:u,event:l,apply:bM,nullable:true,init:null},title:{check:ca,event:r,apply:bM,nullable:true,init:null},titlefont:{check:p,event:O,apply:bM,nullable:true,init:null},type:{check:[a,w,cq,bL,M],event:h,apply:bM,nullable:true,init:null},zeroline:{check:S,event:B,apply:bM,nullable:true,init:null},zerolinecolor:{check:ca,event:C,apply:bM,nullable:true,init:null},zerolinewidth:{check:u,event:o,apply:bM,nullable:true,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(cu,ct,name){this._applyEventPropagation(cu,ct,name);}}});})();(function(){var a="ae.chart.util.Serializer",b='\\\\',c='\\f',d='"',e="null",f='\\"',g="}",h="get",j="{",k='\\r',l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t='\\b',u="$$user_",v='\\n',w=",";qx.Class.define(a,{statics:{toNativeObject:function(z,B,y){var C;if(z==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(z.constructor,qx.data.IListData)){C=[];for(var i=0;i<z.getLength();i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z.getItem(i),B,y));};return C;};if(qx.lang.Type.isArray(z)){C=[];for(var i=0;i<z.length;i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z[i],B,y));};return C;};if(z.$$type==o){return z.classname;};if(z.$$type==p||z.$$type==r){return z.name;};if(z instanceof qx.core.Object){if(B!=null){var x=B(z);if(x!=undefined){return x;};};C={};var E=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in E){if(E[name].group!=undefined){continue;};if(!z.hasOwnProperty(u+name)){continue;};var A=z[h+qx.lang.String.firstUp(name)]();C[name]=ae.chart.util.Serializer.toNativeObject(A,B,y);};return C;};if(qx.lang.Type.isDate(z)&&y!=null){return y.format(z);};if(qx.locale&&qx.locale.LocalizedString&&z instanceof qx.locale.LocalizedString){return z.toString();};if(qx.lang.Type.isObject(z)){C={};for(var D in z){C[D]=ae.chart.util.Serializer.toNativeObject(z[D],B,y);};return C;};return z;},toJson:function(H,J,G){var K=l;if(H==null){return e;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(H.constructor,qx.data.IListData)){K+=q;for(var i=0;i<H.getLength();i++ ){K+=ae.chart.util.Serializer.toJson(H.getItem(i),J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(qx.lang.Type.isArray(H)){K+=q;for(var i=0;i<H.length;i++ ){K+=ae.chart.util.Serializer.toJson(H[i],J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(H.$$type==o){return d+H.classname+d;};if(H.$$type==p||H.$$type==r){return d+H.name+d;};if(H instanceof qx.core.Object){if(J!=null){var F=J(H);if(F!=undefined){return d+F+d;};};K+=j;var M=qx.util.PropertyUtil.getAllProperties(H.constructor);for(var name in M){if(M[name].group!=undefined){continue;};var I=H[h+qx.lang.String.firstUp(name)]();K+=d+name+s+ae.chart.util.Serializer.toJson(I,J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.locale&&qx.locale.LocalizedString&&H instanceof qx.locale.LocalizedString){H=H.toString();};if(qx.lang.Type.isDate(H)&&G!=null){return d+G.format(H)+d;};if(qx.lang.Type.isObject(H)){K+=j;for(var L in H){K+=d+L+s+ae.chart.util.Serializer.toJson(H[L],J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.lang.Type.isString(H)){H=H.replace(/([\\])/g,b);H=H.replace(/(["])/g,f);H=H.replace(/([\r])/g,k);H=H.replace(/([\f])/g,c);H=H.replace(/([\n])/g,v);H=H.replace(/([\t])/g,m);H=H.replace(/([\b])/g,t);return d+H+d;};if(qx.lang.Type.isDate(H)||qx.lang.Type.isRegExp(H)){return d+H+d;};return H+l;}}});})();(function(){var a="Boolean",b="Number",c="area",d="circle",e="diameter",f="_apply",g="ae.chart.model.trace.auxiliary.Marker";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{autocolorscale:{check:a,apply:f,init:true},cauto:{check:a,apply:f,init:true},cmax:{check:b,apply:f,init:null},cmin:{check:b,apply:f,init:null},color:{apply:f,init:null},colorscale:{apply:f,init:null},maxdisplayed:{check:b,apply:f,init:0},opacity:{apply:f,init:null},reversescale:{check:a,apply:f,init:false},showscale:{check:a,apply:f,init:false},size:{apply:f,init:6},sizemin:{check:b,apply:f,init:0},sizemode:{check:[e,c],apply:f,init:e},sizeref:{check:b,apply:f,init:1},symbol:{apply:f,init:d}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(i,h,name){this._applyEventPropagation(i,h,name);}}});})();(function(){var a="changeSize",b="Number",c="changeFamily",d="changeColor",e="ae.chart.model.Font",f="_apply",g="String";qx.Class.define(e,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{family:{check:g,event:c,apply:f,nullable:true,init:null},size:{check:b,event:a,apply:f,nullable:true,init:null},color:{check:g,event:d,apply:f,nullable:true,init:null}},construct:function(j,i,h){qx.core.Object.call(this);if(j){this.setSize(j);};if(i){this.setFamily(i);};if(h){this.setColor(h);};},members:{_apply:function(l,k,name){this._applyEventPropagation(l,k,name);}}});})();(function(){var a="ae.chart.theme.Color";qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});})();(function(){var a="text",b="changeInsidetextfont",c="Boolean",d="changeLabels",e="clockwise",f="Object",g="changeTextinfo",h="changeDirection",i="changePull",j="changeDomain",k="value",l="changeRotation",m="changeLabel0",n="String",o="counterclockwise",p="pie",q="ae.chart.model.Font",r="_apply",s="changeDlabel",t="Array",u="percent",v="changeHole",w="none",x="Number",y="changeValues",z="label",A="changeScalegroup",B="changeSort",C="changeOutsidetextfont",D="ae.chart.model.trace.Pie";qx.Class.define(D,{extend:ae.chart.model.trace.Trace,properties:{direction:{check:[e,o],init:null,event:h,apply:r},dlabel:{check:x,init:null,event:s,apply:r},domain:{check:f,init:null,event:j,apply:r},hole:{check:x,init:null,event:v,apply:r},insidetextfont:{check:q,init:null,event:b,apply:r},label0:{check:x,init:null,event:m,apply:r},labels:{check:t,init:null,event:d,apply:r},outsidetextfont:{check:q,init:null,event:C,apply:r},pull:{init:null,event:i,apply:r},rotation:{check:x,init:null,event:l,apply:r},scalegroup:{check:n,init:null,event:A,apply:r},sort:{check:c,init:null,event:B,apply:r},textinfo:{check:[w,z,a,k,u],init:null,event:g,apply:r},values:{check:t,init:null,event:y,apply:r}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(p);},members:{}});})();(function(){var a="ae.chart.theme.Font";qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});})();(function(){var a="changeImages",b="changeWidth",c="Boolean",d="qx.data.Array",e="ae.chart.model.layout.Legend",f="clockwise",g="orbit",h="changeOrientation",i="changeShowlegend",j="changeMargin",k="changeHiddenlabels",l="stack",m="changeDirection",n="changeBargroupgap",o="group",p="changeAnnotations",q="Array",r="pan",s="select",t="overlay",u="changeAutosize",v="lasso",w="changeXaxes",x="changeHovermode",y="changePaper_bgcolor",z="y",A="changeDragmode",B="turntable",C="zoom",D="changeSeparators",E="changeYaxes",F="changeBarnorm",G="relative",H="",I="changeLegend",J="counterclockwise",K="initial",L="changeFont",M="changeBarmode",N="ae.chart.model.Font",O="fraction",P="_apply",Q="changeShapes",R="changeBargap",S="changeTitle",T="changePlot_bgcolor",U="changeTitlefont",V="percent",W="Number",X="ae.chart.model.layout.Margin",Y="closest",bf="String",bg="ae.chart.model.layout.Layout",bh="x",be="changeHeight";qx.Class.define(bg,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{annotations:{check:d,apply:P,event:p,init:new qx.data.Array()},autosize:{check:[true,false,K],event:u,apply:P,nullable:true,init:null},direction:{check:[f,J],event:m,apply:P,init:null},dragmode:{check:[C,r,s,v,g,B],event:A,apply:P,init:C},font:{check:N,event:L,nullable:true,apply:P,init:null},height:{check:W,event:be,apply:P,nullable:true,init:null},hovermode:{check:[bh,z,Y,false],event:x,apply:P,nullable:true,init:null},images:{check:d,event:a,apply:P,init:new qx.data.Array()},legend:{check:e,event:I,apply:P},margin:{check:X,event:j,apply:P},orientation:{check:W,event:h,apply:P,init:null},paper_bgcolor:{check:bf,event:y,nullable:true,apply:P,init:null},plot_bgcolor:{check:bf,event:T,nullable:true,apply:P,init:null},separators:{check:bf,event:D,apply:P,init:null},shapes:{check:d,event:Q,apply:P,init:new qx.data.Array()},showlegend:{check:c,event:i,apply:P,nullable:true,init:null},title:{check:bf,event:S,nullable:true,apply:P,init:null},titlefont:{check:N,event:U,nullable:true,apply:P,init:null},width:{check:W,event:b,nullable:true,apply:P,init:null},xaxes:{check:d,event:w,apply:P,deferredInit:true},yaxes:{check:d,event:E,apply:P,deferredInit:true},barmode:{check:[l,o,t,G],event:M,apply:P,init:null},barnorm:{check:[H,V,O],event:F,apply:P,init:null},bargap:{check:W,event:R,apply:P,init:null},bargroupgap:{check:W,event:n,apply:P,init:null},hiddenlabels:{check:q,event:k,apply:P,init:null}},construct:function(){qx.core.Object.call(this);this.initXaxes(new qx.data.Array());this.initYaxes(new qx.data.Array());},members:{_apply:function(bj,bi,name){this._applyEventPropagation(bj,bi,name);}}});})();(function(){var a="ae.chart.theme.Decoration";qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});})();(function(){var a="ae.chart.theme.Theme";qx.Theme.define(a,{meta:{color:ae.chart.theme.Color,decoration:ae.chart.theme.Decoration,font:ae.chart.theme.Font,icon:qx.theme.icon.Tango,appearance:ae.chart.theme.Appearance}});})();(function(){var a="longdash",b="Number",c="dot",d="ae.chart.model.trace.auxiliary.Line",e="longdashdot",f="vh",g="vhv",h="dash",i="hv",j="hvh",k="linear",l="_apply",m="solid",n="String",o="dashdot",p="spline";qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{color:{check:n,init:null,apply:l},smoothing:{check:b,init:0,apply:l},dash:{check:[m,c,h,a,o,e],init:m,apply:l},width:{check:b,init:1,apply:l},shape:{check:[k,p,i,f,j,g],init:k,apply:l}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(r,q,name){this._applyEventPropagation(r,q,name);}}});})();(function(){var a="moveTrace",b="textfont",c="qx.data.Array",d="layout",f="axis",g="qx.event.type.Data",h="changeLayout",j="font",l="Object",m="y",n="scatter",o="xaxis",p="pie",q="traces",r="titlefont",s="_apply",t="yaxis",u="removeTrace",v="ae.chart.model.Chart",w="marker",x="changeTraces",y="ae.chart.model.layout.Layout",z="addTrace",A="line",B="x",C="trace",D="object";qx.Class.define(v,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{layout:{check:y,event:h,nullable:false,apply:s,deferredInit:true},traces:{check:c,nullable:false,event:x,apply:s,deferredInit:true},config:{check:l,init:{displayModeBar:false}}},construct:function(){qx.core.Object.call(this);this.initTraces(new qx.data.Array());this.initLayout(new ae.chart.model.layout.Layout());},events:{"addTrace":g,"removeTrace":g,"moveTrace":g},members:{addTrace:function(E){this.getTraces().push(E);this.fireDataEvent(z,E);},removeTrace:function(G){var F=this.getTraces().indexOf(G);this.getTraces().remove(G);this.fireDataEvent(u,F);},removeAllTraces:function(){var k=this.getTraces().length;for(var i=0;i<k;i++ ){this.removeTrace(this.getTraces().getItem(k-1-i));};},moveTrace:function(J,H){var I=this.getTraces().indexOf(J);this.getTraces().removeAt(I);this.getTraces().insertAt(H,J);var e=new Object();e.trace=J;e.currentIndex=I;e.newIndex=H;this.fireDataEvent(a,e);},toJson:function(){var M={};M.layout=ae.chart.util.Serializer.toNativeObject(this.getLayout());M.data=ae.chart.util.Serializer.toNativeObject(this.getTraces());for(var i=0;i<this.getLayout().getYaxes().length;i++ ){M.layout[t+(i+1)]=ae.chart.util.Serializer.toNativeObject(this.getLayout().getYaxes().getItem(i));};for(var i=0;i<this.getLayout().getXaxes().length;i++ ){M.layout[o+(i+1)]=ae.chart.util.Serializer.toNativeObject(this.getLayout().getXaxes().getItem(i));};function L(N){for(var O in N){if(N.hasOwnProperty(O)){return false;};};return true;};function K(P,parent,Q){for(var k in P){if(P[k]===null)delete P[k];else if(typeof P[k]==D)K(P[k],P,k);};if(L(P)){delete parent[Q];};};K(M);return M;},fromJson:function(R){if(R.data.length>0){R.traces=R.data;};R.layout.xaxes=[];R.layout.yaxes=[];var S,W;for(var V in R.layout){if(V.match(/xaxis1?$/)){S=1;};if(V.match(/yaxis1?$/)){W=1;};if(V.match(/.axis\d*/)){switch(V[0]){case B:R.layout.xaxes.push(R.layout[V]);break;case m:R.layout.yaxes.push(R.layout[V]);break;};};};if(!S){R.layout.xaxes.unshift({});};if(!W){R.layout.yaxes.unshift({});};var T={getModelClass:function(bb,ba,bc,Y){if(Y==0){return ae.chart.model.Chart;}else {if(bc.startsWith(C)){bc=q;};if(bc.match(/.axes/)){bc=f;};switch(bc){case b:case r:case j:return ae.chart.model.Font;break;case w:return ae.chart.model.trace.auxiliary.Marker;break;case A:return ae.chart.model.trace.auxiliary.Line;break;case d:return ae.chart.model.layout.Layout;break;case f:return ae.chart.model.axis.Axis;break;case q:switch(ba.type){case n:return ae.chart.model.trace.Scatter;case p:return ae.chart.model.trace.Pie;default:return ae.chart.model.trace.Scatter;};break;};};}};var U=new qx.data.marshal.Json(T);var X=U.toModel(R);return X;},_apply:function(be,bd,name){this._applyEventPropagation(be,bd,name);}}});})();(function(){var a="changeTracegroupgap",b="ae.chart.model.layout.Legend",c="h",d="changeYanchor",e="v",f="changeOrientation",g="bottom",h="grouped",i="string",j="changeBgcolor",k="changeTraceorder",l="Integer",m="changeX",n="reversed",o="auto",p="center",q="middle",r="String",s="changeBordercolor",t="changeBorderwidth",u="changeFont",v="changeXanchor",w="ae.chart.model.Font",x="#444",y="top",z="_apply",A="right",B="normal",C="grouped+reversed",D="Number",E="left",F="changeY";qx.Class.define(b,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{bgcolor:{check:r,apply:z,event:j},bordercolor:{check:i,apply:z,event:s,init:x},borderwidth:{check:l,apply:z,event:t,init:0},font:{check:w,apply:z,event:u,nullable:true,apply:z,init:null},orientation:{check:[c,e],apply:z,event:f,init:e},tracegroupgap:{check:l,apply:z,event:a,init:10},traceorder:{check:[B,n,h,C],apply:z,event:k,init:B},x:{check:D,apply:z,event:m,init:1.02},xanchor:{check:[o,E,p,A],apply:z,event:v,init:E},y:{check:D,apply:z,event:F,init:1},yanchor:{check:[o,y,q,g],apply:z,event:d,init:o}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(H,G,name){this._applyEventPropagation(H,G,name);}}});})();

qx.$$loader.init();

