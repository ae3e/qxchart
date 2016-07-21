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
  packages : {"0":{"uris":["__out__:qxchart.95b91b5b2718.js.gz"]}},
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

qx.$$packageData['0']={"locales":{},"resources":{"ae/chart/test.png":[32,32,"png","ae.chart"]},"translations":{}};
(function(){var a="ae.chart.util.Serializer",b='\\\\',c='\\f',d='"',e="null",f='\\"',g="}",h="get",j="{",k='\\r',l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t='\\b',u="$$user_",v='\\n',w=",";qx.Class.define(a,{statics:{toNativeObject:function(z,B,y){var C;if(z==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(z.constructor,qx.data.IListData)){C=[];for(var i=0;i<z.getLength();i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z.getItem(i),B,y));};return C;};if(qx.lang.Type.isArray(z)){C=[];for(var i=0;i<z.length;i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z[i],B,y));};return C;};if(z.$$type==o){return z.classname;};if(z.$$type==p||z.$$type==r){return z.name;};if(z instanceof qx.core.Object){if(B!=null){var x=B(z);if(x!=undefined){return x;};};C={};var E=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in E){if(E[name].group!=undefined){continue;};if(!z.hasOwnProperty(u+name)){continue;};var A=z[h+qx.lang.String.firstUp(name)]();C[name]=ae.chart.util.Serializer.toNativeObject(A,B,y);};return C;};if(qx.lang.Type.isDate(z)&&y!=null){return y.format(z);};if(qx.locale&&qx.locale.LocalizedString&&z instanceof qx.locale.LocalizedString){return z.toString();};if(qx.lang.Type.isObject(z)){C={};for(var D in z){C[D]=ae.chart.util.Serializer.toNativeObject(z[D],B,y);};return C;};return z;},toJson:function(H,J,G){var K=l;if(H==null){return e;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(H.constructor,qx.data.IListData)){K+=q;for(var i=0;i<H.getLength();i++ ){K+=ae.chart.util.Serializer.toJson(H.getItem(i),J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(qx.lang.Type.isArray(H)){K+=q;for(var i=0;i<H.length;i++ ){K+=ae.chart.util.Serializer.toJson(H[i],J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(H.$$type==o){return d+H.classname+d;};if(H.$$type==p||H.$$type==r){return d+H.name+d;};if(H instanceof qx.core.Object){if(J!=null){var F=J(H);if(F!=undefined){return d+F+d;};};K+=j;var M=qx.util.PropertyUtil.getAllProperties(H.constructor);for(var name in M){if(M[name].group!=undefined){continue;};var I=H[h+qx.lang.String.firstUp(name)]();K+=d+name+s+ae.chart.util.Serializer.toJson(I,J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.locale&&qx.locale.LocalizedString&&H instanceof qx.locale.LocalizedString){H=H.toString();};if(qx.lang.Type.isDate(H)&&G!=null){return d+G.format(H)+d;};if(qx.lang.Type.isObject(H)){K+=j;for(var L in H){K+=d+L+s+ae.chart.util.Serializer.toJson(H[L],J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.lang.Type.isString(H)){H=H.replace(/([\\])/g,b);H=H.replace(/(["])/g,f);H=H.replace(/([\r])/g,k);H=H.replace(/([\f])/g,c);H=H.replace(/([\n])/g,v);H=H.replace(/([\t])/g,m);H=H.replace(/([\b])/g,t);return d+H+d;};if(qx.lang.Type.isDate(H)||qx.lang.Type.isRegExp(H)){return d+H+d;};return H+l;}}});})();(function(){var a="ae.chart.theme.Font";qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});})();(function(){var a="removeTrace",b="addTrace",c="[",d="moveTrace",f="e",g="xaxis",h="i",j="]",k="changeBubble",l="traces",m="yaxes",n="layout",o=".",p="ae.chart.controller.Plotly",q="yaxis",r="ae.chart.model.Chart",s="_applyModel",t="xaxes";qx.Class.define(p,{extend:qx.core.Object,properties:{model:{check:r,apply:s,nullable:true,init:null},plotlyDiv:{nullable:true,init:null}},construct:function(v,u){this.setPlotlyDiv(u);this.setModel(v);},members:{_applyModel:function(w){this._initModel(w);},_initModel:function(y){if(!y){return;};var z=ae.chart.util.Serializer.toNativeObject(y.getLayout());if(z.yaxes){for(var i=0;i<z.yaxes.length;i++ ){z[q+(i+1)]=ae.chart.util.Serializer.toNativeObject(z.yaxes[i]);};};if(z.xaxes){for(var i=0;i<z.xaxes.length;i++ ){z[g+(i+1)]=ae.chart.util.Serializer.toNativeObject(z.xaxes[i]);};};var x=ae.chart.util.Serializer.toNativeObject(y.getTraces());Plotly.plot(this.getPlotlyDiv(),x,z,y.getConfig());y.addListener(k,function(e){var name=e.getData().name;var D=e.getData().value;var B={};if(name.startsWith(n)){var C=name.substr(name.indexOf(o)+1);if(C.startsWith(t)||C.startsWith(m)){var A=parseInt(C.substring(C.indexOf(c)+1,C.indexOf(j)));if(A==0){C=(C.substring(0,C.indexOf(c))+C.substr(C.indexOf(j)+1)).replace(f,h);}else {C=(C.substring(0,C.indexOf(c))+(A+1)+C.substr(C.indexOf(j)+1)).replace(f,h);};};B[C]=ae.chart.util.Serializer.toNativeObject(D);Plotly.relayout(this.getPlotlyDiv(),B);};if(name.startsWith(l)&&name.indexOf(o)!=-1){var C=name.substr(name.indexOf(o)+1);var A=name.substring(name.indexOf(c)+1,name.indexOf(j));B[C]=ae.chart.util.Serializer.toNativeObject(D);Plotly.restyle(this.getPlotlyDiv(),B,A);};},this);y.addListener(b,function(e){Plotly.addTraces(this.getPlotlyDiv(),ae.chart.util.Serializer.toNativeObject(e.getData()));},this);y.addListener(a,function(e){Plotly.deleteTraces(this.getPlotlyDiv(),e.getData());},this);y.addListener(d,function(e){Plotly.moveTraces(this.getPlotlyDiv(),e.getData().currentIndex,e.getData().newIndex);},this);}}});})();(function(){var a="resize",b="appear",c="ae.chart.model.Chart",d="ae.chart.ui.Chart";qx.Class.define(d,{extend:qx.ui.core.Widget,properties:{model:{check:c,nullable:true,init:null}},construct:function(f){qx.ui.core.Widget.call(this);this.addListenerOnce(b,function(e){var g=new ae.chart.controller.Plotly(f,this.getPlotlyDiv());this.addListener(a,function(e){if(this.getPlotlyDiv()){Plotly.Plots.resize(this.getPlotlyDiv());};},this);},this);},members:{getPlotlyDiv:function(){return this.getContentElement().getDomElement();}}});})();(function(){var a="ae.chart.model.trace.Trace",b="abstract",c="String";qx.Class.define(a,{type:b,extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{type:{check:c,nullable:true,init:null}},members:{_apply:function(e,d,name){this._applyEventPropagation(e,d,name);}}});})();(function(){var a="qx.bom.Font",b="x",c="tozerox",d="Boolean",e="ae.chart.model.trace.Scatter",f="tozeroy",g="none",h="Number",i="tonexty",j="ae.chart.model.trace.auxiliary.Line",k="scatter",l="ae.chart.model.trace.auxiliary.Marker",m="all",n="tonextx",o="middle center",p="_apply",q="legendonly",r="y",s="String",t="Array";qx.Class.define(e,{extend:ae.chart.model.trace.Trace,properties:{connectgaps:{check:d,init:false,apply:p},dx:{check:h,init:1,apply:p},dy:{check:h,init:1,apply:p},fill:{check:[g,f,c,i,n],init:g,apply:p},fillcolor:{check:s,init:null,apply:p},hoverinfo:{check:s,init:m,apply:p},legendgroup:{check:s,init:null,apply:p},line:{check:j,apply:p},marker:{check:l,apply:p},mode:{check:s,init:null,apply:p},name:{check:s,init:null,apply:p},opacity:{check:h,init:1,apply:p},r:{check:t,apply:p},showlegend:{check:d,init:true,apply:p},t:{check:t,apply:p},text:{init:null,apply:p},textfont:{check:a,nullable:true,apply:p,init:null},textposition:{init:o,apply:p},visible:{check:[true,false,q],init:true,apply:p},x0:{init:0,apply:p},x:{check:t,nullable:true,init:null,apply:p},xaxis:{check:s,init:b,apply:p},y0:{init:0,apply:p},y:{check:t,nullable:true,init:null,apply:p},yaxis:{check:s,init:r,apply:p}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(k);},members:{}});})();(function(){var a="bar",b="ae.chart.model.trace.Bar",c="_apply",d="h",e="v";qx.Class.define(b,{extend:ae.chart.model.trace.Scatter,properties:{orientation:{check:[e,d],init:null,apply:c}},construct:function(){ae.chart.model.trace.Scatter.call(this);this.setType(a);},members:{}});})();(function(){var a="ae.chart.theme.Decoration";qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});})();(function(){var a="Boolean",b="Number",c="area",d="circle",e="diameter",f="_apply",g="ae.chart.model.trace.auxiliary.Marker";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{autocolorscale:{check:a,apply:f,init:true},cauto:{check:a,apply:f,init:true},cmax:{check:b,apply:f,init:null},cmin:{check:b,apply:f,init:null},color:{apply:f,init:null},colorscale:{apply:f,init:null},maxdisplayed:{check:b,apply:f,init:0},opacity:{apply:f,init:null},reversescale:{check:a,apply:f,init:false},showscale:{check:a,apply:f,init:false},size:{apply:f,init:6},sizemin:{check:b,apply:f,init:0},sizemode:{check:[e,c],apply:f,init:e},sizeref:{check:b,apply:f,init:1},symbol:{apply:f,init:d}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(i,h,name){this._applyEventPropagation(i,h,name);}}});})();(function(){var a="longdash",b="Number",c="dot",d="ae.chart.model.trace.auxiliary.Line",e="longdashdot",f="vh",g="vhv",h="dash",i="hv",j="hvh",k="linear",l="_apply",m="solid",n="String",o="dashdot",p="spline";qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{color:{check:n,init:null,apply:l},smoothing:{check:b,init:0,apply:l},dash:{check:[m,c,h,a,o,e],init:m,apply:l},width:{check:b,init:1,apply:l},shape:{check:[k,p,i,f,j,g],init:k,apply:l}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(r,q,name){this._applyEventPropagation(r,q,name);}}});})();(function(){var a="ae.chart.theme.Appearance";qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});})();(function(){var a="ae.chart.theme.Color";qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});})();(function(){var a="ae.chart.theme.Theme";qx.Theme.define(a,{meta:{color:ae.chart.theme.Color,decoration:ae.chart.theme.Decoration,font:ae.chart.theme.Font,icon:qx.theme.icon.Tango,appearance:ae.chart.theme.Appearance}});})();(function(){var a="qx.data.Array",b="clockwise",c="orbit",d="stack",e="pan",f="select",g="overlay",h="relative",i="lasso",j="group",k="String",l="turntable",m="zoom",n="y",o="",p="counterclockwise",q="initial",r="fraction",s="_apply",t="qx.bom.Font",u="percent",v="Number",w="Booleany",x="closest",y="ae.chart.model.layout.Layout",z="x";qx.Class.define(y,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{annotations:{check:a,apply:s,init:new qx.data.Array()},autosize:{check:[true,false,q],apply:s,init:true},direction:{check:[b,p],apply:s,init:null},dragmode:{check:[m,e,f,i,c,l],apply:s,init:m},font:{check:t,nullable:true,apply:s,init:null},height:{check:v,apply:s,init:null},hovermode:{check:[z,n,x,false],apply:s,init:null},images:{check:a,apply:s,init:new qx.data.Array()},orientation:{check:v,apply:s,init:null},paper_bgcolor:{check:k,nullable:true,apply:s,init:null},plot_bgcolor:{check:k,nullable:true,apply:s,init:null},separators:{check:k,apply:s,init:null},shapes:{check:a,apply:s,init:new qx.data.Array()},showlegend:{check:w,apply:s,init:null},title:{check:k,nullable:true,apply:s,init:null},titlefont:{check:t,nullable:true,apply:s,init:null},width:{check:v,nullable:true,apply:s,init:null},xaxes:{check:a,apply:s,init:new qx.data.Array()},yaxes:{check:a,apply:s,init:new qx.data.Array()},barmode:{check:[d,j,g,h],apply:s,init:null},barnorm:{check:[o,u,r],apply:s,init:null},bargap:{check:v,apply:s,init:null},bargroupgap:{check:v,apply:s,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(B,A,name){this._applyEventPropagation(B,A,name);}}});})();(function(){var a="removeTrace",b="moveTrace",c="qx.event.type.Data",d="qx.data.Array",f="changeLayout",g="ae.chart.model.layout.Layout",h="addTrace",j="_apply",l="ae.chart.model.Chart",m="Object";qx.Class.define(l,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{layout:{check:g,event:f,nullable:false,apply:j,init:new ae.chart.model.layout.Layout()},traces:{check:d,nullable:false,apply:j,deferredInit:true},config:{check:m,init:{displayModeBar:false}}},construct:function(){qx.core.Object.call(this);this.initTraces(new qx.data.Array());},events:{"addTrace":c,"removeTrace":c,"moveTrace":c},members:{addTrace:function(n){this.getTraces().push(n);this.fireDataEvent(h,n);},removeTrace:function(p){var o=this.getTraces().indexOf(p);this.getTraces().remove(p);this.fireDataEvent(a,o);},removeAllTraces:function(){var k=this.getTraces().length;for(var i=0;i<k;i++ ){this.removeTrace(this.getTraces().getItem(k-1-i));};},moveTrace:function(s,q){var r=this.getTraces().indexOf(s);this.getTraces().removeAt(r);this.getTraces().insertAt(q,s);var e=new Object();e.trace=s;e.currentIndex=r;e.newIndex=q;this.fireDataEvent(b,e);},_apply:function(u,t,name){this._applyEventPropagation(u,t,name);}}});})();(function(){var a="lines",b="h",c="My chart",d="Change trace",f="#ff9896",g="execute",h='y2',i="Change axis",j="My new title",k="qx.debug",l="lines+markers",m="Change layout",n='lines+markers',o="#d62728",p="y",q="verdana",r="Temperature",s="#2ca02c",t="square",u="Add trace",v="#FFF",w="#EEE",x="right",y="Arial",z="#ff7f0e",A="Remove trace",B="Change data",C="ae.chart.Application",D='lines',E="#1f77b4";qx.Class.define(C,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);if(qx.core.Environment.get(k)){qx.log.appender.Native;qx.log.appender.Console;};var K=new ae.chart.model.Chart();var H=new ae.chart.model.layout.Layout().set({title:c,plot_bgcolor:w,paper_bgcolor:v});K.setLayout(H);var L=new ae.chart.model.trace.Bar();L.setX([1,2,3,4]);L.setY([10,15,13,17]);L.setOrientation(b);var R=new ae.chart.model.trace.Scatter().set({x:[2,3,4,5],y:[16,5,11,9],mode:D,yaxis:h});var W=new ae.chart.model.trace.Scatter().set({x:[1,2,3,4],y:[12,9,15,12],mode:n});K.getTraces().push(L);K.addTrace(R);K.addTrace(W);var Q=new ae.chart.model.axis.Axis();Q.setColor(E);var G=new ae.chart.model.axis.Axis();G.setColor(z);G.setSide(x);G.setOverlaying(p);var J=new qx.data.Array();J.push(Q);J.push(G);H.setYaxes(J);var M=new ae.chart.ui.Chart(K);var I=this.getRoot();I.set({backgroundColor:v});var V=new qx.ui.container.Composite(new qx.ui.layout.VBox());V.add(M,{flex:1});var F=new qx.ui.container.Composite(new qx.ui.layout.HBox(20)).set({margin:[0,0,30,0]});var P=new qx.ui.form.Button(m);P.addListener(g,function(e){H.setTitle(j);var X=new qx.bom.Font(36,[y,q]);X.setColor(z);H.setTitlefont(X);});var O=new qx.ui.form.Button(B);O.addListener(g,function(e){L.setY([[8,15,22,17]]);});var N=new qx.ui.form.Button(d);N.addListener(g,function(e){L.setName(r);L.setMode(l);var Y=new ae.chart.model.trace.auxiliary.Marker();Y.setSize(12);Y.setSymbol(t);Y.setColor(o);L.setMarker(Y);var ba=new ae.chart.model.trace.auxiliary.Line();ba.setWidth(4);ba.setColor(f);L.setLine(ba);});var U=new qx.ui.form.Button(i);U.addListener(g,function(e){Q.setColor(s);Q.setRange([0,50]);});var T=new qx.ui.form.Button(u);T.addListener(g,function(e){this.scatter=new ae.chart.model.trace.Scatter();this.scatter.setX([1,2,3,4]);this.scatter.setY([20,18,22,10]);this.scatter.setMode(a);K.addTrace(this.scatter);T.setEnabled(false);S.setEnabled(true);},this);var S=new qx.ui.form.Button(A).set({enabled:false});S.addListener(g,function(e){K.removeTrace(this.scatter);T.setEnabled(true);S.setEnabled(false);},this);F.add(new qx.ui.core.Spacer(),{flex:1});F.add(P);F.add(O);F.add(N);F.add(U);F.add(T);F.add(S);F.add(new qx.ui.core.Spacer(),{flex:1});V.add(F);I.add(V,{edge:0});}}});})();(function(){var a="-",b="first",c="Boolean",d="E",e="array",f="bottom",g="date",h="category descending",i="Integer",j="allticks",k="power",l="category ascending",m="reversed",n="outside",o="auto",p="tozero",q="String",r="linear",s="category",t="",u="inside",v="nonnegative",w="B",x="ae.chart.model.axis.Axis",y="top",z="_apply",A="right",B="normal",C="qx.bom.Font",D="SI",E="ticks",F="none",G="Number",H="e",I="all",J="last",K="left",L="log",M="Array",N="trace";qx.Class.define(x,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{anchor:{check:q,apply:z,init:null},autorange:{check:[true,false,m],apply:z,init:null},categoryarray:{apply:z,init:true},categoryorder:{check:[N,l,h,e],apply:z,init:N},color:{check:q,apply:z,init:null},domain:{check:M,apply:z,init:null},dtick:{apply:z,init:null},exponentformat:{check:[F,H,d,k,D,w],apply:z,init:null},fixedrange:{check:c,apply:z,init:null},gridcolor:{check:q,apply:z,init:null},gridwidth:{check:G,apply:z,init:null},hoverformat:{apply:z,init:null},linecolor:{check:q,apply:z,init:null},linewidth:{check:G,apply:z,init:null},mirror:{check:[true,false,E,I,j],apply:z,init:null},nticks:{check:i,apply:z,init:null},overlaying:{check:q,apply:z,init:null},position:{check:i,apply:z,init:null},range:{check:M,apply:z,init:null},rangemode:{check:[B,p,v],apply:z,init:null},showexponent:{check:[I,b,J,F],apply:z,init:null},showgrid:{check:c,apply:z,init:null},showline:{check:c,apply:z,init:null},showticklabels:{check:c,apply:z,init:null},showtickprefix:{check:[I,b,J,F],apply:z,init:null},showticksuffix:{check:[I,b,J,F],apply:z,init:null},side:{check:[y,f,K,A],apply:z,init:null},tick0:{check:G,apply:z,init:null},tickangle:{check:G,apply:z,init:null},tickcolor:{check:q,apply:z,init:null},tickfont:{check:C,apply:z,init:null},tickformat:{check:q,apply:z,init:null},ticklen:{check:G,apply:z,init:null},tickmode:{check:[o,r,e],apply:z,init:null},tickprefix:{check:q,apply:z,init:null},tick:{check:[u,n,t],apply:z,init:null},ticksuffix:{check:q,apply:z,init:null},ticktext:{check:M,apply:z,init:null},tickval:{check:M,apply:z,init:null},tickwidth:{check:G,apply:z,init:null},title:{check:q,apply:z,init:null},titlefont:{check:C,apply:z,init:null},type:{check:[a,r,L,g,s],apply:z,init:null},zeroline:{check:c,apply:z,init:null},zerolinecolor:{check:q,apply:z,init:null},zerolinewidth:{check:G,apply:z,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(P,O,name){this._applyEventPropagation(P,O,name);}}});})();

qx.$$loader.init();

