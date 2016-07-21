/**
 * Controller links map's model and Plotly chart
 * 
 * @ignore(Plotly.*)
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
	 * @param plotdiv {object} Plotly div
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
			var layout = ae.chart.util.Serializer.toNativeObject(model.getLayout());

			if(layout.yaxes){
				for(var i=0;i<layout.yaxes.length;i++){
					layout["yaxis"+(i+1)]=ae.chart.util.Serializer.toNativeObject(layout.yaxes[i]);
				}
			}
			
			if(layout.xaxes){
				for(var i=0;i<layout.xaxes.length;i++){
					layout["xaxis"+(i+1)]=ae.chart.util.Serializer.toNativeObject(layout.xaxes[i]);
				}
			}
			
			var data = ae.chart.util.Serializer.toNativeObject(model.getTraces());
			Plotly.plot(this.getPlotlyDiv(),data,layout,model.getConfig());
			
			//Bind model to the chart by adding listeners to the model			
			model.addListener("changeBubble", function(e){

				var name = e.getData().name;
				var value = e.getData().value;
				
				var obj={};
				
				if(name.startsWith("layout")){
					var attr = name.substr(name.indexOf(".")+1);
					
					if(attr.startsWith("xaxes") || attr.startsWith("yaxes")){
						var index =parseInt(attr.substring(attr.indexOf("[")+1,attr.indexOf("]")));
						if(index==0){
							attr = (attr.substring(0,attr.indexOf("["))+attr.substr(attr.indexOf("]")+1)).replace("e","i");
						}else{
							attr = (attr.substring(0,attr.indexOf("["))+(index+1)+attr.substr(attr.indexOf("]")+1)).replace("e","i");
						}
						
					}
					obj[attr]= ae.chart.util.Serializer.toNativeObject(value);
					
					Plotly.relayout(this.getPlotlyDiv(),obj);
				}
				
				if(name.startsWith("traces") && name.indexOf(".")!=-1){
					var attr = name.substr(name.indexOf(".")+1);
					var index =name.substring(name.indexOf("[")+1,name.indexOf("]"));
					
					obj[attr]=ae.chart.util.Serializer.toNativeObject(value);
					
					Plotly.restyle(this.getPlotlyDiv(),obj,index);
				}
			},this);			
			
			model.addListener("addTrace", function(e){
				Plotly.addTraces(this.getPlotlyDiv(),ae.chart.util.Serializer.toNativeObject(e.getData()));				
			},this);
			
			model.addListener("removeTrace", function(e){
				Plotly.deleteTraces(this.getPlotlyDiv(),e.getData());
			},this);
			
			model.addListener("moveTrace", function(e){
				Plotly.moveTraces(this.getPlotlyDiv(),e.getData().currentIndex,e.getData().newIndex);
			},this);
		}
	}
});