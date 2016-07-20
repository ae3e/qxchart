/**
 * An object containing specifications of the line segments.
 */
qx.Class.define("ae.chart.model.trace.auxiliary.Line", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * Sets the line color.
		 */
		color : {
			check : "String",
			init : null,
			apply : "_apply"
		},

		/**
		 * Has an effect only if `shape` is set to *spline* Sets the amount of smoothing. *0* corresponds to no smoothing (equivalent to a *linear* shape).
		 */
		smoothing : {
			check : "Number",
			init : 0,
			apply : "_apply"
		},
		
		/**
		 * Sets the style of the lines. Set to a dash string type or a dash length in px.
		 */
		dash : {
			check : ["solid","dot","dash","longdash","dashdot","longdashdot"],
			init : "solid",
			apply : "_apply"
		},
		
		/**
		 * Sets the line width (in px).
		 */
		width : {
			check : "Number",
			init : 1,
			apply : "_apply"
		},
		
		/**
		 * Determines the line shape. With *spline* the lines are drawn using spline interpolation. The other available values correspond to step-wise line shapes.
		 */
		shape : {
			check : ["linear","spline","hv","vh","hvh","vhv"],
			init : "linear",
			apply : "_apply"
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
