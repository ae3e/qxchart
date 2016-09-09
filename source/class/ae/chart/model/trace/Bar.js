/**
 * Bar plot
 * 
 * The data visualized by the span of the bars is set in `y` if `orientation` is set th *v* (the default) and the labels are set in `x`. By setting `orientation` to *h*, the roles are interchanged.
 */
qx.Class.define("ae.chart.model.trace.Bar", {
	extend : ae.chart.model.trace.BaseTrace,
	
	properties : {
		
		/**
		 * Sets the orientation of the bars. With *v* (*h*), the value of the each bar spans along the vertical (horizontal).
		 */
		orientation : {
			check : ["v","h"],
			init : null,
			event : "changeOrientation",
			apply : "_apply"
		}
	},


	construct : function() {
		this.base(arguments);
		this.setType("bar");
	},
	
	members : {

	}
});
