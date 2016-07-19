/**
 * Controller links map's model and Plotly chart
 */

qx.Class.define("ae.chart.controller.Plotly",
{
	extend : qx.core.Object,
	
	properties : {
		/**
		 * Model of the chart
		 */
		model : {
			check : "ae.chart.model.Chart",
			apply : "_applyModel",
			nullable : true,
			init : null
		},
		/**
		 * Plotly div
		 */
		plotlyDiv :{
			//check : "",
			nullable : true,
			init : null
		}
	},
	
	/**
	 * Creates an instance of the Plotly's controller
	 * 
	 * @param model {ae.chart.model.Chart} chart's model
	 * @param plotlyDiv {object} plotly div
	 * 
	 */
	construct : function(model, plotdiv){

		this.setPlotlyDiv(plotdiv);
		this.setModel(model);
		
	},
	
	members : {
		_applyModel : function(value){
			this._initModel(value);
		},
		
		/**
		 * Init the model
		 * @param model {ae.chart.model.Chart} chart's model
		 */
		_initModel : function(model){
			if(!model){
				return;
			}

			//Init the chart with data in the model
			
			//I use my own serializer to remove undefined properties
			var layout = ae.util.Serializer.toNativeObject(model.getLayout());
			var data = ae.util.Serializer.toNativeObject(model.getTraces());
			
			Plotly.plot(this.getPlotlyDiv(),data,layout,model.getConfig());
			
			//Bind model to the chart by adding listeners to the model			
			model.addListener("changeBubble", function(e){

				var nm = e.getData().name.split(".");

				if(nm[0]=="layout" && nm.length==2){
					var obj={};
					obj[nm[1]]=ae.util.Serializer.toNativeObject(e.getData().value);

					Plotly.relayout(this.getPlotlyDiv(),obj);
				}
				
				if(nm[0].startsWith("traces") && nm.length==2){
					var obj={};
					obj[nm[1]]=ae.util.Serializer.toNativeObject(e.getData().value);

					var str = e.getData().name;
					var index =str.substring(str.lastIndexOf("[")+1,str.lastIndexOf("]"));

					Plotly.restyle(this.getPlotlyDiv(),obj,index);
				}
			},this);			
			
			model.addListener("addTrace", function(e){
				//var skLayer = e.getData();
				//this.getOlmap().addLayer(map.controller.Util.sk2ol_Layer(skLayer));
				
			},this);
			
			model.addListener("removeTrace", function(e){

				
			},this);
			
			model.addListener("raiseTrace", function(e){
				//this.getOlmap().raiseLayer(this.getOlmap().getLayer(e.getData().layer.getId()),-e.getData().delta);
			},this);
		}
	}
});