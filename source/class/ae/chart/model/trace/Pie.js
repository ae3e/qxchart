/**
 * Pie plot
 * 
 * A data visualized by the sectors of the pie is set in `values`. The sector labels are set in `labels`. The sector colors are set in `marker.colors`
 */
qx.Class.define("ae.chart.model.trace.Pie", {
	extend : ae.chart.model.trace.Trace,
	
	properties : {
		
		/**
		 * Specifies the direction at which succeeding sectors follow one another.
		 */
		direction : {
			check : ["clockwise","counterclockwise"],
			init : null,
			event : "changeDirection",
			apply : "_apply"
		},
		
		/**
		 * Sets the label step. See `label0` for more info.
		 */
		dlabel : {
			check : "Number",
			init : null,
			event : "changeDlabel",
			apply : "_apply"
		},

		/**
		 * Sets the vertical and horizontal domain of this pie trace (in plot fraction). {x:[0,1],y:[0,1]}
		 */
		domain : {
			check : "Object",
			init : null,
			event : "changeDomain",
			apply : "_apply"
		},

		/**
		 * Sets the fraction of the radius to cut out of the pie. Use this to make a donut chart.
		 */
		hole : {
			check : "Number",
			init : null,
			event : "changeHole",
			apply : "_apply"
		},

		/**
		 * Sets the font used for `textinfo` lying inside the pie.
		 */
		insidetextfont : {
			check : "ae.chart.model.Font",
			init : null,
			event : "changeInsidetextfont",
			apply : "_apply"
		},

		/**
		 * Alternate to `labels`. Builds a numeric set of labels. Use with `dlabel` where `label0` is the starting label and `dlabel` the step.
		 */
		label0 : {
			check : "Number",
			init : null,
			event : "changeLabel0",
			apply : "_apply"
		},

		/**
		 * Sets the sector labels.
		 */
		labels : {
			check : "Array",
			init : null,
			event : "changeLabels",
			apply : "_apply"
		},
		
		/**
		 * Sets the font used for `textinfo` lying outside the pie.
		 */
		outsidetextfont : {
			check : "ae.chart.model.Font",
			init : null,
			event : "changeOutsidetextfont",
			apply : "_apply"
		},
		
		/**
		 * Sets the fraction of larger radius to pull the sectors out from the center. This can be a constant to pull all slices apart from each other equally or an array to highlight one or more slices.
		 */
		pull : {
			init : null,
			event : "changePull",
			apply : "_apply"
		},
		
		/**
		 * Instead of the first slice starting at 12 o'clock, rotate to some other angle.
		 */
		rotation : {
			check : "Number",
			init : null,
			event : "changeRotation",
			apply : "_apply"
		},
		
		/**
		 * If there are multiple pies that should be sized according to their totals, link them by providing a non-empty group id here shared by every trace in the same group.
		 */
		scalegroup : {
			check : "String",
			init : null,
			event : "changeScalegroup",
			apply : "_apply"
		},
		
		/**
		 * Determines whether or not the sectors of reordered from largest to smallest.
		 */
		sort : {
			check : "Boolean",
			init : null,
			event : "changeSort",
			apply : "_apply"
		},
		
		/**
		 * Determines which trace information appear on the graph.
		 */
		textinfo : {
			check : ["none","label","text","value","percent"],
			init : null,
			event : "changeTextinfo",
			apply : "_apply"
		},
		
		/**
		 * Sets the values of the sectors of this pie chart.
		 */
		values : {
			check : "Array",
			init : null,
			event : "changeValues",
			apply : "_apply"
		}
	},


	construct : function() {
		this.base(arguments);
		this.setType("pie");
	},
	
	members : {

	}
});
