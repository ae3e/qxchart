/**
 * Shape
 */
qx.Class.define("ae.chart.model.layout.Shape", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {		
		/**
		 * Sets the color filling the shape's interior.
		 */
		fillcolor : {
			check : "String",
			apply : "_apply",
			event : "changeFillcolor",
			init : "rgba(0,0,0,0)"
		},
		
		/**
		 * Specifies whether shapes are drawn below or above traces.
		 */
		layer : {
			check : ["below","above"],
			apply : "_apply",
			event : "changeLayer",
			init : "above"
		},
		
		/**
		 * Line
		 */
		line : {
			check : "ae.chart.model.trace.auxiliary.Line",
			apply : "_apply",
			event : "changeLine",
			nullable : true,
			init : null
		},
		
		/**
		 * Sets the opacity of the shape.
		 */
		opacity : {
			check : "Number",
			apply : "_apply",
			event : "changeOpacity",
			init : 1
		},
		
		/**
		 * For `type` *path* - a valid SVG path but with the pixel values replaced by data values. There are a few restrictions / quirks only absolute instructions, not relative. So the allowed segments are: M, L, H, V, Q, C, T, S, and Z arcs (A) are not allowed because radius rx and ry are relative. In the future we could consider supporting relative commands, but we would have to decide on how to handle date and log axes. Note that even as is, Q and C Bezier paths that are smooth on linear axes may not be smooth on log, and vice versa. no chained \"polybezier\" commands - specify the segment type for each one. On category axes, values are numbers scaled to the serial numbers of categories because using the categories themselves there would be no way to describe fractional positions On data axes: because space and T are both normal components of path strings, we can't use either to separate date from time parts. Therefore we'll use underscore for this purpose: 2015-02-21_13:45:56.789
		 */
		path : {
			check : "String",
			apply : "_apply",
			event : "changePath",
			nullable : true,
			init : null
		},
		
		/**
		 * Specifies the shape type to be drawn. If *line*, a line is drawn from (`x0`,`y0`) to (`x1`,`y1`) If *circle*, a circle is drawn from ((`x0`+`x1`)/2, (`y0`+`y1`)/2)) with radius (|(`x0`+`x1`)/2 - `x0`|, |(`y0`+`y1`)/2 -`y0`)|) If *rect*, a rectangle is drawn linking (`x0`,`y0`), (`x1`,`y0`), (`x1`,`y1`), (`x0`,`y1`), (`x0`,`y0`) If *path*, draw a custom SVG path using `path`.
		 */
		type : {
			check : ["line","rect","circle","path"],
			apply : "_apply",
			event : "changeType",
			init : "line"
		},
		
		/**
		 * Sets the shape's starting x position. See `type` for more info.
		 */
		x0 : {
			apply : "_apply",
			event : "changeX0",
			init : null
		},
		
		/**
		 * Sets the shape's end x position. See `type` for more info.
		 */
		x1 : {
			apply : "_apply",
			event : "changeX1",
			init : null
		},
		
		/**
		 * Sets the shape's x coordinate axis. If set to an x axis id (e.g. *x* or *x2*), the `x` position refers to an x coordinate If set to *paper*, the `x` position refers to the distance from the left side of the plotting area in normalized coordinates where *0* (*1*) corresponds to the left (right) side. If the axis `type` is *log*, then you must take the log of your desired range. If the axis `type` is *date*, then you must convert the date to unix time in milliseconds.
		 */
		xref : {
			check : "String",
			apply : "_apply",
			event : "changeXref",
			init : "paper"
		},
		
		/**
		 * Sets the shape's starting y position. See `type` for more info.
		 */
		y0 : {
			apply : "_apply",
			event : "changeY0",
			init : null
		},
		
		/**
		 * Sets the shape's end y position. See `type` for more info.
		 */
		y1 : {
			apply : "_apply",
			event : "changeY1",
			init : null
		},
		
		/**
		 * Sets the annotation's y coordinate axis. If set to an y axis id (e.g. *y* or *y2*), the `y` position refers to an y coordinate If set to *paper*, the `y` position refers to the distance from the bottom of the plotting area in normalized coordinates where *0* (*1*) corresponds to the bottom (top).
		 */
		yref : {
			check : "String",
			apply : "_apply",
			event : "changeYref",
			init : "paper"
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
