/**
 * Layout
 */
qx.Class.define("ae.chart.model.Layout", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * Chart's title
		 */
		title : {
			check : "String",
			event : "changeTitle",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		paper_bgcolor : {
			check : "String",
			event : "changePaper_bgcolor",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		plot_bgcolor : {
			check : "String",
			event : "changePlot_bgcolor",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * Only family, color and size work
		 */
		titlefont : {
			check : "qx.bom.Font",
			event : "changeTitlefont",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		font : {
			check : "qx.bom.Font",
			event : "changeTitlefont",
			nullable : true,
			apply : "_apply",
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
