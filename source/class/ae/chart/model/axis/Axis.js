/**
 * Axis
 */
qx.Class.define("ae.chart.model.axis.Axis", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {

		/**
		 * If set to an opposite-letter axis id (e.g. `xaxis2`, `yaxis`), this axis is bound to the corresponding opposite-letter axis. If set to *free*, this axis' position is determined by `position`.
		 */
		anchor : {
			check : "String",
			event : "changeAnchor",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether or not the range of this axis is computed in relation to the input data. See `rangemode` for more info. If `range` is provided, then `autorange` is set to *false*.
		 */
		autorange : {
			check : [true,false,"reversed"],
			event : "changeAutorange",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the order in which categories on this axis appear. Only has an effect if `categoryorder` is set to *array*. Used with `categoryorder`.
		 */
		categoryarray : {
			apply : "_apply",
			event : "changeCategoryarray",
			nullable :true,
			init : true
		},
		
		/**
		 * Specifies the ordering logic for the case of categorical variables. By default, plotly uses *trace*, which specifies the order that is present in the data supplied. Set `categoryorder` to *category ascending* or *category descending* if order should be determined by the alphanumerical order of the category names. Set `categoryorder` to *array* to derive the ordering from the attribute `categoryarray`. If a category is not found in the `categoryarray` array, the sorting behavior for that attribute will be identical to the *trace* mode. The unspecified categories will follow the categories in `categoryarray`.
		 */
		categoryorder : {
			check : ["trace","category ascending","category descending","array"],
			event : "changeCategoryorder",
			apply : "_apply",
			nullable :true,
			init : "trace"
		},
		
		/**
		 * Sets default for all colors associated with this axis all at once: line, font, tick, and grid colors. Grid color is lightened by blending this with the plot background Individual pieces can override this.
		 */
		color : {
			check : "String",
			event : "changeColor",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the domain of this axis (in plot fraction).
		 */
		domain : {
			check : "Array",
			event : "changeDomain",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the step in-between ticks on this axis Use with `tick0`. If the axis `type` is *log*, then ticks are set every 10^(n*dtick) where n is the tick number. For example, to set a tick mark at 1, 10, 100, 1000, ... set dtick to 1. To set tick marks at 1, 100, 10000, ... set dtick to 2. To set tick marks at 1, 5, 25, 125, 625, 3125, ... set dtick to log_10(5), or 0.69897000433. If the axis `type` is *date*, then you must convert the time to milliseconds. For example, to set the interval between ticks to one day, set `dtick` to 86400000.0.
		 */
		dtick : {
			apply : "_apply",
			event : "changeDtick",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines a formatting rule for the tick exponents. For example, consider the number 1,000,000,000. If *none*, it appears as 1,000,000,000. If *e*, 1e+9. If *E*, 1E+9. If *power*, 1x10^9 (with 9 in a super script). If *SI*, 1G. If *B*, 1B.
		 */
		exponentformat : {
			check : ["none","e","E","power","SI","B"],
			event : "changeExponentformat",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether or not this axis is zoom-able. If true, then zoom is disabled.
		 */
		fixedrange : {
			check : "Boolean",
			event : "changeFixedrange",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the color of the grid lines.
		 */
		gridcolor : {
			check : "String",
			event : "changeGridcolor",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the width (in px) of the grid lines.
		 */
		gridwidth : {
			check : "Number",
			event : "changeGridwidth",
			apply : "_apply",
			nullable : true,
			init : null
		},
		
		/**
		 * Sets the hover text formatting rule for data values on this axis, using the python/d3 number formatting language. See https://github.com/mbostock/d3/wiki/Formatting#numbers or https://docs.python.org/release/3.1.3/library/string.html#formatspec for more info.
		 */
		hoverformat : {
			apply : "_apply",
			event : "changeHoverformat",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the axis line color.
		 */
		linecolor : {
			check : "String",
			event : "changeLinecolor",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the width (in px) of the axis line.
		 */
		linewidth : {
			check : "Number",
			event : "changeLinewidth",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines if the axis lines or/and ticks are mirrored to the opposite side of the plotting area. If *true*, the axis lines are mirrored. If *ticks*, the axis lines and ticks are mirrored. If *false*, mirroring is disable. If *all*, axis lines are mirrored on all shared-axes subplots. If *allticks*, axis lines and ticks are mirrored on all shared-axes subplots.
		 */
		mirror : {
			check : [true,false,"ticks","all","allticks"],
			event : "changeMirror",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Specifies the maximum number of ticks for the particular axis. The actual number of ticks will be chosen automatically to be less than or equal to `nticks`. Has an effect only if `tickmode` is set to *auto*.
		 */
		nticks : {
			check : "Integer",
			event : "changeNticks",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * If set a same-letter axis id, this axis is overlaid on top of the corresponding same-letter axis. If *false*, this axis does not overlay any same-letter axes.
		 */
		overlaying : {
			check : "String",
			event : "changeOverlaying",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the position of this axis in the plotting space (in normalized coordinates). Only has an effect if `anchor` is set to *free*.
		 */
		position : {
			check : "Number",
			event : "changePosition",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the range of this axis. If the axis `type` is *log*, then you must take the log of your desired range (e.g. to set the range from 1 to 100, set the range from 0 to 2). If the axis `type` is *date*, then you must convert the date to unix time in milliseconds (the number of milliseconds since January 1st, 1970). For example, to set the date range from January 1st 1970 to November 4th, 2013, set the range from 0 to 1380844800000.0
		 */
		range : {
			check : "Array",
			event : "changeRange",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * If *normal*, the range is computed in relation to the extrema of the input data. If *tozero*`, the range extends to 0, regardless of the input data If *nonnegative*, the range is non-negative, regardless of the input data.
		 */
		rangemode : {
			check : ["normal","tozero","nonnegative"],
			event : "changeRangemode",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/*
		rangeselector : {
		
		},
		
		rangeslider : {
		
		},
		*/
		
		/**
		 * If *all*, all exponents are shown besides their significands. If *first*, only the exponent of the first tick is shown. If *last*, only the exponent of the last tick is shown. If *none*, no exponents appear.
		 */
		showexponent : {
			check : ["all","first","last","none"],
			event : "changeShowexponent",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether or not grid lines are drawn. If *true*, the grid lines are drawn at every tick mark.
		 */
		showgrid : {
			check : "Boolean",
			event : "changeShowgrid",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether or not a line bounding this axis is drawn.
		 */
		showline : {
			check : "Boolean",
			event : "changeShowline",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether or not the tick labels are drawn.
		 */
		showticklabels : {
			check : "Boolean",
			event : "changeShowticklabels",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * If *all*, all tick labels are displayed with a prefix. If *first*, only the first tick is displayed with a prefix. If *last*, only the last tick is displayed with a suffix. If *none*, tick prefixes are hidden.
		 */
		showtickprefix : {
			check : ["all","first","last","none"],
			event : "changeShowtickprefix",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Same as `showtickprefix` but for tick suffixes.
		 */
		showticksuffix : {
			check : ["all","first","last","none"],
			event : "changeShowticksuffix",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether a x (y) axis is positioned at the *bottom* (*left*) or *top* (*right*) of the plotting area.
		 */
		side : {
			check : ["top","bottom","left","right"],
			event : "changeSide",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the placement of the first tick on this axis. Use with `dtick`. If the axis `type` is *log*, then you must take the log of your starting tick (e.g. to set the starting tick to 100, set the `tick0` to 2). If the axis `type` is *date*, then you must convert the date to unix time in milliseconds (the number of milliseconds since January 1st, 1970). For example, to set the starting tick to November 4th, 2013, set the range to 1380844800000.0.
		 */
		tick0 : {
			check : "Number",
			event : "changeTick0",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the angle of the tick labels with respect to the horizontal. For example, a `tickangle` of -90 draws the tick labels vertically.
		 */
		tickangle : {
			check : "Number",
			event : "changeTickangle",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the tick color.
		 */
		tickcolor : {
			check : "String",
			event : "changeTickcolor",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the tick font.
		 */
		tickfont : {
			check : "ae.chart.model.Font",
			event : "changeTickfont",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the tick label formatting rule using the python/d3 number formatting language. See https://github.com/mbostock/d3/wiki/Formatting#numbers or https://docs.python.org/release/3.1.3/library/string.html#formatspec for more info.
		 */
		tickformat : {
			check : "String",
			event : "changeTickformat",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the tick length (in px).
		 */
		ticklen : {
			check : "Number",
			event : "changeTicklen",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the tick mode for this axis. If *auto*, the number of ticks is set via `nticks`. If *linear*, the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick` (*linear* is the default value if `tick0` and `dtick` are provided). If *array*, the placement of the ticks is set via `tickvals` and the tick text is `ticktext`. (*array* is the default value if `tickvals` is provided).
		 */
		tickmode : {
			check : ["auto","linear","array"],
			event : "changeTickmode",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets a tick label prefix.
		 */
		tickprefix : {
			check : "String",
			event : "changeTickprefix",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether ticks are drawn or not. If **, this axis' ticks are not drawn. If *outside* (*inside*), this axis' are drawn outside (inside) the axis lines.
		 */
		ticks : {
			check : ["inside","outside",""],
			event : "changeTick",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets a tick label suffix.
		 */
		ticksuffix : {
			check : "String",
			event : "changeTicksuffix",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the text displayed at the ticks position via `tickvals`. Only has an effect if `tickmode` is set to *array*. Used with `tickvals`.
		 */
		ticktext : {
			check : "Array",
			event : "changeTicktext",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the values at which ticks on this axis appear. Only has an effect if `tickmode` is set to *array*. Used with `ticktext`.
		 */
		tickval : {
			check : "Array",
			event : "changeTickval",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the tick width (in px).
		 */
		tickwidth : {
			check : "Number",
			event : "changeTickwidth",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the title of this axis.
		 */
		title : {
			check : "String",
			event : "changeTitle",
			apply : "_apply",
			nullable : true,
			init : null
		},
		
		/**
		 * Sets this axis' title font.
		 */
		titlefont : {
			check : "ae.chart.model.Font",
			event : "changeTitlefont",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the axis type. By default, plotly attempts to determined the axis type by looking into the data of the traces that referenced the axis in question.
		 */
		type : {
			check : ["-","linear","log","date","category"],
			event : "changeType",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Determines whether or not a line is drawn at along the 0 value of this axis. If *true*, the zero line is drawn on top of the grid lines.
		 */
		zeroline : {
			check : "Boolean",
			event : "changeZeroline",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the line color of the zero line.
		 */
		zerolinecolor : {
			check : "String",
			event : "changeZerolinecolor",
			apply : "_apply",
			nullable :true,
			init : null
		},
		
		/**
		 * Sets the width (in px) of the zero line.
		 */
		zerolinewidth : {
			check : "Number",
			event : "changeZerolinewidth",
			apply : "_apply",
			nullable :true,
			init : null
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
