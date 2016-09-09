/**
 * Scatter plot
 * 
 * The scatter trace type encompasses line charts, scatter charts, text charts, and bubble charts. The data visualized as scatter point or lines is set in `x` and `y`. Text (appearing either on the chart or on hover only) is via `text`. Bubble charts are achieved by setting `marker.size` and/or `marker.color` to a numerical arrays.
 */
qx.Class.define("ae.chart.model.trace.Scatter", {
	extend : ae.chart.model.trace.BaseTrace,
	
	properties : {
		
		/**
		 * Line
		 */
		line : {
			check : "ae.chart.model.trace.auxiliary.Line",
			event : "changeLine",
			nullable : true,
			apply : "_apply",
			init : null
		}
	},


	construct : function() {
		this.base(arguments);
		this.setType("scatter");

	},
	
	members : {

	}
});
