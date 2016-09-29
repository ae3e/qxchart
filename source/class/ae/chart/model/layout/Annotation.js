/**
 * Annotation
 */
qx.Class.define("ae.chart.model.layout.Annotation", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {		
		/**
		 * Sets the vertical alignment of the `text` with respect to the set `x` and `y` position. Has only an effect if `text` spans more two or more lines (i.e. `text` contains one or more <br> HTML tags).
		 */
		align : {
			check : ["left","right","center"],
			apply : "_apply",
			event : "changeAlign",
			init : "center"
		},
		
		/**
		 * Sets the color of the annotation arrow.
		 */
		arrowcolor : {
			check : "String",
			apply : "_apply",
			event : "changeArrowcolor",
			init : "#000"
		},
		
		/**
		 * Sets the annotation arrow head style.
		 */
		arrowhead : {
			check : "Integer",
			apply : "_apply",
			event : "changeArrowhead",
			init : 1
		},
		
		/**
		 * Sets the size (in px) of annotation arrow head.
		 */
		arrowsize : {
			check : "Number",
			apply : "_apply",
			event : "changeArrowsize",
			init : 1
		},
		
		/**
		 * Sets the width (in px) of annotation arrow.
		 */
		arrowwidth : {
			check : "Number",
			apply : "_apply",
			event : "changeArrowwidth",
			init : 1
		},
		
		/**
		 * Sets the x component of the arrow tail about the arrow head. If `axref` is `pixel`, a positive (negative)  component corresponds to an arrow pointing from right to left (left to right). If `axref` is an axis, this is a value on that axis.
		 */
		ax : {
			check : "Number",
			apply : "_apply",
			event : "changeAx",
			init : -10
		},
		
		/**
		 * Indicates in what terms the tail of the annotation (ax,ay)  is specified. If `pixel`, `ax` is a relative offset in pixels  from `x`. If set to an x axis id (e.g. *x* or *x2*), `ax` is  specified in the same terms as that axis. This is useful  for trendline annotations which should continue to indicate  the correct trend when zoomed.
		 */
		axref : {
			check : "String",
			apply : "_apply",
			event : "changeAxref",
			init : "pixel"
		},
		
		/**
		 * Sets the y component of the arrow tail about the arrow head. If `ayref` is `pixel`, a positive (negative)  component corresponds to an arrow pointing from bottom to top (top to bottom). If `ayref` is an axis, this is a value on that axis.
		 */
		ay : {
			check : "Number",
			apply : "_apply",
			event : "changeAy",
			init : -30
		},
		
		/**
		 * Indicates in what terms the tail of the annotation (ax,ay)  is specified. If `pixel`, `ay` is a relative offset in pixels  from `y`. If set to a y axis id (e.g. *y* or *y2*), `ay` is  specified in the same terms as that axis. This is useful  for trendline annotations which should continue to indicate  the correct trend when zoomed.
		 */
		ayref : {
			check : "String",
			apply : "_apply",
			event : "changeAyref",
			init : "pixel"
		},
		
		/**
		 * Sets the background color of the annotation.
		 */
		bgcolor : {
			check : "String",
			apply : "_apply",
			event : "changeBgcolor",
			init : "rgba(0,0,0,0)"
		},
		
		/**
		 * Sets the color of the border enclosing the annotation `text`.
		 */
		bordercolor : {
			check : "String",
			apply : "_apply",
			event : "changeBordercolor",
			init : "rgba(0,0,0,0)"
		},
		
		/**
		 * Sets the padding (in px) between the `text` and the enclosing border.
		 */
		borderpad : {
			check : "Number",
			apply : "_apply",
			event : "changeBordercolor",
			init : 1
		},
		
		/**
		 * Sets the width (in px) of the border enclosing the annotation `text`.
		 */
		borderwidth : {
			check : "Number",
			apply : "_apply",
			event : "changeBorderwidth",
			init : 1
		},
		
		/**
		 * Sets the annotation text font.
		 */
		font : {
			check : "ae.chart.model.Font",
			apply : "_apply",
			event : "changeFont",
			nullable : true,
			init : null
		},
		
		/**
		 * Sets the opacity of the annotation (text + arrow).
		 */
		opacity : {
			check : "Number",
			apply : "_apply",
			event : "changeOpacity",
			init : 1
		},
		
		/**
		 * Determines whether or not the annotation is drawn with an arrow. If *true*, `text` is placed near the arrow's tail. If *false*, `text` lines up with the `x` and `y` provided.
		 */
		showarrow : {
			check : "Boolean",
			apply : "_apply",
			event : "changeShowarrow",
			init : true
		},
		
		/**
		 * Sets the text associated with this annotation. Plotly uses a subset of HTML tags to do things like newline (<br>), bold (<b></b>), italics (<i></i>), hyperlinks (<a href='...'></a>). Tags <em>, <sup>, <sub> <span> are also supported.
		 */
		text : {
			check : "String",
			apply : "_apply",
			event : "changeText",
			init : true
		},
		
		/**
		 * Sets the angle at which the `text` is drawn with respect to the horizontal.
		 */
		angle : {
			check : "Number",
			apply : "_apply",
			event : "changeAngle",
			init : 0
		},
		
		/**
		 * Sets the annotation's x position. Note that dates and categories are converted to numbers.
		 */
		x : {
			check : "Number",
			apply : "_apply",
			event : "changeX",
			init : 0
		},
		
		/**
		 * Sets the annotation's horizontal position anchor This anchor binds the `x` position to the *left*, *center* or *right* of the annotation. For example, if `x` is set to 1, `xref` to *paper* and `xanchor` to *right* then the right-most portion of the annotation lines up with the right-most edge of the plotting area. If *auto*, the anchor is equivalent to *center* for data-referenced annotations whereas for paper-referenced, the anchor picked corresponds to the closest side.
		 */
		xanchor : {
			check : ["auto","left","center","right"],
			apply : "_apply",
			event : "changeXanchor",
			init : "auto"
		},
		
		/**
		 * Sets the annotation's x coordinate axis. If set to an x axis id (e.g. *x* or *x2*), the `x` position refers to an x coordinate If set to *paper*, the `x` position refers to the distance from the left side of the plotting area in normalized coordinates where 0 (1) corresponds to the left (right) side.
		 */
		xref : {
			check : "String",
			apply : "_apply",
			event : "changeXref",
			init : "paper"
		},
		
		/**
		 * Sets the annotation's y position. Note that dates and categories are converted to numbers.
		 */
		y : {
			check : "Number",
			apply : "_apply",
			event : "changeY",
			init : 0
		},
		
		/**
		 * Sets the annotation's vertical position anchor This anchor binds the `y` position to the *top*, *middle* or *bottom* of the annotation. For example, if `y` is set to 1, `yref` to *paper* and `yanchor` to *top* then the top-most portion of the annotation lines up with the top-most edge of the plotting area. If *auto*, the anchor is equivalent to *middle* for data-referenced annotations whereas for paper-referenced, the anchor picked corresponds to the closest side.
		 */
		yanchor : {
			check : ["auto","top","middle","bottom"],
			apply : "_apply",
			event : "changeYanchor",
			init : "auto"
		},
		
		/**
		 * Sets the annotation's y coordinate axis. If set to an y axis id (e.g. *y* or *y2*), the `y` position refers to an y coordinate If set to *paper*, the `y` position refers to the distance from the bottom of the plotting area in normalized coordinates where 0 (1) corresponds to the bottom (top).
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
