/**
 * Margin
 */
qx.Class.define("ae.chart.model.layout.Margin", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {		
		/**
		 * Sets the bottom margin (in px).
		 */
		b : {
			check : "Intger",
			apply : "_apply",
			event : "changeB",
			init : 80
		},
		
		/**
		 * Sets the left margin (in px).
		 */
		l : {
			check : "Intger",
			apply : "_apply",
			event : "changeL",
			init : 80
		},
		
		/**
		 * Sets the right margin (in px).
		 */
		r : {
			check : "Intger",
			apply : "_apply",
			event : "changeR",
			init : 80
		},
		
		/**
		 * Sets the top margin (in px).
		 */
		t : {
			check : "Intger",
			apply : "_apply",
			event : "changeT",
			init : 80
		},
		
		/**
		 * Sets the amount of padding (in px) between the plotting area and the axis lines
		 */
		pad : {
			check : "Intger",
			apply : "_apply",
			event : "changePad",
			init : 0
		},
		
		/**
		 * Autoexpand.
		 */
		autoexpand : {
			check : "Boolean",
			apply : "_apply",
			event : "changeAutoexpand",
			init : true
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
