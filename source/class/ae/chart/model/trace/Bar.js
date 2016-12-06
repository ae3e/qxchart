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
		},
		
		/**
		 * Sets the bar width (in position axis units).
		 */
		width : {
			nullable : true,
			init : null,
			event : "changeWidth",
			apply : "_apply"
		},
		
		/**
		 * Sets where the bar base is drawn (in position axis units). In *stack* or *relative* barmode, traces that set *base* will be excluded and drawn in *overlay* mode instead.
		 */
		base : {
			nullable : true,
			init : null,
			event : "changeBase",
			apply : "_apply"
		},
		
		/**
		 * Shifts the position where the bar is drawn (in position axis units). In *group* barmode, traces that set *offset* will be excluded and drawn in *overlay* mode instead.
		 */
		offset : {
			nullable : true,
			init : null,
			event : "changeOffset",
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
