/**
 * Trace
 */
qx.Class.define("ae.chart.model.traces.Trace", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * Type
		 */
		type : {
			check : "String",
			nullable : true,
			init : null
		}
	},


	construct : function() {
		this.base(arguments);

	},
	
	members : {
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
	}
});
