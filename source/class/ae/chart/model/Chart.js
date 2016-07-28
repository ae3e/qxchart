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
			init : new ae.chart.model.layout.Layout()
		},
		
		/**
		 * traces
		 */
		traces : {
			check : "qx.data.Array",
			nullable : false,
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
		
		toJson : function(){
			var obj = {};
			
			//I use my own serializer to remove undefined properties
			obj.layout = ae.chart.util.Serializer.toNativeObject(this.getLayout());
			obj.data = ae.chart.util.Serializer.toNativeObject(this.getTraces());

			if(obj.layout.yaxes){
				for(var i=0;i<obj.layout.yaxes.length;i++){
					obj.layout["yaxis"+(i+1)]=ae.chart.util.Serializer.toNativeObject(obj.layout.yaxes[i]);
				}
			}
			
			if(obj.layout.xaxes){
				for(var i=0;i<obj.layout.xaxes.length;i++){
					obj.layout["xaxis"+(i+1)]=ae.chart.util.Serializer.toNativeObject(obj.layout.xaxes[i]);
				}
			}

			return obj;
		},
		
		fromJson : function(obj){
			var delegate = {
				getModelClass : function(properties, object, parentproperty, depth) {
					console.log(properties);
					console.log(object);
					console.log(parentproperty);
					console.log(depth);
					switch(properties){
						case "title":
							return ae.chart.model.layout.Layout;
							break;
					}
					
					if(depth==0){
						if(object.data.length>0){
							object.traces = object.data;
						}
						return ae.chart.model.Chart;
					}
					
					if(parentproperty.startsWith("trace")){
						switch(object.type){
							case "scatter":
								return ae.chart.model.trace.Scatter;
							case "pie":
								return ae.chart.model.trace.Pie;
							default:
								return ae.chart.model.trace.Scatter;
						}
					}
					
					var font = ["textfont","font","titlefont"];
					if(font.indexOf(parentproperty)>-1){
						return ae.chart.model.Font;
					}
					
				}
			};
			
			var marshaler = new qx.data.marshal.Json(delegate);
			var model = marshaler.toModel(obj);
			console.log(model)
			return model;
		},
		
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
	}
});
