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
  packages : {"0":{"uris":["__out__:qxchart.f83daf60719f.js.gz"]}},
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
(function(){var a="ae.chart.theme.Font";qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});})();(function(){var a="removeTrace",b="addTrace",c="[",d="e",f="raiseTrace",g="xaxis",h="i",j="]",k="changeBubble",l="traces",m="yaxes",n="layout",o=".",p="ae.chart.controller.Plotly",q="yaxis",r="ae.chart.model.Chart",s="_applyModel",t="xaxes";qx.Class.define(p,{extend:qx.core.Object,properties:{model:{check:r,apply:s,nullable:true,init:null},plotlyDiv:{nullable:true,init:null}},construct:function(v,u){this.setPlotlyDiv(u);this.setModel(v);},members:{_applyModel:function(w){this._initModel(w);},_initModel:function(y){if(!y){return;};var z=ae.util.Serializer.toNativeObject(y.getLayout());if(z.yaxes){for(var i=0;i<z.yaxes.length;i++ ){z[q+(i+1)]=ae.util.Serializer.toNativeObject(z.yaxes[i]);};};if(z.xaxes){for(var i=0;i<z.xaxes.length;i++ ){z[g+(i+1)]=ae.util.Serializer.toNativeObject(z.xaxes[i]);};};var x=ae.util.Serializer.toNativeObject(y.getTraces());Plotly.plot(this.getPlotlyDiv(),x,z,y.getConfig());y.addListener(k,function(e){var name=e.getData().name;var D=e.getData().value;var B={};if(name.startsWith(n)){var C=name.substr(name.indexOf(o)+1);if(C.startsWith(t)||C.startsWith(m)){var A=parseInt(C.substring(C.indexOf(c)+1,C.indexOf(j)));if(A==0){C=(C.substring(0,C.indexOf(c))+C.substr(C.indexOf(j)+1)).replace(d,h);}else {C=(C.substring(0,C.indexOf(c))+(A+1)+C.substr(C.indexOf(j)+1)).replace(d,h);};};B[C]=ae.util.Serializer.toNativeObject(D);Plotly.relayout(this.getPlotlyDiv(),B);};if(name.startsWith(l)){var C=name.substr(name.indexOf(o)+1);var A=name.substring(name.indexOf(c)+1,name.indexOf(j));B[C]=ae.util.Serializer.toNativeObject(D);Plotly.restyle(this.getPlotlyDiv(),B,A);};},this);y.addListener(b,function(e){},this);y.addListener(a,function(e){},this);y.addListener(f,function(e){},this);}}});})();(function(){var a="ae.chart.model.Line",b="Number",c="dot",d="longdashdot",e="vh",f="vhv",g="dash",h="hv",i="hvh",j="linear",k="_apply",l="longdash",m="solid",n="String",o="dashdot",p="spline";qx.Class.define(a,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{color:{check:n,init:null,apply:k},smoothing:{check:b,init:0,apply:k},dash:{check:[m,c,g,l,o,d],init:m,apply:k},width:{check:b,init:1,apply:k},shape:{check:[j,p,h,e,i,f],init:j,apply:k}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(r,q,name){this._applyEventPropagation(r,q,name);}}});})();(function(){var a="ae.chart.theme.Decoration";qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});})();(function(){var a="ae.chart.theme.Appearance";qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});})();(function(){var a="appear",b="ae.chart.model.Chart",c="ae.chart.ui.Chart";qx.Class.define(c,{extend:qx.ui.core.Widget,properties:{model:{check:b,nullable:true,init:null}},construct:function(d){qx.ui.core.Widget.call(this);this.addListenerOnce(a,function(e){var f=new ae.chart.controller.Plotly(d,this.getPlotlyDiv());},this);},members:{getPlotlyDiv:function(){return this.getContentElement().getDomElement();}}});})();(function(){var a="ae.chart.theme.Color";qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});})();(function(){var a="ae.chart.theme.Theme";qx.Theme.define(a,{meta:{color:ae.chart.theme.Color,decoration:ae.chart.theme.Decoration,font:ae.chart.theme.Font,icon:qx.theme.icon.Tango,appearance:ae.chart.theme.Appearance}});})();(function(){var a="ae.chart.model.traces.Trace",b="String";qx.Class.define(a,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{type:{check:b,nullable:true,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(d,c,name){this._applyEventPropagation(d,c,name);}}});})();(function(){var a="qx.bom.Font",b="x",c="tozerox",d="Boolean",e="scatter",f="tozeroy",g="none",h="Number",i="tonexty",j="ae.chart.model.traces.Scatter",k="all",l="tonextx",m="middle center",n="_apply",o="ae.chart.model.Line",p="legendonly",q="y",r="String",s="ae.chart.model.Marker",t="Array";qx.Class.define(j,{extend:ae.chart.model.traces.Trace,properties:{connectgaps:{check:d,init:false,apply:n},dx:{check:h,init:1,apply:n},dy:{check:h,init:1,apply:n},fill:{check:[g,f,c,i,l],init:g,apply:n},fillcolor:{check:r,init:null,apply:n},hoverinfo:{check:r,init:k,apply:n},legendgroup:{check:r,init:null,apply:n},line:{check:o,apply:n},marker:{check:s,apply:n},mode:{check:r,init:null,apply:n},name:{check:r,init:null,apply:n},opacity:{check:h,init:1,apply:n},r:{check:t,apply:n},showlegend:{check:d,init:true,apply:n},t:{check:t,apply:n},text:{init:null,apply:n},textfont:{check:a,nullable:true,apply:n,init:null},textposition:{init:m,apply:n},visible:{check:[true,false,p],init:true,apply:n},x0:{init:0,apply:n},x:{check:t,nullable:true,init:null,apply:n},xaxis:{check:r,init:b,apply:n},y0:{init:0,apply:n},y:{check:t,nullable:true,init:null,apply:n},yaxis:{check:r,init:q,apply:n}},construct:function(){ae.chart.model.traces.Trace.call(this);this.setType(e);},members:{}});})();(function(){var a='\\\\',b='\\f',c='"',d="null",e='\\"',f="}",g="get",h="{",j='\\r',k="ae.util.Serializer",l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t='\\b',u="$$user_",v='\\n',w=",";qx.Class.define(k,{statics:{toNativeObject:function(z,B,y){var C;if(z==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(z.constructor,qx.data.IListData)){C=[];for(var i=0;i<z.getLength();i++ ){C.push(ae.util.Serializer.toNativeObject(z.getItem(i),B,y));};return C;};if(qx.lang.Type.isArray(z)){C=[];for(var i=0;i<z.length;i++ ){C.push(ae.util.Serializer.toNativeObject(z[i],B,y));};return C;};if(z.$$type==o){return z.classname;};if(z.$$type==p||z.$$type==r){return z.name;};if(z instanceof qx.core.Object){if(B!=null){var x=B(z);if(x!=undefined){return x;};};C={};var E=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in E){if(E[name].group!=undefined){continue;};if(!z.hasOwnProperty(u+name)){continue;};var A=z[g+qx.lang.String.firstUp(name)]();C[name]=ae.util.Serializer.toNativeObject(A,B,y);};return C;};if(qx.lang.Type.isDate(z)&&y!=null){return y.format(z);};if(qx.locale&&qx.locale.LocalizedString&&z instanceof qx.locale.LocalizedString){return z.toString();};if(qx.lang.Type.isObject(z)){C={};for(var D in z){C[D]=ae.util.Serializer.toNativeObject(z[D],B,y);};return C;};return z;},toJson:function(H,J,G){var K=l;if(H==null){return d;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(H.constructor,qx.data.IListData)){K+=q;for(var i=0;i<H.getLength();i++ ){K+=ae.util.Serializer.toJson(H.getItem(i),J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(qx.lang.Type.isArray(H)){K+=q;for(var i=0;i<H.length;i++ ){K+=ae.util.Serializer.toJson(H[i],J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(H.$$type==o){return c+H.classname+c;};if(H.$$type==p||H.$$type==r){return c+H.name+c;};if(H instanceof qx.core.Object){if(J!=null){var F=J(H);if(F!=undefined){return c+F+c;};};K+=h;var M=qx.util.PropertyUtil.getAllProperties(H.constructor);for(var name in M){if(M[name].group!=undefined){continue;};var I=H[g+qx.lang.String.firstUp(name)]();K+=c+name+s+ae.util.Serializer.toJson(I,J,G)+w;};if(K!=h){K=K.substring(0,K.length-1);};return K+f;};if(qx.locale&&qx.locale.LocalizedString&&H instanceof qx.locale.LocalizedString){H=H.toString();};if(qx.lang.Type.isDate(H)&&G!=null){return c+G.format(H)+c;};if(qx.lang.Type.isObject(H)){K+=h;for(var L in H){K+=c+L+s+ae.util.Serializer.toJson(H[L],J,G)+w;};if(K!=h){K=K.substring(0,K.length-1);};return K+f;};if(qx.lang.Type.isString(H)){H=H.replace(/([\\])/g,a);H=H.replace(/(["])/g,e);H=H.replace(/([\r])/g,j);H=H.replace(/([\f])/g,b);H=H.replace(/([\n])/g,v);H=H.replace(/([\t])/g,m);H=H.replace(/([\b])/g,t);return c+H+c;};if(qx.lang.Type.isDate(H)||qx.lang.Type.isRegExp(H)){return c+H+c;};return H+l;}}});})();(function(){var a="Number",b="zoom",c="ae.chart.model.Layout",d="qx.bom.Font",e="counterclockwise",f="qx.data.Array",g="_apply",h="Booleany",i="closest",j="lasso",k="clockwise",l="pan",m="orbit",n="select",o="initial",p="x",q="y",r="String",s="turntable";qx.Class.define(c,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{annotations:{check:f,apply:g,init:new qx.data.Array()},autosize:{check:[true,false,o],apply:g,init:true},direction:{check:[k,e],apply:g,init:null},dragmode:{check:[b,l,n,j,m,s],apply:g,init:b},font:{check:d,nullable:true,apply:g,init:null},height:{check:a,apply:g,init:null},hovermode:{check:[p,q,i,false],apply:g,init:null},images:{check:f,apply:g,init:new qx.data.Array()},orientation:{check:a,apply:g,init:null},paper_bgcolor:{check:r,nullable:true,apply:g,init:null},plot_bgcolor:{check:r,nullable:true,apply:g,init:null},separators:{check:r,apply:g,init:null},shapes:{check:f,apply:g,init:new qx.data.Array()},showlegend:{check:h,apply:g,init:null},title:{check:r,nullable:true,apply:g,init:null},titlefont:{check:d,nullable:true,apply:g,init:null},width:{check:a,nullable:true,apply:g,init:null},xaxes:{check:f,apply:g,init:new qx.data.Array()},yaxes:{check:f,apply:g,init:new qx.data.Array()}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(u,t,name){this._applyEventPropagation(u,t,name);}}});})();(function(){var a="removeTrace",b="raiseTrace",c="ae.chart.model.Layout",d="qx.event.type.Data",f="qx.data.Array",g="changeLayout",h="addTrace",j="_apply",l="ae.chart.model.Chart",m="Object";qx.Class.define(l,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{layout:{check:c,event:g,nullable:false,apply:j,init:new ae.chart.model.Layout()},traces:{check:f,nullable:false,apply:j,init:new qx.data.Array()},config:{check:m,init:{displayModeBar:false}}},construct:function(){qx.core.Object.call(this);},events:{"addTrace":d,"removeTrace":d,"raiseTrace":d},members:{addTrace:function(n){this.getTraces().insertBefore(this.getTraces().getItem(0),n);this.fireDataEvent(h,n);},removeTrace:function(o){this.getTraces().remove(o);this.fireDataEvent(a,o);},removeAllTraces:function(){var k=this.getTraces().length;for(var i=0;i<k;i++ ){this.removeTrace(this.getTraces().getItem(k-1-i));};},raiseLayer:function(q,r){var p=this.getTraces().indexOf(q);this.getTraces().removeAt(p);this.getTraces().insertAt(p+r,q);var e=new Object();e.trace=q;e.delta=r;this.fireDataEvent(b,e);},_apply:function(t,s,name){this._applyEventPropagation(t,s,name);}}});})();(function(){var a="#0FF",b="Tutu",c="Temperature",d="#AAA",f="Title",g="#FF0",h="Arial",i="ae.chart.Application",j="y2",k="verdana",l="#F0F",m="Toto",n="#F00",o="#FFF",p="right",q="y",r="qx.debug",s="execute";qx.Class.define(i,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);if(qx.core.Environment.get(r)){qx.log.appender.Native;qx.log.appender.Console;};var B=new qx.ui.container.Composite(new qx.ui.layout.VBox());var x=new ae.chart.model.Chart();var z=new ae.chart.model.Layout();x.setLayout(z);z.setTitle(m);z.setPlot_bgcolor(d);var D=new ae.chart.model.traces.Scatter();D.setX([1,2,3,4]);D.setY([10,15,13,17]);var A=new ae.chart.model.traces.Scatter();A.setX([1,2,3,4]);A.setY([13,17,15,20]);A.setYaxis(j);var C=new qx.data.Array();C.push(D);C.push(A);x.setTraces(C);var E=new ae.chart.model.axis.Axis();E.setColor(l);var t=new ae.chart.model.axis.Axis();t.setColor(a);t.setSide(p);t.setOverlaying(q);var w=new qx.data.Array();w.push(E);w.push(t);z.setYaxes(w);var y=new ae.chart.ui.Chart(x);var u=this.getRoot();B.add(y,{flex:1});var v=new qx.ui.form.Button(f);v.addListener(s,function(e){z.setTitle(b);var H=new qx.bom.Font(36,[h,k]);H.setColor(o);z.setTitlefont(H);z.setPaper_bgcolor(n);D.setY([[2,15,1,17]]);D.setName(c);var F=new ae.chart.model.Marker();F.setSize(12);F.setColor(g);D.setMarker(F);var G=new ae.chart.model.Line();G.setWidth(4);G.setColor(l);D.setLine(G);E.setColor(o);});B.add(v);u.add(B,{edge:0});}}});})();(function(){var a="Boolean",b="Number",c="_apply",d="circle",e="diameter",f="area",g="ae.chart.model.Marker";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{autocolorscale:{check:a,apply:c,init:true},cauto:{check:a,apply:c,init:true},cmax:{check:b,apply:c,init:null},cmin:{check:b,apply:c,init:null},color:{apply:c,init:null},colorscale:{apply:c,init:null},maxdisplayed:{check:b,apply:c,init:0},opacity:{apply:c,init:null},reversescale:{check:a,apply:c,init:false},showscale:{check:a,apply:c,init:false},size:{apply:c,init:6},sizemin:{check:b,apply:c,init:0},sizemode:{check:[e,f],apply:c,init:e},sizeref:{check:b,apply:c,init:1},symbol:{apply:c,init:d}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(i,h,name){this._applyEventPropagation(i,h,name);}}});})();(function(){var a="-",b="first",c="Boolean",d="E",e="array",f="bottom",g="date",h="category descending",i="Integer",j="allticks",k="power",l="category ascending",m="reversed",n="outside",o="auto",p="tozero",q="String",r="linear",s="category",t="",u="inside",v="nonnegative",w="B",x="ae.chart.model.axis.Axis",y="top",z="_apply",A="right",B="normal",C="qx.bom.Font",D="SI",E="ticks",F="none",G="Number",H="e",I="all",J="last",K="left",L="log",M="Array",N="trace";qx.Class.define(x,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{anchor:{check:q,apply:z,init:null},autorange:{check:[true,false,m],apply:z,init:null},categoryarray:{apply:z,init:true},categoryorder:{check:[N,l,h,e],apply:z,init:N},color:{check:q,apply:z,init:null},domain:{check:M,apply:z,init:null},dtick:{apply:z,init:null},exponentformat:{check:[F,H,d,k,D,w],apply:z,init:null},fixedrange:{check:c,apply:z,init:null},gridcolor:{check:q,apply:z,init:null},gridwidth:{check:G,apply:z,init:null},hoverformat:{apply:z,init:null},linecolor:{check:q,apply:z,init:null},linewidth:{check:G,apply:z,init:null},mirror:{check:[true,false,E,I,j],apply:z,init:null},nticks:{check:i,apply:z,init:null},overlaying:{check:q,apply:z,init:null},position:{check:i,apply:z,init:null},range:{check:M,apply:z,init:null},rangemode:{check:[B,p,v],apply:z,init:null},showexponent:{check:[I,b,J,F],apply:z,init:null},showgrid:{check:c,apply:z,init:null},showline:{check:c,apply:z,init:null},showticklabels:{check:c,apply:z,init:null},showtickprefix:{check:[I,b,J,F],apply:z,init:null},showticksuffix:{check:[I,b,J,F],apply:z,init:null},side:{check:[y,f,K,A],apply:z,init:null},tick0:{check:G,apply:z,init:null},tickangle:{check:G,apply:z,init:null},tickcolor:{check:q,apply:z,init:null},tickfont:{check:C,apply:z,init:null},tickformat:{check:q,apply:z,init:null},ticklen:{check:G,apply:z,init:null},tickmode:{check:[o,r,e],apply:z,init:null},tickprefix:{check:q,apply:z,init:null},tick:{check:[u,n,t],apply:z,init:null},ticksuffix:{check:q,apply:z,init:null},ticktext:{check:M,apply:z,init:null},tickval:{check:M,apply:z,init:null},tickwidth:{check:G,apply:z,init:null},title:{check:q,apply:z,init:null},titlefont:{check:C,apply:z,init:null},type:{check:[a,r,L,g,s],apply:z,init:null},zeroline:{check:c,apply:z,init:null},zerolinecolor:{check:q,apply:z,init:null},zerolinewidth:{check:G,apply:z,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(P,O,name){this._applyEventPropagation(P,O,name);}}});})();

qx.$$loader.init();

