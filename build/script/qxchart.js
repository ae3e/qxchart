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
  packages : {"0":{"uris":["__out__:qxchart.7a87ef16bd0d.js.gz"]}},
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
(function(){var a="ae.chart.util.Serializer",b='\\\\',c='\\f',d='"',e="null",f='\\"',g="}",h="get",j="{",k='\\r',l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t='\\b',u="$$user_",v='\\n',w=",";qx.Class.define(a,{statics:{toNativeObject:function(z,B,y){var C;if(z==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(z.constructor,qx.data.IListData)){C=[];for(var i=0;i<z.getLength();i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z.getItem(i),B,y));};return C;};if(qx.lang.Type.isArray(z)){C=[];for(var i=0;i<z.length;i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z[i],B,y));};return C;};if(z.$$type==o){return z.classname;};if(z.$$type==p||z.$$type==r){return z.name;};if(z instanceof qx.core.Object){if(B!=null){var x=B(z);if(x!=undefined){return x;};};C={};var E=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in E){if(E[name].group!=undefined){continue;};if(!z.hasOwnProperty(u+name)){continue;};var A=z[h+qx.lang.String.firstUp(name)]();C[name]=ae.chart.util.Serializer.toNativeObject(A,B,y);};return C;};if(qx.lang.Type.isDate(z)&&y!=null){return y.format(z);};if(qx.locale&&qx.locale.LocalizedString&&z instanceof qx.locale.LocalizedString){return z.toString();};if(qx.lang.Type.isObject(z)){C={};for(var D in z){C[D]=ae.chart.util.Serializer.toNativeObject(z[D],B,y);};return C;};return z;},toJson:function(H,J,G){var K=l;if(H==null){return e;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(H.constructor,qx.data.IListData)){K+=q;for(var i=0;i<H.getLength();i++ ){K+=ae.chart.util.Serializer.toJson(H.getItem(i),J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(qx.lang.Type.isArray(H)){K+=q;for(var i=0;i<H.length;i++ ){K+=ae.chart.util.Serializer.toJson(H[i],J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(H.$$type==o){return d+H.classname+d;};if(H.$$type==p||H.$$type==r){return d+H.name+d;};if(H instanceof qx.core.Object){if(J!=null){var F=J(H);if(F!=undefined){return d+F+d;};};K+=j;var M=qx.util.PropertyUtil.getAllProperties(H.constructor);for(var name in M){if(M[name].group!=undefined){continue;};var I=H[h+qx.lang.String.firstUp(name)]();K+=d+name+s+ae.chart.util.Serializer.toJson(I,J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.locale&&qx.locale.LocalizedString&&H instanceof qx.locale.LocalizedString){H=H.toString();};if(qx.lang.Type.isDate(H)&&G!=null){return d+G.format(H)+d;};if(qx.lang.Type.isObject(H)){K+=j;for(var L in H){K+=d+L+s+ae.chart.util.Serializer.toJson(H[L],J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.lang.Type.isString(H)){H=H.replace(/([\\])/g,b);H=H.replace(/(["])/g,f);H=H.replace(/([\r])/g,k);H=H.replace(/([\f])/g,c);H=H.replace(/([\n])/g,v);H=H.replace(/([\t])/g,m);H=H.replace(/([\b])/g,t);return d+H+d;};if(qx.lang.Type.isDate(H)||qx.lang.Type.isRegExp(H)){return d+H+d;};return H+l;}}});})();(function(){var a="ae.chart.theme.Font";qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});})();(function(){var a="removeTrace",b="addTrace",c="[",d="e",f="raiseTrace",g="xaxis",h="i",j="]",k="changeBubble",l="traces",m="yaxes",n="layout",o=".",p="ae.chart.controller.Plotly",q="yaxis",r="ae.chart.model.Chart",s="_applyModel",t="xaxes";qx.Class.define(p,{extend:qx.core.Object,properties:{model:{check:r,apply:s,nullable:true,init:null},plotlyDiv:{nullable:true,init:null}},construct:function(v,u){this.setPlotlyDiv(u);this.setModel(v);},members:{_applyModel:function(w){this._initModel(w);},_initModel:function(y){if(!y){return;};var z=ae.chart.util.Serializer.toNativeObject(y.getLayout());if(z.yaxes){for(var i=0;i<z.yaxes.length;i++ ){z[q+(i+1)]=ae.chart.util.Serializer.toNativeObject(z.yaxes[i]);};};if(z.xaxes){for(var i=0;i<z.xaxes.length;i++ ){z[g+(i+1)]=ae.chart.util.Serializer.toNativeObject(z.xaxes[i]);};};var x=ae.chart.util.Serializer.toNativeObject(y.getTraces());Plotly.plot(this.getPlotlyDiv(),x,z,y.getConfig());y.addListener(k,function(e){var name=e.getData().name;var D=e.getData().value;var B={};if(name.startsWith(n)){var C=name.substr(name.indexOf(o)+1);if(C.startsWith(t)||C.startsWith(m)){var A=parseInt(C.substring(C.indexOf(c)+1,C.indexOf(j)));if(A==0){C=(C.substring(0,C.indexOf(c))+C.substr(C.indexOf(j)+1)).replace(d,h);}else {C=(C.substring(0,C.indexOf(c))+(A+1)+C.substr(C.indexOf(j)+1)).replace(d,h);};};B[C]=ae.chart.util.Serializer.toNativeObject(D);Plotly.relayout(this.getPlotlyDiv(),B);};if(name.startsWith(l)){var C=name.substr(name.indexOf(o)+1);var A=name.substring(name.indexOf(c)+1,name.indexOf(j));B[C]=ae.chart.util.Serializer.toNativeObject(D);Plotly.restyle(this.getPlotlyDiv(),B,A);};},this);y.addListener(b,function(e){},this);y.addListener(a,function(e){},this);y.addListener(f,function(e){},this);}}});})();(function(){var a="appear",b="ae.chart.model.Chart",c="ae.chart.ui.Chart";qx.Class.define(c,{extend:qx.ui.core.Widget,properties:{model:{check:b,nullable:true,init:null}},construct:function(d){qx.ui.core.Widget.call(this);this.addListenerOnce(a,function(e){var f=new ae.chart.controller.Plotly(d,this.getPlotlyDiv());},this);},members:{getPlotlyDiv:function(){return this.getContentElement().getDomElement();}}});})();(function(){var a="ae.chart.theme.Decoration";qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});})();(function(){var a="Boolean",b="Number",c="area",d="circle",e="diameter",f="_apply",g="ae.chart.model.trace.auxiliary.Marker";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{autocolorscale:{check:a,apply:f,init:true},cauto:{check:a,apply:f,init:true},cmax:{check:b,apply:f,init:null},cmin:{check:b,apply:f,init:null},color:{apply:f,init:null},colorscale:{apply:f,init:null},maxdisplayed:{check:b,apply:f,init:0},opacity:{apply:f,init:null},reversescale:{check:a,apply:f,init:false},showscale:{check:a,apply:f,init:false},size:{apply:f,init:6},sizemin:{check:b,apply:f,init:0},sizemode:{check:[e,c],apply:f,init:e},sizeref:{check:b,apply:f,init:1},symbol:{apply:f,init:d}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(i,h,name){this._applyEventPropagation(i,h,name);}}});})();(function(){var a="longdash",b="Number",c="dot",d="ae.chart.model.trace.auxiliary.Line",e="longdashdot",f="vh",g="vhv",h="dash",i="hv",j="hvh",k="linear",l="_apply",m="solid",n="String",o="dashdot",p="spline";qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{color:{check:n,init:null,apply:l},smoothing:{check:b,init:0,apply:l},dash:{check:[m,c,h,a,o,e],init:m,apply:l},width:{check:b,init:1,apply:l},shape:{check:[k,p,i,f,j,g],init:k,apply:l}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(r,q,name){this._applyEventPropagation(r,q,name);}}});})();(function(){var a="ae.chart.theme.Appearance";qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});})();(function(){var a="ae.chart.model.trace.Trace",b="abstract",c="String";qx.Class.define(a,{type:b,extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{type:{check:c,nullable:true,init:null}},members:{_apply:function(e,d,name){this._applyEventPropagation(e,d,name);}}});})();(function(){var a="ae.chart.theme.Color";qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});})();(function(){var a="ae.chart.theme.Theme";qx.Theme.define(a,{meta:{color:ae.chart.theme.Color,decoration:ae.chart.theme.Decoration,font:ae.chart.theme.Font,icon:qx.theme.icon.Tango,appearance:ae.chart.theme.Appearance}});})();(function(){var a="Number",b="zoom",c="ae.chart.model.layout.Layout",d="counterclockwise",e="initial",f="Booleany",g="closest",h="qx.bom.Font",i="qx.data.Array",j="clockwise",k="pan",l="orbit",m="select",n="turntable",o="_apply",p="x",q="y",r="String",s="lasso";qx.Class.define(c,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{annotations:{check:i,apply:o,init:new qx.data.Array()},autosize:{check:[true,false,e],apply:o,init:true},direction:{check:[j,d],apply:o,init:null},dragmode:{check:[b,k,m,s,l,n],apply:o,init:b},font:{check:h,nullable:true,apply:o,init:null},height:{check:a,apply:o,init:null},hovermode:{check:[p,q,g,false],apply:o,init:null},images:{check:i,apply:o,init:new qx.data.Array()},orientation:{check:a,apply:o,init:null},paper_bgcolor:{check:r,nullable:true,apply:o,init:null},plot_bgcolor:{check:r,nullable:true,apply:o,init:null},separators:{check:r,apply:o,init:null},shapes:{check:i,apply:o,init:new qx.data.Array()},showlegend:{check:f,apply:o,init:null},title:{check:r,nullable:true,apply:o,init:null},titlefont:{check:h,nullable:true,apply:o,init:null},width:{check:a,nullable:true,apply:o,init:null},xaxes:{check:i,apply:o,init:new qx.data.Array()},yaxes:{check:i,apply:o,init:new qx.data.Array()}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(u,t,name){this._applyEventPropagation(u,t,name);}}});})();(function(){var a="removeTrace",b="raiseTrace",c="qx.event.type.Data",d="qx.data.Array",f="changeLayout",g="ae.chart.model.layout.Layout",h="addTrace",j="_apply",l="ae.chart.model.Chart",m="Object";qx.Class.define(l,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{layout:{check:g,event:f,nullable:false,apply:j,init:new ae.chart.model.layout.Layout()},traces:{check:d,nullable:false,apply:j,init:new qx.data.Array()},config:{check:m,init:{displayModeBar:false}}},construct:function(){qx.core.Object.call(this);},events:{"addTrace":c,"removeTrace":c,"raiseTrace":c},members:{addTrace:function(n){this.getTraces().insertBefore(this.getTraces().getItem(0),n);this.fireDataEvent(h,n);},removeTrace:function(o){this.getTraces().remove(o);this.fireDataEvent(a,o);},removeAllTraces:function(){var k=this.getTraces().length;for(var i=0;i<k;i++ ){this.removeTrace(this.getTraces().getItem(k-1-i));};},raiseLayer:function(q,r){var p=this.getTraces().indexOf(q);this.getTraces().removeAt(p);this.getTraces().insertAt(p+r,q);var e=new Object();e.trace=q;e.delta=r;this.fireDataEvent(b,e);},_apply:function(t,s,name){this._applyEventPropagation(t,s,name);}}});})();(function(){var a="#0FF",b="Tutu",c="Temperature",d="#AAA",f="Title",g="#FF0",h="Arial",i="ae.chart.Application",j="y2",k="verdana",l="#F0F",m="#F00",n="#FFF",o="My chart",p="right",q="y",r="qx.debug",s="execute";qx.Class.define(i,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);if(qx.core.Environment.get(r)){qx.log.appender.Native;qx.log.appender.Console;};var B=new qx.ui.container.Composite(new qx.ui.layout.VBox());var x=new ae.chart.model.Chart();var z=new ae.chart.model.layout.Layout().set({title:o,plot_bgcolor:d});x.setLayout(z);var D=new ae.chart.model.trace.Scatter();D.setX([1,2,3,4]);D.setY([10,15,13,17]);var A=new ae.chart.model.trace.Scatter();A.setX([1,2,3,4]);A.setY([13,17,15,20]);A.setYaxis(j);var C=new qx.data.Array();C.push(D);C.push(A);x.setTraces(C);var E=new ae.chart.model.axis.Axis();E.setColor(l);var t=new ae.chart.model.axis.Axis();t.setColor(a);t.setSide(p);t.setOverlaying(q);var w=new qx.data.Array();w.push(E);w.push(t);z.setYaxes(w);var y=new ae.chart.ui.Chart(x);var u=this.getRoot();B.add(y,{flex:1});var v=new qx.ui.form.Button(f);v.addListener(s,function(e){z.setTitle(b);var H=new qx.bom.Font(36,[h,k]);H.setColor(n);z.setTitlefont(H);z.setPaper_bgcolor(m);D.setY([[2,15,1,17]]);D.setName(c);var F=new ae.chart.model.trace.auxiliary.Marker();F.setSize(12);F.setColor(g);D.setMarker(F);var G=new ae.chart.model.trace.auxiliary.Line();G.setWidth(4);G.setColor(l);D.setLine(G);E.setColor(n);});B.add(v);u.add(B,{edge:0});}}});})();(function(){var a="qx.bom.Font",b="x",c="tozerox",d="Boolean",e="ae.chart.model.trace.Scatter",f="tozeroy",g="none",h="Number",i="tonexty",j="ae.chart.model.trace.auxiliary.Line",k="scatter",l="ae.chart.model.trace.auxiliary.Marker",m="all",n="tonextx",o="middle center",p="_apply",q="legendonly",r="y",s="String",t="Array";qx.Class.define(e,{extend:ae.chart.model.trace.Trace,properties:{connectgaps:{check:d,init:false,apply:p},dx:{check:h,init:1,apply:p},dy:{check:h,init:1,apply:p},fill:{check:[g,f,c,i,n],init:g,apply:p},fillcolor:{check:s,init:null,apply:p},hoverinfo:{check:s,init:m,apply:p},legendgroup:{check:s,init:null,apply:p},line:{check:j,apply:p},marker:{check:l,apply:p},mode:{check:s,init:null,apply:p},name:{check:s,init:null,apply:p},opacity:{check:h,init:1,apply:p},r:{check:t,apply:p},showlegend:{check:d,init:true,apply:p},t:{check:t,apply:p},text:{init:null,apply:p},textfont:{check:a,nullable:true,apply:p,init:null},textposition:{init:o,apply:p},visible:{check:[true,false,q],init:true,apply:p},x0:{init:0,apply:p},x:{check:t,nullable:true,init:null,apply:p},xaxis:{check:s,init:b,apply:p},y0:{init:0,apply:p},y:{check:t,nullable:true,init:null,apply:p},yaxis:{check:s,init:r,apply:p}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(k);},members:{}});})();(function(){var a="-",b="first",c="Boolean",d="E",e="array",f="bottom",g="date",h="category descending",i="Integer",j="allticks",k="power",l="category ascending",m="reversed",n="outside",o="auto",p="tozero",q="String",r="linear",s="category",t="",u="inside",v="nonnegative",w="B",x="ae.chart.model.axis.Axis",y="top",z="_apply",A="right",B="normal",C="qx.bom.Font",D="SI",E="ticks",F="none",G="Number",H="e",I="all",J="last",K="left",L="log",M="Array",N="trace";qx.Class.define(x,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{anchor:{check:q,apply:z,init:null},autorange:{check:[true,false,m],apply:z,init:null},categoryarray:{apply:z,init:true},categoryorder:{check:[N,l,h,e],apply:z,init:N},color:{check:q,apply:z,init:null},domain:{check:M,apply:z,init:null},dtick:{apply:z,init:null},exponentformat:{check:[F,H,d,k,D,w],apply:z,init:null},fixedrange:{check:c,apply:z,init:null},gridcolor:{check:q,apply:z,init:null},gridwidth:{check:G,apply:z,init:null},hoverformat:{apply:z,init:null},linecolor:{check:q,apply:z,init:null},linewidth:{check:G,apply:z,init:null},mirror:{check:[true,false,E,I,j],apply:z,init:null},nticks:{check:i,apply:z,init:null},overlaying:{check:q,apply:z,init:null},position:{check:i,apply:z,init:null},range:{check:M,apply:z,init:null},rangemode:{check:[B,p,v],apply:z,init:null},showexponent:{check:[I,b,J,F],apply:z,init:null},showgrid:{check:c,apply:z,init:null},showline:{check:c,apply:z,init:null},showticklabels:{check:c,apply:z,init:null},showtickprefix:{check:[I,b,J,F],apply:z,init:null},showticksuffix:{check:[I,b,J,F],apply:z,init:null},side:{check:[y,f,K,A],apply:z,init:null},tick0:{check:G,apply:z,init:null},tickangle:{check:G,apply:z,init:null},tickcolor:{check:q,apply:z,init:null},tickfont:{check:C,apply:z,init:null},tickformat:{check:q,apply:z,init:null},ticklen:{check:G,apply:z,init:null},tickmode:{check:[o,r,e],apply:z,init:null},tickprefix:{check:q,apply:z,init:null},tick:{check:[u,n,t],apply:z,init:null},ticksuffix:{check:q,apply:z,init:null},ticktext:{check:M,apply:z,init:null},tickval:{check:M,apply:z,init:null},tickwidth:{check:G,apply:z,init:null},title:{check:q,apply:z,init:null},titlefont:{check:C,apply:z,init:null},type:{check:[a,r,L,g,s],apply:z,init:null},zeroline:{check:c,apply:z,init:null},zerolinecolor:{check:q,apply:z,init:null},zerolinewidth:{check:G,apply:z,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(P,O,name){this._applyEventPropagation(P,O,name);}}});})();

qx.$$loader.init();

