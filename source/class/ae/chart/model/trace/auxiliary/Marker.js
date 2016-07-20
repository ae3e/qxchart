/**
 * An object containing specifications of the marker points.
 */
qx.Class.define("ae.chart.model.trace.auxiliary.Marker", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * Has an effect only if `marker.color` is set to a numerical array. Determines whether the colorscale is a default palette (`autocolorscale: true`) or the palette determined by `marker.colorscale`. In case `colorscale` is unspecified or `autocolorscale` is true, the default  palette will be chosen according to whether numbers in the `color` array are all positive, all negative or mixed.
		 */
		autocolorscale : {
			check : "Boolean",
			apply : "_apply",
			init : true
		},

		/**
		 * Has an effect only if `marker.color` is set to a numerical array and `cmin`, `cmax` are set by the user. In this case, it controls whether the range of colors in `colorscale` is mapped to the range of values in the `color` array (`cauto: true`), or the `cmin`/`cmax` values (`cauto: false`). Defaults to `false` when `cmin`, `cmax` are set by the user.
		 */
		cauto : {
			check : "Boolean",
			apply : "_apply",
			init : true
		},

		/**
		 * Has an effect only if `marker.color` is set to a numerical array. Sets the upper bound of the color domain. Value should be associated to the `marker.color` array index, and if set, `marker.cmin` must be set as well.
		 */
		cmax : {
			check : "Number",
			apply : "_apply",
			init : null
		},
		
		/**
		 * Has an effect only if `marker.color` is set to a numerical array. Sets the lower bound of the color domain. Value should be associated to the `marker.color` array index, and if set, `marker.cmax` must be set as well.
		 */
		cmin : {
			check : "Number",
			apply : "_apply",
			init : null
		},
		
		/**
		 * Sets the marker color. It accepts either a specific color or an array of numbers that are mapped to the colorscale relative to the max and min values of the array or relative to `cmin` and `cmax` if set.
		 */
		color : {
			apply : "_apply",
			init : null
		},
		
		/*
 		colorbar : {
 		},
		 */
		
		/**
		 * Sets the colorscale and only has an effect if `marker.color` is set to a numerical array. The colorscale must be an array containing arrays mapping a normalized value to an rgb, rgba, hex, hsl, hsv, or named color string. At minimum, a mapping for the lowest (0) and highest (1) values are required. For example, `[[0, 'rgb(0,0,255)', [1, 'rgb(255,0,0)']]`. To control the bounds of the colorscale in color space, use `marker.cmin` and `marker.cmax`. Alternatively, `colorscale` may be a palette name string of the following list: Greys, YlGnBu, Greens, YlOrRd, Bluered, RdBu, Reds, Blues, Picnic, Rainbow, Portland, Jet, Hot, Blackbody, Earth, Electric, Viridis
		 */
		colorscale : {
			apply : "_apply",
			init : null
		},
		
		/*
		line : {
		}
		*/
		
		/**
		 * Sets a maximum number of points to be drawn on the graph. *0* corresponds to no limit.
		 */
		maxdisplayed : {
			check : "Number",
			apply : "_apply",
			init : 0
		},
		
		/**
		 * Sets the marker opacity.
		 */
		opacity : {
			apply : "_apply",
			init : null
		},
		
		/**
		 * Has an effect only if `marker.color` is set to a numerical array. Reverses the color mapping if true (`cmin` will correspond to the last color in the array and `cmax` will correspond to the first color).
		 */
		reversescale : {
			check : "Boolean",
			apply : "_apply",
			init : false
		},
		
		/**
		 * Has an effect only if `marker.color` is set to a numerical array. Determines whether or not a colorbar is displayed.
		 */
		showscale : {
			check : "Boolean",
			apply : "_apply",
			init : false
		},
		
		/**
		 * Sets the marker size (in px).
		 */
		size : {
			apply : "_apply",
			init : 6
		},
		
		/**
		 * as an effect only if `marker.size` is set to a numerical array. Sets the minimum size (in px) of the rendered marker points.
		 */
		sizemin : {
			check : "Number",
			apply : "_apply",
			init : 0
		},
		
		/**
		 * Has an effect only if `marker.size` is set to a numerical array. Sets the rule for which the data in `size` is converted to pixels.
		 */
		sizemode : {
			check : ["diameter","area"],
			apply : "_apply",
			init : "diameter"
		},
		
		/**
		 * Has an effect only if `marker.size` is set to a numerical array. Sets the scale factor used to determine the rendered size of marker points. Use with `sizemin` and `sizemode`.
		 */
		sizeref : {
			check : "Number",
			apply : "_apply",
			init : 1
		},
		
		/**
		 * Sets the marker symbol type. Adding 100 is equivalent to appending *-open* to a symbol name. Adding 200 is equivalent to appending *-dot* to a symbol name. Adding 300 is equivalent to appending *-open-dot* or *dot-open* to a symbol name.
		 */
		symbol : {
			apply : "_apply",
			init : "circle"
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
