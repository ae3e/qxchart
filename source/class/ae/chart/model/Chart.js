/**
 * Chart
 */
qx.Class.define("ae.chart.model.Chart", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * layout
		 */
		layout : {
			check : "ae.chart.model.Layout",
			event : "changeLayout",
			nullable : false,
			apply : "_apply",
			init : new ae.chart.model.Layout()
		},
		
		/**
		 * traces
		 */
		traces : {
			check : "qx.data.Array",
			nullable : false,
			apply : "_apply",
			init : new qx.data.Array()
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
	     * Fired when trace is raised
	     */
	    "raiseTrace" : "qx.event.type.Data"
	},
	
	members : {
		/**
		 * Add a trace
		 * @param trace {ae.chart.model.Trace} Trace
		 */
		addTrace : function(trace){
			this.getTraces().insertBefore(this.getTraces().getItem(0),trace);
			this.fireDataEvent("addTrace",trace);
		},
		
		/**
		 * Remove a trace
		 * @param trace {ae.chart.model.Trace} Trace
		 */
		removeTrace : function(trace){
			this.getTraces().remove(trace);
			this.fireDataEvent("removeTrace",trace);
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
		 * Change the index of the given trace by delta.
		 * If delta is positive, the trace is moved up.
		 * If delta is negative, the trace is moved down.
		 * @param trace {ae.chart.model.Trace} Trace
		 * @param delta {Integer} Delta
		 */
		raiseLayer : function(trace,delta){
			var pos = this.getTraces().indexOf(trace);
			this.getTraces().removeAt(pos);
			this.getTraces().insertAt(pos+delta,trace);
			var e = new Object();
			e.trace = trace;
			e.delta = delta;
			this.fireDataEvent("raiseTrace",e);
		},
		
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
	}
});
