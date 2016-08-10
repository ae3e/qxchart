﻿/**
 * Trace
 */
qx.Class.define("ae.chart.model.trace.Trace", {
	type : "abstract",
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
		},
		
		/**
		 * Determines which trace information appear on hover.
		 */
		hoverinfo : {
			check : "String",
			init : "all",
			event : "changeHoverinfo",
			apply : "_apply"
		},
		
		/**
		 * Sets the legend group for this trace. Traces part of the same legend group hide/show at the same time when toggling legend items.
		 */
		legendgroup : {
			check : "String",
			init : null,
			event : "changeLegendgroup",
			apply : "_apply"
		},
		
		/**
		 * Marker
		 */
		marker : {
			check : "ae.chart.model.trace.auxiliary.Marker",
			event : "changeMarker",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the trace name. The trace name appear as the legend item and on hover.
		 */
		name : {
			check : "String",
			init : null,
			event : "changeName",
			apply : "_apply"
		},
		
		/**
		 * Sets the opacity of the trace.
		 */
		opacity : {
			check : "Number",
			init : 1,
			event : "changeOpacity",
			apply : "_apply"
		},
		
		/**
		 * Determines whether or not an item corresponding to this trace is shown in the legend.
		 */
		showlegend : {
			check : "Boolean",
			init : true,
			event : "changeShowlegend",
			apply : "_apply"
		},
		
		/**
		 * Sets text elements associated with each (x,y) pair. If a single string, the same string appears over all the data points. If an array of string, the items are mapped in order to the this trace's (x,y) coordinates.
		 */
		text : {
			init : null,
			event : "changeText",
			apply : "_apply"
		},
		
		/**
		 * Sets the text font.
		 */
		textfont : {
			check : "ae.chart.model.Font",
			nullable : true,
			event : "changeTextfont",
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the positions of the `text` elements.
		 */
		textposition : {
			check : "String",
			init : null,
			event : "changeTextposition",
			apply : "_apply"
		},
		
		/**
		 * Determines whether or not this trace is visible. If *legendonly*, the trace is not drawn, but can appear as a legend item (provided that the legend itself is visible).
		 */
		visible : {
			check : [true,false,"legendonly"],
			init:true,
			event : "changeVisible",
			apply : "_apply"
		}
	},


	/*construct : function() {
		this.base(arguments);

	},*/
	
	members : {
		/**
	     * Apply function for every property created. It fires and
	     * {@link #changeBubble} event on every change. It also adds the chaining
	     * listener if possible which is necessary for the bubbling of the events.
	     *
	     * @param value {var} The new value of the property.
	     * @param old {var} The old value of the property.
	     * @param name {String} The name of the changed property.
	     */
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
	}
});
