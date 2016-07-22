﻿/**
 * Chart widget
 * 
 * @ignore(Plotly.*)
 */
qx.Class.define("ae.chart.ui.Chart", {
	extend : qx.ui.core.Widget,
	
	properties : {
		/**
		 * Chart's model
		 */
		model : {
			check : "ae.chart.model.Chart",
			nullable : true,
			init : null
		}
	},
	
	events : {
		/**
		 * Fired when a trace is clicked
		 */
	    "clickTrace" : "qx.event.type.Data",
	    /**
	     * Fired when a trace is hovered
	     */
	    "overTrace" : "qx.event.type.Data",
	    /**
	     * Fired when trace is unhovered
	     */
	    "outTrace" : "qx.event.type.Data",
	    /**
	     * Fired when data are selected (with Box or Lasso tools only?)
	     */
	    "changeSelection" : "qx.event.type.Data",
	    /**
	     * Fired when chart is zoomed, panned or layout is changed
	     */
	    "changeLayout" : "qx.event.type.Data"
	},
	
	/**
	 * @param model {ae.chart.model.Chart} Chart's model
	 */
	construct : function(model) {
		this.base(arguments);

		this.addListenerOnce("appear", function(e){
			var controller = new ae.chart.controller.Plotly(model,this);
			
			this.addListener("resize", function (e) {
	        	if(this.getPlotlyDiv()){
	        		Plotly.Plots.resize(this.getPlotlyDiv());
	        	}
	        },this);
		},this);
	},

	members : {
		/**
		 * Get Plotly div
		 * @return {Element} Plotly div
		 */
		getPlotlyDiv : function(){
			return this.getContentElement().getDomElement();
		}
	}
});
