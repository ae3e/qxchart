/**
 * Legend
 */
qx.Class.define("ae.chart.model.layout.Legend", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {		
		
		/**
		 * Sets the legend background color.
		 */
		bgcolor : {
			check : "String",
			apply : "_apply",
			event : "changeBgcolor"
		},
		
		/**
		 * Sets the color of the border enclosing the legend.
		 */
		bordercolor : {
			check : "String",
			apply : "_apply",
			event : "changeBordercolor",
			init : "#444"
		},
		
		/**
		 * Sets the width (in px) of the border enclosing the legend.
		 */
		borderwidth : {
			check : "Integer",
			apply : "_apply",
			event : "changeBorderwidth",
			init : 0
		},
		
		/**
		 * Sets the font used to text the legend items.
		 */
		font : {
			check : "ae.chart.model.Font",
			apply : "_apply",
			event : "changeFont",
			nullable : true,
			init : null
		},
		
		/**
		 * Sets the orientation of the legend.
		 */
		orientation : {
			check : ["h","v"],
			apply : "_apply",
			event : "changeOrientation",
			init : "v"
		},
		
		/**
		 * Sets the amount of vertical space (in px) between legend groups.
		 */
		tracegroupgap : {
			check : "Integer",
			apply : "_apply",
			event : "changeTracegroupgap",
			init : 10
		},
		
		/**
		 * Determines the order at which the legend items are displayed. If *normal*, the items are displayed top-to-bottom in the same order as the input data. If *reversed*, the items are displayed in the opposite order as *normal*. If *grouped*, the items are displayed in groups (when a trace `legendgroup` is provided). if *grouped+reversed*, the items are displayed in the opposite order as *grouped*.
		 */
		traceorder : {
			check : ["normal","reversed","grouped","grouped+reversed"],
			apply : "_apply",
			event : "changeTraceorder",
			init : "normal"
		},
		
		/**
		 * Sets the x position (in normalized coordinates) of the legend.
		 */
		x : {
			check : "Number",
			apply : "_apply",
			event : "changeX",
			init : 1.02
		},
		
		/**
		 * Sets the legend's horizontal position anchor. This anchor binds the `x` position to the *left*, *center* or *right* of the legend.
		 */
		xanchor : {
			check : ["auto","left","center","right"],
			apply : "_apply",
			event : "changeXanchor",
			init : "left"
		},
		
		/**
		 * Sets the y position (in normalized coordinates) of the legend.
		 */
		y : {
			check : "Number",
			apply : "_apply",
			event : "changeY",
			init : 1
		},
		
		/**
		 * Sets the legend's vertical position anchor This anchor binds the `y` position to the *top*, *middle* or *bottom* of the legend.
		 */
		yanchor : {
			check : ["auto","top","middle","bottom"],
			apply : "_apply",
			event : "changeYanchor",
			init : "auto"
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
