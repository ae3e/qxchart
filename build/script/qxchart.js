(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.aspects":false,"qx.debug":false,"qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.version":"5.0.1"};
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
  packages : {"0":{"uris":["__out__:qxchart.a816f81af741.js.gz"]}},
  urisBefore : ["https://cdn.plot.ly/plotly-1.14.2.min.js"],
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
(function(){var a="ae.chart.util.Serializer",b='\\\\',c='\\f',d='"',e="null",f='\\"',g="}",h="get",j="{",k='\\r',l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t='\\b',u="$$user_",v='\\n',w=",";qx.Class.define(a,{statics:{toNativeObject:function(z,B,y){var C;if(z==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(z.constructor,qx.data.IListData)){C=[];for(var i=0;i<z.getLength();i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z.getItem(i),B,y));};return C;};if(qx.lang.Type.isArray(z)){C=[];for(var i=0;i<z.length;i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z[i],B,y));};return C;};if(z.$$type==o){return z.classname;};if(z.$$type==p||z.$$type==r){return z.name;};if(z instanceof qx.core.Object){if(B!=null){var x=B(z);if(x!=undefined){return x;};};C={};var E=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in E){if(E[name].group!=undefined){continue;};if(!z.hasOwnProperty(u+name)){continue;};var A=z[h+qx.lang.String.firstUp(name)]();C[name]=ae.chart.util.Serializer.toNativeObject(A,B,y);};return C;};if(qx.lang.Type.isDate(z)&&y!=null){return y.format(z);};if(qx.locale&&qx.locale.LocalizedString&&z instanceof qx.locale.LocalizedString){return z.toString();};if(qx.lang.Type.isObject(z)){C={};for(var D in z){C[D]=ae.chart.util.Serializer.toNativeObject(z[D],B,y);};return C;};return z;},toJson:function(H,J,G){var K=l;if(H==null){return e;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(H.constructor,qx.data.IListData)){K+=q;for(var i=0;i<H.getLength();i++ ){K+=ae.chart.util.Serializer.toJson(H.getItem(i),J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(qx.lang.Type.isArray(H)){K+=q;for(var i=0;i<H.length;i++ ){K+=ae.chart.util.Serializer.toJson(H[i],J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(H.$$type==o){return d+H.classname+d;};if(H.$$type==p||H.$$type==r){return d+H.name+d;};if(H instanceof qx.core.Object){if(J!=null){var F=J(H);if(F!=undefined){return d+F+d;};};K+=j;var M=qx.util.PropertyUtil.getAllProperties(H.constructor);for(var name in M){if(M[name].group!=undefined){continue;};var I=H[h+qx.lang.String.firstUp(name)]();K+=d+name+s+ae.chart.util.Serializer.toJson(I,J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.locale&&qx.locale.LocalizedString&&H instanceof qx.locale.LocalizedString){H=H.toString();};if(qx.lang.Type.isDate(H)&&G!=null){return d+G.format(H)+d;};if(qx.lang.Type.isObject(H)){K+=j;for(var L in H){K+=d+L+s+ae.chart.util.Serializer.toJson(H[L],J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.lang.Type.isString(H)){H=H.replace(/([\\])/g,b);H=H.replace(/(["])/g,f);H=H.replace(/([\r])/g,k);H=H.replace(/([\f])/g,c);H=H.replace(/([\n])/g,v);H=H.replace(/([\t])/g,m);H=H.replace(/([\b])/g,t);return d+H+d;};if(qx.lang.Type.isDate(H)||qx.lang.Type.isRegExp(H)){return d+H+d;};return H+l;}}});})();(function(){var a="ae.chart.theme.Font";qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});})();(function(){var a="moveTrace",b="layout",c="outTrace",d='plotly_relayout',f="_applyModel",g='plotly_hover',h='plotly_selected',j="changeLayout",k="ae.chart.model.Chart",l="changeSelection",m="xaxes",n="clickTrace",o="resize",p="xaxis",q="i",r="]",s="ae.chart.controller.Plotly",t="traces",u="overTrace",v="[",w='plotly_unhover',x="yaxis",y="removeTrace",z="click",A="e",B="yaxes",C="addTrace",D="changeBubble",E=".",F='plotly_click';qx.Class.define(s,{extend:qx.core.Object,properties:{model:{check:k,apply:f,nullable:true,init:null},target:{nullable:true,init:null}},construct:function(G,H){H.addListener(o,function(e){if(H.getPlotlyDiv()){Plotly.Plots.resize(H.getPlotlyDiv());};},H);this.setTarget(H);this.setModel(G);this._initModel(G);},members:{_applyModel:function(I){},_initModel:function(M){if(!M){return;};var L=ae.chart.util.Serializer.toNativeObject(M.getLayout());if(L.yaxes){for(var i=0;i<L.yaxes.length;i++ ){L[x+(i+1)]=ae.chart.util.Serializer.toNativeObject(L.yaxes[i]);};};if(L.xaxes){for(var i=0;i<L.xaxes.length;i++ ){L[p+(i+1)]=ae.chart.util.Serializer.toNativeObject(L.xaxes[i]);};};var J=ae.chart.util.Serializer.toNativeObject(M.getTraces());Plotly.plot(this.getTarget().getPlotlyDiv(),J,L,M.getConfig());M.addListener(D,function(e){var name=e.getData().name;var Q=e.getData().value;var O={};if(name.startsWith(b)){var P=name.substr(name.indexOf(E)+1);if(P.startsWith(m)||P.startsWith(B)){var N=parseInt(P.substring(P.indexOf(v)+1,P.indexOf(r)));if(N==0){P=(P.substring(0,P.indexOf(v))+P.substr(P.indexOf(r)+1)).replace(A,q);}else {P=(P.substring(0,P.indexOf(v))+(N+1)+P.substr(P.indexOf(r)+1)).replace(A,q);};};O[P]=ae.chart.util.Serializer.toNativeObject(Q);Plotly.relayout(this.getTarget().getPlotlyDiv(),O);};if(name.startsWith(t)&&name.indexOf(E)!=-1){var P=name.substr(name.indexOf(E)+1);var N=name.substring(name.indexOf(v)+1,name.indexOf(r));O[P]=ae.chart.util.Serializer.toNativeObject(Q);Plotly.restyle(this.getTarget().getPlotlyDiv(),O,N);};},this);M.addListener(C,function(e){Plotly.addTraces(this.getTarget().getPlotlyDiv(),ae.chart.util.Serializer.toNativeObject(e.getData()));},this);M.addListener(y,function(e){Plotly.deleteTraces(this.getTarget().getPlotlyDiv(),e.getData());},this);M.addListener(a,function(e){Plotly.moveTraces(this.getTarget().getPlotlyDiv(),e.getData().currentIndex,e.getData().newIndex);},this);var K=this.getTarget();K.getPlotlyDiv().on(F,function(R){K.fireEvent(z,qx.event.type.Mouse,[{},K,K,false,true]);K.fireDataEvent(n,R);});K.getPlotlyDiv().on(g,function(S){K.fireDataEvent(u,S);});K.getPlotlyDiv().on(w,function(T){K.fireDataEvent(c,T);});K.getPlotlyDiv().on(h,function(U){K.fireDataEvent(l,U);});K.getPlotlyDiv().on(d,function(V){K.fireDataEvent(j,V);});}}});})();(function(){var a="qx.bom.Font",b="ae.chart.model.trace.Trace",c="abstract",d="Boolean",e="Number",f="String",g="all",h="_apply",i="ae.chart.model.trace.auxiliary.Marker",j="legendonly";qx.Class.define(b,{type:c,extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{type:{check:f,nullable:true,init:null},hoverinfo:{check:f,init:g,apply:h},legendgroup:{check:f,init:null,apply:h},marker:{check:i,apply:h},name:{check:f,init:null,apply:h},opacity:{check:e,init:1,apply:h},showlegend:{check:d,init:true,apply:h},text:{init:null,apply:h},textfont:{check:a,nullable:true,apply:h,init:null},textposition:{check:f,init:null,apply:h},visible:{check:[true,false,j],init:true,apply:h}},members:{_apply:function(l,k,name){this._applyEventPropagation(l,k,name);}}});})();(function(){var a="qx.bom.Font",b="percent",c="Boolean",d="text",e="counterclockwise",f="Number",g="Array",h="pie",i="none",j="clockwise",k="value",l="label",m="_apply",n="String",o="ae.chart.model.trace.Pie",p="Object";qx.Class.define(o,{extend:ae.chart.model.trace.Trace,properties:{direction:{check:[j,e],init:null,apply:m},dlabel:{check:f,init:null,apply:m},domain:{check:p,init:null,apply:m},hole:{check:f,init:null,apply:m},insidetextfont:{check:a,init:null,apply:m},label0:{check:f,init:null,apply:m},labels:{check:g,init:null,apply:m},outsidetextfont:{check:a,init:null,apply:m},pull:{init:null,apply:m},rotation:{check:f,init:null,apply:m},scalegroup:{check:n,init:null,apply:m},sort:{check:c,init:null,apply:m},textinfo:{check:[i,l,d,k,b],init:null,apply:m},values:{check:g,init:null,apply:m}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(h);},members:{}});})();(function(){var a="scatter",b="tozerox",c="Boolean",d="ae.chart.model.trace.Scatter",e="tozeroy",f="none",g="Number",h="tonexty",i="ae.chart.model.trace.auxiliary.Line",j="tonextx",k="_apply",l="x",m="y",n="String",o="Array";qx.Class.define(d,{extend:ae.chart.model.trace.Trace,properties:{connectgaps:{check:c,init:false,apply:k},dx:{check:g,init:1,apply:k},dy:{check:g,init:1,apply:k},fill:{check:[f,e,b,h,j],init:f,apply:k},fillcolor:{check:n,init:null,apply:k},line:{check:i,apply:k},mode:{check:n,init:null,apply:k},r:{check:o,apply:k},t:{check:o,apply:k},x0:{init:0,apply:k},x:{check:o,nullable:true,init:null,apply:k},xaxis:{check:n,init:l,apply:k},y0:{init:0,apply:k},y:{check:o,nullable:true,init:null,apply:k},yaxis:{check:n,init:m,apply:k}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(a);},members:{}});})();(function(){var a="bar",b="ae.chart.model.trace.Bar",c="_apply",d="h",e="v";qx.Class.define(b,{extend:ae.chart.model.trace.Scatter,properties:{orientation:{check:[e,d],init:null,apply:c}},construct:function(){ae.chart.model.trace.Scatter.call(this);this.setType(a);},members:{}});})();(function(){var a="ae.chart.theme.Decoration";qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});})();(function(){var a="Boolean",b="Number",c="area",d="circle",e="diameter",f="_apply",g="ae.chart.model.trace.auxiliary.Marker";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{autocolorscale:{check:a,apply:f,init:true},cauto:{check:a,apply:f,init:true},cmax:{check:b,apply:f,init:null},cmin:{check:b,apply:f,init:null},color:{apply:f,init:null},colorscale:{apply:f,init:null},maxdisplayed:{check:b,apply:f,init:0},opacity:{apply:f,init:null},reversescale:{check:a,apply:f,init:false},showscale:{check:a,apply:f,init:false},size:{apply:f,init:6},sizemin:{check:b,apply:f,init:0},sizemode:{check:[e,c],apply:f,init:e},sizeref:{check:b,apply:f,init:1},symbol:{apply:f,init:d}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(i,h,name){this._applyEventPropagation(i,h,name);}}});})();(function(){var a="longdash",b="Number",c="dot",d="ae.chart.model.trace.auxiliary.Line",e="longdashdot",f="vh",g="vhv",h="dash",i="hv",j="hvh",k="linear",l="_apply",m="solid",n="String",o="dashdot",p="spline";qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{color:{check:n,init:null,apply:l},smoothing:{check:b,init:0,apply:l},dash:{check:[m,c,h,a,o,e],init:m,apply:l},width:{check:b,init:1,apply:l},shape:{check:[k,p,i,f,j,g],init:k,apply:l}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(r,q,name){this._applyEventPropagation(r,q,name);}}});})();(function(){var a="ae.chart.theme.Appearance";qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});})();(function(){var a="ae.chart.theme.Color";qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});})();(function(){var a="ae.chart.theme.Theme";qx.Theme.define(a,{meta:{color:ae.chart.theme.Color,decoration:ae.chart.theme.Decoration,font:ae.chart.theme.Font,icon:qx.theme.icon.Tango,appearance:ae.chart.theme.Appearance}});})();(function(){var a="qx.data.Array",b="clockwise",c="orbit",d="stack",e="Array",f="pan",g="select",h="overlay",i="relative",j="lasso",k="group",l="String",m="turntable",n="zoom",o="y",p="",q="counterclockwise",r="initial",s="fraction",t="_apply",u="qx.bom.Font",v="percent",w="Number",x="Booleany",y="closest",z="ae.chart.model.layout.Layout",A="x";qx.Class.define(z,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{annotations:{check:a,apply:t,init:new qx.data.Array()},autosize:{check:[true,false,r],apply:t,init:true},direction:{check:[b,q],apply:t,init:null},dragmode:{check:[n,f,g,j,c,m],apply:t,init:n},font:{check:u,nullable:true,apply:t,init:null},height:{check:w,apply:t,init:null},hovermode:{check:[A,o,y,false],apply:t,init:null},images:{check:a,apply:t,init:new qx.data.Array()},orientation:{check:w,apply:t,init:null},paper_bgcolor:{check:l,nullable:true,apply:t,init:null},plot_bgcolor:{check:l,nullable:true,apply:t,init:null},separators:{check:l,apply:t,init:null},shapes:{check:a,apply:t,init:new qx.data.Array()},showlegend:{check:x,apply:t,init:null},title:{check:l,nullable:true,apply:t,init:null},titlefont:{check:u,nullable:true,apply:t,init:null},width:{check:w,nullable:true,apply:t,init:null},xaxes:{check:a,apply:t,init:new qx.data.Array()},yaxes:{check:a,apply:t,init:new qx.data.Array()},barmode:{check:[d,k,h,i],apply:t,init:null},barnorm:{check:[p,v,s],apply:t,init:null},bargap:{check:w,apply:t,init:null},bargroupgap:{check:w,apply:t,init:null},hiddenlabels:{check:e,apply:t,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(C,B,name){this._applyEventPropagation(C,B,name);}}});})();(function(){var a="removeTrace",b="moveTrace",c="qx.event.type.Data",d="qx.data.Array",f="changeLayout",g="ae.chart.model.layout.Layout",h="addTrace",j="_apply",l="ae.chart.model.Chart",m="Object";qx.Class.define(l,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{layout:{check:g,event:f,nullable:false,apply:j,init:new ae.chart.model.layout.Layout()},traces:{check:d,nullable:false,apply:j,deferredInit:true},config:{check:m,init:{displayModeBar:false}}},construct:function(){qx.core.Object.call(this);this.initTraces(new qx.data.Array());},events:{"addTrace":c,"removeTrace":c,"moveTrace":c},members:{addTrace:function(n){this.getTraces().push(n);this.fireDataEvent(h,n);},removeTrace:function(p){var o=this.getTraces().indexOf(p);this.getTraces().remove(p);this.fireDataEvent(a,o);},removeAllTraces:function(){var k=this.getTraces().length;for(var i=0;i<k;i++ ){this.removeTrace(this.getTraces().getItem(k-1-i));};},moveTrace:function(s,q){var r=this.getTraces().indexOf(s);this.getTraces().removeAt(r);this.getTraces().insertAt(q,s);var e=new Object();e.trace=s;e.currentIndex=r;e.newIndex=q;this.fireDataEvent(b,e);},_apply:function(u,t,name){this._applyEventPropagation(u,t,name);}}});})();(function(){var a="appear",b="ae.chart.model.Chart",c="ae.chart.ui.Chart",d="qx.event.type.Data";qx.Class.define(c,{extend:qx.ui.core.Widget,properties:{model:{check:b,nullable:true,init:null}},events:{"clickTrace":d,"overTrace":d,"outTrace":d,"changeSelection":d,"changeLayout":d},construct:function(f){qx.ui.core.Widget.call(this);this.addListenerOnce(a,function(e){var g=new ae.chart.controller.Plotly(f,this);},this);},members:{getPlotlyDiv:function(){return this.getContentElement().getDomElement();}}});})();(function(){var a="-",b="first",c="Boolean",d="E",e="array",f="bottom",g="date",h="category descending",i="Integer",j="allticks",k="power",l="category ascending",m="reversed",n="outside",o="auto",p="tozero",q="String",r="linear",s="category",t="",u="inside",v="nonnegative",w="B",x="ae.chart.model.axis.Axis",y="top",z="_apply",A="right",B="normal",C="qx.bom.Font",D="SI",E="ticks",F="none",G="Number",H="e",I="all",J="last",K="left",L="log",M="Array",N="trace";qx.Class.define(x,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{anchor:{check:q,apply:z,init:null},autorange:{check:[true,false,m],apply:z,init:null},categoryarray:{apply:z,init:true},categoryorder:{check:[N,l,h,e],apply:z,init:N},color:{check:q,apply:z,init:null},domain:{check:M,apply:z,init:null},dtick:{apply:z,init:null},exponentformat:{check:[F,H,d,k,D,w],apply:z,init:null},fixedrange:{check:c,apply:z,init:null},gridcolor:{check:q,apply:z,init:null},gridwidth:{check:G,apply:z,init:null},hoverformat:{apply:z,init:null},linecolor:{check:q,apply:z,init:null},linewidth:{check:G,apply:z,init:null},mirror:{check:[true,false,E,I,j],apply:z,init:null},nticks:{check:i,apply:z,init:null},overlaying:{check:q,apply:z,init:null},position:{check:i,apply:z,init:null},range:{check:M,apply:z,init:null},rangemode:{check:[B,p,v],apply:z,init:null},showexponent:{check:[I,b,J,F],apply:z,init:null},showgrid:{check:c,apply:z,init:null},showline:{check:c,apply:z,init:null},showticklabels:{check:c,apply:z,init:null},showtickprefix:{check:[I,b,J,F],apply:z,init:null},showticksuffix:{check:[I,b,J,F],apply:z,init:null},side:{check:[y,f,K,A],apply:z,init:null},tick0:{check:G,apply:z,init:null},tickangle:{check:G,apply:z,init:null},tickcolor:{check:q,apply:z,init:null},tickfont:{check:C,apply:z,init:null},tickformat:{check:q,apply:z,init:null},ticklen:{check:G,apply:z,init:null},tickmode:{check:[o,r,e],apply:z,init:null},tickprefix:{check:q,apply:z,init:null},tick:{check:[u,n,t],apply:z,init:null},ticksuffix:{check:q,apply:z,init:null},ticktext:{check:M,apply:z,init:null},tickval:{check:M,apply:z,init:null},tickwidth:{check:G,apply:z,init:null},title:{check:q,apply:z,init:null},titlefont:{check:C,apply:z,init:null},type:{check:[a,r,L,g,s],apply:z,init:null},zeroline:{check:c,apply:z,init:null},zerolinecolor:{check:q,apply:z,init:null},zerolinewidth:{check:G,apply:z,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(P,O,name){this._applyEventPropagation(P,O,name);}}});})();

qx.$$loader.init();

