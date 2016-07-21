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
	/**
	 * @param model {ae.chart.model.Chart} Chart's model
	 */
	construct : function(model) {
		this.base(arguments);

		this.addListenerOnce("appear", function(e){
			var controller = new ae.chart.controller.Plotly(model,this.getPlotlyDiv());
			
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
