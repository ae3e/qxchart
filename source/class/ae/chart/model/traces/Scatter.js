/**
 * Trace
 */
qx.Class.define("ae.chart.model.traces.Scatter", {
	extend : ae.chart.model.traces.Trace,
	
	properties : {
		/**
		 * 
		 */
		x : {
			check : "Array",
			nullable : true,
			init : null,
			apply : "_apply"
		},
		
		y : {
			check : "Array",
			nullable : true,
			init : null,
			apply : "_apply"
		}
	},


	construct : function() {
		this.base(arguments);

	},
	
	members : {

	}
});
