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
			event : "changeColor",
			nullable:true,
			init : null,
			apply : "_apply"
		},

		/**
		 * Has an effect only if `shape` is set to *spline* Sets the amount of smoothing. *0* corresponds to no smoothing (equivalent to a *linear* shape).
		 */
		smoothing : {
			check : "Number",
			event : "changeSmoothing",
			init : 0,
			apply : "_apply"
		},
		
		/**
		 * Sets the style of the lines. Set to a dash string type or a dash length in px.
		 */
		dash : {
			check : ["solid","dot","dash","longdash","dashdot","longdashdot"],
			event : "changeDash",
			init : "solid",
			apply : "_apply"
		},
		
		/**
		 * Sets the line width (in px).
		 */
		width : {
			check : "Number",
			event : "changeWidth",
			init : 2,
			apply : "_apply"
		},
		
		/**
		 * Determines the line shape. With *spline* the lines are drawn using spline interpolation. The other available values correspond to step-wise line shapes.
		 */
		shape : {
			check : ["linear","spline","hv","vh","hvh","vhv"],
			event : "changeShape",
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
