/**
 * Chart's model
 */
qx.Class.define("ae.chart.model.Chart", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * layout
		 */
		layout : {
			check : "ae.chart.model.layout.Layout",
			event : "changeLayout",
			nullable : false,
			apply : "_apply",
			deferredInit : true
			//init : new ae.chart.model.layout.Layout()
		},
		
		/**
		 * traces
		 */
		traces : {
			check : "qx.data.Array",
			nullable : false,
			event : "changeTraces",
			apply : "_apply",
			deferredInit : true
			//init : new qx.data.Array()
		},
		
		/**
		 * extra config
		 */
		config : {
			check : "Object",
			init : {displayModeBar: false}
		}
	},


	construct : function() {
		this.base(arguments);
		this.initTraces(new qx.data.Array());
		this.initLayout(new ae.chart.model.layout.Layout());
	},

	events : {
		/**
		 * Fired when a trace is added
		 */
	    "addTrace" : "qx.event.type.Data",
	    /**
	     * Fired when a trace is removed
	     */
	    "removeTrace" : "qx.event.type.Data",
	    /**
	     * Fired when trace is moved
	     */
	    "moveTrace" : "qx.event.type.Data"
	},
	
	members : {
		/**
		 * Add a trace
		 * @param trace {ae.chart.model.Trace} Trace
		 */
		addTrace : function(trace){
			this.getTraces().push(trace);
			this.fireDataEvent("addTrace",trace);
		},
		
		/**
		 * Remove a trace
		 * @param trace {ae.chart.model.Trace} Trace
		 */
		removeTrace : function(trace){
			var index = this.getTraces().indexOf(trace);
			this.getTraces().remove(trace);
			this.fireDataEvent("removeTrace",index);
		},

		/**
		 * Remove all traces
		 */
        removeAllTraces : function(){
            var k = this.getTraces().length;
            for(var i=0;i<k;i++){
                this.removeTrace(this.getTraces().getItem(k-1-i));
            }
        },

        /**
		 * Change the index of the given trace to the new index.
		 * @param trace {ae.chart.model.Trace} Trace
		 * @param newIndex {Integer} New index
		 */
		moveTrace : function(trace,newIndex){
			var currentIndex = this.getTraces().indexOf(trace);
			this.getTraces().removeAt(currentIndex);
			this.getTraces().insertAt(newIndex,trace);
			var e = new Object();
			e.trace = trace;
			e.currentIndex = currentIndex;
			e.newIndex = newIndex;
			this.fireDataEvent("moveTrace",e);
		},
		
		/**
		 * Serializes the chart object into a native javascript object.
		 * @return {Object} The serialized object.
		 */
		toJson : function(){
			var obj = {};
			
			//I use my own serializer to remove undefined properties
			obj.layout = ae.chart.util.Serializer.toNativeObject(this.getLayout());
			obj.data = ae.chart.util.Serializer.toNativeObject(this.getTraces());

			for(var i=0;i<this.getLayout().getYaxes().length;i++){
				obj.layout["yaxis"+(i+1)]=ae.chart.util.Serializer.toNativeObject(this.getLayout().getYaxes().getItem(i));
			}
		
			for(var i=0;i<this.getLayout().getXaxes().length;i++){
				obj.layout["xaxis"+(i+1)]=ae.chart.util.Serializer.toNativeObject(this.getLayout().getXaxes().getItem(i));
			}

			//Check if object is empty
			function isEmpty(map) {
			   for(var key in map) {
			      if (map.hasOwnProperty(key)) {
			         return false;
			      }
			   }
			   return true;
			}
			
			//Remove null attributes and empties objects
			function removeNullsAndEmpties(obj,parent,key){
				for (var k in obj){
					if (obj[k]===null) delete obj[k];
					else if (typeof obj[k]=="object") removeNullsAndEmpties(obj[k],obj,k);
				}
				if(isEmpty(obj)){
					delete parent[key];
				}
			}
			removeNullsAndEmpties(obj);
			
			return obj;
		},
		
		/**
		 * Update the chart's model with a native javascript object.
		 * @param obj {Object} The native javascript object.
		 * @return {ae.chart.model.Chart} The chart's model.
		 */
		fromJson : function(obj){
			
			if(obj.data.length>0){
				obj.traces = obj.data;
			}
			obj.layout.xaxes=[];
			obj.layout.yaxes=[];
			var xdefault,ydefault;
			for(var prop in obj.layout){
				//xaxis,yaxis,xaxis2,yaxis2,...
				if(prop.match(/xaxis1?$/)){
					xdefault=1;
				}
				if(prop.match(/yaxis1?$/)){
					ydefault=1;
				}
				if(prop.match(/.axis\d*/)){
					switch(prop[0]){
						case "x":
							obj.layout.xaxes.push(obj.layout[prop]);
							break;
						case "y":
							obj.layout.yaxes.push(obj.layout[prop]);
							break;
					}
				}
			}
			if(!xdefault){
				obj.layout.xaxes.unshift({});
			}

			if(!ydefault){
				obj.layout.yaxes.unshift({});
			}
			
			var delegate = {
				getModelClass : function(properties, object, parentproperty, depth) {
					/*console.log(properties);
					console.log(object);
					console.log(parentproperty);
					console.log(depth);*/
					
					if(depth==0){
						return ae.chart.model.Chart;
					}else{

						//traces[0],traces[1],...
						if(parentproperty.startsWith("trace")){
							parentproperty="traces";
						}
						
						//xaxes[0],yaxes[1],...
						if(parentproperty.match(/.axes/)){
							parentproperty="axis";
						}
						
						switch(parentproperty){
							case "textfont":
							case "titlefont":
							case "font":
								return ae.chart.model.Font;
								break;
							case "marker":
								return ae.chart.model.trace.auxiliary.Marker;
								break;
							case "line":
								return ae.chart.model.trace.auxiliary.Line;
								break;
							case "layout":
								return ae.chart.model.layout.Layout;
								break;
							case "axis":
								return ae.chart.model.axis.Axis;
								break;
							case "traces":
								switch(object.type){
								case "scatter":
									return ae.chart.model.trace.Scatter;
								case "pie":
									return ae.chart.model.trace.Pie;
								default:
									return ae.chart.model.trace.Scatter;
								}
								break;
						}
					}
				}
			};
			
			var marshaler = new qx.data.marshal.Json(delegate);
			var model = marshaler.toModel(obj);

			return model;
		},
		
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
	}
});
