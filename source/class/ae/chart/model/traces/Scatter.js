/**
 * Scatter plot
 * 
 * The scatter trace type encompasses line charts, scatter charts, text charts, and bubble charts. The data visualized as scatter point or lines is set in `x` and `y`. Text (appearing either on the chart or on hover only) is via `text`. Bubble charts are achieved by setting `marker.size` and/or `marker.color` to a numerical arrays.
 */
qx.Class.define("ae.chart.model.traces.Scatter", {
	extend : ae.chart.model.traces.Trace,
	
	properties : {
		
		/**
		 * Determines whether or not gaps (i.e. {nan} or missing values) in the provided data arrays are connected.
		 */
		connectgaps : {
			check : "Boolean",
			init : false,
			apply : "_apply"
		},
		
		/**
		 * Sets the x coordinate step. See `x0` for more info.
		 */
		dx : {
			check : "Number",
			init : 1,
			apply : "_apply"
		},
		
		/**
		 * Sets the y coordinate step. See `y0` for more info.
		 */
		dy : {
			check : "Number",
			init : 1,
			apply : "_apply"
		},
		
		/*error_x : {
			check : "Number",
			init : false,
			apply : "_apply"
		},
		
		error_y : {
			check : "Number",
			init : false,
			apply : "_apply"
		},*/
		
		/**
		 * Sets the area to fill with a solid color. Use with `fillcolor`.
		 */
		fill : {
			check : ["none", "tozeroy", "tozerox", "tonexty", "tonextx"],
			init : "none",
			apply : "_apply"
		},
		
		/**
		 * Sets the fill color.
		 */
		fillcolor : {
			check : "String",
			init : null,
			apply : "_apply"
		},
		
		/**
		 * Determines which trace information appear on hover.
		 */
		hoverinfo : {
			check : "String",
			init : "all",
			apply : "_apply"
		},
		
		/**
		 * Sets the legend group for this trace. Traces part of the same legend group hide/show at the same time when toggling legend items.
		 */
		legendgroup : {
			check : "String",
			init : null,
			apply : "_apply"
		},
		
		/*line : {
			
		},*/
		
		/**
		 * Marker
		 */
		marker : {
			check : "ae.chart.model.Marker",
			apply : "_apply"
		},
		
		/**
		 * Determines the drawing mode for this scatter trace. If the provided `mode` includes *text* then the `text` elements appear at the coordinates. Otherwise, the `text` elements appear on hover. If there are less than 20 points, then the default is *lines+markers*. Otherwise, *lines*.
		 */
		mode : {
			check : "String",
			init : null,
			apply : "_apply"
		},
		
		/**
		 * Sets the trace name. The trace name appear as the legend item and on hover.
		 */
		name : {
			check : "String",
			init : null,
			apply : "_apply"
		},
		
		/**
		 * Sets the opacity of the trace.
		 */
		opacity : {
			check : "Number",
			init : 1,
			apply : "_apply"
		},
		
		/**
		 * For polar chart only.Sets the radial coordinates.
		 */
		r : {
			check : "Array",
			//nullable : true,
			//init : null,
			apply : "_apply"
		},
		
		/**
		 * Determines whether or not an item corresponding to this trace is shown in the legend.
		 */
		showlegend : {
			check : "Boolean",
			init : true,
			apply : "_apply"
		},
		
		/**
		 * For polar chart only.Sets the angular coordinates.
		 */
		t : {
			check : "Array",
			//nullable : true,
			//init : null,
			apply : "_apply"
		},
		
		/**
		 * Sets text elements associated with each (x,y) pair. If a single string, the same string appears over all the data points. If an array of string, the items are mapped in order to the this trace's (x,y) coordinates.
		 */
		text : {
			init : null,
			apply : "_apply"
		},
		
		/**
		 * Sets the text font.
		 */
		textfont : {
			check : "qx.bom.Font",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the positions of the `text` elements with respects to the (x,y) coordinates.
		 */
		textposition : {
			init : "middle center",
			apply : "_apply"
		},
		
		/**
		 * Determines whether or not this trace is visible. If *legendonly*, the trace is not drawn, but can appear as a legend item (provided that the legend itself is visible).
		 */
		visible : {
			check : [true,false,"legendonly"],
			init:true,
			apply : "_apply"
		},
		
		/**
		 * Alternate to `x`. Builds a linear space of x coordinates. Use with `dx` where `x0` is the starting coordinate and `dx` the step.
		 */
		x0 : {
			init:0,
			apply : "_apply"
		},
		
		/**
		 * Sets the x coordinates.
		 */
		x : {
			check : "Array",
			nullable : true,
			init : null,
			apply : "_apply"
		},
		
		/**
		 * Sets a reference between this trace's x coordinates and a 2D cartesian x axis. If *x* (the default value), the x coordinates refer to `layout.xaxis`. If *x2*, the x coordinates refer to `layout.xaxis2`, and so on.
		 */
		xaxis : {
			check : "String",
			init : "x",
			apply : "_apply"
		},
		
		/**
		 * Alternate to `y`. Builds a linear space of y coordinates. Use with `dy` where `y0` is the starting coordinate and `dy` the step.
		 */
		y0 : {
			init:0,
			apply : "_apply"
		},
		
		/**
		 * Sets the y coordinates.
		 */
		y : {
			check : "Array",
			nullable : true,
			init : null,
			apply : "_apply"
		},
		
		/**
		 * Sets a reference between this trace's y coordinates and a 2D cartesian y axis. If *y* (the default value), the y coordinates refer to `layout.yaxis`. If *y2*, the y coordinates refer to `layout.xaxis2`, and so on.
		 */
		yaxis : {
			check : "String",
			init : "y",
			apply : "_apply"
		}
	},


	construct : function() {
		this.base(arguments);
		this.setType("scatter");

	},
	
	members : {

	}
});
