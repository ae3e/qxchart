(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.aspects":true,"qx.debug":false,"qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.version":"5.1"};
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
  packages : {"0":{"uris":["__out__:qxchart.1c0ef3b64eb0.js.gz"]}},
  urisBefore : ["https://cdn.plot.ly/plotly-basic-1.20.5.min.js","https://cdn.plot.ly/plotly-cartesian-1.20.5.min.js","https://rawgit.com/adeliz/plotly.datasources/master/plotly.datasources.min.js"],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  delayDefer: false,

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
  qx.Bootstrap.executePendingDefers();
  qx.$$loader.delayDefer = false;
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

qx.$$packageData['0']={"locales":{},"resources":{"ae/chart/plotly/plotly-basic.min.js":"ae.chart","ae/chart/plotly/plotly-cartesian.min.js":"ae.chart","ae/chart/plotly/plotly.datasources.min.js":"ae.chart","ae/chart/plotly/plotly.min.js":"ae.chart"},"translations":{}};
(function(){var b="moveTrace",c="qx.data.Array",d="layout",f="axis",g="axis\d*",h='plotly_relayout',j="_applyModel",k='plotly_hover',l='plotly_selected',m="changeLayout",n="changeSelection",p="xaxes",q="clickTrace",r="resize",s="datasources",t="i",u="]",v="ae.chart.controller.Plotly",w="traces",x="click",y="overTrace",z="[",A='plotly_unhover',B="outTrace",C="removeTrace",D="ae.chart.model.Chart",E="e",F="yaxes",G="addTrace",H="changeBubble",I=".",J='plotly_click';qx.Class.define(v,{extend:qx.core.Object,properties:{model:{check:D,apply:j,nullable:true,init:null},target:{nullable:true,init:null}},construct:function(K,L){L.addListener(r,function(e){if(L.getPlotlyDiv()){Plotly.Plots.resize(L.getPlotlyDiv());};},L);this.setTarget(L);this.setModel(K);this._initModel(K);},members:{_applyModel:function(M){},_initModel:function(P){if(!P){return;};var O=P.toJson();Plotly.newPlot(this.getTarget().getPlotlyDiv(),O.data,O.layout,O.datasources,P.getConfig());window.plotdiv=this.getTarget().getPlotlyDiv();P.addListener(H,function(e){var name=e.getData().name;var bc=e.getData().value;var X=e.getData().item;var S=e.getData().old;if(bc==S){return;};var Y={};if(name.startsWith(d)){var T=name.substr(name.indexOf(I)+1);if(T.startsWith(p)||T.startsWith(F)){var U=(name.match(/\./g)||[]).length;if(Array.isArray(bc)&&U==1){var ba=name[7];var bb=this.getTarget().getPlotlyDiv().layout;for(var o in bb){var Q=new RegExp(ba+g);if(o.match(Q)){delete bb[o];};};for(var i=0;i<X.length;i++ ){var a;if(i==0){a=ba+f;}else {a=ba+f+(i+1);};bb[a]=ae.chart.util.Serializer.toNativeObject(X.getItem(i));};Plotly.redraw(this.getTarget().getPlotlyDiv());return;};var R=parseInt(T.substring(T.indexOf(z)+1,T.indexOf(u)));if(R==0){T=(T.substring(0,T.indexOf(z))+T.substr(T.indexOf(u)+1)).replace(E,t);}else {T=(T.substring(0,T.indexOf(z))+(R+1)+T.substr(T.indexOf(u)+1)).replace(E,t);};};Y[T]=ae.chart.util.Serializer.toNativeObject(bc);if(Y[T]!=null){Plotly.relayout(this.getTarget().getPlotlyDiv(),Y);};};if(name.startsWith(w)){if(name.indexOf(I)==-1){var bd=[];if(bc.classname==c){for(var i=0;i<X.getTraces().length;i++ ){bd.push(ae.chart.util.Serializer.toNativeObject(X.getTraces().getItem(i)));};this.getTarget().getPlotlyDiv().data=bd.slice();Plotly.redraw(this.getTarget().getPlotlyDiv());return;}else {};}else {var T=name.substr(name.indexOf(I)+1);var R=parseInt(name.substring(name.indexOf(z)+1,name.indexOf(u)));Y[T]=ae.chart.util.Serializer.toNativeObject(bc);for(var V in Y){Y[V]=[Y[V]];};Plotly.restyle(this.getTarget().getPlotlyDiv(),Y,[R]);};};if(name.startsWith(s)){var W=ae.chart.util.Serializer.toNativeObject(this.getModel().getDatasources());Plotly.updateDataSources(this.getTarget().getPlotlyDiv(),W);};},this);P.addListener(G,function(e){Plotly.addTraces(this.getTarget().getPlotlyDiv(),ae.chart.util.Serializer.toNativeObject(e.getData()));},this);P.addListener(C,function(e){Plotly.deleteTraces(this.getTarget().getPlotlyDiv(),e.getData());},this);P.addListener(b,function(e){Plotly.moveTraces(this.getTarget().getPlotlyDiv(),e.getData().currentIndex,e.getData().newIndex);},this);var N=this.getTarget();N.getPlotlyDiv().on(J,function(be){N.fireEvent(x,qx.event.type.Mouse,[{},N,N,false,true]);N.fireDataEvent(q,be);});N.getPlotlyDiv().on(k,function(bf){N.fireDataEvent(y,bf);});N.getPlotlyDiv().on(A,function(bg){N.fireDataEvent(B,bg);});N.getPlotlyDiv().on(l,function(bh){N.fireDataEvent(n,bh);});N.getPlotlyDiv().on(h,function(bi){N.fireDataEvent(m,bi);});}}});})();(function(){var a="changeModel",b="jpeg",c="browser.name",d='error',f='success',g="ae.chart.ui.Chart",h="png",i="appear",j="svg",k="json",l='.',m='a',n="ae.chart.model.Chart",o="text/plain;charset=utf-8",p="_applyModel",q="ie",r="qx.event.type.Data";qx.Class.define(g,{extend:qx.ui.core.Widget,properties:{model:{check:n,nullable:true,event:a,init:null,apply:p}},events:{"clickTrace":r,"overTrace":r,"outTrace":r,"changeSelection":r,"changeLayout":r},construct:function(s){qx.ui.core.Widget.call(this);this.setModel(s);},members:{getPlotlyDiv:function(){return this.getContentElement().getDomElement();},_applyModel:function(t){if(this.getPlotlyDiv()){new ae.chart.controller.Plotly(t,this);}else {this.addListenerOnce(i,function(e){var u=new ae.chart.controller.Plotly(t,this);},this);};},redraw:function(){Plotly.redraw(this.getPlotlyDiv());},saveAs:function(v,y){switch(v){case j:var A=this.getPlotlyDiv();var w=Plotly.Snapshot.toSVG(A);console.log(w);var B=new Blob([w],{type:o});y+=l+v;if(qx.core.Environment.get(c)==q){window.navigator.msSaveBlob(B,y);}else {var x=document.createElement(m);x.href=window.URL.createObjectURL(B);;x.download=y;document.body.appendChild(x);x.click();document.body.removeChild(x);};break;case k:var z=JSON.stringify(this.getModel().toJson());var B=new Blob([z],{type:o});y+=l+v;if(qx.core.Environment.get(c)==q){window.navigator.msSaveBlob(B,y);}else {var x=document.createElement(m);x.href=window.URL.createObjectURL(B);;x.download=y;document.body.appendChild(x);x.click();document.body.removeChild(x);};break;case h:case b:var A=this.getPlotlyDiv();var C=Plotly.Snapshot.toImage(A,{format:v});y+=l+v;C.once(f,function(E){var D=document.createElement(m);D.href=E;D.download=y;document.body.appendChild(D);D.click();document.body.removeChild(D);C.clean();});C.once(d,function(F){A._snapshotInProgress=false;console.error(F);C.clean();});break;};}}});})();(function(){var a="Boolean",b="changeVisible",c="_apply",d="changeSource",e="changeMarker",f="changeShowlegend",g="legendonly",h="changeTextfont",i="ae.chart.model.trace.auxiliary.Source",j="ae.chart.model.trace.auxiliary.Marker",k="changeLegendgroup",l="ae.chart.model.Font",m="changeText",n="changeHoverinfo",o="changeOpacity",p="ae.chart.model.trace.Trace",q="abstract",r="changeName",s="changeTextposition",t="Number",u="String",v="all";qx.Class.define(p,{type:q,extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{type:{check:u,nullable:true,init:null},hoverinfo:{check:u,init:v,event:n,apply:c},legendgroup:{check:u,init:null,event:k,apply:c},marker:{check:j,event:e,nullable:true,apply:c,init:null},name:{check:u,init:null,event:r,apply:c},opacity:{check:t,init:1,event:o,apply:c},showlegend:{check:a,init:true,event:f,apply:c},text:{init:null,event:m,apply:c},textfont:{check:l,nullable:true,event:h,apply:c,init:null},textposition:{check:u,init:null,event:s,apply:c},visible:{check:[true,false,g],init:true,event:b,apply:c},source:{check:i,nullable:true,event:d,apply:c,init:null}},members:{_apply:function(x,w,name){this._applyEventPropagation(x,w,name);}}});})();(function(){var a="Boolean",b="tozeroy",c="changeX0",d="changeConnectgaps",e="tonextx",f="scatter",g="changeX",h="changeT",i="Array",j="tonext",k="Dy",l="y",m="String",n="toself",o="changeFill",p="tozerox",q="changeY0",r="changeFillcolor",s="changeDx",t="_apply",u="ae.chart.model.trace.BaseTrace",v="changeR",w="changeXaxis",x="abstract",y="changeMode",z="none",A="Number",B="Yaxis",C="changeY",D="x",E="tonexty";qx.Class.define(u,{type:x,extend:ae.chart.model.trace.Trace,properties:{connectgaps:{check:a,init:false,event:d,apply:t},dx:{check:A,init:1,event:s,apply:t},dy:{check:A,init:1,event:k,apply:t},fill:{check:[z,b,p,E,e,n,j],init:z,event:o,apply:t},fillcolor:{check:m,init:null,event:r,apply:t},mode:{check:m,init:null,event:y,apply:t},r:{check:i,init:null,event:v,apply:t},t:{check:i,init:null,event:h,apply:t},x0:{init:0,event:c,apply:t},x:{check:i,nullable:true,init:null,event:g,apply:t},xaxis:{check:m,init:D,event:w,apply:t},y0:{init:0,event:q,apply:t},y:{check:i,nullable:true,init:null,event:C,apply:t},yaxis:{check:m,init:l,event:B,apply:t}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(f);},members:{}});})();(function(){var a="changeWidth",b="changeBase",c="v",d="h",e="ae.chart.model.trace.Bar",f="changeOrientation",g="_apply",h="bar",i="changeOffset";qx.Class.define(e,{extend:ae.chart.model.trace.BaseTrace,properties:{orientation:{check:[c,d],init:null,event:f,apply:g},width:{nullable:true,init:null,event:a,apply:g},base:{nullable:true,init:null,event:b,apply:g},offset:{nullable:true,init:null,event:i,apply:g}},construct:function(){ae.chart.model.trace.BaseTrace.call(this);this.setType(h);},members:{}});})();(function(){var a="changeData",b="changeMethod",c="",d="changeId",e="http://",f="changeParameters",g="String",h="changeUrl",i="GET",j="_apply",k="POST",l="ae.chart.model.Datasource";qx.Class.define(l,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{id:{check:g,event:d,apply:j,init:c},url:{check:g,init:e,event:h,apply:j},method:{check:[i,k],init:i,event:b,apply:j},parameters:{event:f,nullable:true,apply:j,init:null},data:{event:a,nullable:true,apply:j,init:null}},members:{_apply:function(n,m,name){this._applyEventPropagation(n,m,name);}}});})();(function(){var a="changeL",b="changeR",c="changeAutoexpand",d="Boolean",e="changeT",f="changePad",g="changeB",h="ae.chart.model.layout.Margin",i="_apply",j="Integer";qx.Class.define(h,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{b:{check:j,apply:i,event:g,init:80},l:{check:j,apply:i,event:a,init:80},r:{check:j,apply:i,event:b,init:80},t:{check:j,apply:i,event:e,init:80},pad:{check:j,apply:i,event:f,init:0},autoexpand:{check:d,apply:i,event:c,init:true}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(l,k,name){this._applyEventPropagation(l,k,name);}}});})();(function(){var a="rect",b="changeY1",c="changeX0",d="changeType",e="changePath",f="rgba(0,0,0,0)",g="changeYref",h="changeOpacity",i="String",j="below",k="changeY0",l="changeFillcolor",m="paper",n="changeXref",o="circle",p="changeX1",q="_apply",r="path",s="changeLine",t="ae.chart.model.layout.Shape",u="line",v="Number",w="changeLayer",x="above",y="ae.chart.model.trace.auxiliary.Line";qx.Class.define(t,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{fillcolor:{check:i,apply:q,event:l,init:f},layer:{check:[j,x],apply:q,event:w,init:x},line:{check:y,apply:q,event:s,nullable:true,init:null},opacity:{check:v,apply:q,event:h,init:1},path:{check:i,apply:q,event:e,nullable:true,init:null},type:{check:[u,a,o,r],apply:q,event:d,init:u},x0:{apply:q,event:c,init:null},x1:{apply:q,event:p,init:null},xref:{check:i,apply:q,event:n,init:m},y0:{apply:q,event:k,init:null},y1:{apply:q,event:b,init:null},yref:{check:i,apply:q,event:g,init:m}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(A,z,name){this._applyEventPropagation(A,z,name);}}});})();(function(){var a="ae.chart.util.Serializer",b='\\\\',c='\\f',d='"',e="null",f='\\"',g="}",h="get",j="{",k='\\r',l="",m='\\t',n="]",o="Class",p="Interface",q="[",r="Mixin",s='":',t='\\b',u="$$user_",v='\\n',w=",";qx.Class.define(a,{statics:{toNativeObject:function(z,B,y){var C;if(z==null){return null;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(z.constructor,qx.data.IListData)){C=[];for(var i=0;i<z.getLength();i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z.getItem(i),B,y));};return C;};if(qx.lang.Type.isArray(z)){C=[];for(var i=0;i<z.length;i++ ){C.push(ae.chart.util.Serializer.toNativeObject(z[i],B,y));};return C;};if(z.$$type==o){return z.classname;};if(z.$$type==p||z.$$type==r){return z.name;};if(z instanceof qx.core.Object){if(B!=null){var x=B(z);if(x!=undefined){return x;};};C={};var E=qx.util.PropertyUtil.getAllProperties(z.constructor);for(var name in E){if(E[name].group!=undefined){continue;};if(!z.hasOwnProperty(u+name)){continue;};var A=z[h+qx.lang.String.firstUp(name)]();C[name]=ae.chart.util.Serializer.toNativeObject(A,B,y);};return C;};if(qx.lang.Type.isDate(z)&&y!=null){return y.format(z);};if(qx.locale&&qx.locale.LocalizedString&&z instanceof qx.locale.LocalizedString){return z.toString();};if(qx.lang.Type.isObject(z)){C={};for(var D in z){C[D]=ae.chart.util.Serializer.toNativeObject(z[D],B,y);};return C;};return z;},toJson:function(H,J,G){var K=l;if(H==null){return e;};if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(H.constructor,qx.data.IListData)){K+=q;for(var i=0;i<H.getLength();i++ ){K+=ae.chart.util.Serializer.toJson(H.getItem(i),J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(qx.lang.Type.isArray(H)){K+=q;for(var i=0;i<H.length;i++ ){K+=ae.chart.util.Serializer.toJson(H[i],J,G)+w;};if(K!=q){K=K.substring(0,K.length-1);};return K+n;};if(H.$$type==o){return d+H.classname+d;};if(H.$$type==p||H.$$type==r){return d+H.name+d;};if(H instanceof qx.core.Object){if(J!=null){var F=J(H);if(F!=undefined){return d+F+d;};};K+=j;var M=qx.util.PropertyUtil.getAllProperties(H.constructor);for(var name in M){if(M[name].group!=undefined){continue;};var I=H[h+qx.lang.String.firstUp(name)]();K+=d+name+s+ae.chart.util.Serializer.toJson(I,J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.locale&&qx.locale.LocalizedString&&H instanceof qx.locale.LocalizedString){H=H.toString();};if(qx.lang.Type.isDate(H)&&G!=null){return d+G.format(H)+d;};if(qx.lang.Type.isObject(H)){K+=j;for(var L in H){K+=d+L+s+ae.chart.util.Serializer.toJson(H[L],J,G)+w;};if(K!=j){K=K.substring(0,K.length-1);};return K+g;};if(qx.lang.Type.isString(H)){H=H.replace(/([\\])/g,b);H=H.replace(/(["])/g,f);H=H.replace(/([\r])/g,k);H=H.replace(/([\f])/g,c);H=H.replace(/([\n])/g,v);H=H.replace(/([\t])/g,m);H=H.replace(/([\b])/g,t);return d+H+d;};if(qx.lang.Type.isDate(H)||qx.lang.Type.isRegExp(H)){return d+H+d;};return H+l;}}});})();(function(){var a="ae.chart.theme.Appearance";qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});})();(function(){var a="Boolean",b="changeAutocolorscale",c="changeColor",d="area",e="changeSymbol",f="changeMaxdisplayed",g="changeCmax",h="changeSizemode",i="changeSizeref",j="changeCmin",k="ae.chart.model.trace.auxiliary.Marker",l="changeReversescale",m="changeSize",n="circle",o="diameter",p="_apply",q="changeOpacity",r="changeColorscale",s="Number",t="changeSizemin",u="changeShowscale",v="changeCauto";qx.Class.define(k,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{autocolorscale:{check:a,event:b,apply:p,init:true},cauto:{check:a,event:v,apply:p,init:true},cmax:{check:s,event:g,apply:p,init:null},cmin:{check:s,event:j,apply:p,init:null},color:{apply:p,event:c,nullable:true,init:null},colorscale:{apply:p,event:r,init:null},maxdisplayed:{check:s,event:f,apply:p,init:0},opacity:{check:s,init:1,event:q,apply:p},reversescale:{check:a,event:l,apply:p,init:false},showscale:{check:a,event:u,apply:p,init:false},size:{apply:p,event:m,init:6},sizemin:{check:s,apply:p,event:t,init:0},sizemode:{check:[o,d],event:h,apply:p,init:o},sizeref:{check:s,event:i,apply:p,init:1},symbol:{apply:p,event:e,init:n}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(x,w,name){this._applyEventPropagation(x,w,name);}}});})();(function(){var a="changeSize",b="Number",c="changeFamily",d="changeColor",e="ae.chart.model.Font",f="_apply",g="String";qx.Class.define(e,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{family:{check:g,event:c,apply:f,nullable:true,init:null},size:{check:b,event:a,apply:f,nullable:true,init:null},color:{check:g,event:d,apply:f,nullable:true,init:null}},construct:function(j,i,h){qx.core.Object.call(this);if(j){this.setSize(j);};if(i){this.setFamily(i);};if(h){this.setColor(h);};},members:{_apply:function(l,k,name){this._applyEventPropagation(l,k,name);}}});})();(function(){var a="-",b="changeExponentformat",c="changeAutorange",d="array",e="changeTickprefix",f="changeCategoryorder",g="category descending",h="changeType",i="changeTicktext",j="changeTickfont",k="changeNticks",l="changeTickwidth",m="changeShowexponent",n="ae.chart.model.axis.Axis",o="changeZerolinewidth",p="ae.chart.model.Font",q="changeShowticklabels",r="changeTitle",s="normal",t="ticks",u="Number",v="changeRangemode",w="linear",x="changeShowticksuffix",y="changeShowgrid",z="trace",A="first",B="changeZeroline",C="changeZerolinecolor",D="auto",E="changeShowtickprefix",F="changeLinecolor",G="changeMirror",H="category ascending",I="reversed",J="changeFixedrange",K="changeTickmode",L="changeTickangle",M="category",N="changeDtick",O="changeTitlefont",P="changeHoverformat",Q="none",R="changeTickformat",S="Boolean",T="changeTick",U="changeColor",V="allticks",W="power",X="top",Y="changeShowline",bN="changeTick0",bO="tozero",bP="inside",bJ="nonnegative",bK="changeCategoryarray",bL="date",bM="_apply",bU="right",bV="e",bW="changeAnchor",bX="all",bQ="left",bR="E",bS="changeTicksuffix",bT="bottom",cc="Integer",co="changeLinewidth",cp="changeGridwidth",cd="Array",bY="changePosition",ca="String",cr="changeTickcolor",cb="",ce="changeTicklen",cf="B",cg="changeGridcolor",ck="changeOverlaying",cs="changeTickval",cl="SI",ch="changeRange",ci="outside",cq="log",cj="changeDomain",cm="last",cn="changeSide";qx.Class.define(n,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{anchor:{check:ca,event:bW,apply:bM,nullable:true,init:null},autorange:{check:[true,false,I],event:c,apply:bM,nullable:true,init:null},categoryarray:{apply:bM,event:bK,nullable:true,init:true},categoryorder:{check:[z,H,g,d],event:f,apply:bM,nullable:true,init:z},color:{check:ca,event:U,apply:bM,nullable:true,init:null},domain:{check:cd,event:cj,apply:bM,nullable:true,init:null},dtick:{apply:bM,event:N,nullable:true,init:null},exponentformat:{check:[Q,bV,bR,W,cl,cf],event:b,apply:bM,nullable:true,init:null},fixedrange:{check:S,event:J,apply:bM,nullable:true,init:null},gridcolor:{check:ca,event:cg,apply:bM,nullable:true,init:null},gridwidth:{check:u,event:cp,apply:bM,nullable:true,init:null},hoverformat:{apply:bM,event:P,nullable:true,init:null},linecolor:{check:ca,event:F,apply:bM,nullable:true,init:null},linewidth:{check:u,event:co,apply:bM,nullable:true,init:null},mirror:{check:[true,false,t,bX,V],event:G,apply:bM,nullable:true,init:null},nticks:{check:cc,event:k,apply:bM,nullable:true,init:null},overlaying:{check:ca,event:ck,apply:bM,nullable:true,init:null},position:{check:u,event:bY,apply:bM,nullable:true,init:null},range:{check:cd,event:ch,apply:bM,nullable:true,init:null},rangemode:{check:[s,bO,bJ],event:v,apply:bM,nullable:true,init:null},showexponent:{check:[bX,A,cm,Q],event:m,apply:bM,nullable:true,init:null},showgrid:{check:S,event:y,apply:bM,nullable:true,init:null},showline:{check:S,event:Y,apply:bM,nullable:true,init:null},showticklabels:{check:S,event:q,apply:bM,nullable:true,init:null},showtickprefix:{check:[bX,A,cm,Q],event:E,apply:bM,nullable:true,init:null},showticksuffix:{check:[bX,A,cm,Q],event:x,apply:bM,nullable:true,init:null},side:{check:[X,bT,bQ,bU],event:cn,apply:bM,nullable:true,init:null},tick0:{check:u,event:bN,apply:bM,nullable:true,init:null},tickangle:{check:u,event:L,apply:bM,nullable:true,init:null},tickcolor:{check:ca,event:cr,apply:bM,nullable:true,init:null},tickfont:{check:p,event:j,apply:bM,nullable:true,init:null},tickformat:{check:ca,event:R,apply:bM,nullable:true,init:null},ticklen:{check:u,event:ce,apply:bM,nullable:true,init:null},tickmode:{check:[D,w,d],event:K,apply:bM,nullable:true,init:null},tickprefix:{check:ca,event:e,apply:bM,nullable:true,init:null},ticks:{check:[bP,ci,cb],event:T,apply:bM,nullable:true,init:null},ticksuffix:{check:ca,event:bS,apply:bM,nullable:true,init:null},ticktext:{check:cd,event:i,apply:bM,nullable:true,init:null},tickval:{check:cd,event:cs,apply:bM,nullable:true,init:null},tickwidth:{check:u,event:l,apply:bM,nullable:true,init:null},title:{check:ca,event:r,apply:bM,nullable:true,init:null},titlefont:{check:p,event:O,apply:bM,nullable:true,init:null},type:{check:[a,w,cq,bL,M],event:h,apply:bM,nullable:true,init:null},zeroline:{check:S,event:B,apply:bM,nullable:true,init:null},zerolinecolor:{check:ca,event:C,apply:bM,nullable:true,init:null},zerolinewidth:{check:u,event:o,apply:bM,nullable:true,init:null}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(cu,ct,name){this._applyEventPropagation(cu,ct,name);}}});})();(function(){var a="changeBgcolor",b="changeShowarrow",c="changeText",d="changeYanchor",e="changeArrowcolor",f="bottom",g="Integer",h="auto",i="changeBorderwidth",j="#000",k="rgba(0,0,0,0)",l="changeX",m="center",n="changeYref",o="ae.chart.model.layout.Annotation",p="changeArrowwidth",q="middle",r="changeAx",s="changeAlign",t="String",u="changeBordercolor",v="pixel",w="changeFont",x="paper",y="changeXref",z="changeXanchor",A="ae.chart.model.Font",B="top",C="_apply",D="right",E="changeOpacity",F="changeAyref",G="changeAngle",H="Number",I="changeAxref",J="Boolean",K="changeArrowhead",L="left",M="changeAy",N="changeY",O="changeArrowsize";qx.Class.define(o,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{align:{check:[L,D,m],apply:C,event:s,init:m},arrowcolor:{check:t,apply:C,event:e,init:j},arrowhead:{check:g,apply:C,event:K,init:1},arrowsize:{check:H,apply:C,event:O,init:1},arrowwidth:{check:H,apply:C,event:p,init:1},ax:{check:H,apply:C,event:r,init:-10},axref:{check:t,apply:C,event:I,init:v},ay:{check:H,apply:C,event:M,init:-30},ayref:{check:t,apply:C,event:F,init:v},bgcolor:{check:t,apply:C,event:a,init:k},bordercolor:{check:t,apply:C,event:u,init:k},borderpad:{check:H,apply:C,event:u,init:1},borderwidth:{check:H,apply:C,event:i,init:1},font:{check:A,apply:C,event:w,nullable:true,init:null},opacity:{check:H,apply:C,event:E,init:1},showarrow:{check:J,apply:C,event:b,init:true},text:{check:t,apply:C,event:c,nullable:true,init:null},angle:{check:H,apply:C,event:G,init:0},x:{check:H,apply:C,event:l,init:0},xanchor:{check:[h,L,m,D],apply:C,event:z,init:h},xref:{check:t,apply:C,event:y,init:x},y:{check:H,apply:C,event:N,init:0},yanchor:{check:[h,B,q,f],apply:C,event:d,init:h},yref:{check:t,apply:C,event:n,init:x}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(Q,P,name){this._applyEventPropagation(Q,P,name);}}});})();(function(){var a="ae.chart.theme.Color";qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});})();(function(){var a="text",b="changeInsidetextfont",c="Boolean",d="changeLabels",e="clockwise",f="Object",g="changeTextinfo",h="changeDirection",i="changePull",j="changeDomain",k="value",l="changeRotation",m="changeLabel0",n="String",o="counterclockwise",p="pie",q="ae.chart.model.Font",r="_apply",s="changeDlabel",t="Array",u="percent",v="changeHole",w="none",x="Number",y="changeValues",z="label",A="changeScalegroup",B="changeSort",C="changeOutsidetextfont",D="ae.chart.model.trace.Pie";qx.Class.define(D,{extend:ae.chart.model.trace.Trace,properties:{direction:{check:[e,o],init:null,event:h,apply:r},dlabel:{check:x,init:null,event:s,apply:r},domain:{check:f,init:null,event:j,apply:r},hole:{check:x,init:null,event:v,apply:r},insidetextfont:{check:q,init:null,event:b,apply:r},label0:{check:x,init:null,event:m,apply:r},labels:{check:t,init:null,event:d,apply:r},outsidetextfont:{check:q,init:null,event:C,apply:r},pull:{init:null,event:i,apply:r},rotation:{check:x,init:null,event:l,apply:r},scalegroup:{check:n,init:null,event:A,apply:r},sort:{check:c,init:null,event:B,apply:r},textinfo:{check:[w,z,a,k,u],init:null,event:g,apply:r},values:{check:t,init:null,event:y,apply:r}},construct:function(){ae.chart.model.trace.Trace.call(this);this.setType(p);},members:{}});})();(function(){var a="changeImages",b="changeWidth",c="Boolean",d="qx.data.Array",e="ae.chart.model.layout.Legend",f="clockwise",g="orbit",h="changeOrientation",i="changeShowlegend",j="changeMargin",k="changeHiddenlabels",l="stack",m="changeDirection",n="changeBargroupgap",o="group",p="changeAnnotations",q="Array",r="pan",s="select",t="overlay",u="changeAutosize",v="lasso",w="changeXaxes",x="changeHovermode",y="changePaper_bgcolor",z="y",A="changeDragmode",B="turntable",C="zoom",D="changeSeparators",E="changeYaxes",F="changeBarnorm",G="relative",H="",I="changeLegend",J="counterclockwise",K="initial",L="changeFont",M="changeBarmode",N="ae.chart.model.Font",O="fraction",P="_apply",Q="changeShapes",R="changeBargap",S="changeTitle",T="changePlot_bgcolor",U="changeTitlefont",V="percent",W="Number",X="ae.chart.model.layout.Margin",Y="closest",bf="String",bg="ae.chart.model.layout.Layout",bh="x",be="changeHeight";qx.Class.define(bg,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{annotations:{check:d,apply:P,event:p,init:new qx.data.Array()},autosize:{check:[true,false,K],event:u,apply:P,nullable:true,init:null},direction:{check:[f,J],event:m,apply:P,init:null},dragmode:{check:[C,r,s,v,g,B],event:A,apply:P,init:C},font:{check:N,event:L,nullable:true,apply:P,init:null},height:{check:W,event:be,apply:P,nullable:true,init:null},hovermode:{check:[bh,z,Y,false],event:x,apply:P,nullable:true,init:null},images:{check:d,event:a,apply:P,init:new qx.data.Array()},legend:{check:e,event:I,apply:P},margin:{check:X,event:j,apply:P},orientation:{check:W,event:h,apply:P,init:null},paper_bgcolor:{check:bf,event:y,nullable:true,apply:P,init:null},plot_bgcolor:{check:bf,event:T,nullable:true,apply:P,init:null},separators:{check:bf,event:D,apply:P,init:null},shapes:{check:d,event:Q,apply:P,init:new qx.data.Array()},showlegend:{check:c,event:i,apply:P,nullable:true,init:null},title:{check:bf,event:S,nullable:true,apply:P,init:null},titlefont:{check:N,event:U,nullable:true,apply:P,init:null},width:{check:W,event:b,nullable:true,apply:P,init:null},xaxes:{check:d,event:w,apply:P,deferredInit:true},yaxes:{check:d,event:E,apply:P,deferredInit:true},barmode:{check:[l,o,t,G],event:M,apply:P,init:null},barnorm:{check:[H,V,O],event:F,apply:P,init:null},bargap:{check:W,event:R,apply:P,init:null},bargroupgap:{check:W,event:n,apply:P,init:null},hiddenlabels:{check:q,event:k,apply:P,init:null}},construct:function(){qx.core.Object.call(this);this.initXaxes(new qx.data.Array());this.initYaxes(new qx.data.Array());},members:{_apply:function(bj,bi,name){this._applyEventPropagation(bj,bi,name);}}});})();(function(){var a="ae.chart.theme.Font";qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});})();(function(){var a="ae.chart.theme.Decoration";qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});})();(function(){var a="ae.chart.theme.Theme";qx.Theme.define(a,{meta:{color:ae.chart.theme.Color,decoration:ae.chart.theme.Decoration,font:ae.chart.theme.Font,icon:qx.theme.icon.Tango,appearance:ae.chart.theme.Appearance}});})();(function(){var a="CSV",b="changeScript",c="",d="changeId",e="changeFormatter",f="changeParameters",g="_apply",h="ae.chart.model.trace.auxiliary.Source",i="String";qx.Class.define(h,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{id:{check:i,event:d,apply:g,init:c},formatter:{check:i,init:a,nullable:true,event:e,apply:g},script:{check:i,nullable:true,init:null,event:b,apply:g},parameters:{event:f,nullable:true,apply:g,init:null}},members:{_apply:function(k,j,name){this._applyEventPropagation(k,j,name);}}});})();(function(){var a="dot",b="changeWidth",c="longdash",d="changeShape",e="Number",f="changeColor",g="ae.chart.model.trace.auxiliary.Line",h="changeDash",i="longdashdot",j="spline",k="vh",l="dash",m="hv",n="hvh",o="linear",p="vhv",q="_apply",r="solid",s="String",t="dashdot",u="changeSmoothing";qx.Class.define(g,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{color:{check:s,event:f,nullable:true,init:null,apply:q},smoothing:{check:e,event:u,init:0,apply:q},dash:{check:[r,a,l,c,t,i],event:h,init:r,apply:q},width:{check:e,event:b,init:2,apply:q},shape:{check:[o,j,m,k,n,p],event:d,init:o,apply:q}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(w,v,name){this._applyEventPropagation(w,v,name);}}});})();(function(){var a="moveTrace",b="textfont",c="qx.data.Array",d="layout",f="axis",g="qx.event.type.Data",h="source",j="changeLayout",l="font",m="legend",n="Object",o="y",p="scatter",q="datasources",r="xaxis",s="pie",t="traces",u="titlefont",v="_apply",w="yaxis",x="removeTrace",y="ae.chart.model.Chart",z="marker",A="changeTraces",B="margin",C="ae.chart.model.layout.Layout",D="addTrace",E="line",F="x",G="trace",H="object";qx.Class.define(y,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{layout:{check:C,event:j,nullable:false,apply:v,deferredInit:true},traces:{check:c,nullable:false,event:A,apply:v,deferredInit:true},datasources:{check:c,nullable:false,event:A,apply:v,deferredInit:true},config:{check:n,init:{displayModeBar:false}}},construct:function(){qx.core.Object.call(this);this.initTraces(new qx.data.Array());this.initDatasources(new qx.data.Array());this.initLayout(new ae.chart.model.layout.Layout());},events:{"addTrace":g,"removeTrace":g,"moveTrace":g},members:{addTrace:function(I){this.getTraces().push(I);this.fireDataEvent(D,I);},removeTrace:function(K){var J=this.getTraces().indexOf(K);this.getTraces().remove(K);this.fireDataEvent(x,J);},removeAllTraces:function(){var k=this.getTraces().length;for(var i=0;i<k;i++ ){this.removeTrace(this.getTraces().getItem(k-1-i));};},moveTrace:function(N,L){var M=this.getTraces().indexOf(N);this.getTraces().removeAt(M);this.getTraces().insertAt(L,N);var e=new Object();e.trace=N;e.currentIndex=M;e.newIndex=L;this.fireDataEvent(a,e);},toJson:function(){var Q={};Q.layout=ae.chart.util.Serializer.toNativeObject(this.getLayout());Q.data=ae.chart.util.Serializer.toNativeObject(this.getTraces());Q.datasources=ae.chart.util.Serializer.toNativeObject(this.getDatasources());for(var i=0;i<this.getLayout().getYaxes().length;i++ ){Q.layout[w+(i+1)]=ae.chart.util.Serializer.toNativeObject(this.getLayout().getYaxes().getItem(i));};for(var i=0;i<this.getLayout().getXaxes().length;i++ ){Q.layout[r+(i+1)]=ae.chart.util.Serializer.toNativeObject(this.getLayout().getXaxes().getItem(i));};function P(R){for(var S in R){if(R.hasOwnProperty(S)){return false;};};return true;};function O(T,parent,U){for(var k in T){if(T[k]===null)delete T[k];else if(typeof T[k]==H)O(T[k],T,k);};if(P(T)){delete parent[U];};};O(Q);return Q;},fromJson:function(V){if(V.data.length>0){V.traces=V.data;};V.layout.xaxes=[];V.layout.yaxes=[];var bb,bc;for(var X in V.layout){if(X.match(/xaxis1?$/)){bb=1;};if(X.match(/yaxis1?$/)){bc=1;};if(X.match(/.axis\d*/)){switch(X[0]){case F:V.layout.xaxes.push(V.layout[X]);break;case o:V.layout.yaxes.push(V.layout[X]);break;};};};if(!bb){V.layout.xaxes.unshift({});};if(!bc){V.layout.yaxes.unshift({});};var Y={getModelClass:function(bh,bf,bg,be){if(be==0){return ae.chart.model.Chart;}else {if(bg.startsWith(G)){bg=t;};if(bg.startsWith(q)){bg=q;};if(bg.match(/.axes/)){bg=f;};switch(bg){case b:case u:case l:return ae.chart.model.Font;break;case z:return ae.chart.model.trace.auxiliary.Marker;break;case E:return ae.chart.model.trace.auxiliary.Line;break;case d:return ae.chart.model.layout.Layout;break;case f:return ae.chart.model.axis.Axis;break;case B:return ae.chart.model.layout.Margin;break;case m:return ae.chart.model.layout.Legend;break;case t:switch(bf.type){case p:return ae.chart.model.trace.Scatter;case s:return ae.chart.model.trace.Pie;default:return ae.chart.model.trace.Scatter;};break;case q:if(bf.parameters){bf.parameters=JSON.stringify(bf.parameters);};return ae.chart.model.Datasource;break;case h:if(bf.parameters){bf.parameters=JSON.stringify(bf.parameters);};return ae.chart.model.trace.auxiliary.Source;break;};};}};var ba=new qx.data.marshal.Json(Y);var bd=ba.toModel(V);for(var i=0;i<bd.getTraces().length;i++ ){if(bd.getTraces().getItem(i).getSource()){var W=JSON.parse(bd.getTraces().getItem(i).getSource().getParameters());if(W&&W.text===undefined){W.text=null;};bd.getTraces().getItem(i).getSource().setParameters(qx.data.marshal.Json.createModel(W,true));};};for(var i=0;i<bd.getDatasources().length;i++ ){if(bd.getDatasources().getItem(i).getParameters()){bd.getDatasources().getItem(i).setParameters(JSON.parse(bd.getDatasources().getItem(i).getParameters()));};};return bd;},_apply:function(bj,bi,name){this._applyEventPropagation(bj,bi,name);}}});})();(function(){var a="changeTracegroupgap",b="ae.chart.model.layout.Legend",c="h",d="changeYanchor",e="v",f="changeOrientation",g="bottom",h="grouped",i="auto",j="changeBgcolor",k="changeTraceorder",l="Integer",m="changeX",n="reversed",o="center",p="middle",q="String",r="changeBordercolor",s="changeBorderwidth",t="changeFont",u="changeXanchor",v="ae.chart.model.Font",w="#444",x="top",y="_apply",z="right",A="normal",B="grouped+reversed",C="Number",D="left",E="changeY";qx.Class.define(b,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{bgcolor:{check:q,apply:y,event:j},bordercolor:{check:q,apply:y,event:r,init:w},borderwidth:{check:l,apply:y,event:s,init:0},font:{check:v,apply:y,event:t,nullable:true,init:null},orientation:{check:[c,e],apply:y,event:f,init:e},tracegroupgap:{check:l,apply:y,event:a,init:10},traceorder:{check:[A,n,h,B],apply:y,event:k,init:A},x:{check:C,apply:y,event:m,init:1.02},xanchor:{check:[i,D,o,z],apply:y,event:u,init:D},y:{check:C,apply:y,event:E,init:1},yanchor:{check:[i,x,p,g],apply:y,event:d,init:i}},construct:function(){qx.core.Object.call(this);},members:{_apply:function(G,F,name){this._applyEventPropagation(G,F,name);}}});})();(function(){var a="scatter",b="_apply",c="changeLine",d="ae.chart.model.trace.Scatter",e="ae.chart.model.trace.auxiliary.Line";qx.Class.define(d,{extend:ae.chart.model.trace.BaseTrace,properties:{line:{check:e,event:c,nullable:true,apply:b,init:null}},construct:function(){ae.chart.model.trace.BaseTrace.call(this);this.setType(a);},members:{}});})();

qx.$$loader.init();

